function Check(arr) {
    let max = arr[0];
    let max2 = 0;
    let max3 = 0;
    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max2 && arr[i] < max) {
            max2 = arr[i]
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max3 && arr[i] < max && arr[i] < max2) {
            max3 = arr[i]
        }
    }
    return max3;
}
let arr = [10,23,61,52,81,2,9];
console.log(Check(arr));
