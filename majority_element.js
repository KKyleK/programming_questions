function majority_element(arr) {

    if (arr.length == 1) {
        return arr[0];
    }

    const half = Math.ceil(arr.length / 2);
    const firstHalf = arr.slice(0, half);
    const secondHalf = arr.slice(-half);

    majority = majority_element(firstHalf);
    majority2 = majority_element(secondHalf);

    if (majority == majority2)
        return majority;

    else return false;
}
//O(Nlogn)
function get_highest(obj) {

    let greatest_num = 0;
    let most_common;


    for (s in obj) {
        let current_num = obj[s];
        if (current_num > greatest_num) {
            greatest_num = current_num;
            most_common = s;
        }
    }
    for (s in obj) {

        if (s != most_common && obj[s] == greatest_num) {
            return false;
        }
    }
    return most_common;
}


//Here is the O(n) version: 
function fast_majority_element(arr) {

    let store = {};

    for (let i = 0; i < arr.length; i += 2) {

        element = arr[i];
        element2 = arr[i + 1];

        if (element == element2) {
            if (!(element in store)) store[element] = 1;
            else {
                store[element] += 1;
            }
        }
    }
    return get_highest(store);
}


let arr1 = [1, 1, 3, 1, 1, 3, 2, 2, 1, 1, 1];
let arr2 = [1, 3, 3, 1];
let arr3 = [1, 3, 1, 1];
let test = [1, 1, 2, 3];

console.log(fast_majority_element(arr2));



