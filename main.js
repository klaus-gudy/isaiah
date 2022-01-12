var header = document.querySelector('header');

window.addEventListener('scroll', displayheader);

function displayheader(){
    header.classList.toggle('sticky', window.scrollY > 0);
}