import curry from './curry';
import is from './is';
import mustBe from './mustBe';
import reduce from './reduce';
/**
 * @function module:Any.map
 *
 * @description Run "mapCallback" over each value in the "subject" to produce a new "subject"
 * @param  {mapCallback} mapCallback - The function that handle the change
 * @param  {*} subject - The value to map over
 * @return {*} the new value
 *
 * @requires HOF.curry
 * @requires Types.is
 * @requires Types.mustBe
 * @requires Any.reduce
 *
 * @example
 * const add = (a) => (b) => a + b;
 * const inc = map(add(1));
 * inc(42); // 43
 * inc([1, 2, 3]); // [2, 3, 4]
 * inc({ a: 4, b: 5, c: 6 }); // { a: 5, b: 6, c: 7 }
 *
 * @ee See [Functor]{@link https://github.com/hemanth/functional-programming-jargon/blob/master/readme.md#functor}
 *
 * @since v0.1.0
 */
const map = (mapCallback, subject) => {
  mustBe(Function, mapCallback);

  if (subject && is(Function, subject.map)) return subject.map(mapCallback);

  if (is(String, subject)) return subject.split().map(mapCallback).join();

  if (is(Object, subject)) {
    return reduce((res, v, k) => Object.assign({}, res, { [k]: mapCallback(v, k, subject) }), {}, subject);
  }

  return mapCallback(subject);
};

export default curry(map);

/**
 * The function that handle the change
 * @callback mapCallback
 * @param {*} value - current value in the iteration
 * @param {String|Number} index - index or key of the current value
 * @param {*} subject -  the subject of the map
 * @returns {*} the new value for this index/key
 *
 * @since v0.1.0
 */
