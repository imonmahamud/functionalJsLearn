// var name="Twinkle cats"

// function sayHi(){
//     console.log('Hello '+name);
// }
// //console.dir(sayHi)
// sayHi();

function greeting(msg){

    function ret(name){
        console.log(msg+' '+name)
    }
    return ret
}

var hello=greeting('hello')
hello('Twinkle cats')