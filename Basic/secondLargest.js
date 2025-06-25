
const arr =[1,23,45,32,67,88,88]

function findSecondLargest(arr){
    let first = -Infinity;
    let second = -Infinity;
    for(let i=0; i<arr.length; i++){
        if(arr[i]>first){
            second = first
            first = arr[i];

        }
        else if(arr[i]> second && arr[i] != first){
            second = arr[i]
        }
    }
    return second
}


const result = findSecondLargest(arr)
console.log(result)