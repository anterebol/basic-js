export default function dateSample(sampleActivity)  {
  if (sampleActivity === 'undefiend' || sampleActivity < 0 || typeof(sampleActivity) != 'string') {
    return false;
  }
  const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
   
       if (Number(sampleActivity) > 0) {
        var t;
      let y = 0.693;
      let k;
         k = y / HALF_LIFE_PERIOD;
      t = (Math.log(MODERN_ACTIVITY / sampleActivity)) / k;
      if (t < 0) {
        return false;
      }
      t = Math.ceil(t);
      return t;  
        } 
        else  {
          return false;
        }
      }
