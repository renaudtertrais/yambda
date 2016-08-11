import curry from './curry';
import is from './is';
import typeName from './typeName';

const mustBe = (type, x) => {
  if (is(type, x)) return x;
  throw new TypeError(`${x} must be a(n) ${typeName(type)}`);
};

export default curry(mustBe);
