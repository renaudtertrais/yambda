# yambda [![npm package][npm-badge]][npm] [![Travis][travis-badge]][build] [![Codecov][codecov-badge]][codecov]

*This is a work in progress, more functions and documentation will come soon.*

[Documentation](DOCS.md)

## Getting started

### Installation

```
$ npm install --save yambda
```

### Usage

Importing all the library:

```js
import y from 'yambda';

y.typeOf('foo');
```

Importing only one function :

```js
import typeOf from 'yambda/typeOf';

typeOf('foo');
```

## Motivation

I was very impressed by how Haskell render complicated operations in a simply way, so I try to implement Haskell functions in javascript and this lead me to create this library.

The idea was also to enable functions such as `map()` or `reduce()` on whatever. So this mean to consider [any](DOCS.md#any) types as [functor](https://github.com/hemanth/functional-programming-jargon#functor), [applicative](https://github.com/hemanth/functional-programming-jargon#applicative-functor) or [monad](https://github.com/hemanth/functional-programming-jargon#monad).

But the approach is different from library such as [Immutable](https://facebook.github.io/immutable-js). Instead of wrapping a [native](DOCS.md#native) types inside an object with more methods, **yambda** can take (depending on the function) [any](DOCS.md#any) types and return a value with the same type. The problem with wrapping is that you need 3 step to do a simple operation:

```js
import { Map } from 'immutable';
import map from 'yambda/map';

const inc = (x) => x + 1;
const obj = { foo: 1, bar: 2 };

const res = Map(obj).map(inc).toJS(); // { foo: 2, bar: 3 }

// with yambda
const res2 = map(inc, obj); // { foo: 2, bar: 3 }
```

**yambda** try also to be compatible with any libraries. When function accept [any](DOCS.md#any) type, it will try to use the object method first. So this mean that if you are working with [Immutable](https://facebook.github.io/immutable-js), you can also do:

```js
import { Map } from 'immutable';
import map from 'yambda/map';

const inc = (x) => x + 1;
const obj = { foo: 1, bar: 2 };

const myMap = Map(obj);
const res = map(inc, myMap); // Map({ foo: 2, bar: 3 })
```

### Functional

**yambda** only expose functions. The goal is to [compose](https://github.com/hemanth/functional-programming-jargon#function-composition) an manipulate those functions in order to create new ones. **yambda**'s functions have a specific order in their arguments such as the subject of the function is always (when it makes sens) the last one in order to facilitate composition:

```js
import map from 'yambda/map';

map(fn, subject);
```

### Pure and Immutable

All functions of **yambda** are [pure](https://github.com/hemanth/functional-programming-jargon#purity) and immutable.

### Curried but not fixed arity

All functions of **yambda** are [curried](https://github.com/hemanth/functional-programming-jargon#currying) by default but not they have not a fixed [arity](https://github.com/hemanth/functional-programming-jargon#arity) *(may change in the futur)*.

## Inspiration

Thanks to those projects, I learnt a lot and they gave me the desire to create this library.

- [Haskell](https://www.haskell.org/)
- [Fantasy Land Specification](https://github.com/fantasyland/fantasy-land)
- [Functional Programming Jargon](https://github.com/hemanth/functional-programming-jargon)
- [Lodash](https://lodash.com/)
- [Rambda](http://ramdajs.com)
- [Immutable](https://facebook.github.io/immutable-js)

## Contributing

Every ideas and contributions are welcomed.

## Licence

MIT © 2016-present Renaud Tertrais

[npm-badge]: https://img.shields.io/npm/v/yambda.svg?style=flat-square
[npm]: https://www.npmjs.com/package/yambda

[travis-badge]: https://img.shields.io/travis/renaudtertrais/yambda/.svg?style=flat-square
[travis]: https://travis-ci.org/renaudtertrais/yambda

[codecov-badge]: https://img.shields.io/codecov/c/github/renaudtertrais/yambda.svg?style=flat-square
[codecov]: https://codecov.io/gh/reactjs/react-router
