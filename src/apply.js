import curry from './curry';
import mustBe from './mustBe';
/**
 * @function module:HOF.apply
 *
 * @description Apply an array of arrgments to a function
 * @param  {Function} fn - the function to be applied
 * @param  {Array} args - an array of arguments to apply to fn
 * @return {*} original result of fn
 *
 * @requires HOF.curry
 * @requires Types.mustBe
 *
 * @example
 * const add = (a, b) => a + b;
 * const values = [2, 3];
 * apply(add, values); // 5
 *
 * @since v0.1.0
 */
const apply = (fn, args) => mustBe(Function, fn).apply(null, args);

export default curry(apply);
