'use strict';

// const now = new Date();

// console.log(now.setHours(18));
// console.log(now);



// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getHours());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`Цикл отработал за ${end - start} миллисекунд `);

const now = new Date('2016-11-15');
new Date.parse('2020-12-11');
console.log(now);