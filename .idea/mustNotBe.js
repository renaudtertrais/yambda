import curry from './curry';
import is from './is';
import typeName from './typeName';

const mustNotBe = (type, x) => {
  if (!is(type, x)) return x;
  throw new TypeError(`${x} must not be a(n) ${typeName(type)}`);
};

export default curry(mustNotBe);
