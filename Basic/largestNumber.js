

const arr = [1,4,12,34,67,2,87]

function findLargestNumber(arr){
    let largest = arr[0];
    //we can use -Infinity
    for(let i=0; i<arr.length; i++){
        if(arr[i]>largest){
            largest = arr[i]
        }
    }
    return largest;
}

const result = findLargestNumber(arr)


console.log(result)