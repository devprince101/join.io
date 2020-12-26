
const MyBtn = document.querySelector('#myButton');
const NavLinks = document.querySelectorAll('.nav_link');
const LogInBtn = document.querySelector('#top_button');
const hideBtn = document.querySelector('.x_button');
const secondBtn = document.querySelector('.second_btn')
const signUpBtn = document.querySelector('#top_button2');

// events listenners

//my navigation sides

MyBtn.addEventListener('click',()=>{
    document.body.classList.toggle('nav_open');
})
NavLinks.forEach(link =>{
    link.addEventListener('click',()=>{
        document.body.classList.remove('nav_open');
    })
})

//my loin and sign up pages
LogInBtn.addEventListener('click',()=>{
    document.body.classList.add('login_div');
})
signUpBtn.addEventListener('click',()=>{
    document.body.classList.add('signUp_div');
});
hideBtn.addEventListener('click',()=>{
    document.body.classList.remove('signUp_div');
});
secondBtn.addEventListener('click',()=>{
    document.body.classList.remove('login_div');
});


