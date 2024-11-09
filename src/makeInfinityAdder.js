'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  return function adder(num) {
    if (num === undefined) {
      const finalSum = sum;

      sum = 0;

      return finalSum;
    }
    sum += num;

    return adder;
  };
}

module.exports = makeInfinityAdder;
