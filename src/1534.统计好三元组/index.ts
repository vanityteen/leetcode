// export function countGoodTriplets(arr: number[], a: number, b: number, c: number): number {
//   let count = 0;
//   const n = arr.length;

//   for (let i = 0; i < n - 2; i++) {
//     for (let k = i + 2; k < n; k++) {
//       if (Math.abs(arr[i] - arr[k]) > (a + b + c) / 2) continue;
//       for (let j = i + 1; j < k; j++) {
//         if (
//           Math.abs(arr[i] - arr[j]) <= a &&
//           Math.abs(arr[j] - arr[k]) <= b &&
//           Math.abs(arr[i] - arr[k]) <= c
//         ) {
//           count++;
//         }
//       }
//     }
//   }

//   return count;
// }

export function countGoodTriplets(arr: number[], a: number, b: number, c: number): number {
    let ans = 0;
    for (let i=0; i<arr.length; i++) {
        for (let j=i+1; j<arr.length; j++) {
            if (Math.abs(arr[i]-arr[j])>a) {
                continue;
            }
            for (let k=j+1; k<arr.length; k++) {
                if (Math.abs(arr[j]-arr[k])<=b
                && Math.abs(arr[i]-arr[k])<=c) {
                    ans++;
                }
            }
        }
    }
    return ans;
};