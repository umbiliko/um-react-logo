import { Vector } from 'src/types';

export default ({ x, y, z}: Vector): boolean =>
    (typeof x === 'number' && typeof y === 'number');