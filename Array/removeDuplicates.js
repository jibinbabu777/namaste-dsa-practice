// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k. To get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially.
// The remaining elements of nums are not important, as well as the size of nums.
// Return k.

function removeDuplicates(arr){
    let x=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i+1]>arr[x]){
            x=x+1;
            arr[x]= arr[i+1]
        }
       
    }
     return x+1;
}

let arr = [0,1,2,2,3,3,5,8,8,9,9]
const result = removeDuplicates(arr)
console.log(result)