const curryRecusive = (fn, ...args) => {
  if (fn.length > args.length) {
    return (...args2) => curryRecusive.apply(null, [...[fn], ...args, ...args2]);
  }

  return fn.apply(null, args);
};
/**
 * @function module:HOF.curry
 *
 * @description Curry a function
 * @param  {Function} fn - the function to be curried
 * @return {Function} the curried function with not a fixed arity
 *
 * @example
 * const add = (a, b) => a + b;
 * const addCurried = curry(add);
 * const inc = addCurried(1);
 * const dec = addCurried(-1);
 *
 * addCurried(1, 2); // 3
 * addCurried(1)(2); // 3
 * inc(42); // 43
 * dec(42); // 41
 *
 * @example
 * const sum4 = (a, b, c, d) => a + b + c + d;
 * const sum4Curried = curry(sum4);
 *
 * sum4Curried(1, 2, 3, 4);    // 10
 * sum4Curried(1, 2, 3, 4, 5); // 10
 * sum4Curried(1)(2)(3)(4);    // 10
 * sum4Curried(1)(2, 3)(4);    // 10
 * sum4Curried(1, 2, 3)(4);    // 10
 * sum4Curried(1, 2)(3, 4);    // 10
 *
 * @see [currying]{@link https://github.com/hemanth/functional-programming-jargon/blob/master/readme.md#currying}
 * @see [arity]{@link https://github.com/hemanth/functional-programming-jargon/blob/master/readme.md#arity}
 *
 * @since v0.1.0
 */
const curry = (fn) => {
  // can not use mustBe() here as mustBe() needs curry
  if (typeof fn === 'function') return curryRecusive(fn);
  throw new TypeError(`${fn} must be a function`);
};

export default curry;
