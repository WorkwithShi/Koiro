
window.addEventListener('scroll',()=>{
    if (window.scrollY>100){
        document.body.classList.add('scrolled');
    }
    else {
        document.body.classList.remove('scrolled');
    }
});


/*window.addEventListener('scroll',()=>{
    const content = document.querySelector('.sliding');
    const toriLine = document.querySelector('.tori-line');
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.body.scrollHeight;

    const scrollPercent = scrollY/(docHeight-windowHeight);

    content.style.transform = `translateY(${-scrollY*0.5}px)`;
    toriLine.style.width = `${scrollPercent*100}%`;
});*/

window.addEventListener('scroll',()=>{
    const scollPercent = window.scrollY/(document.body.scrollHeight-window.innerHeight);

    document.querySelector('.tori-line').style.width = `${scollPercent*100}%`;

});