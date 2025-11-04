/**
 * 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。
 * 
 * 示例 1:
 * 输入: numRows = 5
 * 输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
 * 
 * 示例 2:
 * 输入: numRows = 1
 * 输出: [[1]]
 * 
 * 限制：
 * 1 <= numRows <= 30
 */

export function generate(numRows: number): number[][] {
  const res: number[][] = [];
  for (let i = 0; i < numRows; i++) {
    const row: number[] = [];
    for (let j = 0; j <= i; j++) {
        // 每一行数组两端都为1
      if (j === 0 || j === i) {
        row.push(1);
      } else {
        // 每一行数组中间的数等于上一行的前一个数和当前数之和
        row.push(res[i - 1][j - 1] + res[i - 1][j]);
      }
    }
    res.push(row);
  }
  return res;
}

console.log(generate(5))