// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import FullPageScroll from './modules/full-page-scroll';
import animateWords from './modules/words-animations';

// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();

// words animations
// что-то я с ходу не увидел какой-то общей закономерности, поэтому без формул
const wordsElements = [
  {
    screenId: `top`,
    elementClass: `.intro__title`,
    settings: [
      {
        delay: 700,
        order: [4, 2, 1, 2, 3, 2, 1, 5, 4, 1, 4, 1]
      },
      {
        delay: 800,
        order: [3, 4, 2, 1, 2, 1]
      }
    ]
  },
  {
    screenId: `top`,
    elementClass: `.intro__date`,
    settings: [
      {
        delay: 1500,
        order: [4, 2, 1, 2, 3, 2, 1, 5, 4, 1, 4, 1]
      },
      {
        delay: 1500,
        order: [3, 4, 2, 1, 2, 1]
      },
      {
        delay: 1500,
        order: [4, 2, 1, 2, 3, 2, 1, 5, 4, 1, 4, 1]
      },
      {
        delay: 1500,
        order: [3, 4, 2, 1, 2, 1]
      },
      {
        delay: 1500,
        order: [3, 4, 2, 1, 2, 1]
      }
    ]
  },
  {
    screenId: `story`,
    elementClass: `.slider__item-title`,
    settings: [
      {
        delay: 100,
        order: [4, 2, 1, 2, 3, 2, 1]
      }
    ]
  },
  {
    screenId: `prizes`,
    elementClass: `.prizes__title`,
    settings: [
      {
        delay: 100,
        order: [3, 2, 1, 2, 3]
      }
    ]
  },
  {
    screenId: `rules`,
    elementClass: `.rules__title`,
    settings: [
      {
        delay: 200,
        order: [5, 3, 2, 2, 4, 3, 1]
      }
    ]
  },
  {
    screenId: `game`,
    elementClass: `.game__title`,
    settings: [
      {
        delay: 200,
        order: [3, 2, 1, 2]
      }
    ]
  }
];

wordsElements.forEach((item) => {
  animateWords(item.screenId, item.elementClass, item.settings);
});
