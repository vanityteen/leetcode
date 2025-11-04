import { isEmpty } from 'lodash-es';

// 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。

// 示例 1：
// 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
// 输出：[1,2,3,6,9,8,7,4,5]

// 示例 2：
// 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// 输出：[1,2,3,4,8,12,11,10,9,5,6,7]

export function spiralOrder(matrix: number[][]): number[] {
    if (isEmpty(matrix) || isEmpty(matrix[0])) {
        return [];
    }
    const res: Array<number> = [];

    let left_range = 0
    let right_range = matrix[0].length - 1;
    let top_range = 0;
    let bottom_range = matrix.length - 1

    while (top_range <= bottom_range && right_range >= left_range) {
        for (let col = left_range; col <= right_range; col++) {
            res.push(matrix[top_range][col])
        }
        top_range++;

        for (let row = top_range; row <= bottom_range; row++) {
            res.push(matrix[row][right_range])
        }
        right_range--;

        if (top_range <= bottom_range) {
            for (let col = right_range; col >= left_range; col--) {
                res.push(matrix[bottom_range][col])
            }
            bottom_range--;
        }

        if (left_range <= right_range) {
            for (let row = bottom_range; row >= top_range; row--) {
                res.push(matrix[row][left_range])
            }
            left_range++;
        }
    }

    return res;
};