let item =  [2,5,"sweet",false,45];

//Array methods
item.push(62);
console.log(item);
item.unshift(6.5);
console.log(item);
item.pop();
console.log(item);
item.shift();
console.log(item);

let num  =[1,9,34,12,4, 25,30];

//given an array of x element,return an array with each element in x multiplied by 2
const result = num.map(
    (item)=>{
        return item*2
    }

)
console.log(result);
    let a =[1,2,3];
    let b =[4,5,6];
    let joined1=a.concat(b);
    console.log({joined1});

    //spread operator
    //distructuring
    let c=[1,40, ...a];
    console.log({c});
    let [z,x, ...e]=c
    console.log({z});
    console.log({x});
    console.log({e});
    


