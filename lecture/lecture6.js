/* function hello(name){
    print(name)
    print('something else')
}

function print(args){
    console.log(args)
}

hello('Mahamud Hasan Imon') */

/* function hello(name,print){
    print(name)
}
hello('Mahamud Hasan Imon',function(name){
    console.log('Hello '+name)
})
hello('Marjan Naher',function(name){
    console.log('Hi How are you '+name+'?')
})
hello('Sarjana Muskan',function(name){
    console.log('Length of '+name+' is '+name.length)
}) */
/* var me={
    name:'Mahamud Hasan imon',
    age:16,
    email:'imonmahamud495@gmail.com'
}

function printMySelf(person,callback){
    console.log('Person: '+person.name+ '('+person.age+')')
    if(person.age>=18){
        callback(person.email)
    }
    else{
        console.log('you are too little....')
    }
}
printMySelf(me,function(email){
    console.log('Email send to '+email);
}) */


function print(data,callback1,callback2){
    console.log('Original Data: '+data);
    callback1(data);
    callback2(data)
}

print('Twinkle cats is awesome for beginners',
function(data){
    console.log(data.toUpperCase());
},
function(data){
    console.log(data.toLowerCase());
    console.log('Length: '+data.length)
})