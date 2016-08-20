import curry from './curry';
import mustBeList from './mustBeList';

const take = (n, a) => mustBeList(a).slice(0, n);

export default curry(take);
