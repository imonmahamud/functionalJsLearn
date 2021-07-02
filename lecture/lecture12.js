var arr=[5,9,1,2,3,4,5]

/* var newArray=[]

for(var i=0;i<arr.length;i++){
    newArray.push(arr[i]+2)
}
newArray */

/* var newArray =arr.map(function(value){
    return value+2
})
newArray */

function myMap(arr,callback){
    var newArray =[]
    for(var i=0;i<arr.length;i++){        
        newArray.push(callback(arr[i]))
    }
    return newArray
}

var result=myMap(arr,function(value){
    return value-2
})
result