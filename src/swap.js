import curry from './curry';
import mustBe from './mustBe';

const swap = (fn, b, a) => mustBe(Function, fn)(a, b);

export default curry(swap);
