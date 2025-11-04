# LeetCode

```
tsx src/*/*.ts 可以直接执行指定的ts文件。
```
```
npm run test -- src/*/*.test.ts 可以执行指定的测试用例(需要node 版本>20)。
```

- 在tsconfig中配置了
- "types": ["vitest/importMeta"]
- 可以直接在.ts文件中使用
```
if (import.meta.vitest) {
	const { it, expect } = import.meta.vitest
	it.only("case1", () => {
		const a = 1
		const b = 2;
		expect(sum(a,b)).toEqual(3)
	})
}
npm run test -- src/*/*.ts 也可以执行指定的测试用例
```