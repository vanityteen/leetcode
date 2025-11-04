export function sum(a:number, b:number) {
  return a + b;
}

if (import.meta.vitest) {
	const { it, expect } = import.meta.vitest
	it.only("case1", () => {
		const a = 1
		const b = 2;
		expect(sum(a,b)).toEqual(3)
	})
}
