/**
* 矩阵的 转置 是指将矩阵的主对角线翻转，交换矩阵的行索引与列索引。
* 
* 示例 1：
* 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
* 输出：[[1,4,7],[2,5,8],[3,6,9]]
* 
* 示例 2：
* 输入：matrix = [[1,2,3],[4,5,6]]
* 输出：[[1,4],[2,5],[3,6]]
*
*/

export function transpose(matrix: number[][]): number[][] {
    return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
}