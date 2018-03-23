import { Keyboard } from '../../../api/collections/Keyboard';

export const KEYBOARD_UP = 'ArrowUp';
export const keyboardUp = () => dispatch => {
  Keyboard.insert({ keyDown: KEYBOARD_UP });
};

export const KEYBOARD_DOWN = 'ArrowDown';
export const keyboardDown = () => dispatch => {
  Keyboard.insert({ keyDown: KEYBOARD_DOWN });
};

export const KEYBOARD_LEFT = 'ArrowLeft';
export const keyboardLeft = () => dispatch => {
  Keyboard.insert({ keyDown: KEYBOARD_LEFT });
};

export const KEYBOARD_RIGHT = 'ArrowRight';
export const keyboardRight = () => dispatch => {
  Keyboard.insert({ keyDown: KEYBOARD_RIGHT });
};