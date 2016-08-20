import curry from './curry';
import keys from './keys';

const findKey = (fn, a) => keys(a).find(fn);

export default curry(findKey);
