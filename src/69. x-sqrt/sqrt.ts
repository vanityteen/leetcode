/**
由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。
注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x ** 0.5 。

示例 1：
输入：x = 4
输出：2

示例 2：
输入：x = 8
输出：2
解释：8 的算术平方根是 2.82842..., 由于返回类型是整数，小数部分将被舍去。
 */

export function mySqrt(x: number): number {
    if (x < 2) return x; // 0 和 1 的特殊情况

    let a = x / 2;
    while (true) {
        const b = x / a;
        const next = (a + b) / 2;
        if (Math.abs(next - a) < 1e-7) { // 收敛判断
            return Math.floor(next);     // 只取整数部分
        }
        a = next;
    }
}

