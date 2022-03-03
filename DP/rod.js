//Store costs as length:cost
function highestPrice(length, prices, memo = {}) {
    if (length == 0) {
        return 0;
    }
    if (length in memo) return memo[length];

    let max_revenue = 0;
    for (let i = 0; i < length; i++) {
        let current_revenue = 0;
        current_revenue = prices[length - i - 1] + highestPrice(i, prices, memo);

        if (current_revenue > max_revenue) {
            max_revenue = current_revenue;
        }
    }
    memo[length] = max_revenue;
    return max_revenue;
}





function slow(length, prices) {
    //No length
    if (length == 0) {
        return 0;
    }
    let max_revenue = 0;
    for (let i = 0; i < length; i++) {
        let current_revenue = 0;
        current_revenue = prices[length - i - 1] + slow(i, prices);

        if (current_revenue > max_revenue) {
            max_revenue = current_revenue;
        }
    }
    return max_revenue;
}

//builds a table from the bottom up, the last elemement of the table is the 
//highest cost.
function bottom_up(length, cost) {

    let val = new Array(length + 1);   //Table is length size +1 since table[0] is 0.
    val[0] = 0; //No value

    for (let i = 1; i <= length; i++) { //Table at 0 is already filled.
        let max_val = 0;

        for (let j = 0; j < i; j++) { //Find if 

            //Use either what is currently the best or the 
            max_val = Math.max(max_val, cost[j] + val[i - j - 1]);
        }
        val[i] = max_val;
    }
    return val.pop();
}
//This is n^2 since you need to check each possible cut for each position.
//Normally n!.


// let book = [3, 5, 8, 9, 10, 17, 17, 20];
// let test2 = [2, 1, 9, 10, 13];  //11
let test = [1, 3, 8, 9, 10, 17, 17, 20, 9, 11, 1, 3, 8, 9, 10, 17, 5, 6, 8, 6, 5];  //length = 50
//8 Is the length. So 1-8
// console.log(highestPrice(4, test2));
// console.log(slow(4, test2));
console.log(highestPrice(test.length, test));   //Yeah this is wrong...

console.log(slow(test.length, test));  //  So slowwwww
//console.log(highestPrice(test.length, test));
console.log(bottom_up(test.length, test))