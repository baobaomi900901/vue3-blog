<template>
  <div class="home relative">
    <canvas class="canvas"></canvas>
    <div id="overlay-light" class="overlay"></div>
    <div id="overlay-dark" class="overlay"></div>
    <div class="content">
      <div class="placeholder"></div>
      <div class="nav-box">
        <div class="nav row">
          <div class="col">
            Project name <br />
            项目名称
          </div>
          <div class="col">
            Highlights <br />
            亮点
          </div>
          <div class="col">
            work <br />
            职责
          </div>
          <div class="col">
            company <br />
            公司/甲方
          </div>
          <div ref="time" class="col col-time" @click="changeTime">
            time <br />
            时间 ( ↓ )
          </div>
        </div>
        <div class="divider nav-divider"></div>
      </div>
      <div ref="rows" class="rows">
        <Row
          :projectName="'沃达丰移动端概念设计'"
          :hightLights="'巴塞罗那电信展、ChatBot'"
          :work="'UI、UE、动效'"
          :company="'Huawei、Vodafone'"
          :time="'2016'"
          :url="'vodafone-conceptual-design'"
        />
        <Row
          :projectName="'Agile Ul设计系统'"
          :hightLights="'电信运营商中台、IF Design Award'"
          :work="'UE'"
          :company="'Huawei'"
          :time="'2017'"
          :url="'agile-ui'"
        />
        <Row
          :projectName="'HKT 数字化改革'"
          :hightLights="'动效、创意代码'"
          :work="'UI、动效'"
          :company="'Huawei、HKT'"
          :time="'2017'"
          :url="'HKT-motion-design'"
        />
        <Row
          :projectName="'UI Lego'"
          :hightLights="'可视化Web工具'"
          :work="'UE'"
          :company="'Huawei'"
          :time="'2018'"
          :url="'UI-Lego'"
        />
        <Row
          :projectName="'iSlace 移动端体验升级'"
          :hightLights="'MVP、协同办公'"
          :work="'UE'"
          :company="'Huawei'"
          :time="'2019'"
          :url="'islace-mobile'"
        />
        <Row
          :projectName="'四格互联设计系统'"
          :hightLights="'组件样式代码重构'"
          :work="'UE、前端开发(CSS)'"
          :company="'SEGI'"
          :time="'2020 ~ 2022'"
          :url="'segi-design-system'"
        />
        <Row
          :projectName="'模板市场'"
          :hightLights="'将设计稿转译成模板代码'"
          :work="'UE、前端开发(CSS)'"
          :company="'SEGI'"
          :time="'2020 ~ 2022'"
          :url="'segi-template-market'"
        />
        <Row
          :projectName="'CMS 系统'"
          :hightLights="'独立开发前后端、全栈设计'"
          :work="'UE、前端开发'"
          :company="'SEGI'"
          :time="'2021'"
          :url="'document-system'"
        />
        <Row
          :projectName="'数据可视化平台'"
          :hightLights="'数据大屏、低代码编辑器'"
          :work="'UE、前端开发(cavans)'"
          :company="'SEGI'"
          :time="'2021 ~ 2022'"
          :url="'visualized-data-platform'"
        />
        <Row
          :projectName="'客用运载系统'"
          :hightLights="'设计赋能产品'"
          :work="'UE'"
          :company="'SEGI'"
          :time="'2021'"
          :url="'IoT'"
        />
        <Row
          :projectName="'重新设计算费中心'"
          :hightLights="'设计赋能产品'"
          :work="'UE'"
          :company="'SEGI'"
          :time="'2022'"
          :url="'billing-center'"
        />
        <Row
          :projectName="'Glaze Studio官网设计'"
          :hightLights="'海外项目、网页全栈设计'"
          :work="'全栈设计'"
          :company="'私人、Glaze'"
          :time="'2023'"
          :url="'glaze'"
        />
      </div>
      <div class="scroll-prompt">
        <div class="divider"></div>
        <span class="scroll-prompt-text"> 🖱 Scroll Down 👆🏻</span>
      </div>
      <div class="introduce-box">
        <div class="introduce">
          <div class="introduce-title ic">MobyTang.</div>
          <div class="introduce-content ic">
            我是一个灵活的多功能(Design+Code)设计师，有丰富的交互设计、动效、前端动画实现经验；
          </div>
          <div class="introduce-content ic">
            <span> 目前正在从事 " </span>
            <a
              href="https://www.notion.so/246c3e8a9ae240e092bab74c3a2e7678"
              target="_blank"
              class="text-yellow-500 underline hover:text-dark-blue font-bold"
              >设计资产数字化</a
            >
            <span>🔍" 与 "</span>
            <a
              href="https://www.mobytang.com/#/play"
              target="_blank"
              class="text-yellow-500 underline hover:text-dark-blue font-bold"
              >创意代码</a
            >
            <span>🔍" 的工作。</span>
          </div>
        </div>
      </div>
      <div class="marquee">
        <span class="span1">
          UI Design ↗ Interaction Design ↗ Motion Design ↗ Web development
          ↗&nbsp;
        </span>
        <span class="span2">
          UI Design ↗ Interaction Design ↗ Motion Design ↗ Web development
          ↗&nbsp;
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
// 引入 gsap
import { gsap } from "gsap";
// 引入图片像素化
// import ImagePixel from "../hooks/ImagePixel";
import image1 from "../assets/img/vodafone.jpg";
import image2 from "../assets/img/agile-ui.jpg";
import image3 from "../assets/img/HKT.png";
import image4 from "../assets/img/ui-lego.png";
import image5 from "../assets/img/iSlace.jpg";

import image6 from "../assets/img/Design-system.png";
import image7 from "../assets/img/Template-market.jpg";
import image8 from "../assets/img/wordpress.jpg";
import image9 from "../assets/img/dataview.jpg";
import image10 from "../assets/img/Iot-cover.png";
import image11 from "../assets/img/redesing.png";
import image12 from "../assets/img/glaze.jpg";

import Row from "../components/Row.vue";
import MySwiper from "../components/MySwiper.vue";

import { useRouter } from "vue-router";
const router = useRouter();

const rows = ref(); // 原始数据
let oddRows = []; // 存储原始数据
let newRows = []; // 存储新数据

const time = ref();
let timeType = true;

const changeTime = () => {
  if (timeType) {
    time.value.innerHTML = `time <br /> 时间 ( ↑ )`;
    timeType = !timeType;
    rows.value.innerHTML = ""; // 清除数据
    newRows.forEach((item) => {
      rows.value.appendChild(item);
    });
  } else {
    time.value.innerHTML = `time <br /> 时间 ( ↓ )`;
    timeType = !timeType;
    rows.value.innerHTML = ""; // 清除数据
    oddRows.forEach((item) => {
      rows.value.appendChild(item);
    });
  }
};

defineProps({});

// 入场动画
function animeInput() {
  gsap.from(".ic", 2, {
    opacity: 0,
    y: 40,
    ease: "power3.inOut",
    delay: 0,
    stagger: {
      amount: 0.5,
    },
  });

  gsap.to("#overlay-dark", 3, {
    top: "-100%",
    ease: "power3.inOut",
    delay: 5,
  });
  gsap.from(".divider", 3, {
    scaleX: 0,
    ease: "power3.inOut",
    delay: 2,
    stagger: {
      amount: 1,
    },
    onComplete:() =>{
      let scrollPrompt = document.querySelector(".scroll-prompt");
      scrollPrompt.style.mixBlendMode = "unset";
      scrollPrompt.style.color = "#0a0a0a";
      let SPdivider = document.querySelector(".scroll-prompt .divider");
      SPdivider.style.background = "#0a0a0a";
    }
  });
  gsap.from(".row > .col, .scroll-prompt ", 2, {
    opacity: 0,
    y: 40,
    ease: "power3.inOut",
    delay: 3,
    stagger: {
      amount: 1.5,
    },
  });

  gsap.from(".marquee", 1, {
    bottom: "-5%",
    opacity: 0,
    ease: "power3.inOut",
    delay: 5.5,
    onComplete: () => {
      let rows = document.querySelector(".rows");
      rows.style.pointerEvents = "unset";
      rows.style.background = "#0a0a0a";
      let dividers = document.querySelectorAll(".rows .divider");
      dividers.forEach((divider) => {
        divider.style.background = "#444";
      });
    },
  });
}

// 像素化动画

onMounted(() => {
  document.body.style.overflow = "hidden";

  animeInput();
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");
  const links = [...document.querySelectorAll(".row")];
  const lines = [...document.querySelectorAll(".divider")];
  links.shift();
  lines.shift();

  // 缓动函数
  function lerp(start, end, t) {
    return start * (1 - t) + end * t;
  }

  let imgIndex = 0;

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
  ];

  let imgArr = [];

  let mouse = {
    x: 0,
    y: 0,
  };
  let current = {
    x: 0,
    y: 0,
  };

  // 监测鼠标位置
  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  // 添加图片
  images.forEach((image, index) => {
    let elImage = new Image(800);
    elImage.src = image;
    elImage.classList.add("project-image");
    document.querySelector(".home").append(elImage);
    // document.body.append(elImage);
    imgArr.push(elImage);
  });

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

    if (target) {
      // 判断链接是否被悬停
      // console.log('hover');
      // 加速
      if (percent < 0.2) {
        // 缓慢加速
        // console.log('hover +');
        percent += 0.01;
      } else if (percent < 1) {
        // 逐渐加速
        // console.log('hover ++');
        percent += 0.1;
      }
    } else if (!target) {
      // console.log('out');
      if (percent > 0.2) {
        // 逐渐减速
        // console.log('ou --');
        percent -= 0.3;
      } else if (percent > 0) {
        // 缓慢减速
        // console.log('ou -');
        percent -= 0.01;
      }
    }

    let scaledWidth = width * percent;
    let scaledHeight = height * percent;

    // // 绘制 与 清除 图片
    if (percent >= 1) {
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      ctx.drawImage(imgArr[index], 0, 0, width, height);
    } else {
      ctx.drawImage(imgArr[index], 0, 0, scaledWidth, scaledHeight);
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      if (canvas.width !== 0 && canvas.height !== 0) {
        ctx.drawImage(
          canvas,
          0,
          0,
          scaledWidth,
          scaledHeight,
          0,
          0,
          width,
          height
        );
      }
    }
  }

  for (let i = 0; i < links.length; i++) {
    // 控制 z-index
    links[i].addEventListener("mouseover", () => {
      for (let j = 0; j < links.length; j++) {
        if (j !== i) {
          links[j].style.opacity = 0.1;
          links[j].style.zIndex = -1;

          lines[j].style.opacity = 0.1;
          lines[j].style.zIndex = -1;
        } else {
          links[j].style.opacity = 1;
          links[j].style.zIndex = 10;

          lines[j].style.opacity = 1;
          lines[j].style.zIndex = 10;
        }
      }
    });

    // 离开
    links[i].addEventListener("mouseleave", () => {
      for (let i = 0; i < links.length; i++) {
        links[i].style.opacity = 1;
        lines[i].style.opacity = 1;
      }
    });

    links[i].addEventListener("mouseenter", () => {
      imgIndex = i;
      target = true; // 鼠标悬停
    });

    links[i].addEventListener("mouseleave", () => {
      target = false; // 鼠标离开
    });
  }

  function animate() {
    // 缓动 处理
    current.x = lerp(current.x, mouse.x, 0.075);
    current.y = lerp(current.y, mouse.y + 20, 0.075);
    let { width, height } = imgArr[imgIndex].getBoundingClientRect();

    canvas.style.transform = `translate3d(${current.x - width / 2}px, ${
      current.y - height / 2
    }px, 0)`;
    drawImage(imgIndex);
    window.requestAnimationFrame(animate);
  }
  animate();

  // oldRows
  // 获取 rows 里面的 row
  let rowItem = [...document.querySelectorAll(".row-box")];

  // 将 rowItem 与 dividers 交替放入 newRows 中
  for (let i = 0; i < rowItem.length; i++) {
    oddRows.push(rowItem[i]);
  }
  // newRows
  // 颠倒 rows 的顺序
  rowItem = [...rowItem].reverse();
  // 将 rowItem 与 dividers 交替放入 newRows 中
  for (let i = 0; i < rowItem.length; i++) {
    newRows.push(rowItem[i]);
  }
});
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Neue Montreal", sans-serif;
  overflow: hidden;
}

#overlay-light {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: white;
  z-index: 1;
}

#overlay-dark {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: black;
  z-index: 2;
}

.content {
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 6rem 4rem auto 40px 15vh 25vh;
  /* grid-template-columns: 40vw auto; */
}

.placeholder {
  /* 占两行 */
  /* grid-column: 1 / 3; */
}

.nav-box {
  /* grid-column: 1 / 3; */
}

.content > * {
  position: relative;
  z-index: 3;
  mix-blend-mode: difference;
  color: #fff;
}

.divider {
  width: 100%;
  height: 1px;
  background: #fff;
  margin: 0.2em 0;

  transition: background 0.2s ease-in-out;
}

.nav {
  text-transform: uppercase;
}

.nav-divider {
  margin-top: 1em;
  background: #fff;
}
.col-time {
  cursor: pointer;
}
.rows {
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
  /* 禁止点击事件 */
  pointer-events: none;

  transition: background 0.2s ease-in-out;

  /* grid-column: 1 / 3; */
}

.row {
  width: 100%;
  min-height: 24px;
  display: flex;
  padding: 0 2em;
}

.col + .col {
  margin-left: 1rem;
}

.row > .col {
  position: relative;
  flex: 1;
}

.row > .col:first-child {
  flex: 1.8;
}

.row > .col:nth-child(2) {
  flex: 1.4;
}

canvas {
  position: fixed;
  z-index: 3;
  pointer-events: none;
}

.scroll-prompt {
  font-size: 0.825rem;
  text-align: center;
  width: 100%;
  height: 32px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  mix-blend-mode: unset;

  /* grid-column: 1 / 3; */
}

.scroll-prompt .divider {
  margin: 0;
}

.scroll-prompt-text {
  width: 100%;
}

.introduce-box {
  display: flex;
  justify-content: center;
  /* align-items: start; */
  padding: 2rem 6rem 2rem 2rem;
}

.introduce {
  width: 100%;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  z-index: 10;
  mix-blend-mode: difference;
}

.introduce-title {
  font-size: 2rem;
  font-weight: 900;
}

.img-box {
  background: red;
  z-index: 3;
}

.marquee {
  position: fixed;
  bottom: 0;
  width: calc(100% + 100px);
  left: -100px;
  padding: 0.4em 0;
  white-space: nowrap;

  z-index: 3;
  background: #fff;
  display: flex;
  align-items: center;
}
.marquee span {
  font-family: "Monument Extended";
  text-transform: uppercase;
  font-weight: 600;
  color: #000;
  mix-blend-mode: normal !important;
  font-size: 5vh;
  text-transform: uppercase;
  /* animation: marquee-animation 80s linear infinite; */
  white-space: nowrap;
  animation: marquee-animation 60s linear infinite;
  animation-delay: -60s;
}

.marquee span:nth-child(2) {
  animation: marquee-animation2 60s linear infinite;
  animation-delay: -30s;
}

@keyframes marquee-animation {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes marquee-animation2 {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-200%);
  }
}

@media screen and (max-width: 960px) {
  .row .col:nth-child(2) {
    display: none;
  }
}

@media screen and (max-width: 390px) {
  .row .col:nth-child(2),
  .row .col:nth-child(3),
  .row .col:nth-child(4) {
    display: none;
  }

  .introduce {
    width: 100%;
    font-size: 1rem;
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    z-index: 10;
    height: 20vh;
  }

  .introduce-title {
    font-size: 1rem;
    font-weight: 900;
  }
  .introduce-content {
    font-size: 0.825rem;
  }
  .row .col {
    font-size: 0.825rem;
  }
}
</style>