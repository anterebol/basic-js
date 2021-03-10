module.exports = function dateSample(sampleActivity)  {
  const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
    if (sampleActivity === 'undefiend' || sampleActivity > 100) {
      return false;
    }
        else if (Number(sampleActivity) > 0) {
        var t;
      let y = 0.693;
      let k;
         k = y / HALF_LIFE_PERIOD;
      t = (Math.log(MODERN_ACTIVITY / sampleActivity)) / k;
      return Math.ceil(t);  
        } 
        else  {
          return false;
        }
      }
