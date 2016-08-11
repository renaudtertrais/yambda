import curry from './curry';
import mustBe from './mustBe';

const obj = mustBe(Object);

const assign = (a, b) => Object.assign({}, obj(a), obj(b));

export default curry(assign);
