import init from './init';
import apply from './apply';
import last from './last';

const compose = (...fns) => (...args) => init(fns).reduceRight(
  (res, fn) => fn(res),
  apply(args, last(fns))
);

export default compose;
