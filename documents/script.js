console.clear();
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slides');
const pre = document.querySelector('.left_btn');
const next = document.querySelector('.right_btn');
let index = 0;
slides[index].classList.add('active');
next.addEventListener('click', () => {
    slides[index].classList.remove('active');
    index = (index === slides.length - 1) ? 0 : index + 1;
    slides[index].classList.add('active');
    slider.style.transform = `translateX(-${index * 100}%)`;
})
pre.addEventListener('click', () => {
    slides[index].classList.remove('active');
    index = (index === 0) ? slides.length - 1 : index - 1;
    slides[index].classList.add('active');
    slider.style.transform = `translateX(-${index * 100}%)`;
})



const bars = document.querySelector('.bars');
const Xmark = document.querySelector('.x_mark');
const mobile = document.querySelector('.mobile_content');
const body = document.querySelector('body');

bars.addEventListener('click',()=>{
    mobile.style.transform = `translateY(0%)`;
    mobile.style.boxShadow = `0 0 20px 600px #00000077`;
    body.style.height = `100vh`;
    body.style.overflow = `hidden`;
})

Xmark.addEventListener('click',()=>{
    mobile.style.transform = `translateY(-100%)`;
    body.style.height = `auto`;
    body.style.overflow = `visible`;
    mobile.style.boxShadow = `none`;
})

$(document).ready(function(){
    $('.all_items .tab_content:last-child').show();
    $('.tab_btns li:first-child').addClass('active');
    $('.tab_btns li').click(function(){
        index2 = $(this).index();
        $('.tab_btns li').removeClass('active');
        $('.all_items .tab_content').hide();
        $(this).addClass('active');
        $('.all_items .tab_content').eq(index2).show();
    })
})