let current = 0; // 当前页面
let target = 0; // 目标页面
let ease = 0.075; // 缓动系数

let windowWidth, containerHeight, imageHeight, skewDiff;

const container = document.querySelector('.container');
const images = Array.from(document.querySelectorAll('.img_wrap'));

// 图片 url
images.forEach((image, index) => {
    image.style.backgroundImage = `url(./assets/${index + 1}.jpeg)`;
    // image.style.backgroundImage = `url(./assets/1.jpeg)`;
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
    // 图片高度  = 容器高低 /  (如果 窗口宽度 > 768, 图片数量 / 2, 否则 图片数量 ) 
    imageHeight = containerHeight / (windowWidth > 768 ? images.length / 2 : images.length);

    // body 高度 = 图片高度 * 图片数量
    // document.body.style.height = `${containerHeight}px`;

    // 平滑滚动
    smoothScroll()
}

function smoothScroll() {
    // 计算滚动差值, 然后取整
    current = lerp(current, target, ease);
    current = parseFloat(current.toFixed(2)); // 保留两位小数
    target = window.scrollY;

    // console.log(current, target, current / imageHeight);

    setTransform(container, `translateY(-${current}px)`);

    updateImage()

    // 持续渲染
    requestAnimationFrame(smoothScroll);
}
setupAnimation()


function updateImage() {
    let ratio = current / imageHeight; // 滚动比例
    let intersectioRationIndex, intersectioRatioValue; // 交叉比例

    images.forEach((image, index) => {

        // console.log(image, index);

        intersectioRationIndex = windowWidth > 768 ? parseInt(index / 2) : index;
        intersectioRatioValue = ratio - intersectioRationIndex;

        // 设置变形
        setTransform(image, `translateY(${intersectioRatioValue * 100}px)`);
    });

}
