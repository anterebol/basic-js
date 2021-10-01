

export default function getSeason(date) {
if (date == undefined) {
  return 'Unable to determine the time of year!';
}

  const time = new Date (date);
  if ( Object.prototype.toString.call(date) != '[object Date]')  {
    throw new Error('THROWN');}
  let x = time.getMonth();
  if (x === 1 || x === 0 || x === 11) {
    return 'winter';
  }
  else if ( x > 1 && x <= 4) {
    return 'spring';
  }
  else if ( x > 4 && x <= 7) {
    return 'summer';
  }
  else if ( x > 7 && x <= 10) {
    return 'autumn';
  }
  }
