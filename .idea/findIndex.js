import curry from './curry';
import mustBeIn from './mustBeIn';
import toArray from './toArray';

const findIndex = (fn, x) => toArray(mustBeIn(String, Array)(x)).findIndex(fn);

export default curry(findIndex);
