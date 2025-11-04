import { countGoodTriplets } from ".";

test("测试ing",()=>{
   expect(countGoodTriplets([3,0,1,1,9,7], 7, 2, 3)).toBe(4);
   expect(countGoodTriplets([1,1,2,2,3], 0, 0, 1)).toBe(0);
   expect(countGoodTriplets([7,3,7,3,12,1,12,2,3],5,8,1)).toBe(12);
})