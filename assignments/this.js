/* The for principles of "this";
* in your own words. explain the four principles for the "this" keyword below.
*
* 1. world or global bindings make "this" target a global scale and is generally advised               against. I'm sure there is a reason for it in certain circumstances.

* 2. implicit binding makes the .this reference the object that comes before the dot in a              function. Such as  [ myObject.aYellowThing. myObject ]  is now the target of "this"

* 3. new binding refers to when a constructor function the object that is created in that              instance. The key here is the work "new" before the constructor function                          const wes = new Person()


* 4. Explicit binding is for when you use the .call or .apply method. It is used to override what a constructor function is getting set to. 
     



*write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayMyName(name) {
    console.log(this);
    return name;
  }
  sayMyName("WJonke");


// Principle 2

// code example for Implicit Binding
const myObject = {
    phrase: 'Hello! ',
    sayHello: function(name) {
      console.log(`${this.phrase}My name is ${name}`);
      //console.log(this);
    }
  };

  myObject.sayHello('WJonke');



// Principle 3

// code example for New Binding
function Person(name) {
    this.greeting = 'Hello, my name is ';
    this.name = name;
    this.speak = function() {
      console.log(this.greeting + this.name);
    };
  }
  
  const wJonke = new Person('Wjonke');
  const someOneElse = new Person('Someoneelse')
  
  wJonke.speak();
  someOneElse.speak()


// Principle 4

// code example for Explicit Binding
//using the code from #3 this will reassign what is plugged into the constructor and 
//reverse the outputs

wJonke.speak.call(someOneElse); 
someOneElse.speak.apply(wJonke);