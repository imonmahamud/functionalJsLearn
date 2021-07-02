/* var arr=[34,21,45,6,29,38,55,67,10]

arr.sort(function(a,b){
   if(a>b){
       return -1
   }else if(a<b){
       return 1
   }else{
       return 0
   }
})
arr */

var people=[
    {
        name:'Mahamud hasan imon',
        age:25
    },
    {
        name:'Samia',
        age:25
    },
    {
        name:'Marjan',
        age:24
    },
    {
        name:'Anondi',
        age:21
    }
    
]

people.sort(function(a,b){
    if(a.name > b.name ) {
        return 1
    }
    else if(a.name < b.name ) {
        return -1
    }else{
        return 0
    }
})
people