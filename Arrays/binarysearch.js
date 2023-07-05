// //Given an array of numbers ,search for the following target and return -1 if not found
// //else index
// function binary (num, target){
//     let leftIndex=0;
//     let rightIndex=num.length -1;
//     console.log("left1",leftIndex)
//     console.log("right1",rightIndex)
//     while(leftIndex<=rightIndex){
//         console.log("left2",leftIndex)
//         console.log("right2",rightIndex)

//         let middle =Math.floor((leftIndex+rightIndex)/2);
//         if(arr[middle]===target){
//             return middle
//         }
//         else if(arr[middle] >target){
//             rightIndex=middle -1

//         }else{
//             leftIndex=middle +1
//         }
//     }
//     return -1;
// }
// let num=[1,3,6,8,9,56,89];
// let targe=9;
// console.log(binary(num, targe))   

function binary(arr,target){
    if(arr.length<=1){
        return arr
    }
    let leftindex=0;
    let rightIndex=arr.length-1;
    while(leftindex<=rightIndex){
        let middle=Math.floor((leftindex+rightIndex)/2);
        if(arr[middle]===target){
            return middle
        }
        else if(arr[middle]>target){
            rightIndex=middle-1

        }
        else{
            leftindex=middle+1
        }

        
    }
    return null
   
}
let arr=[4,6,12,34,45,68,89];
let target=45;
console.log(binary(arr,target));