export default class DepthCalculator {
  calculateDepth(arr ) {
    let n = 0;
    let count = 0;
     let helper;
     arr = chek(arr);
     //arr = arr[0];
     if (arr.filter(i => i.constructor.name == "Array" )) {
       count = 1;
     }
     for (let k = 0; k < arr.length; k++) {
       helper = arr[k];
        if  (helper.filter(i => i.constructor.name == "Array")) { 
       helper = chek(helper);
          count += 1;
        }
        
     }
     function deeper (arr) {
       let n;
       let count = 0;
        arr = chek(arr);
     for (n; helper.filter(i => i.constructor.name == "Array").length > 0; n++) {
     arr = chek(arr[0]);
       count +=1;
     }
       return count;
     }
   function chek(arr) {
     arr = arr.filter(i => i.constructor.name == "Array");
    return arr;
   }
   return count;
   }
   
}