# Documetation

## Types

In this documentation, several words are use to groups javascript types together. They are described here.

### Native

Native javascript types:

- `undefined`
- `null`
- `Number`
- `String`
- `Array`
- `Object`
- `Date`
- `RegExp`
- `Error`
...

### Void

- `undefined`
- `null`

### Object

Here in **yambda** `Object` only designate plain javascript object.

### List

- `String`
- `Array`

### Class

Every [native](#native) except [void](#void) but including [custom class](#custom-class). As in javascript, classes are just functions, it designate the class constructor.

### Custom Class

Every javascript class created or imported from an another library.

### Any

[native](#native) + [custom class](#custom-class)

## HOF

[Higher Order Functions](https://github.com/hemanth/functional-programming-jargon#higher-order-functions-hof)

### curry(fn)

[Currying](https://github.com/hemanth/functional-programming-jargon/blob/master/readme.md#currying)

#### Arguments

1. `fn` *(Function)*: Function to curry

#### Returns

*(Function)*: the curried function with not a fixed [arity](https://github.com/hemanth/functional-programming-jargon/blob/master/readme.md#arity)

#### Examples

```js
const add = (a, b) => a + b;
const addCurried = curry(add);
const inc = addCurried(1);
const dec = addCurried(-1);

addCurried(1, 2); // 3
addCurried(1)(2); // 3
inc(42); // 43
dec(42); // 41

const sum4 = (a, b, c, d) => a + b + c + d;
const sum4Curried = curry(sum4);

sum4Curried(1, 2, 3, 4);    // 10
sum4Curried(1, 2, 3, 4, 5); // 10
sum4Curried(1)(2)(3)(4);     // 10
sum4Curried(1)(2, 3)(4);    // 10
sum4Curried(1, 2, 3)(4);    // 10
sum4Curried(1, 2)(3, 4);    // 10
```

### apply(fn, args)

Apply an array of arguments to a function.

#### Arguments

1. `fn` *(Function)*: the function to be applied
2. `args` *(Array)*: the array of arguments to apply

#### Returns

*(Any)*: the return of the `fn` function called with the arguments `args`.

#### Examples

```js
const add = (a, b) => a + b;
const values = [2, 3];
apply(add, values); // 5
```

### swap(fn, b, a)

Change the order of a two parameters function.

#### Arguments

1. `fn` *(Function)*: the function to be swap
2. `b` *(Any)*: the second param of the original function
2. `a` *(Any)*: the first param of the original function

#### Returns

*(Any)*: the same result as `fn`

#### Examples

```js
const add = a => b => a + b;
const inc = add(1);
const dec = add(-1);
const myArray = [1, 2, 3];

const mapMyArrayOn = swap(map, myArray);
mapMyArrayOn(inc); // [2, 3, 4]
mapMyArrayOn(dec); // [0, 1, 2]
```

## Assertion

### is(type, subject)

Compare a define if `subject` has the type `type` or if `type` and `subject` have the same type.

#### Arguments

1. `type` *(Any)*: Could be a type or any value that need to be compare
2. `subject` *(Any)*: The value to be compare

#### Returns

*(Boolean)*: if `subject` has the type `type` or if `type` and `subject` have the same type

#### Examples

```js
// class
is(String, 'foo'); // true
is(Boolean, false); // true
is(RegExp, /abc/); // true
is(Date, 42); // false

// values
is(undefined, undefined); // true
is(true, false); // true
is({}, { foo: 'bar' }); // true
is({}, new Date()); // false
is(Function, Boolean); // true
is(String, Boolean); // false

// custom classes
class Foo {};
is(Foo, new Foo()); // true
```

### typeOf(value)

Get the type of a `value`.

#### Arguments

1. `value` *(Any)*: The value on which type is desired

#### Returns

*(String)*: the type of `value`

#### Examples

```js
// working with existing types
typeOf(null); // 'null'
typeOf(42); // 'Number'
typeOf({}); // 'Object'
typeOf(new Date()); // 'Date'

// but also with custom classes
class Foo {};
class Bar extends Foo {};
typeOf(Foo); // 'Function'
typeOf(new Foo()); // 'Foo'
typeOf(new Bar()); // 'Bar'
```

### typeName(value)

Same as [typeOf](#typeof-value) but if value is a [class](#class), it return the name of the [class](#class) instead of `"Function"`.

## Guarded function

### mustBe(type, subject)

Throw an error if `subject` has not the `type` otherwise return `subject`.

#### Arguments

1. `type` *(Any)*: Could be a class or any value that need to be compare
2. `subject` *(Any)*: The value to be compare

#### Returns

*(Any)*: `subject`

#### Examples

```js
const upCase = (str) => mustBe(String, str).toUpperCase();

upCase('foo'); // 'FOO'
upCase(42); // TypeError: 42 is not a(n) String

const num = mustBe(Number);
const add = (a, b) => num(a) + num(b);

add(2, 3); // 5
add('foo', 3) // TypeError: foo is not a(n) Number
```
## Any types

### clone(subject)

Return a fresh copy of subject. (Not a deep copy)

#### Arguments

1. `subject` *(Any)*: The value to clone

#### Returns

*(Any)*: `subject` cloned

#### Examples

```js
const n = 42;
clone(42); // 42
n === clone(42); // true

const arr = [1, 2];
clone(arr); // [1, 2]
arr === clone(arr); // false
```

### map(fn, subject)

See [Functor](https://github.com/hemanth/functional-programming-jargon/blob/master/readme.md#functor);

#### Arguments

1. `fn` *(Function)*: The function that handle the change
2. `subject` *(Any)*: The value to map over

#### Returns

*(Any)*: the new value

#### Examples

```js
const add = (a) => (b) => a + b;
const inc = map(add(1));
inc(42); // 43
inc([1, 2, 3]); // [2, 3, 4]
inc({ a: 4, b: 5, c: 6 }); // { a: 5, b: 6, c: 7 }
```

### reduce(fn, initialValue, subject)

Iterate on `subject` and call `fn` with:
- result: value that `fn` must return and that has the value of `initialValue` at the begening
- value: current value
- index/key: index or key of the current value
- `subject`

It will return result at the end.

#### Arguments

1. `fn` *(Function)*: first Object
2. `initialValue` *(Any)*: second Object that will override `a` properties
3. `subject` *(Any)*: The value to reduce over

#### Returns

*(Object)*: the final result

#### Examples

```js
const add = (a, b) => a + b;
const sum = reduce(add, 0);
sum(42); // 42
sum([1, 2, 3]) // 6
sum({ a: 1, b: 2, c: 3 }); // 6

const products = [
  { id: 1, qty: 5},
  { id: 1, qty: 2},
  { id: 1, qty: 3}
];

const sumQty = reduce((res, { qty }) => res + qty, 0);
const totalQty = sumQty(products); // 10
```

## Object only

### assign(a, b)

Merge object `b` in object `a` with no mutation.

#### Arguments

1. `a` *(Object)*: first Object
2. `b` *(Object)*: second Object that will override `a` properties

#### Returns

*(Object)*: the new `Object`

#### Examples

```js
const a = { foo: 42, bar: 'baz' };
const b = { foo: 5, baz: true };

assign(a, b); // { foo: 5, bar: 'baz', baz: true }
assign(b, a); // { foo: 42, bar: 'baz', baz: true }
```
