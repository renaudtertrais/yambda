
// ----




const intersperse = curry((item, a) => init(reduce((newA, elt) => [...newA, item],[], a)));

const intercalate = curry((item, a) => concat(intersperse(item, a)));

const transpose = (a) => map((value, i) => reduce(
  (row, col) => [...row, get(i, col)],
  [value],
  tail(a)
), head(a));

const subsequences = reduce(
  (a, val) => concat(a, reduce((a1, v) => [...a1, [...v, val]], [], a)),
  [[]]
);

const permutations = (a) => reduce(
  (a, val) => concat(a, ),
  []
);

console.log(subsequences([1,2,3]))

const compose = (...fns) => (...args) => {
  return fns.slice(0, -1).reduceRight((res, fn) => fn(res),
    fns[fns.length -1].apply(null,args)
  );
};

const composeLeft = (...fns) => (...args) => {
  return fns.slice(1).reduce((res, fn) => fn(res),
    fns[0].apply(null,args)
  );
};

const apply = (fn, args) => fn.apply(null, args);

const curry = (fn) => curryUnless(fn, fn.length);

const curryUnless = (fn, len, ...args) => (...args2) => {
  args = [...args, ...args2];
  return args.length < len ? apply(curryUnless, [fn, len, ...args]) :
    apply(fn, args);
}

const reducer = (...fns) => {
  return curryUnless((...args) => {
    return apply(composeLeft, fns.map((fn, i) => fn(args[i + 1])))(args[0]);
  }, fns.length);
}


class List{
  constructor(arr){
    this.array = arr;
  }
  ap(func){
    return func.map(this.map.bind(this));
  }
  map(fn){
    return new List(this.array.map(fn));
  }
  flatMap(fn){
    return this.map(fn).flatten();
  }
  flatten(){
    return new List([].concat.apply([],this.array.map((l) => l.array)));
  }
  value(){
    return this.array
  }
}


const list = (...args) => new List(args);

//console.log(list(1,2,3).flatMap(() => list(0)))


class None{
  ap(){
    return this;
  }
  map(){
    return this;
  }
}

class Some{
  constructor(value){
    this.value = value;
  }
  ap(func){
    return func.map(this.flatMap.bind(this));
  }
  map(fn){
    return maybe(fn(this.value));
  }
  flatMap(fn){
    return fn(this.value);
  }
}

const maybe = (value) => value ? new Some(value) : new None();

const a = list(1, 2, 3, 4);

const add = curry((x, y) => x + y);

const times = curry((x, y) => x * y);

const addM = (...args) => args.reduce(add, 0);

const addTimes = (x) => (y) => (z) => (x + y) * z;

const b = maybe(2);

const d = maybe(1);

//const f = d.ap([add(1)]);

//const c = a.ap([add(1), add(2)]);

//const g = a.ap(list(add(1)))

const ap = (func) => (...aps) => {
  return aps.slice(1).reduce((f, a) => a.ap(f),
    aps[0].ap(func)
  )
}

console.log(reducer(add, times, add)(1)(4)(2)(1) )

//console.log(ap([addTimes, addTimes])(d, b, b));

//console.log(f);
//console.log(c);
//console.log(g);









const toErrorFirst = (fn, cb) => (...args) => {
  try{
    const res = fn.apply(null, args);
    return cb(null, res);
  } catch (e) {
    return cb(e);
  }
}

const mustBeEven = (n) => {
  if (n % 2) {
    throw new TypeError('must be even');
  }
  return n;
}


const hasNotError = (err, res) => !err;
const isEven = toErrorFirst(mustBeEven, hasNotError);


console.log(isEven(2), isEven(3))



const

const attempt(fn)
new Error



/*
Object
    .prototype
    .toString
    .call(x)
    .replace(/(^\[object )|(\]$)/g, '')
    .toLowerCase();
*/


