/**
 * 给你一个整数 n，请你帮忙计算并返回该整数「各位数字之积」和「各位数字之差」的和。
 * 
 * 示例 1：
 * 输入：n = 234
 * 输出：15 
 * 解释：
 * 各位数之积 = 2 * 3 * 4 = 24 
 * 各位数之和 = 2 + 3 + 4 = 9 
 * 结果 = 24 - 9 = 15
 * 示例 2：

 * 输入：n = 4421
 * 输出：21
 * 解释： 
 * 各位数之积 = 4 * 4 * 2 * 1 = 32 
 * 各位数之和 = 4 + 4 + 2 + 1 = 11 
 * 结果 = 32 - 11 = 21
 * 
 */

export function subtractProductAndSum(n: number): number {
    let product = 1;
    let sum = 0;
    const str = n.toString()
    const length = str.length;
    let index = 0;
    while (index < length) {
        product *= Number(str[index]);
        sum += Number(str[index])
        index++
    }

    return product - sum;
};

const res = subtractProductAndSum(4421);
console.log(res);
