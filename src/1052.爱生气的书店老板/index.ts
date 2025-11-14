function maxSatisfied(customers: number[], grumpy: number[], minutes: number): number {
    let sum = 0;
    // 先找出所有不生气的数量
    for (let index = 0; index < customers.length; index++) {
        if (grumpy[index] === 0) {
            sum += customers[index];
        }
    }

    let sum1 = 0, max = 0;

    // 再找出minutes内生气的最大值
    for (let index = 0; index < customers.length; index++) {
        grumpy[index] === 1 && (sum1 += customers[index])
        if (index < minutes - 1) {
            continue;
        }

        max = Math.max(max, sum1);

        grumpy[index - minutes + 1] === 1 && (sum1 -= customers[index - minutes + 1])
    }
    
    return sum + max
};

if (import.meta.vitest) {
    const { it, expect } = import.meta.vitest
    it("case1", () => {
        const customers = [1, 0, 1, 2, 1, 1, 7, 5]
        const grumpy = [0, 1, 0, 1, 0, 1, 0, 1];
        const minutes = 3;
        expect(maxSatisfied(customers, grumpy, minutes)).toEqual(16)
    })
    it("case2", () => {
        const customers = [1]
        const grumpy = [0];
        const minutes = 1;
        expect(maxSatisfied(customers, grumpy, minutes)).toEqual(1)
    })
    it("case3", () => {
        const customers = [3]
        const grumpy = [1];
        const minutes = 1;
        expect(maxSatisfied(customers, grumpy, minutes)).toEqual(3)
    })
    it.only("case4", () => {
        const customers = [3,2,5]
        const grumpy = [0,1,1];
        const minutes = 2;
        expect(maxSatisfied(customers, grumpy, minutes)).toEqual(10)
    })
}