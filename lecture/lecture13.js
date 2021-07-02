var arr=[7,8,2,64,9,5]

// var sum = 0
// for (var i=0;i<arr.length;i++){
//     sum+=arr[i]
// }
// console.log(sum)

/* var result =arr.reduce(function(a,b){
    return a+b
})
result */

function myReduce(arr,callback,acc){
    var newArray=[]
    for(var i=0;i<arr.length;i++){
        acc=callback(acc,arr[i])
    }
    return acc
}
var result=myReduce(arr,function(a,b){
    return a+b
},1)
result