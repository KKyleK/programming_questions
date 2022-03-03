//memoization - use a hash map. Key: Value to our function.
//Value - its return value

//Ex object:
// {
//     "1": 1,
//     "2": 2,
// }
function fib(n, memo = {}) {  //If you dont give an object, it uses this empty one by default

    //Check if n is already in memo: (automatically making 'n' into a string)
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    else {
        memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
        return (memo[n]);
    }
}

function tabularFib(n) {
    let table = new Array(n + 1); //the 100th term will be the table[100] so size 101
    table[0] = 0;
    table[1] = 1;

    for (let i = 2; i <= n; i++) {

        table[i] = table[i - 1] + table[i - 2];
    }



    return table[n];
}



function slowFib(n) {
    if (n <= 2) return 1;
    else {
        return slowFib(n - 1) + slowFib(n - 2);
    }
}
console.log(fib(42));
console.log(tabularFib(42));
//console.log(fib(1000));  //So fast!!!