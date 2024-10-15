const c = document.querySelector("canvas");
const audio = document.querySelector("#audio");
const text = document.querySelector("#text");

let opt = {
    width: c.offsetWidth,
    height: c.offsetHeight,
    midY: c.offsetHeight / 2,
    points: 80,
    stretch: 10,
    sinHeight: 0,
    speed: -0.1,
    strokeColor: "black",
    strokeWidth: 1.5,
    power: false,
};
c.width = opt.width * 2;
c.height = opt.height * 2;
c.style.width = opt.width;
c.style.height = opt.height;

const ctx = c.getContext("2d");
ctx.scale(2, 2);

ctx.strokeStyle = opt.strokeColor;
ctx.lineWidth = opt.strokeWidth;
ctx.lineCap = "round";
ctx.lineJoin = "round";

let time = 0;
const render = () => {
    window.requestAnimationFrame(render);
    ctx.clearRect(0, 0, opt.width, opt.height);
    time += 1;
    ctx.beginPath();
    let increment = 0;

    for (i = 0; i <= opt.points; i++) {
        if (i < opt.points / 2) {
            increment += 0.1;
        } else {
            increment += -0.1;
        }

        const x = (opt.width / opt.points) * i;
        const y =
            opt.midY +
            Math.sin(time * opt.speed + i / opt.stretch) *
            opt.sinHeight *
            increment;
        ctx.lineTo(x, y);
    }

    ctx.stroke();
};
render();

// 点击控制播放
c.addEventListener("click", () => {
    opt.power = !opt.power;

    if (opt.power) {
        audio.play();
        gsap.to(opt, 1, {
            sinHeight: 4,
            stretch: 5,
            ease: Power2.easeInOut,
        });
        text.innerHTML = "- 👆 STOP -";
    } else {
        audio.pause();
        gsap.to(opt, 1, {
            sinHeight: 0,
            stretch: 10,
            ease: Power3.easeOut,
        });
        text.innerHTML = "- 👆 PLAY -";
    }
    console.log(opt.power === true ? "播放" : "暂停");
});

// 监听播放结束
audio.addEventListener('ended', () => {
    console.log('播音结束');
    audio.pause();
    gsap.to(opt, 1, {
        sinHeight: 0,
        stretch: 10,
        ease: Power3.easeOut,
    });
}, false);