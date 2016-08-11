import curry from './curry';
import is from './is';
import mustBe from './mustBe';

const reduce = (fn, initialValue, x) => {
  mustBe(Function, fn);

  if (x && is(Function, x.reduce)) return x.reduce(fn, initialValue);

  if (is(String, x)) return x.split().reduce(fn, initialValue);

  if (is(Object, x)) {
    return Object.keys(x).reduce((res, k) => fn(res, x[k], k, x), initialValue);
  }

  return fn(initialValue, x, null, x);
};

export default curry(reduce);
