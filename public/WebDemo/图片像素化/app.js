const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const links = [...document.querySelectorAll('li')];

// 缓动函数
function lerp(start, end, t) {
    return start * (1 - t) + end * t;
}

let imgIndex = 0;
const images = [
    './assets/1.jpeg',
    './assets/2.jpeg',
    './assets/3.jpeg',
    './assets/4.jpeg',
    './assets/5.jpeg',
    './assets/6.jpeg'
]

let imgArr = [];

let mouse = {
    x: 0,
    y: 0
}
let current = {
    x: 0,
    y: 0
}


// 监测鼠标位置
window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
})

// 添加图片
images.forEach((image, index) => {
    let elImage = new Image(300);
    elImage.src = image;
    elImage.classList.add('project-image');
    document.body.append(elImage);
    imgArr.push(elImage)
})

// 绘制 canvas
let percent = 0;
let target = false; // 判断是否被悬停

function drawImage(index) {

    // 获取图片宽高
    let { width, height } = imgArr[index].getBoundingClientRect();

    // canvas 适配高清屏, window.devicePixelRatio 为设备像素比
    canvas.width = width * window.devicePixelRatio;
    canvas.height = height * window.devicePixelRatio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    // 关闭图片平滑处理
    ctx.webkitImageSmoothingEnabled = false;
    ctx.mozImageSmoothingEnabled = false;
    ctx.msSmoothingEnabled = false;
    ctx.imageSmoothingEnabled = false;

    if (target) { // 判断链接是否被悬停
        // console.log('hover');
        // 加速
        if (percent < 0.2) { // 缓慢加速
            // console.log('hover +');
            percent += .01;
        } else if (percent < 1) { // 逐渐加速
            // console.log('hover ++');
            percent += .1;
        }
    } else if (!target) {
        // console.log('out');
        if (percent > 0.2) { // 逐渐减速
            // console.log('ou --');
            percent -= .3
        } else if (percent > 0) { // 缓慢减速
            // console.log('ou -');
            percent -= .01;
        }
    }

    let scaledWidth = width * percent;
    let scaledHeight = height * percent;

    // console.log(scaledWidth, scaledHeight);


    // 绘制 与 清除 图片
    if (percent >= 1) {
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        ctx.drawImage(imgArr[index], 0, 0, width, height);
    } else {
        ctx.drawImage(imgArr[index], 0, 0, scaledWidth, scaledHeight);
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        if (canvas.width !== 0 && canvas.height !== 0) {
            ctx.drawImage(canvas, 0, 0, scaledWidth, scaledHeight, 0, 0, width, height)
        }
    }
}

for (let i = 0; i < links.length; i++) {
    // 鼠标悬停
    links[i].addEventListener('mouseover', () => {
        for (let j = 0; j < links.length; j++) {
            if (j !== i) {
                links[j].style.opacity = 0.2;
                links[j].style.zIndex = 0;
            } else {
                links[j].style.opacity = 1;
                links[j].style.zIndex = 3;
            }
        }
    })

    links[i].addEventListener('mouseleave', () => {
        for (let i = 0; i < links.length; i++) {
            links[i].style.opacity = 1;
        }
    })

    links[i].addEventListener('mouseenter', () => {
        imgIndex = i;
        target = true; // 鼠标悬停
    });

    links[i].addEventListener('mouseleave', () => {
        target = false; // 鼠标离开
    })
}

function animate() {
    // 缓动 处理
    current.x = lerp(current.x, mouse.x, 0.075);
    current.y = lerp(current.y, mouse.y, 0.075);
    let { width, height } = imgArr[imgIndex].getBoundingClientRect();
    canvas.style.transform = `translate3d(${current.x - (width / 2)}px, ${current.y - (height / 2)}px, 0)`;
    drawImage(imgIndex);
    window.requestAnimationFrame(animate);
}

animate()