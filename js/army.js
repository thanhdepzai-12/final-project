const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const btnopen = $('.button-rada');
const door1 =  $('.rada-door-1');
const door2 =  $('.rada-door-2');
const btnclose = $('.buton-close')
console.log(btnopen , door1 , door2);



btnopen.addEventListener("click",()=>{
    door1.style.transform = " translate(-100%)";
    door2.style.transform = " translate(100%)";
    btnopen.style.opacity ="0";
    btnclose.style.opacity ="1";
});

btnclose.addEventListener("click",()=>{
    door1.style.transform = " translate(0)";
    door2.style.transform = " translate(0)";
    btnopen.style.opacity ="1";
    btnclose.style.opacity ="0";
});