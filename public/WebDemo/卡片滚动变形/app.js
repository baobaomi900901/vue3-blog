const container = document.querySelector('.container');

// 监视滚动条
window.onscroll = function () {
    // 滚动条滚动的距离
    container.style.left = `${-window.scrollY}px`;
}

// 当前位置
let currentPos = container.getBoundingClientRect().left;

const calLDistort = (e) => {
    let newPos = container.getBoundingClientRect().left;
    let diff = newPos - currentPos; // 差值
    let speed = diff * 0.15; // 加速度

    console.log('speed :>> ', speed);

    container.style.transform = `skewX(${speed}deg)`;

    // 更新当前位置
    currentPos = newPos;
    requestAnimationFrame(calLDistort);
}

calLDistort();