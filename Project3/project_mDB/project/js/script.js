/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

let adv = document.querySelectorAll('.promo__adv img'),
    poster = document.querySelector('.promo__bg'),
    genre = document.querySelector('.promo__genre'),
    movieList = document.querySelector('.promo__interactive-list'),
    input = document.querySelector('.adding__input'),
    btn = document.querySelector('.button'),
    knopka =document.querySelector('.checkbox'),
    div = document.querySelector('.promo__interactive-item');

console.log(knopka);

let m =
    [

];


// btn.addEventListener('click', function (event) {
    
    
//     if (knopka.checked == true) {
//         alert('Добавлен любимый фильм');
//     } 
//     console.log(knopka.checked);

//     //  movieDB.movies.forEach ( item =>  {
//     //      console.log(item.length);
//     //   if (item.length >= 21) {
//     //      console.log(item + '...');
//     //   }
//     //  });
//      event.preventDefault();
//  });

adv.forEach ( item => {
    item.remove();
});

genre.textContent = "Драма";

poster.style.backgroundImage = 'url("img/bg.jpg")';

movieList.innerHTML = "";

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// let m = movieDB.movies.push(input);
// console.log(movieDB.movies);
// let dobavitElement = (e) => { e.target.movieDB.movies.push(input);

// };
// let dobavitElement = (e) => { e.target.movieDB.movies.push(input);

// };

btn.addEventListener('click', function (event) {
   movieDB.movies.push(input.value);

    console.log(movieDB.movies);

    movieDB.movies.forEach ( item =>  {
        console.log(item.length);
     if (item.length >= 21) {
        console.log(item + '...');
     }
    });
    if (knopka.checked == true) {
                alert('Добавлен любимый фильм');
            } 
            console.log(knopka.checked);
    event.preventDefault();
});
movieDB.movies.sort();







// console.log(movieDB.movies);

movieDB.movies.forEach ((films, i) => {
    movieList.innerHTML += ` <li class="promo__interactive-item">${i+1} ${films}
    <div class="delete"></div>
</li>
`;
});

