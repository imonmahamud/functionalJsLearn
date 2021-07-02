function sayName(name) {
  return "Hello " + name;
}

//Stored in a variable

var hello = sayName;
/* var result =hello('Mahamud Hasan Imon')
result */
var anotherHello = hello;
console.log(anotherHello("MH IMon"));

var arr = [1, 2, 3];
arr.push(sayName);

var person = {
  name: "MH Imon",
  sayName: sayName,
  print: function () {
    console.log("Hi i am here");
  },
};
console.log(person);
person;

var sum =
  10 +
  (function () {
    return 20;
  })();
sum;

function wow(name, fun) {
  return fun(name);
}

var result = wow("HM Nayem", sayName);
result;

function base(b) {
  return function (n) {
    var result = 1;
    for (var i = 0; i < b; i++) {
      result *= n;
    }
    return result;
  };
}
var res = base(10)(2);
res;
