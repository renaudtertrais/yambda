import is from './is';

const clone = (x) => {
  if (x && is(Function, x.clone)) return x.clone();
  if (is(Array, x)) return x.slice();
  if (is(Object, x)) return Object.assign({}, x);
  return x;
};

export default clone;
