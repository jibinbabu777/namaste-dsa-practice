
// Remove Element
// Given an integer array nums and an integer val, remove all occurrences of val in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k. To get accepted, you need to:

// Modify nums such that the first k elements contain elements not equal to val.
// The remaining elements beyond k do not matter.
// Return k.

const result = function removeElement(arr, val){
    let x=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]!=val){
            arr[x]=arr[i];
            x=x+1
        }
    }
    return x
}

let arr = [1,23,10,34,10,67]

console.log(result(arr, 10))