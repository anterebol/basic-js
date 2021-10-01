

export default function calculateHanoi(diskNumber, turnsSpeed ) {
    let turn = 0;
    let seconds;
    let answer = {};
    for (let i = 1; i <= diskNumber; i++) {
      turn = (2 * turn) + 1;
    }
    seconds = turn * (3600 / turnsSpeed);
    seconds = Math.floor(seconds);
    answer.turns = turn;
    answer.seconds = seconds;
    return answer;
  }
  

