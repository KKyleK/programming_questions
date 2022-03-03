function canSum(num, arr, memo = {}) {

    if (num in memo) {
        return memo[num]; //These store true and falses
    }

    if (num == 0) {
        return true;
    }

    for (i of arr) {
        if (num - i >= 0) {
            if (canSum(num - i, arr, memo)) {
                memo[num] = true;
                return true;
            }
        }
    }
    memo[num] = false;
    return false;

}
console.log(canSum(500, [8, 9, 99, 45, 23]));