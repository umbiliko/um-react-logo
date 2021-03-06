import { ROTATION } from 'src/actions/geometric/types';
import { Vector } from 'src/typings';
import Change from '../Change';

type Rotate = Change & {
    type: typeof ROTATION;
    vector: Vector;
};

export default Rotate;