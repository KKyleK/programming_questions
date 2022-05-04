//Memo is going to store the n,m pairing:
//rows, col
function gridTraveler(n, m, memo = {}) {

    let curr = n + ',' + m;  //Can do it another way too.

    if (curr in memo) return memo[curr];

    if (n == 1 && m == 1) {  //At a grid of 0
        return 1;
    }
    if (n <= 0 || m <= 0) {
        return 0;
    }
    memo[curr] = 0;
    if (n > 1) {
        memo[curr] += gridTraveler(n - 1, m, memo);
    }
    if (m > 1) {
        memo[curr] += gridTraveler(n, m - 1, memo);
    }

    return memo[curr];
}
//fills based on length
function fill(arr, n, m) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            arr[i][j] = 0;

        }
    }
    return;
}


function tabular_gridTraveler(n, m) {

    if (n == 0 || m == 0) return 0;

    let table = new Array(n + 1);
    for (let i = 0; i < n + 1; i++) {
        table[i] = new Array(m + 1);
    }
    fill(table, n + 1, m + 1);

    table[1][1] = 1;

    for (let i = 0; i <= n; i++) { //i across columns
        for (let j = 0; j <= m; j++) { //j across rows

            if (i + 1 <= n) table[i + 1][j] += table[i][j];
            if (j + 1 <= m) table[i][j + 1] += table[i][j];

        }
    }
    return table[n][m];
}

console.log(tabular_gridTraveler(3, 3));
console.log(gridTraveler(3, 3));