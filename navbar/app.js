const burger = document.querySelector('#btn');
const ul = document.querySelector('nav ul');


burger.addEventListener('click', ()=> {
    ul.classList.toggle('show');
})