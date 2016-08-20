import is from './is';
/**
 * @function module:Any.clone
 *
 * @description Return a fresh copy of subject. (Not a deep copy)
 * @param  {*} subject - The value to clone
 * @return {*} subject cloned
 *
 * @requires Types.is
 *
 * @categories functions
 *
 * @example
 * const n = 42;
 * clone(42); // 42
 * n === clone(42); // true
 *
 * const arr = [1, 2];
 * clone(arr); // [1, 2]
 * arr === clone(arr); // false
 *
 * @since v0.1.0
 */
const clone = (subject) => {
  if (subject && is(Function, subject.clone)) return subject.clone();
  if (is(Array, subject)) return subject.slice();
  if (is(Object, subject)) return Object.assign({}, subject);
  return subject;
};

export default clone;
