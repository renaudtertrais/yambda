import curry from './curry';
import mustBe from './mustBe';
/**
 * @function module:HOF.swap
 *
 * @description Change the order of a two parameters function.
 * @param  {Function} fn - the function to be swaped
 * @param  {*} b - the second param of the original function
 * @param  {*} a - the first param of the original function
 * @return {*} the same result as "fn"
 *
 * @requires HOF.curry
 * @requires Types.mustBe
 *
 * @example
 * const add = a => b => a + b;
 * const inc = add(1);
 * const dec = add(-1);
 * const myArray = [1, 2, 3];
 *
 * const mapMyArrayOn = swap(map, myArray);
 * mapMyArrayOn(inc); // [2, 3, 4]
 * mapMyArrayOn(dec); // [0, 1, 2]
 *
 * @since v0.2.0
 */
const swap = (fn, b, a) => mustBe(Function, fn)(a, b);

export default curry(swap);
