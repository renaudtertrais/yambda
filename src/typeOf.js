/**
 * @function module:Types.typeOf
 *
 * @description Get the type of a subject
 * @param  {*} target - The value on which type is desired
 * @return {String} the type of the subject
 *
 * @example
 * // working with existing types
 * typeOf(null); // 'null'
 * typeOf(42); // 'Number'
 * typeOf({}); // 'Object'
 * typeOf(new Date()); // 'Date'
 *
 * @example
 * // but also with custom classes
 * class Foo {};
 * class Bar extends Foo {};
 * typeOf(Foo); // 'Function'
 * typeOf(new Foo()); // 'Foo'
 * typeOf(new Bar()); // 'Bar'
 *
 * @since v0.1.0
 */
const typeOf = (subject) => {
  if (subject === undefined) return 'undefined';
  if (subject === null) return 'null';

  return Object.getPrototypeOf(subject).constructor.name;
};

export default typeOf;
