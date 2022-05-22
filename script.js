const hello = document.querySelector('.hello');
const add = document.querySelector('#add');
const remove = document.querySelector('#remove');
const toggle = document.querySelector('#toggle');
const check = document.querySelector('#check');
const addAll = document.querySelector('#addAll');
const removeAll = document.querySelector('#removeAll');


add.addEventListener('click', ()=> {
hello.classList.add('bd')
})

add.addEventListener('click', () => {
    hello.classList.add('bg');
})




remove.addEventListener('click', () => {
    hello.classList.remove('bg');
})



toggle.addEventListener('click', () => {
    hello.classList.toggle('bg');
})

check.addEventListener('click', () => {
   hello.innerText = hello.classList.contains('bg');
})  // показывает при нажатии check: true со вкл классом и false с отключ


addAll.addEventListener('click', () => { // Вкл 2 класса
    hello.classList.add('bg','bd');
})

removeAll.addEventListener('click', () => { //  Выкл 2 класса
    hello.classList.remove('bg','bd');
})