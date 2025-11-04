// 给你一个正整数 n ，生成一个包含 1 到 n² 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。

// 示例 1：
// 输入：n = 3
// 输出：[[1,2,3],[8,9,4],[7,6,5]]

// 示例 2：
// 输入：n = 1
// 输出：[[1]]

export function generateMatrix(n: number): number[][] {
    let left_range = 0, top_range = 0;
    let right_range = n - 1, bottom_range = n - 1;
    let res: number[][] = Array.from({ length: n }, () => new Array(n));

    let cur = 1;
    while (cur <= Math.pow(n, 2)) {
        if (top_range <= bottom_range) {
            for (let i = left_range; i <= right_range; i++)res[top_range][i] = cur++;
            top_range++;
        }
        if (left_range <= right_range) {
            for (let i = top_range; i <= bottom_range; i++)res[i][right_range] = cur++;
            right_range--;
        }
        if (top_range <= bottom_range) {
            for (let i = right_range; i >= left_range; i--)res[bottom_range][i] = cur++;
            bottom_range--
        }
        if (left_range <= right_range) {
            for (let i = bottom_range; i >= top_range; i--)res[i][left_range] = cur++;
            left_range++
        }
    }
    return res;
}