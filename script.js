// Script for navigation bar

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active'); // active is class that i have to create
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active'); // remove active class
    })
}
