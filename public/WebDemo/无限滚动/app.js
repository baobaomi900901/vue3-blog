const menu = document.querySelector('.menu'); // 获取元素 menu
const items = document.querySelectorAll('.menu-item'); // 获取元素 menu-item

// 用于存储每个 item 的位置
// 克隆每个 item
let clones = [];

// 用于存储每个 item 的位置
let disableScroll = false; // 禁用滚动 

let scrollHeight = 0; // 滚动高度

let scrollPos = 0; // 滚动位置

let clonesHeight = 0; // 克隆元素的高度


// 获取滚动位置
function getScrollPos() {
    return menu.scrollTop; // 返回元素的垂直滚动位置。
}

// 设置滚动位置
function setScrollPos(pos) {
    menu.scrollTop = pos; // 设置元素的垂直滚动位置。
}

// 获取克隆元素的高度
function getClonesHeight() {
    clones.forEach((clone) => {
        // console.log(clonesHeight);
        clonesHeight += clone.offsetHeight; // 返回元素的高度 累加。
    });

    return clonesHeight;
}

// 重新计算
function reCalt() {
    scrollPos = getScrollPos();// 获取滚动位置
    scrollHeight = menu.scrollHeight; // 元素内容的高度，包括在屏幕上不可见的内容
    clonesHeight = getClonesHeight();

    if (scrollPos <= 0) {
        setScrollPos(1); // 初始设置为1px以启用向上滚动
    }
}
// console.log('@', scrollPos);
// 滚动更新
function scrollUpdate() {
    if (!disableScroll) {
        scrollPos = getScrollPos();
        console.log("@@", clonesHeight + scrollPos, scrollHeight);
        if (clonesHeight + scrollPos > scrollHeight - 1) {
            // 滚动到底部
            // 当我们到达底部时，滚动回顶部
            console.log('到底部', clonesHeight, scrollPos, clonesHeight + scrollPos, scrollHeight);
            setScrollPos(1)
            disableScroll = true;
        }
        else if (scrollPos <= 0) {
            // 滚动到顶部
            // 当我们到达顶部时，滚动到底部
            // console.log("@@@", scrollPos);
            setScrollPos(scrollHeight - clonesHeight);
            disableScroll = true;
            console.log('到顶部', scrollHeight, scrollPos);
        }
    }
    if (disableScroll) {
        // 禁用滚动一帧
        // 短时间内禁用滚动跳转以避免闪烁
        window.setTimeout(() => {
            disableScroll = false;
        }, 40);
    }
}

function onLoad() {

    // 克隆每个 item
    items.forEach((item) => {
        // 克隆每个 item
        let clone = item.cloneNode(true);
        menu.appendChild(clone);
        // clone.classList.add('clone');
        clones.push(clone);
    }
    );

    // clones = document.querySelectorAll('.clone');

    reCalt();

    // 监听滚动事件
    menu.addEventListener('scroll', () => {
        window.requestAnimationFrame(scrollUpdate);
    }, false);
    // 监听窗口大小变化
    window.addEventListener('resize', () => {
        location.reload();
        window.requestAnimationFrame(reCalt);
    }, false);
}

window.onload = onLoad;