const typeOf = (x) => {
  if (x === undefined) return 'undefined';
  if (x === null) return 'null';

  return Object.getPrototypeOf(x).constructor.name;
};

export default typeOf;
