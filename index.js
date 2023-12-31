const { Board, Motor, Servo } = require('johnny-five');

const board = new Board();

board.on('ready', () => {
    //////////////////////////////////////////////////
    //// STEPUP MOTOR OPTIONS - UP AND DOWN///////////
    //////////////////////////////////////////////////
  const motorUp = new Motor({ pins: { pwm: 9, dir: 8 } });
  const motorDown = new Motor({ pins: { pwm: 5, dir: 4 } });

  
  ////////////////////////////////////
  //////// Initiate Motor ////////////
  ///////////////////////////////////
  const servo = new Servo(10);

  //////////////////////////////////////////////////
  ////// CREATE MEMORY SLOTS FOR STORE 4 HEIGHTS////
  //////////////////////////////////////////////////
  const saveButtons = [];
  for (let i = 0; i < 4; i++) {
    saveButtons.push(new Button(i));
    saveButtons[i].on('press', () => saveHeight(i));
  }

   //////////////////////////////////////////////////
   /////////////////// GO UP ///////////////////////
  //////////////////////////////////////////////////
  function moveUp() {
    motorUp.forward();
  }

   //////////////////////////////////////////////////
   /////////////////// GO DOWN /////////////////////
  //////////////////////////////////////////////////
  function moveDown() {
    motorDown.forward();
  }

   //////////////////////////////////////////////////
   /////////////////// STOP MOTOR //////////////////
  //////////////////////////////////////////////////
  function stopDesk() {
    motorUp.stop();
    motorDown.stop();
  }
});
