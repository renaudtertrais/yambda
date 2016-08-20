import mustBeList from './mustBeList';
import is from './is';
import clone from './clone';

const reverse = (x) => {
  mustBeList(x);
  if (is(Array)) return clone(x).reverse();
  return x.split().reverse().join();
};

export default reverse;
