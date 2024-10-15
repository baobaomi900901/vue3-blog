const progressSection = document.querySelector('.progress-section');
const progressBar = document.querySelector('.progress-bar');
const progressNum = document.querySelector('.progress-num');

const section = Array.from(document.querySelectorAll('section'));

let scrollPercentage = Math.ceil(getScrollPercentage());
// console.log(progressSection, progressBar, progressNum);

progressNum.innerHTML = scrollPercentage + '%';
progressNum.style.color = `hsl(${scrollPercentage}, 100%, 50%)`;

let x, y;

// 获取滚动百分比
function getScrollPercentage() {
    return window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
}



function updateProgressBar() {
    console.log(getScrollPercentage());

    progressSection.style.top = `${y}px`;
    progressSection.style.left = `${x}px`;

    scrollPercentage = Math.ceil(getScrollPercentage());
    progressNum.style.color = `hsl(${scrollPercentage}, 100%, 50%)`;
    progressNum.innerHTML = scrollPercentage + '%';

    progressBar.style.height = scrollPercentage + '%';
    progressBar.style.background = `linear-gradient(0deg, hsl(${-scrollPercentage - scrollPercentage / 2}, 100%, 50%) 0%, hsl(${scrollPercentage}, 100%, 50%) 100%)`;

    section.forEach((sec, idx) => {
        scrollPercentage <= 15 ? sec.style.color = '#fff' :
            sec.style.color = `hsl(${scrollPercentage}, 100%, 50%)`;
    })


    requestAnimationFrame(updateProgressBar);
}

updateProgressBar()


// 鼠标移动时，进度条跟随鼠标移动
window.addEventListener('mousemove', (e) => {
    x = e.clientX;
    y = e.clientY;

})



