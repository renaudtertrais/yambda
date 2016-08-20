import curry from './curry';
import typeOf from './typeOf';
/**
 * @function module:Types.is
 *
 * @description Compare a define if "subject" has the type "type" or if type and subject have the same type.
 * @param  {*} type - could be a class or any value that need to be compare
 * @param  {*} subject - the subject to be evaluated
 * @return {Boolean} if subject has the type type or if type and subject have the same type
 *
 * @requires HOF.curry
 * @requires Types.typeOf
 *
 * @example
 * // class
 * is(String, 'foo'); // true
 * is(Boolean, false); // true
 * is(RegExp, /abc/); // true
 * is(Date, 42); // false
 *
 * // values
 * is(undefined, undefined); // true
 * is(true, false); // true
 * is({}, { foo: 'bar' }); // true
 * is({}, new Date()); // false
 * is(Function, Boolean); // true
 * is(String, Boolean); // false
 *
 * // custom classes
 * class Foo {};
 * is(Foo, new Foo()); // true
 *
 * @since v0.1.0
 */
const is = (a, b) => {
  try {
    if (a === Object) return is({}, b);
    return Object(b) instanceof a || Object(b).prototype instanceof a;
  } catch (e) {
    return typeOf(a) === typeOf(b);
  }
};

export default curry(is);
