import mustBeIn from './mustBeIn';
import curry from './curry';
import is from './is';

const concat = (b, a) => {
  mustBeIn(String, Array)(a);
  if (!is(a, b)) throw new TypeError('Error: could not concat 2 variables with different types');
  if (is(Array, a)) return a.concat(b);
  return a + b;
};

export default curry(concat);
