'use strict';

// function showThis(a,b) {
//     console.log(this);
//     function sum () {
//         console.log(this);
//         // return this.a + this.b;
//         // Что бы код сработал, достаточно использовать замыкание и убрать this
//         return a + b;
//         // Не важно где функция вызывается, контекст останется таким же, 
//         // даже если функция внутри функции
//     }
//      console.log(sum());
// }

// showThis(4,5);

// const obj = {
//     a: 20,
//     b: 15,
//     // sum: function() { // Это метод внутри объекта
//     //     console.log(this);
//     // }
//     sum: function() { 
//         function shout() {
//             console.log(this); // функция внутри метода не будет работать 
//                                // т.к не является методом объекта а остается функцией
//         }
//         shout();
//     }
// };

// obj.sum();

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`"Hello" + ${this.name}`);
//     };
// }

// let ivan = new User ('Ivan', 23);

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John '
// };

// sayName.call(user, 'Smith'); // Здесь мы новую функцию не вызывали
//                              // просто подвязали под нее конекст
// sayName.apply(user, ['Smith']);

// //bind создает новую функцию и подвязывает под нее конекст

// function count(num) {
//     return this*num;
// }
// const double = count.bind(2); // bind переходит в this
// console.log(double(3));
// console.log(double(13));

// // 1) Обычная функция без строго режима (use strict): this = window, 
// // но если use strict - undefined

// // 2) Контекст у методов обекта - сам объект
// // 3) this в конструкторах и класса - это новый экземпляр объекта
// // 4) Ручна привязлка this: call, aplly, bind

const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    console.log(this); // Конекст вызова происходит на самом элементе  
                       // на котором произошло событие (тоже самое что e.target)
                       // p.s Работает пока функция в классическом виде
  //this.style.backgroundColor = 'red'; //пример.
});

btn.addEventListener('click', (e)=> {
    //  console.log(this); // Конекст вызова происходит на самом элементе  
                       // на котором произошло событие (тоже самое что e.target)
                       // p.s Работает пока функция в классическом виде

                       //Если стрелочная, то у нее нет конекста вызова 
                       // и она обращается к undefined, если нет use strick, то к window

    //this.style.backgroundColor = 'red'; //пример.
        e.target.style.backgroundColor = 'red';
});

// У стрелочной функции нет своего конекста вызова.
// Она всегда его будет брать у своего родителя.

const obj = {
    num: 5,
    sayNumber: function () {
        const say = () => {
            console.log(this); // Стрелочная функция - say конекст берет у объекта.
            console.log(this.num); 
        };

        say();
    }
};

obj.sayNumber();

// const double = (a) => { // Классический вариант. Он тоже правильный, 
//                             //  но можно использовать сокращенный вариант.
//     return a * 2;
// };

const double = a =>  a * 2; // Если помещается в одну строку,
                            // то синтаксис можно оставить таким.

// const double = (a,b) =>  a * 2; // Если два аругмента то в скобки

console.log(double(4));