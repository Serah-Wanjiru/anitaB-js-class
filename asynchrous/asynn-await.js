let success=true;
let promise=new Promise((resolve,reject)=>{
        if (success){
        setTimeout(()=>{ resolve('i succeded')})
       
    }
    else{
        setTimeout(()=>{ reject('am still looking for a job')})
       
    }
}).then(()=>{console.log('i will work hard')})
.catch(()=>{console.log('i will upskill')})
.finally(()=>{console.log('i am worthy');})

const student=async()=>{
    let result=await promise;
    console.log({result});
}
student();
// console.log({promise});