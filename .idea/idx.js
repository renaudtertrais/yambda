import curry from './curry';
import mustBe from './mustBe';
import length from './length';

const idx = (i, x) => mustBe(Number, i) < 0 ? length(x) - i : i;

export default curry(idx);
