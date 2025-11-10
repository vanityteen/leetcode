/**
 * 
 * 给你一个由 n 个元素组成的整数数组 nums 和一个整数 k 。
 * 请你找出平均数最大且 长度为 k 的连续子数组，并输出该最大平均数
 * 
 * 示例 1：
 * 输入：nums = [1,12,-5,-6,50,3], k = 4
 * 输出：12.75
 * 解释：最大平均数 (12-5-6+50)/4 = 51/4 = 12.75
 * 
 * 示例 2：
 * 输入：nums = [5], k = 1
 * 输出：5.00000
 * 
 */
import { reduce } from 'lodash-es';

const getAverage = (arr: number[], count: number) => {
    const total = reduce(arr, (acc, cur) => {
        return (acc + cur);
    }, 0)
    return total / count;
}

//tip: 最多有k个窗口

function findMaxAverage(nums: number[], k: number): number {
    // 最初的平均值
    let max_average = getAverage(nums.slice(0, k), k);
    let new_average = max_average;
    console.log(max_average, new_average);

    let left = 0;

    for (let index = k; index < nums.length; index++) {
        new_average = new_average - (nums[left] - nums[index]) / k;
        max_average = Math.max(max_average, new_average);
        left++;
    }

    return max_average;
};

// 作者：灵茶山艾府
// 链接：https://leetcode.cn/problems/maximum-average-subarray-i/solutions/3061219/mo-ban-ding-chang-hua-dong-chuang-kou-py-1jxk/
function findMaxAverage2(nums: number[], k: number): number {
    let maxS = -Infinity; // 窗口元素和的最大值
    let s = 0; // 维护窗口元素和
    for (let i = 0; i < nums.length; i++) {
        // 1. 进入窗口
        s += nums[i];
        if (i < k - 1) { // 窗口大小不足 k
            continue;
        }
        // 2. 更新答案
        maxS = Math.max(maxS, s);
        // 3. 离开窗口
        s -= nums[i - k + 1];
    }
    return maxS / k;
};

function findMaxAverage3(nums: number[], k: number): number {
    let current = 0;

    for (let i = 0; i < k; i++) {
        current += nums[i];
    }

    let max = current;

    for (let right = k; right < nums.length; right++) {
        current = current + nums[right] - nums[right - k];
        max = Math.max(max, current);
    }

    return max / k;
};

if (import.meta.vitest) {
    const { it, expect } = import.meta.vitest
    it("case1", () => {
        const nums = [1, 12, -5, -6, 50, 3]
        const k = 4;
        expect(findMaxAverage3(nums, k)).toEqual(12.75)
    })
    it("case2", () => {
        const nums = [5]
        const k = 1
        expect(findMaxAverage3(nums, k)).toEqual(5)
    })
    // it("case3", () => {
    //     const nums = "aeiou"
    //     const k = 3;
    //     expect(findMaxAverage(nums, k)).toEqual(3)
    // })
}