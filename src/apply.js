import curry from './curry';
import mustBe from './mustBe';

const apply = (fn, args) => mustBe(Function, fn).apply(null, args);

export default curry(apply);
