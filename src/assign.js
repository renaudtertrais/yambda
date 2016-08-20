import curry from './curry';
import mustBe from './mustBe';

const obj = mustBe(Object);
/**
 * @function module:Object.assign
 *
 * @description Merge object "b" in object "a" with no mutation.
 * @param  {Object} a - first Object
 * @param  {Object} b - second Object that will override object "a" properties
 * @return {Object} the new Object
 *
 * @requires HOF.curry
 * @requires Types.mustBe
 *
 * @example
 * const a = { foo: 42, bar: 'baz' };
 * const b = { foo: 5, baz: true };
 *
 * assign(a, b); // { foo: 5, bar: 'baz', baz: true }
 * assign(b, a); // { foo: 42, bar: 'baz', baz: true }
 *
 * @since v0.1.0
 */
const assign = (a, b) => Object.assign({}, obj(a), obj(b));

export default curry(assign);
