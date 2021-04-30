const PURPLE_A_BLUR = 'PURPLE_A_BLUR';
const PURPLE_D_SOLID = 'PURPLE_D_SOLID';
const WHITE_A_OUTLINE = 'WHITE_A_OUTLINE';
const WHITE_I_OUTLINE = 'WHITE_I_OUTLINE';
const WHITE_D_OUTLINE = 'WHITE_D_OUTLINE';
const WHITE_A_OUTLINE_BLUR = 'WHITE_A_OUTLINE_BLUR';
const WHITE_I_OUTLINE_BLUR = 'WHITE_I_OUTLINE_BLUR';
const GREEN_D_SOLID = 'GREEN_D_SOLID';
const GREEN_D_BLUR = 'GREEN_D_BLUR';
const RED_D_SOLID = 'RED_D_SOLID';
const RED_D_BLUR = 'RED_D_BLUR';

export const tokens = {
  PURPLE_A_BLUR,
  PURPLE_D_SOLID,
  WHITE_A_OUTLINE,
  WHITE_I_OUTLINE,
  WHITE_D_OUTLINE,
  WHITE_A_OUTLINE_BLUR,
  WHITE_I_OUTLINE_BLUR,
  GREEN_D_SOLID,
  GREEN_D_BLUR,
  RED_D_SOLID,
  RED_D_BLUR
};

export const illustrations = [
  {
    id: PURPLE_A_BLUR,
    src: '/static/icons/background/purple-a-blur.svg',
    blurred: true
  },
  {
    id: WHITE_A_OUTLINE,
    src: '/static/icons/background/white-a-outline.svg',
    blurred: false
  },
  {
    id: WHITE_I_OUTLINE,
    src: '/static/icons/background/white-i-outline.svg',
    blurred: false
  },
  {
    id: WHITE_D_OUTLINE,
    src: '/static/icons/background/white-d-outline.svg',
    blurred: false
  },
  {
    id: WHITE_A_OUTLINE_BLUR,
    src: '/static/icons/background/white-a-outline-blur.svg',
    blurred: true
  },
  {
    id: WHITE_I_OUTLINE_BLUR,
    src: '/static/icons/background/white-i-outline-blur.svg',
    blurred: true
  },
  {
    id: PURPLE_D_SOLID,
    src: '/static/icons/background/purple-d-solid.svg',
    blurred: false
  },
  {
    id: GREEN_D_SOLID,
    src: '/static/icons/background/green-d-solid.svg',
    blurred: false
  },
  {
    id: GREEN_D_BLUR,
    src: '/static/icons/background/green-d-blur.svg',
    blurred: true
  },
  {
    id: RED_D_SOLID,
    src: '/static/icons/background/red-d-solid.svg',
    blurred: false
  },
  {
    id: RED_D_BLUR,
    src: '/static/icons/background/red-d-blur.svg',
    blurred: true
  }
];

export default illustrations;
