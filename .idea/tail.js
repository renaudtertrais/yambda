import mustBeIn from './mustBeIn';

const tail = (a) => mustBeIn(Array, String)(a).slice(1);

export default tail;
