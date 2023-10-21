let searchBtn = document.querySelector('.search-icon');
let searchBar = document.querySelector('.search-bar-container');

window.onscroll=()=>{
    searchBar.classList.remove('active')
}

searchBtn.addEventListener('click',()=>{
    searchBar.classList.toggle('active')
});




let loginBtn = document.querySelector('.user-icon');
let loginBar = document.querySelector('.login-container');
let logincloseBtn = document.querySelector('.login-close');

loginBtn.addEventListener('click', ()=>{
    loginBar.classList.toggle('active')
});

logincloseBtn.addEventListener('click',()=>{
    loginBar.classList.remove('active')
})



let signUpBtn = document.querySelector('.Signup-btn');
let signUpBar = document.querySelector('.signup-container');
let signUpcloseBtn = document.querySelector('.signup-close');
let loginBarBtn = document.querySelector('.login-btn');
let SignUpComplete = document.querySelector('#Sign-up-complete');

signUpBtn.addEventListener('click',()=>{
    loginBar.classList.remove('active')
    signUpBar.classList.toggle('active')
});

signUpcloseBtn.addEventListener('click',()=>{
    signUpBar.classList.remove('active')
});

loginBarBtn.addEventListener('click',()=>{
    signUpBar.classList.remove('active')
    loginBar.classList.toggle('active')
});
