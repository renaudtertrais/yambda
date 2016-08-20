const cap = capTo(1);
const capTo = (limit, fn) => (...args) => apply(fn, args.slice(limit));
