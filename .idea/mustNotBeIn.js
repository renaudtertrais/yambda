import isIn from './isIn';
import curry from './curry';
import typeName from './typeName';

const mustNotBeIn = (types, x) => {
  if (!isIn(types, x)) return x;
  throw new TypeError(`${x} must not be : ${types.map(typeName)}`);
};

export default curry(mustNotBeIn);
