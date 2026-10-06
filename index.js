/*  q2*/

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log(`${this.name} ${this.age}`);
};

function Employee(name, age, employeeId, position) {
  Person.call(this, name, age); 
  
  this.employeeId = employeeId;
  this.position = position;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee; 

Employee.prototype.greet = function(){
  console.log(`${this.employeeId} ${this.position}`);
};

const person1 = new Person("ali", 25);
const person2 = new Person("karam", 21);

const emp1 = new Employee("sami", 30, 101, "Developer");
const emp2 = new Employee("mohammad", 20, 10, "software");
const emp3 = new Employee("salam", 30, 50, "engeneering");

console.log(person1);
console.log(person2);
console.log(emp1);
person1.greet(); 
person2.greet();
emp1.greet(); 
emp2.greet();
emp3.greet();

/*  q3*/

const myarray = new Array(50); 

for (let i = 0; i <= 49; i++) {
  myarray[i] = "student " + (i + 1); 
}

console.log(myarray); 
const boyarray = new Array(25);
for(let j = 0; j < boyarray.length; j++){
  boyarray[j] = "student " + (j + 1); 
}
console.log(boyarray);

const girlarray = new Array(25);
for(let y = 0; y < girlarray.length; y++){
  girlarray[y] = "student " + (y + 26);
}
console.log(girlarray);

const combine = boyarray.concat(girlarray);
console.log(combine);
combine.sort();
console.log(combine);
combine.reverse();
console.log(combine);

const check = combine.includes("student 20");
console.log(check);
const check2 = combine.includes("ali");
console.log(check2);

combine.forEach((student, index) => {
    console.log(`${student} in ${index}`);
});

/*  q4*/

const objarr = new Array(50);
for(let o = 0; o < objarr.length; o++){
  objarr[o] = {
    id: 100 + (o + 1),
    name: "student " + (o + 1),
    grade: Math.floor(Math.random() * 51) + 50
  };
}

console.log(objarr);
objarr.splice(-4, 4, 
  { id: 123, name: "ali", grade: 99 },
  { id: 931, name: "hasan", grade: 59 },
  { id: 921, name: "sarah", grade: 98 },
  { id: 213, name: "aya", grade: 95 }
);
const slicearry= objarr.slice(47,50)
console.log(slicearry);
objarr.sort(function(a,b){


  return (b.grade-a.grade)
})
console.log(objarr);