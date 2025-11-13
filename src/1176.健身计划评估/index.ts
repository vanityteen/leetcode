/**
 * 你的好友是一位健身爱好者。前段日子，他给自己制定了一份健身计划。现在想请你帮他评估一下这份计划是否合理。
 * 他会有一份计划消耗的卡路里表，其中 calories[i] 给出了你的这位好友在第 i 天需要消耗的卡路里总量。
 * 为了更好地评估这份计划，对于卡路里表中的每一天，你都需要计算他 「这一天以及之后的连续几天」 （共 k 天）内消耗的总卡路里 T：
 *  如果 T < lower，那么这份计划相对糟糕，并失去 1 分；
 *  如果 T > upper，那么这份计划相对优秀，并获得 1 分；
 *  否则，这份计划普普通通，分值不做变动。
 * 
 * 请返回统计完所有 calories.length 天后得到的总分作为评估结果。
 * 注意：总分可能是负数。
 * 
 * 示例 1：
 * 输入：calories = [1,2,3,4,5], k = 1, lower = 3, upper = 3
 * 输出：0
 * 解释：
 * calories[0], calories[1] < lower
 * 而 calories[3], calories[4] > upper , 总分 = 0.
 * 
 * 示例 2：
 * 输入：calories = [3,2], k = 2, lower = 0, upper = 1
 * 输出：1
 * 解释：calories[0] + calories[1] > upper, 总分 = 1.
 * 
 * 示例 3：
 * 输入：calories = [6,5,0,0], k = 2, lower = 1, upper = 5
 * 输出：0
 * 解释：
 * calories[0] + calories[1] > upper
 * 而 calories[2] + calories[3] < lower, 总分 = 0.
 */

function dietPlanPerformance(calories: number[], k: number, lower: number, upper: number): number {
    let sum = 0, count = 0;
    for (let i = 0; i < calories.length; i++) {
        // 1. 进入窗口
        sum += calories[i];
        if (i < k - 1) { // 窗口大小不足 k
            continue;
        }
        // 2. 更新答案
        if (sum > upper) {
            count++;
        }
        if (sum < lower) {
            count--;
        }
        // 3. 离开窗口
        sum -= calories[i - k + 1];
    }
    return count;
}

if (import.meta.vitest) {
    const { it, expect } = import.meta.vitest
    it("基本单元素窗口1", () => {
        const calories = [1, 2, 3, 4, 5]
        const k = 1;
        const lower = 3;
        const upper = 3;
        expect(dietPlanPerformance(calories, k, lower, upper)).toEqual(0)
    })
     it("基本单元素窗口2", () => {
        const calories = [6,5,0,0]
        const k = 2;
        const lower = 1;
        const upper = 5;
        expect(dietPlanPerformance(calories, k, lower, upper)).toEqual(0)
    })
    it("示例滑窗", () => {
        const calories = [1, 2, 3, 4, 5]
        const k = 3;
        const lower = 3;
        const upper = 6;
        expect(dietPlanPerformance(calories, k, lower, upper)).toEqual(2)
    })
    it("所有窗口都大于上界", () => {
        const calories = [3, 3, 3, 3]
        const k = 2;
        const lower = 3;
        const upper = 3;
        expect(dietPlanPerformance(calories, k, lower, upper)).toEqual(3)
    })
    it("全零且小于下界", () => {
        const calories = [0,0,0,0]
        const k = 2;
        const lower = 1;
        const upper = 2;
        expect(dietPlanPerformance(calories, k, lower, upper)).toEqual(-3)
    })
    it("k 等于数组长度", () => {
        const calories = [1,100,1]
        const k = 3;
        const lower = 50;
        const upper = 100;
        expect(dietPlanPerformance(calories, k, lower, upper)).toEqual(1)
    })
    it("大数检查（避免整型溢出）", () => {
        const calories = [1000000000, 1000000000]
        const k = 2;
        const lower = 1;
        const upper = 1999999999;
        expect(dietPlanPerformance(calories, k, lower, upper)).toEqual(1)
    })
    it("起伏序列", () => {
        const calories = [2,3,4,5,2,1,6]
        const k = 3;
        const lower = 6;
        const upper = 10;
        expect(dietPlanPerformance(calories, k, lower, upper)).toEqual(2)
    })
    it("交替零和非零，刚好在界内", () => {
        const calories = [5,0,5,0,5]
        const k = 2;
        const lower = 5;
        const upper = 5;
        expect(dietPlanPerformance(calories, k, lower, upper)).toEqual(0)
    })
}