var arr=[5,9,1,2,3,4,5]

// var newArr=arr.filter(function(value){
//     return value%2==1
// })
// newArr

function myFilter(arr,callback) {
    var newArr =[]
    for(var i=0;i<arr.length;i++){
        if(callback(arr[i])){
            newArr.push(arr[i])
        }        
    }
    return newArr
}

var result = myFilter(arr,function(value){
    return value%2===0
})
result