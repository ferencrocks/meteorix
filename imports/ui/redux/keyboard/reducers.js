import {
  KEYBOARD_UP,
  KEYBOARD_DOWN,
  KEYBOARD_LEFT,
  KEYBOARD_RIGHT
} from './actions';

export const keyDown = (state, action) => {
  switch (action.type) {
    case KEYBOARD_UP: return KEYBOARD_UP;
    case KEYBOARD_DOWN: return KEYBOARD_DOWN;
    case KEYBOARD_LEFT: return KEYBOARD_LEFT;
    case KEYBOARD_RIGHT: return KEYBOARD_RIGHT;

    default:
      return null;
  }
};