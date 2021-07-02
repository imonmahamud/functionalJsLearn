var arr=[4,5,8,6,2,5]
function cbf(value){
    console.log(value)
}

arr.forEach(cbf)

function caller(){
    return function(name){
        return 'Caller calling you '+name

    }
}
var x=caller()('Mahamud Hasan Imon')
x