'use strict';

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
// const circile = document.getElementClassName('circile');
const hearts = document.querySelectorAll('heart');
const heart = document.querySelector('.heart');

heart.onclick = function () {
    heart.remove();
};