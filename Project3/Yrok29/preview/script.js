const btns = document.querySelectorAll('button');

const deletee = (e) => {
 e.target.remove();
};

btns.forEach (item => {
    item.addEventListener('click', deletee);
});