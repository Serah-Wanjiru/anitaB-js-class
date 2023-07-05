const work=()=>{
    console.log('Let us work');
}


const reminder=()=>{
    console.log('please attend the meeting');
}
setTimeout(reminder,4000);
setInterval(work,1000)

const takebreak=()=>{
    console.log('please rest');
}
takebreak();