// const timerId = setTimeout(function() {
//     console.log('Hello');
// },2000);




// const timerId = setTimeout(function(text) {
//     console.log(text);
// },2000, 'hello');




// const timerId = setTimeout(logger, 2000,);

// function logger () {
//     console.log('hello');
// }




// const btn = document.querySelector('.btn');

// let timerId,
//     i = 0;

//  btn.addEventListener('click', () => {
//     timerId = setInterval(logger, 500);
//  });
 
//  function logger () {
//      if (i === 3) {
//          clearInterval(timerId);
//      }
//      console.log('Hello');
//      i++;
//  }




// let id = setTimeout (function log () {
//     console.log('Hi');
//     id = setTimeout(log,500); 
// },500);

const btn = document.querySelector('.btn');

function myAnimation () {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);

    function frame () {
        if (pos === 300) {
            clearInterval(id);
    }  else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    } 
}

btn.addEventListener('click', myAnimation);



