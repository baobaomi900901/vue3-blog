/*
    实现平滑滚动
*/
let current = 0; // 当前页面
let target = 0; // 目标页面
let ease = 0.01; // 缓动系数

let windowWidth, containerHeight, imageHeight, skewDiff;

const container = document.querySelector('.container');
const images = Array.from(document.querySelectorAll('.img_wrap'));

// 图片 url
images.forEach((image, index) => {
    image.style.backgroundImage = `url(./assets/${index + 1}.jpeg)`;
});

// 缓动函数, 起始值, 结束值, 缓动系数
function lerp(start, end, t) {
    return start * (1 - t) + end * t;
}

// 赋值函数, 设置变形; 元素, 变形值
function setTransform(element, transform) {
    element.style.transform = transform;
}

function setupAnimation() {
    windowWidth = window.innerWidth; // 获取窗口宽度
    containerHeight = container.getBoundingClientRect().height; // 获取容器高度

    // 平滑滚动
    smoothScroll()
}


function smoothScroll() {
    // 计算滚动差值, 然后取整
    current = lerp(current, target, ease);
    current = parseFloat(current.toFixed(2)); // 保留两位小数
    target = window.scrollY;
    console.log(current, target);

    setTransform(container, `translateY(-${current}px)`);

    // 持续渲染
    requestAnimationFrame(smoothScroll);
}

setupAnimation()
