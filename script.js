const menuBar = document.querySelector('#toggle');
const head = document.querySelector('header');
const cursor1 = document.querySelector('.cursor-1');
const cursor2 = document.querySelector('.cursor-2');


menuBar.addEventListener('click', ()=>{
    console.log("working");
    menuBar.classList.toggle('active');
    head.classList.toggle('show');
   
})

window.onmousemove = (e)=>{
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

// typed script

const typed = new Typed(".auto", {
    strings:["Front-end developer", "Web-developer", "Web designer"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
});