// function divideArray(arr){
//     if(arr.length <=1){
//         return arr;
//     }
//     let middle=Math.floor(arr.length /2);
//     let left=arr.slice(0,middle);
//     let right=arr.slice(middle);
//     console.log({left});
//     console.log({right});
//     return sortedarray(divideArray(left),divideArray(right))
// }  
// function sortedarray(left,right){
// let emptyarray=[]
// while(left.length && right.length){
//     if(right[0]<left[0]){
//         emptyarray.push(right.shift())
    
//     }else{
    
//         emptyarray.push(left.shift())
//     }
// }
// console.log({emptyarray});
// return[...emptyarray,...left,...right]
//     }
    

// let arr=[3,10,2,26,15,11,4];
// console.log(divideArray(arr));

function merge(arr){
    if(arr.length<=1){
        return arr
    }
    let middle=Math.floor(arr.length /2);
    let left=arr.slice(0,middle);
    let right=arr.slice(middle);
    return sort(merge(left),merge(right));

}
function sort(left,right){
    let empty=[];
    while(left.length &&right.length){
        if(left[0]<right[0]){
            empty.push(left.shift());
        }
        else{
            empty.push(right.shift());
        }
    }
    return[...empty,...left,...right];
}
let arr=[34,23,11,2,45,15];
console.log(merge(arr));
             