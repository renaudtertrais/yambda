import mustBeList from './mustBeList';
import is from './is';

const sort = (a) => {
  mustBeList(a);
  if (is(String, a)) return a.split().sort().join();
  return a.sort();
};

export default sort;
