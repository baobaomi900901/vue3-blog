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
            Article title <br />
            文章名称
          </div>
          <div class="col">
            information <br />
            关键信息
          </div>
          <div ref="time" class="col col-time" @click="changeTime">
            time <br />
            时间 ( ↑ )
          </div>
        </div>
        <div class="divider nav-divider"></div>
      </div>

      <OverlayScrollbarsComponent
        defer
        ref="rows"
        class="rows flex-1"
        :options="{
          scrollbars: { autoHide: 'scroll', theme: 'os-theme-light' },
        }"
      >
        <Row
          :projectName="'Design+Code提升用户体验实践'"
          :hightLights="'code、用户体验'"
          :time="'2022.04'"
          :url="'https://iodized-samba-a1b.notion.site/Design-Code-5d84a410128b425e8c561f6c292588ce'"
        />
        <Row
          :projectName="'怎么从需求接入、理解、设计到方案验证?'"
          :hightLights="'方法论'"
          :time="'2022.03'"
          :url="'https://iodized-samba-a1b.notion.site/1b2353a95d6a4790b28a69762645fc0d'"
        />
        <Row
          :projectName="'什么是设计资产数字化?'"
          :hightLights="'概念、价值、工作流差异'"
          :time="'2021.05'"
          :url="'https://iodized-samba-a1b.notion.site/246c3e8a9ae240e092bab74c3a2e7678'"
        />
        <Row
          :projectName="'交互设计师-PRD文档-自查表'"
          :hightLights="'文档撰写经验'"
          :time="'2021.04'"
          :url="'https://iodized-samba-a1b.notion.site/PRD-FSD-8571d50dd07c4e018f45bb050bb2665f'"
        />
        <Row
          :projectName="'如何快速了解一个产品'"
          :hightLights="'如何不被产品排除在外'"
          :time="'2021.03'"
          :url="'https://iodized-samba-a1b.notion.site/6c342c6e015349f880ad6f8a683d7f17'"
        />
        <Row
          :projectName="'是否需要Sketch迁移到Figma'"
          :hightLights="'工具选择'"
          :time="'2020.10'"
          :url="'https://iodized-samba-a1b.notion.site/Sketch-Figma-58956aa4bd244929a30e1ac5e005a410'"
        />
        <Row
          :projectName="'缓动动画函数'"
          :hightLights="'code、用户体验'"
          :time="'2020.10'"
          :url="'https://iodized-samba-a1b.notion.site/2a19c8949cb34393a75dcda4ebee8a64'"
        />
      </OverlayScrollbarsComponent>
      <div class="scroll-prompt">
        <div class="divider"></div>
        <span class="scroll-prompt-text"> 🖱 Scroll Down 👆🏻</span>
      </div>
      <div class="introduce-box">
        <div class="introduce">
          <div class="introduce-title ic">随笔.</div>
          <div class="introduce-content ic">随便写写，记录一些自己的想法，</div>
          <div class="introduce-content ic">记录一些冷门的知识。</div>
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

import Row from "../components/RowA.vue";

import { useRouter } from "vue-router";
const router = useRouter();
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
    onComplete: () => {
      let scrollPrompt = document.querySelector(".scroll-prompt");
      scrollPrompt.style.mixBlendMode = "unset";
      scrollPrompt.style.color = "#0a0a0a";
      let SPdivider = document.querySelector(".scroll-prompt .divider");
      SPdivider.style.background = "#0a0a0a";
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

  const links = [...document.querySelectorAll(".row")];
  const lines = [...document.querySelectorAll(".divider")];
  links.shift();
  lines.shift();

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
