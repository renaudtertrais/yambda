const curryRecusive = (fn, ...args) => {
  if (fn.length > args.length) {
    return (...args2) => curryRecusive.apply(null, [...[fn], ...args, ...args2]);
  }

  return fn.apply(null, args);
};

const curry = (fn) => {
  // can not use mustBe() here as mustBe() needs curry
  if (typeof fn === 'function') return curryRecusive(fn);
  throw new TypeError(`${fn} must be a function`);
};

export default curry;
