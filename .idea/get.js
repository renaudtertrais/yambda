import curry from './curry';
import mustBeIterable from './mustBeIterable';
import is from './is';
import idx from './idx';

const get = (key, a) => {
  mustBeIterable(a);
  if (is(Object, a)) {
    return a[key];
  }

  return a[idx(key, a)];
};

export default curry(get);
