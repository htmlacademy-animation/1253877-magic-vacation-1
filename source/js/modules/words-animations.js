const createElement = (element, content) => {
  const domElement = document.createElement(element);
  domElement.textContent = content;

  return domElement;
};

export default (element) => {
  const words = element.textContent.split(` `);
  const wordsSplitLetter = words.map((item) => item.split(``));

  const fragment = document.createDocumentFragment();

  wordsSplitLetter.forEach((item) => {
    const spanElement = document.createElement(`span`);

    item.forEach((letter) => spanElement.append(createElement(`span`, letter)));

    fragment.append(spanElement, ` `);
  });

  element.textContent = ``;
  element.append(fragment);
};
