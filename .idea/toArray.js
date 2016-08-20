import mustBeIterable from './mustBeIterable';
import is from './is';
import values from './values';

const toArray = (x) => {
  mustBeIterable(x);
  if (is(Array, x)) return x;
  if (is(String, x)) return x.split();
  return values(x);
};

export default toArray;
