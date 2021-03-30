const ANIMATION_WRAPPER_CLASS = `words-animations__wrapper`;

const createElement = (element, content, order) => {
  const TIMEOUT = 50;
  const domElement = document.createElement(element);

  domElement.textContent = content;
  // -1 из-за индексов в массиве
  domElement.style.animationDelay = `${TIMEOUT * (order - 1)}ms`;

  return domElement;
};

const setAnimationClassWithTimeout = (element, timeout) => {
  return timeout
    ? setTimeout((() => element.classList.add(ANIMATION_WRAPPER_CLASS)), timeout)
    : element.classList.add(ANIMATION_WRAPPER_CLASS);
};

const setHandlerAnimationClassWithTimeout = (screenId, element, timeout) => {
  const screenElement = document.querySelector(`#${screenId}`);
  const isParentActive = screenElement.classList.contains(`active`);

  if (isParentActive) {
    setAnimationClassWithTimeout(element, timeout);
  }

  document.body.addEventListener(`screenChanged`, (evt) => {
    const wasActivated = screenElement.id === evt.detail.screenName;

    if (wasActivated) {
      setAnimationClassWithTimeout(element, timeout);
    } else {
      element.classList.remove(ANIMATION_WRAPPER_CLASS);
    }
  });
};

// не учитывал, что могут не быть переданы настройки
export default (screenClass, elementClass, animationSettings) => {
  const element = document.querySelector(elementClass);
  const words = element.textContent.split(` `);
  const wordsSplitLetter = words.map((item) => item.split(``));

  if (wordsSplitLetter.length !== animationSettings.length) {
    throw new Error(`Количество символов у элемента "${element.classList}" не соответствует количеству переданных настроек`);
  }

  const fragment = document.createDocumentFragment();

  wordsSplitLetter.forEach((item, wordIndex) => {
    const spanElement = document.createElement(`span`);
    const wordSetting = animationSettings[wordIndex];

    // перебираем буквы и оборачиваем в span с transitionDelay из настроек
    item.forEach((letter, letterIndex) => {
      spanElement.append(createElement(`span`, letter, wordSetting.order[letterIndex]));
    });

    // устанавливаем задержку для оберток при активации экрана
    setHandlerAnimationClassWithTimeout(screenClass, spanElement, wordSetting.delay);

    fragment.append(spanElement, ` `);
  });

  element.textContent = ``;
  element.append(fragment);
};
