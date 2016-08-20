import curry from './curry';
import is from './is';
import mustBe from './mustBe';
/**
 * @function module:Any.reduce
 *
 * @description Run "reduceCallback" over each value in the "subject" to produce a new value
 * @param  {reduceCallback} reduceCallback - The function that handle the change
 * @param  {*} initialValue - the initial value of the result
 * @param  {*} subject - the subject to be reduced
 * @return {*} new value
 *
 * @requires HOF.curry
 * @requires Types.is
 * @requires Types.mustBe
 *
 * @example
 * const add = (a, b) => a + b;
 * const sum = reduce(add, 0);
 * sum(42); // 42
 * sum([1, 2, 3]) // 6
 * sum({ a: 1, b: 2, c: 3 }); // 6
 *
 * @example
 * const products = [
 *   { id: 1, qty: 5 },
 *   { id: 1, qty: 2 },
 *   { id: 1, qty: 3 }
 * ];
 *
 * const sumQty = reduce((res, { qty }) => res + qty, 0);
 * const totalQty = sumQty(products); // 10
 *
 * @since v0.1.0
 */
const reduce = (reduceCallback, initialValue, x) => {
  mustBe(Function, reduceCallback);

  if (x && is(Function, x.reduce)) return x.reduce(reduceCallback, initialValue);

  if (is(String, x)) return x.split().reduce(reduceCallback, initialValue);

  if (is(Object, x)) {
    return Object.keys(x).reduce((res, k) => reduceCallback(res, x[k], k, x), initialValue);
  }

  return reduceCallback(initialValue, x, null, x);
};

export default curry(reduce);

/**
 * The function that handle the change
 * @callback reduceCallback
 * @param {*} result - result returned from previous "reduceCallback" call or "initialValue" for first iteration
 * @param {*} value - current value in the iteration
 * @param {String|Number} index - index or key of the current value
 * @param {*} subject -  the subject of the reduce
 * @returns {*} the new value of result
 *
 * @since v0.1.0
 */
