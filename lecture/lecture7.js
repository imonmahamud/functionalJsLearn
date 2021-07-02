// function host(){
//     console.log('I am host function')

//     return function(){
//         console.log('I am child');
//     }
// }
// var show=host()()

function greeting(msg){

    function ret(name){
        console.log(msg+' '+name)
    }
    return ret
}

var good=greeting('Good Morning')
var hello=greeting('Hello')

good('Mahamud Hasan imon')
hello('Twinkle cats')