'usestrick';

const btns = document.querySelectorAll('button');

// // console.log(btns[0].classList.length);
// // console.log(btns[0].classList.item(0));
// console.log(btns[1].classList.add('red'));

// if (btns[1].classList.contains('red')) {
//     console.log('red');
// }

btns[0].addEventListener('click', () => {
    // if (btns[1].classList.contains('red')) {
    //     btns[1].classList.remove('red');
    // } else {
    //     btns[1].classList.add('red');
    // }
    btns[1].classList.toggle('red');
});
asdf