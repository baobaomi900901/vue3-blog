<template>
  <div class="home relative">
    <canvas class="canvas"></canvas>
    <div id="overlay-light" class="overlay"></div>
    <div id="overlay-dark" class="overlay"></div>
    <div class="content">
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
          时间 ( ↑ )
        </div>
      </div>
      <div class="divider nav-divider"></div>
      <div ref="rows" class="rows">
        <div
          class="row"
          @click="router.push({ name: 'vodafone-conceptual-design' })"
        >
          <div class="col">沃达丰移动端概念设计</div>
          <div class="col">巴塞罗那电信展、ChatBot</div>
          <div class="col">UI、UE、动效</div>
          <div class="col">Huawei、Vodafone</div>
          <div class="col">2016</div>
        </div>
        <div class="divider"></div>
        <div class="row" @click="toAgileUi">
          <div class="col">Agile Ul设计系统</div>
          <div class="col">电信运营商中台、IF Design Award</div>
          <div class="col">UE</div>
          <div class="col">Huawei</div>
          <div class="col">2017</div>
        </div>
        <div class="divider"></div>
        <div class="row" @click="toHkt">
          <div class="col">HKT 数字化改革</div>
          <div class="col">动效、创意代码</div>
          <div class="col">UI、动效</div>
          <div class="col">Huawei、HKT</div>
          <div class="col">2017</div>
        </div>
        <div class="divider"></div>
        <div class="row" @click="toUiLego">
          <div class="col">UI Lego</div>
          <div class="col">可视化Web工具</div>
          <div class="col">UE</div>
          <div class="col">Huawei</div>
          <div class="col">2018</div>
        </div>
        <div class="divider"></div>
        <div class="row" @click="toISlace">
          <div class="col">iSlace 移动端体验升级</div>
          <div class="col">MVP、协同办公</div>
          <div class="col">UE</div>
          <div class="col">Huawei</div>
          <div class="col">2019</div>
        </div>
        <div class="divider"></div>
        <div class="row" @click="toDesignSystem">
          <div class="col">四格互联设计系统</div>
          <div class="col">组件样式代码重构</div>
          <div class="col">UE、前端开发(CSS)</div>
          <div class="col">SEGI</div>
          <div class="col">2020 ~ 2021</div>
        </div>
        <div class="divider"></div>
        <div class="row" @click="toTemplateMarket">
          <div class="col">模板市场</div>
          <div class="col">将设计稿转译成模板代码</div>
          <div class="col">UE、前端开发(CSS)</div>
          <div class="col">SEGI</div>
          <div class="col">2020 ~ 2022</div>
        </div>
        <div class="divider"></div>
        <div class="row" @click="toWordpress">
          <div class="col">CMS 系统</div>
          <div class="col">独立开发前后端</div>
          <div class="col">全栈设计</div>
          <div class="col">SEGI</div>
          <div class="col">2021</div>
        </div>
        <div class="divider"></div>
        <div class="row" @click="toDataview">
          <div class="col">数据可视化平台</div>
          <div class="col">数据大屏、低代码编辑器</div>
          <div class="col">UE、前端开发(cavans)</div>
          <div class="col">SEGI</div>
          <div class="col">2021 ~ 2022</div>
        </div>
        <div class="divider"></div>
        <div class="row" @click="toIot">
          <div class="col">客用运载系统</div>
          <div class="col">设计赋能产品</div>
          <div class="col">UE</div>
          <div class="col">SEGI</div>
          <div class="col">2021</div>
        </div>
        <div class="divider"></div>
        <div class="row" @click="toRedesign">
          <div class="col">重新设计算费中心</div>
          <div class="col">设计赋能产品</div>
          <div class="col">UE</div>
          <div class="col">SEGI</div>
          <div class="col">2022</div>
        </div>
        <div class="divider"></div>
        <div class="row" @click="toGlaze">
          <div class="col">Glaze Studio官网设计</div>
          <div class="col">海外项目、网页全栈设计</div>
          <div class="col">全栈设计</div>
          <div class="col">私人、Glaze</div>
          <div class="col">2023</div>
        </div>
        <div class="divider"></div>
      </div>
      <div class="divider"></div>
      <div class="scroll-prompt">
        🖱 <span class="scroll-prompt-text">Scroll Down</span> 👆🏻
      </div>
      <br />
      <br />
      <div class="introduce">
        <div class="introduce-title ic">MobyTang.</div>
        <div class="introduce-content ic">
          我是一个灵活的多功能(Design+Code)设计师，
        </div>
        <div class="introduce-content ic">
          有丰富的交互设计、动效、前端动画实现经验；
        </div>
        <div class="introduce-content ic">最近6年在从事B2B产品设计；</div>
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

import { useRouter } from "vue-router";
const router = useRouter();

// 1
const toVodafone = () => {
  router.push({ name: "vodafone-conceptual-design" });
};

const toAgileUi = () => {
  router.push({ name: "agile-ui" });
};

const toHkt = () => {
  router.push({ name: "HKT-motion-design" });
};

const toUiLego = () => {
  router.push({ name: "UI-Lego" });
};

const toISlace = () => {
  router.push({ name: "islace-mobile" });
};

// 2
const toDesignSystem = () => {
  router.push({ name: "segi-design-system" });
};

const toTemplateMarket = () => {
  router.push({ name: "segi-template-market" });
};

const toWordpress = () => {
  router.push({ name: "document-system" });
};

const toDataview = () => {
  router.push({ name: "visualized-data-platform" });
};

const toIot = () => {
  router.push({ name: "IoT" });
};

const toRedesign = () => {
  router.push({ name: "billing-center" });
};

const toGlaze = () => {
  router.push({ name: "glaze" });
};

const rows = ref(); // 原始数据
let oddRows = []; // 存储原始数据
let newRows = []; // 存储新数据

const time = ref();
let timeType = true;

const changeTime = () => {
  if (timeType) {
    time.value.innerHTML = `time <br /> 时间 ( ↓ )`;
    timeType = !timeType;
    rows.value.innerHTML = ""; // 清除数据
    newRows.forEach((item) => {
      rows.value.appendChild(item);
    });
  } else {
    time.value.innerHTML = `time <br /> 时间 ( ↑ )`;
    timeType = !timeType;
    rows.value.innerHTML = ""; // 清除数据
    rows.value.innerHTML = oddRows;
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

  gsap.to("#overlay-dark", 2, {
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
      let dividers = document.querySelectorAll(".rows .divider");
      dividers.forEach((divider) => {
        divider.style.background = "#444";
      });
    },
  });
}

// 像素化动画

onMounted(() => {
  oddRows = rows.value.innerHTML;
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

    // // 显示悬停 li
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

  // 获取 rows 里面的 row
  let rowItem = [...document.querySelectorAll(".rows .row")];
  // 获取 rows 里面的 divider
  let dividers = [...document.querySelectorAll(".rows .divider")];
  // 颠倒 rows 的顺序
  rowItem = [...rowItem].reverse();

  // 将 rowItem 与 dividers 交替放入 newRows 中
  for (let i = 0; i < rowItem.length; i++) {
    newRows.push(rowItem[i]);
    newRows.push(dividers[i]);
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
  padding: 6em 0;
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
  height: 35vh;
  overflow: hidden;
  overflow-y: auto;
}
.rows .row {
  margin-bottom: 0.5rem;
  /* 指针 */
  cursor: pointer;
}
.rows .row + .divider {
  margin-bottom: 1rem;
}

.rows .row:nth-child(1) {
  margin-top: 1rem;
}

.rows .divider:nth-last-child(1) {
  margin: 0;
}

.row {
  width: 100%;
  min-height: 24px;
  display: flex;
  padding: 0 2em;
}
.row:hover {
  background: blue;
}

.col + .col {
  margin-left: 1rem;
}

.row > .col {
  position: relative;
  flex: 1;
}

.row > .col:first-child {
  flex: 2;
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
  padding: 1rem;
  z-index: 2;
}

.introduce {
  font-size: 1rem;
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  z-index: 10;
}

.introduce-title {
  font-size: 2rem;
  font-weight: 900;
}
</style>