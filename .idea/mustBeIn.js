import isIn from './isIn';
import curry from './curry';
import typeName from './typeName';

const mustBeIn = (types, x) => {
  if (isIn(types, x)) return x;
  throw new TypeError(`Error: ${x} must be at list one of: ${types.map(typeName)}`);
};

export default curry(mustBeIn);
