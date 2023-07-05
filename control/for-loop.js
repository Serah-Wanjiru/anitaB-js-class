let num=[10,20,3,8,7,9,12];
for(let i=0; i<=num.length-1; i++){
    console.log(i);
    console.log(num[i]);
}
// let medsd=[12,13,14,15,16,17];
// for (let b = 0; b < medsd.length; b++) {
//     const element = medsd[b];
//     console.log(b);
//     console.log(medsd[b]);
    
// }

for(let i =0; i<num.length; i++){
    console.log({"break":num[i]});
    if(i===4){
        break;
    }
}




for(let i =0; i<num.length; i++){
  
    if(i===4){
        continue;
    }
    console.log({"continue":num[i]});
}
// let names=[1,2,3,4,5,6,7,8];
// for (let d = 0; d < names.length; d++) {
//     const element = names[d];
//     console.log(d);
//     console.log(names[d]);
    
// }

// for (let d = 0; d< names.length; d++) {
//     console.log({d});
//     if (d===3) {
//     break;
        
//     }
   

    
// }
// for (let d = 0; d< names.length; d++) {
//     console.log({d});
//     if (d===3) {
//     continue;
        
//     }
   

    
// }


// // let nam=[1,2,3,4,5,6,7,8];
// // nam.forEach(element => {
// //     console.log(element*2);
    
// // });
// // let namew=[1,2,3,4,5,6,7,8];
// // let v=namew.filter(male=>male%2==0)
// // console.log(v);

// let nui=[1,2,3,4,5,6,7,8];
// nui.map(x=> {
//     console.log(x*3);
// })

// let nambers=["marty","mentorship","jenejane","cat","dog"];
// let j=nambers.filter(james)
// function james(value) {
// return value.length>5;
// console.log(j);
    
// }
// console.log(j);
let pep=[1,2,3,4,5,6,7,8,9,10]
for (let l = 0; l < pep.length; l++) {
    console.log(l);
    console.log(pep[l]);
    
    
}

    for (let l = 0; l < pep.length; l++) {
        console.log({"break":pep[l]});
        if (l===3) {
        break
           
    }
  
}
let b=[56,12,34,365,78,76,54]
for (let p = 0; p < b.length; p++) {
    console.log(p);
    console.log(b[p]); 
    
}
for (let p = 0; p < b.length; p++) {
   console.log({"break":b[p]});
   if(p===4)
   break
    
}

    

for (let p = 0; p< b.length; p++) {
   
    if(p===4){
        continue;

    }
   
    console.log({"continue":b[p]}); 
 }
 




