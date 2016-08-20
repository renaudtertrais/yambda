import is from './is';
import isIn from './isIn';

const length = (x) => {
  if (is(Object, x)) {
    return Object.keys(x).length;
  }

  if (is(Number, x)) {
    return Object(x).toString().length;
  }

  if (isIn(null, undefined)(x)) {
    return undefined;
  }

  return x.length;
};

export default length;
