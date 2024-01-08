'use strict';

const divideTwoNumbers = (a, b) =>  {
   let c = Math.min(a, b);
   console.log(c);
   for (let i = c; i >= 2; i--) {
      if (a % i === 0 && b % i === 0) {
         return i;
      }
   }
};

console.log(divideTwoNumbers(755, 600));
