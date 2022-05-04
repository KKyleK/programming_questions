function smallest(arr) {

    //I will be my swap point
    for (let i = 0; i < arr.length; i++) {
        let smallest = Infinity;
        let index = i; //Where to swap

        for (let k = i; k < arr.length; k++) {
            if (arr[k] < smallest) {
                smallest = arr[k];
                index = k;
            }
        }
        let temp = arr[i]; //What I will swap for.
        arr[i] = smallest;
        arr[index] = temp;     //My new found element

    }
    return arr;
}

function largest(arr) {

    //I will be my swap point
    for (let i = arr.length - 1; i >= 0; i--) {
        let largest = -Infinity;
        let index = i; //Where to swap

        for (let k = i; k >= 0; k--) {
            if (arr[k] > largest) {
                largest = arr[k];
                index = k;
            }
        }
        let temp = arr[i]; //What I will swap for.
        arr[i] = largest;
        arr[index] = temp;     //My new found element

    }
    return arr;
}



console.log(smallest([5, 3, 2, 5, 7, 7, 4]));  //Easy and it works.
console.log(largest([5, 3, 2, 5, 7, 7, 4]));  //Easy and it works.