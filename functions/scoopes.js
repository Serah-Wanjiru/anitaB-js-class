let a=20; //Global variable -accessed everywhere

function add(b) {
    console.log(a+b);
    let c=30;//local variable -accessible in scoop difined
    console.log(a+b+c);
   
}
add(20)

function greet() {
    let hello="hey"
    function talk() {
        let greetings="hello there"
        console.log(`${hello} ${greetings}`);
        
    }
    talk()
    
}
greet()

