import { Matrix } from 'src/types';
import isVector3D from './isVector3D';

export default ({ x, y, z}: Matrix): boolean =>
    (isVector3D(x) && isVector3D(y) && isVector3D(z));