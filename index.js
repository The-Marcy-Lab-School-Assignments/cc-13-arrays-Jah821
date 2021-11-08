function avginArrays(arr) {
    let jah = 0;
    for (let i = 0; i < arr.length; i++) {
        jah += arr[i];
    }
    return jah / arr.length;
}

// create and declare function 
// initiliaze paramater
// declare sum variable and set equal to 0
// create a for loop iterating through each element of the array 
// Once array is iterated through **assign** (update sum to = total sum of elements in array)
// return sum divided by number of elements in array

console.log(avginArrays([2, 2, 5, 10]))
