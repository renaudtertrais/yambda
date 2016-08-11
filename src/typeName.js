import typeOf from './typeOf';

const typeName = (type) => {
  const name = typeOf(type);
  return name === 'Function' ? type.name : name;
};

export default typeName;
