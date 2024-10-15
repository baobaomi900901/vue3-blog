<!--
* @description  参数1
* @fileName  Play
* @author userName
* @date 2023-03-10 05:00:49
* @version V3.0.0
!-->
<template>
  <div
    id="Play"
    class="Play w-full h-full bg-gray-100 flex py-32 justify-center pb-32"
  >
    <div class="play-content">
      <div
        class="play-content-title text-6xl font-black mb-8 sm:text-5xl mobile:text-4xl mobile:mb-4"
      >
        Code & Play.
        <br />
        <span class="text-base font-medium text-gray-400 mix-blend-difference"
          >创意代码&工作外的网页设计
        </span>
      </div>

      <div class="play-radio">
        <div
          class="label-box my-10 flex justify-center gap-12 text-3xl capitalize font-medium text-gray-500"
        >
          <label
            for="option1"
            :class="{ 'text-dark-blue': selectedType == 'all' }"
          >
            <input
              v-model="selectedType"
              id="option1"
              type="radio"
              name="type"
              value="all"
            />
            <span>All</span>
          </label>
          <label
            for="option2"
            :class="{
              'text-dark-blue': selectedType == '1',
            }"
          >
            <input
              v-model="selectedType"
              id="option2"
              type="radio"
              name="type"
              value="1"
            />
            <span>WebDesign</span>
          </label>

          <label
            for="option3"
            :class="{
              'text-dark-blue': selectedType == '2',
            }"
          >
            <input
              v-model="selectedType"
              id="option3"
              type="radio"
              name="type"
              value="2"
            />
            <span>动画工具</span>
          </label>
          <label
            for="option4"
            :class="{
              'text-dark-blue': selectedType == '3',
            }"
          >
            <input
              v-model="selectedType"
              id="option4"
              type="radio"
              name="type"
              value="3"
            />
            <span> 创意 </span>
          </label>
        </div>
      </div>

      <div class="play-content-items">
        <!-- 私人项目 -->
        <div
          :class="{
            'play-hidden':
              selectedType !== 'all' && selectedType !== '1' ? true : false,
          }"
        >
          <div
            class="play-content-item-title mt-8 text-2xl font-bold capitalize"
          >
            Web Design
          </div>
          <div class="play-content-item mb-16">
            <CodeCard
              :bgColor="'#232323'"
              :imgSrc="'../WebDemo/preview-image/glaze.jpg'"
              :title="'Glaze Studio'"
              :subTitle="'镜子生产商、门户网站'"
              :href="'../WebDemo/private-project/glazeSTD/index.html'"
            />

            <CodeCard
              :bgColor="'#232323'"
              :imgSrc="'../WebDemo/preview-image/%E6%97%A0%E4%BA%BA%E6%9C%BA%E7%AB%99%E7%82%B9.jpg'"
              :title="'无人机站点'"
              :subTitle="'门户网站动效'"
              :href="'../WebDemo/%E6%97%A0%E4%BA%BA%E6%9C%BA%E7%AB%99%E7%82%B9/index.html'"
            />
          </div>
        </div>

        <!-- 动画工具 -->
        <div
          :class="{
            'play-hidden':
              selectedType !== 'all' && selectedType !== '2' ? true : false,
          }"
        >
          <div
            class="play-content-item-title mt-8 text-2xl font-bold capitalize"
          >
            动画工具
          </div>
          <div class="play-content-item mb-16">
            <div
              class="item-content"
              data-title="View Project"
              style="background: #d5e0e1"
            >
              <router-link class="relative" to="/loadingKit">
                <div
                  class="item-content-preview h-full w-full flex justify-center items-center"
                >
                  <div class="spinner"></div>
                </div>
                <div class="item-content-textBox">
                  <div class="textBox-title text-gray-50 mix-blend-difference">
                    Loading Kit
                  </div>
                  <div
                    class="textBox-subtitle text-gray-400 mix-blend-difference"
                  >
                    CSS 实现的加载动画
                  </div>
                </div>
              </router-link>
            </div>

            <div
              class="item-content"
              data-title="View Project"
              style="background: #f1e9ca"
            >
              <router-link class="relative" to="/textKit">
                <div
                  class="item-content-preview flex justify-center items-center"
                >
                  <div class="textAnime">
                    <span class="letters letters-1">Ready</span>
                    <span class="letters letters-2">Set</span>
                    <span class="letters letters-3">Go!</span>
                  </div>
                </div>
                <div class="item-content-textBox">
                  <div class="textBox-title text-gray-50 mix-blend-difference">
                    Text Anime Kit
                  </div>
                  <div
                    class="textBox-subtitle text-gray-400 mix-blend-difference"
                  >
                    anime.js 实现的文字动画
                  </div>
                </div>
              </router-link>
            </div>

            <CodeCard
              :bgColor="'#131313'"
              :imgSrc="'../WebDemo/preview-image/%E8%87%AA%E5%AE%9A%E4%B9%89%E9%BC%A0%E6%A0%87%E5%8A%A8%E6%95%88.jpg'"
              :title="'自定义鼠标指针动效'"
              :subTitle="'开箱即用的 hooks'"
              :href="'../WebDemo/%E9%BC%A0%E6%A0%87%E6%8C%87%E9%92%88%E5%87%86%E6%98%9F/index.html'"
            />
          </div>
        </div>

        <!-- 创意 -->
        <div
          :class="{
            'play-hidden':
              selectedType !== 'all' && selectedType !== '3' ? true : false,
          }"
        >
          <div
            class="play-content-item-title mt-8 text-2xl font-bold capitalize"
          >
            创意
          </div>
          <div
            class="play-content-item mb-16"
            :class="{
              'play-hidden':
                selectedType !== 'all' && selectedType !== '3' ? true : false,
            }"
          >
            <CodeCard
              :bgColor="'#38363c'"
              :imgSrc="'../WebDemo/preview-image/3d%20%E5%8D%A1%E7%89%87.png'"
              :title="'3D卡片'"
              :subTitle="'鼠标交互控制 CSS 样式模拟按压卡片'"
              :href="'../WebDemo/CSS%E5%8A%A8%E7%94%BB/3D%E5%8D%A1%E7%89%87/index.html'"
            />

            <CodeCard
              :bgColor="'#c5b7a8'"
              :imgSrc="'../WebDemo/preview-image/%E9%9F%B3%E9%A2%91%E6%B3%A2%E6%B5%AA%E7%BA%BF.jpg'"
              :title="'音频波浪线'"
              :subTitle="'canvas'"
              :href="'../WebDemo/canvas/canvas%E9%9F%B3%E4%B9%90%E6%B3%A2%E6%B5%AA%E7%BA%BF/index.html'"
            />

            <CodeCard
              :bgColor="'#131313'"
              :imgSrc="'../WebDemo/preview-image/%E6%97%A0%E9%99%90.png'"
              :title="'无限循环滚动2'"
              :subTitle="'JS 实现菜单无限循环'"
              :href="'../WebDemo/%E6%97%A0%E9%99%90%E6%BB%9A%E5%8A%A8/index.html'"
            />

            <CodeCard
              :bgColor="'#161616'"
              :imgSrc="'../WebDemo/preview-image/%E6%BB%9A%E5%8A%A8%E6%9D%A1%E6%8C%87%E7%A4%BA%E5%99%A8.png'"
              :title="'滚动条指示器'"
              :subTitle="'鼠标跟随、hsl 颜色渐变实例'"
              :href="'../WebDemo/%E6%BB%9A%E5%8A%A8%E8%BF%9B%E5%BA%A6%E6%8C%87%E7%A4%BA%E5%99%A8/index.html'"
            />

            <CodeCard
              :bgColor="'#181818'"
              :imgSrc="'../WebDemo/preview-image/IntObs%E8%A7%A6%E5%8F%91%E5%8A%A8%E7%94%BB.png'"
              :title="'滚动触发动画事件'"
              :subTitle="'IntersectionObserver'"
              :href="'../WebDemo/%E6%BB%9A%E5%8A%A8%E8%A7%A6%E5%8F%91%E5%8A%A8%E7%94%BB%E4%BA%8B%E4%BB%B6/index.html'"
            />

            <CodeCard
              :bgColor="'#eaeaea'"
              :imgSrc="'../WebDemo/preview-image/svg%E6%BB%A4%E9%95%9C.png'"
              :title="'SVG滤镜图片变形'"
              :subTitle="'噪点背景、svg 滤镜'"
              :href="'../WebDemo/%E6%B0%B4%E5%B9%B3%E6%BB%91%E5%8A%A8%E5%B9%B6%E4%BD%BF%E7%94%A8SVG%E6%BB%A4%E9%95%9C/index.html'"
            />

            <CodeCard
              :bgColor="'#262525'"
              :imgSrc="'../WebDemo/preview-image/%E5%83%8F%E7%B4%A0%E5%8C%96.png'"
              :title="'图片像素化'"
              :subTitle="'canvas、像素化'"
              :href="'../WebDemo/%E5%9B%BE%E7%89%87%E5%83%8F%E7%B4%A0%E5%8C%96/index.html'"
            />

            <CodeCard
              :bgColor="'#fff'"
              :imgSrc="'../WebDemo/preview-image/canvas%20%E7%B2%92%E5%AD%90.png'"
              :title="'Particle & Line'"
              :subTitle="'ccanvas、粒子、鼠标干扰'"
              :href="'../WebDemo/canvas/%E7%B2%92%E5%AD%90%E8%BF%9E%E7%BA%BF/index.html'"
            />

            <CodeCard
              :bgColor="'#38363c'"
              :imgSrc="'../WebDemo/preview-image/%E6%A8%A1%E6%8B%9F%E6%B0%B4%E8%92%B8%E6%B0%94.png'"
              :title="'模拟水蒸气'"
              :subTitle="'CSS模拟水蒸气'"
              :href="'../WebDemo/CSS%E5%8A%A8%E7%94%BB/css%E6%A8%A1%E6%8B%9F%E6%B0%B4%E8%92%B8%E6%B0%94/index.html'"
            />

            <CodeCard
              :bgColor="'#eeeeee'"
              :imgSrc="'../WebDemo/preview-image/%E6%96%B0%E6%A8%A1%E6%80%81%E8%AE%A1%E7%AE%97%E5%99%A8.png'"
              :title="'新拟态UI'"
              :subTitle="'基本运算计算器'"
              :href="'../WebDemo/newCalculator/main/index.html'"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CodeCard from "../components/CodeCard.vue";
import { ref, reactive, onMounted, watch } from "vue";
import { gsap } from "gsap";
// import * as anime from 'animejs/lib/anime.es.js'
import anime from "animejs/lib/anime.es.js";

export default {
  name: "Play",
  setup() {
    document.body.style.overflow = "auto";
    let playAnimeLine = gsap.timeline({
      delay: 1,
      onComplete() {
        document.body.style.overflow = "auto";
      },
    });

    const selectedType = ref("all");

    function MyAnime() {
      let aTitle = gsap.fromTo(
        ".play-content-title",
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          duration: 1,
          y: 0,
          ease: "power4.out",
        }
      );

      let aRadio = gsap.fromTo(
        ".play-content .play-radio",
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power4.out",
        }
      );

      let items = gsap.fromTo(
        ".play-content-items",
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power4.out",
        }
      );

      playAnimeLine.add(aTitle);
      playAnimeLine.add(aRadio, "-=0.8");
      playAnimeLine.add(items, "-=0.8");
    }

    const textAnime = {};
    textAnime.opacityIn = [0, 1];
    textAnime.scaleIn = [0.2, 1];
    textAnime.scaleOut = 3;
    textAnime.durationIn = 800;
    textAnime.durationOut = 600;
    textAnime.delay = 500;

    function MyTextAnime() {
      anime
        .timeline({ loop: true })
        .add({
          targets: ".textAnime .letters-1",
          opacity: [0, 1],
          scale: [0.2, 1],
          duration: 1000,
        })
        .add({
          targets: ".textAnime .letters-1",
          opacity: 0,
          scale: textAnime.scaleOut,
          duration: textAnime.durationOut,
          easing: "easeInExpo",
          delay: textAnime.delay,
        })
        .add({
          targets: ".textAnime .letters-2",
          opacity: textAnime.opacityIn,
          scale: textAnime.scaleIn,
          duration: textAnime.durationIn,
        })
        .add({
          targets: ".textAnime .letters-2",
          opacity: 0,
          scale: textAnime.scaleOut,
          duration: textAnime.durationOut,
          easing: "easeInExpo",
          delay: textAnime.delay,
        })
        .add({
          targets: ".textAnime .letters-3",
          opacity: textAnime.opacityIn,
          scale: textAnime.scaleIn,
          duration: textAnime.durationIn,
        })
        .add({
          targets: ".textAnime .letters-3",
          opacity: 0,
          scale: textAnime.scaleOut,
          duration: textAnime.durationOut,
          easing: "easeInExpo",
          delay: textAnime.delay,
        })
        .add({
          targets: ".textAnime",
          opacity: 0,
          duration: 500,
          delay: 500,
        });
    }

    onMounted(() => {
      gsap.set("body", {
        scrollTop: 0,
      });
      MyAnime();
      MyTextAnime();
    });
    return {
      selectedType,
    };
  },
};
</script>
<style scoped>
.Play {
  @apply bg-gray-100;
  min-height: 100vh;
}
.play-hidden {
  display: none !important;
  transform: scale(0);
}

.play-radio label {
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  position: relative;
}

.play-radio label::before {
  content: "";
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #1941ed;

  transform: scaleX(0);
  transition: transform 0.2s ease-in-out;
}

.play-radio label:hover {
  color: #1941ed;
}

.play-radio label:hover::before {
  transform: scalex(1);
}

.play-content {
  width: 100%;
  padding: 0 4rem;
}

.play-content-item {
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  position: relative;

  transition: transform 0.5s ease-in-out;
  will-change: transform;
}

.item-content {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 320px;
}
.item-content a {
  position: relative;
  width: 100%;
  height: 100%;
  display: inline-block;

  display: grid;
  grid-template-rows: 75% 25%;
}

.item-content-textBox {
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.spinner {
  width: 40px;
  height: 40px;
  background-color: #fff;

  -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;
  animation: sk-rotateplane 1.2s infinite ease-in-out;
}

@-webkit-keyframes sk-rotateplane {
  0% {
    -webkit-transform: perspective(120px);
  }
  50% {
    -webkit-transform: perspective(120px) rotateY(180deg);
  }
  100% {
    -webkit-transform: perspective(120px) rotateY(180deg) rotateX(180deg);
  }
}

@keyframes sk-rotateplane {
  0% {
    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);
  }
  50% {
    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
  }
  100% {
    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
  }
}

@media screen and (max-width: 1680px) {
  .play-content-item {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (max-width: 1366px) {
  .play-content-item {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}

@media screen and (max-width: 960px) {
  .play-content {
    padding: 0 2rem;
  }
  .play-content-item {
    display: flex;
    flex-direction: column;
  }

  .item-content {
    height: 520px;
  }
}

@media screen and (max-width: 390px) {
  .play-content-item {
    display: flex;
    flex-direction: column;
  }

  .play-radio .label-box {
    font-size: 1rem;
    gap: 1rem;
  }
}
</style>
