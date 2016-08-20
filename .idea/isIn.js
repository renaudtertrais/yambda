import is from './is';
import swap from './swap';
import curry from './curry';

const isIn = (types, x) => mustBe(Array, types).findIndex(swap(is)(x)) > -1;

export default curry(isIn);
