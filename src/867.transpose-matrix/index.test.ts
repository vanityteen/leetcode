import {transpose} from './index';

test("矩阵转置",()=>{
    expect(transpose([[], [], []])).toStrictEqual([]);
    expect(transpose([[1,2,3],[4,5,6],[7,8,9]])).toStrictEqual([[1,4,7],[2,5,8],[3,6,9]]);
    expect(transpose([[1,2,3],[4,5,6]])).toStrictEqual([[1,4],[2,5],[3,6]]);
    expect(transpose([[1,2],[3,4],[5,6]])).toStrictEqual([[1,3,5],[2,4,6]]);
})
