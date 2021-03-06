<<<<<<< HEAD
import { Point, Vector } from 'src/typings';

export default (point: Point, axis: Vector, sin: number, cos: number): Vector => {
=======
import { Vector } from 'src/typings';

export default (u: Vector, v: Vector, sin: number, cos: number): Vector => {
>>>>>>> a93b9e83685275009b5ff948e43d2733e045b126
    const icos = 1 - cos;

    const { x: ux, y: uy, z: uz } = point;
    const { x: vx, y: vy, z: vz } = axis;

    const uxx = ux * ux;
    const uyy = uy * uy;
    const uzz = uz * uz;
    const uyz = uy * uz;
    const uzx = uz * ux;
    const uxy = ux * uy;

    const m11 = cos + uxx * icos;
    const m12 = uxy * icos - uz * sin;
    const m13 = uzx * icos + uy * sin;

    const m21 = uxy * icos + uz * sin;
    const m22 = cos + uyy * icos;
    const m23 = uyz * icos - ux * sin;

    const m31 = uzx * icos - uy * sin;
    const m32 = uyz * icos + ux * sin;
    const m33 = cos + uzz * icos;

    return {
        x: m11 * vx + m12 * vy + m13 * vz,
        y: m21 * vx + m22 * vy + m23 * vz,
        z: m31 * vx + m32 * vy + m33 * vz
    };
};