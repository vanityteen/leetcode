function peakIndexInMountainArray(arr: number[]): number {
    let left = 0, right = arr.length - 2;
    while (left + 1 < right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] > arr[mid + 1]) {
            right = mid;
        } else {
            left = mid
        }
    }
    return right;
};

console.log(peakIndexInMountainArray([0, 1, 0]));
console.log(peakIndexInMountainArray([0, 2, 1, 0]));
console.log(peakIndexInMountainArray([0, 10, 5, 2]));
console.log(peakIndexInMountainArray([24, 69, 100, 99, 79, 78, 67, 36, 26, 19]));
console.log(peakIndexInMountainArray([3, 4, 5, 1]));
console.log(peakIndexInMountainArray([18, 29, 38, 59, 98, 100, 99, 98, 90]));


