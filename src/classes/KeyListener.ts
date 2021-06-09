var KEY_A = 65;
var KEY_D = 68;
var KEY_W = 87;

var KEY_SPACE = 32;

var KEY_LEFT = 37;
var KEY_UP = 38;
var KEY_RIGHT = 39;

var keysDown = {};

addEventListener(
  'keyup',
  function (e) {

      
    //console.log("keyup   '" + e.keyCode + "'");
    keysDown[e.keyCode] = false;
  },
  false,
);

export class KeyListener {
  private readonly keysDown = {};

  constructor() {
    this.addKeyDownListener();
    this.addKeyUpListener();
  }

  private addKeyDownListener() {
    addEventListener('keydown', (event) => {
      keysDown[event.keyCode] = true;
    });
  }

  private addKeyUpListener() {}
}
