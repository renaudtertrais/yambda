import curry from './curry';
import typeOf from './typeOf';

const is = (a, b) => {
  try {
    if (a === Object) return is({}, b);
    return Object(b) instanceof a || Object(b).prototype instanceof a;
  } catch (e) {
    return typeOf(a) === typeOf(b);
  }
};

export default curry(is);
