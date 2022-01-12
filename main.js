var header = document.querySelector('header');

var menu = document.querySelector('.menu');
var open_btn = document.querySelector('.menu-btn');
var close_btn = document.querySelector('.close-btn');

window.addEventListener('scroll', displayheader);
open_btn.addEventListener('click', addactive);
close_btn.addEventListener('click', removeactive);

function displayheader(){
    header.classList.toggle('sticky', window.scrollY > 0);
}

function addactive(){
    menu.classList.add('active');
}

function removeactive(){
    menu.classList.remove('active');
}