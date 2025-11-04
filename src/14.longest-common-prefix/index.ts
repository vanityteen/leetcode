/**
编写一个函数来查找字符串数组中的最长公共前缀。
如果不存在公共前缀，返回空字符串 ""。

示例 1：
输入：strs = ["flower","flow","flight"]
输出："fl"

示例 2：
输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。
 */

export function longestCommonPrefix(strs: string[]): string {
    let result = ''
    const str0 = strs.pop();

    if (!str0) {
        return ''
    }

    for (let i = 0; i < str0.length; i++) {
        const char = str0[i];

        if (strs.every(s => s[i] === char)) {
            result += char;
        } else {
            break;
        }
    }

    return result;
};