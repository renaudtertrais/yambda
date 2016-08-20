import typeOf from './typeOf';
/**
 * @function module:Types.typeName
 *
 * @description Same as [typeOf]{@link module:Types.typeOf} but always return name of constructor
 * @param  {*} target - The value on which type is desired
 * @return {String} the type name of the subject
 *
 * @requires Types.typeOf
 *
 * @example
 * typeOf(true);      // 'Boolean'
 * typeOf(Boolean);   // 'Function'
 * typeName(true);    // 'Boolean'
 * typeName(Boolean); // 'Boolean'
 *
 * @since v0.1.0
 */
const typeName = (type) => {
  const name = typeOf(type);
  return name === 'Function' ? type.name : name;
};

export default typeName;
