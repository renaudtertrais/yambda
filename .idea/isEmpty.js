import length from './length';
import isIn from './isIn';

const isEmpty = (x) => {
  if (isIn(String, Array, Object)(x)) return !length(x);
  return !x;
};

export default isEmpty;
