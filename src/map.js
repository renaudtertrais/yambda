import curry from './curry';
import is from './is';
import reduce from './reduce';
import mustBe from './mustBe';

const map = (fn, x) => {
  mustBe(Function, fn);

  if (x && is(Function, x.map)) return x.map(fn);

  if (is(String, x)) return x.split().map(fn).join();

  if (is(Object, x)) {
    return reduce((res, v, k) => Object.assign({}, res, { [k]: fn(v, k, x) }), {}, x);
  }

  return fn(x);
};

export default curry(map);
