import mustBe from './mustBe';
/**
 * @function module:Object.keys
 *
 * @description Returns an array of keys from the Object obj.
 * @param  {Object} obj - the object
 * @return {Array} an array of keys of obj.
 *
 * @requires Types.mustBe
 *
 * @example
 * keys({ foo: 1, bar: 2, baz: 3 }); // ['foo', 'bar', 'baz']
 * keys({}); // []
 *
 * @since v0.2.0
 */
const keys = (a) => Object.keys(mustBe(Object, a));

export default keys;
