import curry from './curry';
import isIn from './isIn';
import is from './is';
import length from './length';
import findIndex from './findIndex';
import findKey from './findKey';

const equals = (a, b) => {
  if (isIn(Array, Object, a)) {
    if (!is(a, b)) return false;
    if (length(a) !== length(b)) return false;

    const finder = (c) => (v, k) => v !== c[k];
    if (is(Array, a)) return findIndex(finder(b), a);
    return findKey(finder(b), a);
  }

  return a === b;
};

export default curry(equals);
