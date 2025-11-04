/**
 * 如果一组数字 (i,j) 满足 nums[i] == nums[j] 且 i < j ，就可以认为这是一组 好数对 。
 * 返回好数对的数目。
    示例 1：

    输入：nums = [1,2,3,1,1,3]
    输出：4
    解释：有 4 组好数对，分别是 (0,3), (0,4), (3,4), (2,5) ，下标从 0 开始
    示例 2：

    输入：nums = [1,1,1,1]
    输出：6
    解释：数组中的每组数字都是好数对
    示例 3：

    输入：nums = [1,2,3]
    输出：0

 */

//* 通过map计算每一个元素出现的次数；然后遍历map，如果次数大于 1；那么就可以凑成一对 n * (n- 1) / 2，将全部累加起来即可

export function numIdenticalPairs(nums: number[]): number {
    let map = new Map()
    // 记录元素出现次数
    for (let item of nums) {
        map.set(item, (map.get(item) || 0) + 1)
    }
    let res: number = 0
    // 遍历map
    for (let item of map) {
        // 只有次数出现了两次 才可以凑成一对
        if (item[1] > 1) {
            // 计算对数并且累加
            res += Math.floor(item[1] * (item[1] - 1) / 2)
        }
    }
    return res
};