function name(firstName,lastName,gender){
    var output
    if(gender==='male'){
        output ='Mr.'+firstName+' '+lastName
    }else if(gender==='female'){
         output ='Ms.'+firstName+' '+lastName
    }
    return output
}
var fullName = name('Marjan','Naher','female')
fullName

function example(){
    return {
        name:'Mahamud Hasan Imon',
        age:'24',
        skill:['Java','English','JavaScript'],
        print:function(){
            console.log('My name is: '+this.name+' My age is: '+this.age+' I have these skills: '+this.skill)
        }
    }
}
var obj=example()
obj.print()
