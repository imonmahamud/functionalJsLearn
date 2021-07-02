var arr=[1,2,3,4,5]

// arr.forEach(function(value){
//     console.log(value)
// })

function myForEach(arr,cb){
    for(var i=0; i<arr.length; i++){
        cb(arr[i])
    }
}

myForEach(arr,function(value){
   var result=value+2
   console.log(result)    
})
