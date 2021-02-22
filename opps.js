//object orinted javascript
class Circle{
  //this is contructor function
  constructor(radius,pos){
   this.pos=pos;
   this.radius=radius
  }
  //the methods
  method(){
      console.log(this);
      console.log(`${this.pos}`);
   }
}

const circle=new Circle(50,30)
// circle.method()
// Circle["property"]="this is a squere bracket incerted"
// console.log(Circle);

//oject
const mobile={
    ram:3
}

mobile["name"]="samsung"
mobile[3]="this is a number property"
mobile.color="red"
const id="thisIsAsecreatId"
mobile[id]=true

// console.log(mobile);


//this is a constructor function
function Person(name,age){
    this.name=name,
    this.age=age
    
   this.gretting=function (name){
    console.log(`welcome ${name}`);
    }
 
}

const person=new Person("mitu")
person["sayName"]=function(name){console.log(`my name is ${name}`)}
person.gretting('sakib')
console.log(Person);