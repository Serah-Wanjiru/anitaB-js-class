let success=true;
let promise=new Promise((resolve,reject)=>{
    if (success){
        resolve('i succeded')
    }
    else{
        reject('am still looking for a job')
    }
}).then(()=>{console.log('i will work hard')})
.catch(()=>{console.log('i will upskill')})
.finally(()=>{console.log('i am worthy');})
console.log({promise});

let promise2=true
let promisess=new Promise((resolve,reject)=>{
    if(promise2){
    resolve("i have already completed my assignment")
    }
    else{
        reject("i  will complete tomorrow")
    }
})
.then(()=>{console.log("i must finish today")})
 
.catch(()=>{console.log("i will work hard")})
.finally(()=>console.log("i will make it"))
    
