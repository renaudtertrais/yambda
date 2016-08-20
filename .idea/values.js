import get from './get';
import swap from './swap';
import keys from './keys';

const values = (a) => keys(a).map(swap(get)(a));

export default values;
