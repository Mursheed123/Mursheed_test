// let user = {
//     "name ad": "Anar",
//     age: 28
// }

// user["name ad"] = "Vasif"

// user.adress = "Hesen Eliyev";

// delete user.age;

// user["phone number"] = "+994502782268"

// console.log(user);

// console.log(user["phone number"]);

// let surname = "Surname";

// user[surname] = "Abishov";

// console.log(user);

// user.__proto__ = 5;

// alert(user.__proto__)


// function createObject(name,age) {
//     return{
//          name,
//          age
//     }
// }

// let user = createObject("Anar","28");

// console.log(user);

// let user = {
//     name: "Anar",
//     age: 28,
// }

// if ("name" in user) {
//     console.log("var")
// } else {
//     console.log("yoxdu")
// }

// if (user.name !== undefined) {
//     console.log("var")
// } else {
//     console.log("yoxdu")
// }



// let codes = {
//     "49": "Германия",
//     "41": "Швейцария",
//     "44": "Великобритания",
//     // ..,
//     "1": "США"
//   };
  
// console.log(codes)

//   for (let code in codes) {
//     alert(code); // 1, 41, 44, 49
//   }

// let aaa = "Abishov";

// let bbb = aaa;

// bbb = "Memmedov"

// console.log(aaa);
// console.log(bbb)

// let a = {
//     name: "Anar",
// }

// let b = a;

// b.name = "Vasif"

// console.log(a.name);
// console.log(b.name);

// console.log(a === b);

// let q = {};
// let w = {};
// console.log(q==w);


// const user = { 
//     name: "Anar",
// } 

// user.name = "Vasif";

// user = {
//     name: "Vasif"
// }


// console.log(user)


// let obj = {
//     let: 1,
//     var: 2,
//     for: 3,
//     function: 4,
// }

// console.log(obj.let + obj.var + obj.for + obj.function)


// let user = {
//     name: "Anar",
//     surname: " Abishov",
//     age: 28,
// }

// for (const item in user) {
//     console.log(item);
//     console.log(user[item])
// }


// let codes = {
//     "49": "Германия",
//     "41": "Швейцария",
//     "44": "Великобритания",
//     "1": "США"
//   };
  
//   for (let code in codes) {
//     console.log(code); 
//   }


// let user = {
//     name: "John",
//     surname: "Smith",
//     a: "aaa"
//   };
//   user.age = 25; // добавим ещё одно свойство
  
//   // не целочисленные свойства перечислены в порядке создания
//   for (let prop in user) {
//     console.log( prop ); // name, surname, age
//   }


// let message = "Hello!";
// let phrase = message;

// phrase = "salam"
// console.log(phrase,message);

// let a = {
//     name: "Anar"
// }

// let b = a;

// b.name = "Vasif";

// console.log(b,a)


// let a = {};
// let b = {};

// console.log(a === b)

// let c = {};
// let d = c;

// console.log(c == d)


// const a = {
//     name: "Anar",
// }
// a.name = "Anar+"
// a.surname = "Abishov";
// console.log(a)


// let user = {
//     name: "John"
//   };
  
//   user = {
//     nameeee: "Peteee"
//   };

// console.log(user)

// let a = {
//     name: "Anar",
//     age: 28,
// }

// let b = {};

// for (const item in a) {
//       b[item] = a[item]
//     console.log(a[item])
// }

// console.log(b)

//////////////////////////////

// let a = {
//     name: "Anar"
// }

// let b = {
//     surname: "Abishov"
// }

// let c = {
//     age: 28
// }

// Object.assign(a,b,c)

// console.log(a)

// let a = {
//     name: "Anar"
// }

// let b= {
//     surname: "Abishov"
// }

// Object.assign(a,b,{age: 28, name: "Vasif"});

// console.log(a)

/////////////////////////////////

// let a = {
//     name: "Anar",
//     surname: "Abishov",
//     phone: {
//         mobile: "0502782268",
//         home: "0124304598"
//     }
// }

// let b = Object.assign({},a);

// b.age = 28;
// b.name = "Vasif";
// b.phone.mobile++
// console.log(a.phone === b.phone)
// console.log(a)
// console.log(b)


// var objects = [{ 'a': 1 }, { 'b': 2 }];
 
// var deep = _.cloneDeep(objects);
// console.log(deep[0] === objects[0]);


// let a = {
//     name: "Anar",
//     surname: "Abishov",
//     phone: {
//         mobile: "0502782268",
//         home: "0124304598"
//     }
// }
// let b = _.cloneDeep(a);
// b.age = 28;
// b.name = "Vasif";
// b.phone.mobile++;
// console.log(a)
// console.log(b)

// let user = {
//     name: "John",
//     surname: "Smith"
// }

// user.name = "Pete";
// delete user.name
// console.log(user)


// function isEmpty(obj) {
//     for (const item in obj) {
//         return console.log("doludu");
//     }
//     return console.log("boshdu");
// }

// let user = {
// }

// isEmpty(user)




// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }


//   function objHesablama(obj) {
//       let sum = 0;
//       for (const item in obj) {
//         sum = sum + obj[item]
        
//       }
//      console.log(sum)
//   }

//   objHesablama(salaries)



// до вызова функции
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };
  

// function multiplyNumeric(obj) {
//     for (const item in obj) {
//         if (typeof(obj[item]) == "number") {
//             obj[item] = obj[item] * 2   
//         }
//     }
//     console.log(obj)
// }

// function multiplyNumeric(obj){
//     for(let key in obj){
//         if(typeof obj[key] === 'string')
//         break;
//         obj[key] *= 2;
//     }
//     console.log(obj)
// }

// multiplyNumeric(menu);
  
//  // после вызова функции
// menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
//  };


// let a = new Object({surname: "Abishov"});

// console.log(a)


// let a = {
//     name: "Anar"
// }

// // a = null
// let b = a;
// a = null;
// b = null;
// console.log(a)
// console.log(b)


// let user = {
//     name: "Anar",
//     surname: "Abishov",
// }

// let id = Symbol("id");

// user[id] =1; 

// console.log(user)

// for (const key in user) {
//    console.log(user[key])
// }

// console.log(user)

// console.log(Object.keys(user))


// let a = Symbol("id");
// let b = Symbol("id");

// console.log(a.description)
// console.log(b.description)
// console.log(a == b)

// let c = Symbol.for("anar");
// let d = Symbol.for("anar");

// console.log(c.description);
// console.log(d.description);

// console.log(Symbol.keyFor(d));
// console.log(c === d);   


// let user = {
//     name: "Джон",
//     age: 30,
//     sayHi: function (params) {
//         alert("salam millet")
//     }
//   };
  
//   user.sayHi()

//   let user1 = {
//     name: "Anar",
//     age: 28,
//     sayHi() {
//         alert("salam Anar")
//     }
//   };
  
//   user1.sayHi()

// let user = {
//     name: "Anar",
//     age: 28,
//     sayHi(){
//         alert(`salam ${this.name}`)
//     }
// }

// console.log(user);
// user.sayHi()

// let admin = user;
// user = null; 
// console.log(user)
// console.log(admin)

// admin.sayHi(); 


// function sayHi() {
//     console.log(this);
//   }
  
//   sayHi(); // window

// "use strict"

// function sayHi() {
//     console.log(this);
//   }
  
//   sayHi(); // undefined
/////////////////////////////////////////

// let user = {
//     firstName: "Илья",
//     sayHi() {
//         this.firstName = "Anar";
//         console.log(this)
//       let arrow = () => {
//           this.firstName = "Vasif";
//           alert(this.firstName)
//           console.log(this)
//         };
//       arrow();
//     }
//   };
  
//   user.sayHi(); // Илья



// let group = {
//     title: "Our group",
//     students: ["Anar", "Tebriz", "Shahin",],
//     showList(){
//         console.log(this)
//         var vm = this;
//         this.students.forEach(function(item) {
//             console.log(vm.title + " " + item)            
//         })
  
//     }
// }
// group.showList()
// console.log(group.students)

// let a = new Object();
// a.name = "Anar";
// console.log(a);


// function User(name) {
//     console.log(this)
//     this.name = name;
// }

// let b = new User("Vasif");
// let c = new User("Kerem");
// let d = new User("Tofiq");

// console.log(b)
// console.log(c)
// console.log(d)


// const id = "nese"

// let user = {
//     [id]: 5,
//     name: "Anar"
// }

// console.log(user);

// let d = Symbol.for("anar");

// console.log(c.description);
// console.log(Symbol.keyFor(d));

// let user = new function() {
//     this.name = "Anar",
//     this.surname = "Abishov"
// }

// console.log(user)
// console.log(user)

// function User() {
//     console.log(new.target)
//     console.log("anar")
// }


// User();

// new User();


// function User(name) {
//     this.name = name
//     console.log(this);
//     return({
//         name: "Vasif",
//         surname: "Abishov"
//     })
// }

// let user = new User("Anar");

// console.log(user)


// function User(name) {
//     this.name = name
//     console.log(this);
//     return;
// }

// let user = new User("Anar");

// console.log(user)


// function User() {
//     console.log(this)
//     return 1;
// }

// console.log(User());

// let animal = {
//     eat: "nihih"
// }

// let rabbit = {
//     jump: true
// }

// rabbit.__proto__ = animal;
// console.log(rabbit.eat)

// rabbit.eat = "wwwwwwww";
// console.log(rabbit.eat)
// console.log(animal.eat)

// console.log(user.__proto__)


// let animal = {
//     eat: "yes",
//     age: 22
// }

// let rabbit = {
//     jump: true,
//     __proto__ : animal,
// }

// let nese = {
//     surname: "dsafasfsa",
//     __proto__:rabbit
// }

// console.log(rabbit)

// console.log(rabbit.eat)
// rabbit.__proto__.__proto__ = animal
// console.log(rabbit.__proto__.__proto__)
// console.log(nese)

// let user = {
//     name : "Anar"
// }

// class User {
//     constructor(name,surname) {
//         this.name = name;
//         this.surname = surname;
//         console.log(this)
//     }
// }
// let user = new User("nicat","eliyev");
// console.log(user)


// function User1(name,surname) {
//     this.name = name;
//     this.surname = surname
//     console.log(this)
// }
// let user1 = new User1("Anar","Abishov")
// console.log(user1)

// let obj = {}

// function A() { 
//     return obj
//  }
// function B() { 
//     return obj
// }

// let a = new A;
// let b = new B;

// alert( a == b ); // true

// function Calculator() {
//     this.read = function () {
//         this.first = +prompt("Reqemi yazin");;  
//         this.second = +prompt("Reqemi yazin");
        
//     }
//     this.sum = function() {
//         this.summa = this.first + this.second;
//         return this.summa;
//     }
// }
// let calculator = new Calculator();

// calculator.read();
// console.log(calculator.sum())


console.log("Anar")
