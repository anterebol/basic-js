
module.exports = function calculateHanoi(disksNumber, turnsSpeed ) {
    let turns = 0;
    let seconds;
    for (let i = 1; i <= diskNumber; i++) {
      turns = (2 * turns) + 1;
    }
    seconds = turns * (3600 / turnsSpeed);
    seconds = Math.floor(seconds);
    return (`turns: ${turns}, seconds: ${seconds}`)
  };
  

