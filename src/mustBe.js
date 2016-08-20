import curry from './curry';
import is from './is';
import typeName from './typeName';
/**
 * @function module:Types.mustBe
 *
 * @description Throw an error if subject has not the type otherwise return subject
 * @param  {*} type - could be a class or any value that need to be compare
 * @param  {*} subject - the subject to be evaluated
 * @return {*} subject
 * @throws {TypeError} ${subject} must be a(n) ${typeName(type)}
 *
 * @requires HOF.curry
 * @requires Types.is
 * @requires Types.typeName
 *
 * @example
 * const upCase = (str) => mustBe(String, str).toUpperCase();
 *
 * upCase('foo'); // 'FOO'
 * upCase(42); // TypeError: 42 is not a(n) String
 *
 * @example
 * const num = mustBe(Number);
 * const add = (a, b) => num(a) + num(b);
 *
 * add(2, 3); // 5
 * add('foo', 3) // TypeError: foo is not a(n) Number
 *
 * @since v0.1.0
 */
const mustBe = (type, subject) => {
  if (is(type, subject)) return subject;
  throw new TypeError(`${subject} must be a(n) ${typeName(type)}`);
};

export default curry(mustBe);
