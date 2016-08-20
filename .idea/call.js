import curry from '/curry';
import is from '/is';
import mustBe from '/mustBe';

const call = (fnName, args, x) => {
  if (x && is(Function, x[mustBe(String, fnName)])) return x[fnName].apply(null, args);
  return x;
};

export default curry(call);
