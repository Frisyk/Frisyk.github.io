const hambuger = document.querySelector('.fa-bars');
const menuUp = document.querySelector('.nav');
const menuClose = document.querySelector('.fa-xmark');
const menu = document.querySelectorAll('.list');

hambuger.addEventListener('click', function show(){
    menuUp.classList.toggle('slide');
    hambuger.style.display = 'none';
    menuClose.style.display = 'block';   
})

function linkMove(){
    menuUp.classList.remove('slide');
    hambuger.style.display = 'block'
}
menu.forEach(n => n.addEventListener('click', linkMove));