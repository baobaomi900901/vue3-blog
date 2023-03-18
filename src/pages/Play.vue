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

      <ul class="play-content-ul">
        <li class="play-content-1" data-title="View Project">
          <router-link class="relative" to="/loadingKit">
            <div class="play-content-view">
              <div class="spinner"></div>
            </div>

            <div class="play-content-text">
              <div class="play-content-li-title text-gray-900">Loading Kit</div>
              <div class="play-content-li-subtitle text-gray-500 zh">
                CSS 实现的加载动画
              </div>
            </div>
          </router-link>
        </li>
        <li class="play-content-2" data-title="View Project">
          <router-link to="/textKit">
            <div class="play-content-view">
              <div class="textAnime">
                <span class="letters letters-1">Ready</span>
                <span class="letters letters-2">Set</span>
                <span class="letters letters-3">Go!</span>
              </div>
            </div>
            <div class="play-content-text">
              <div class="play-content-li-title text-gray-900">
                Text Anime Kit
              </div>
              <div class="play-content-li-subtitle text-gray-500 zh">
                anime.js 实现的文字动画
              </div>
            </div>
          </router-link>
        </li>

        <li
          class="play-content-3"
          data-title="View Project"
          style="background: #131313"
        >
          <a
            href="https://mobytang.com/WebDemo/%E9%BC%A0%E6%A0%87%E6%8C%87%E9%92%88%E5%87%86%E6%98%9F/index.html"
            target="_blank"
          >
            <div class="play-content-view">
              <img
                src="https://mobytang.com/WebDemo/preview-image/%E8%87%AA%E5%AE%9A%E4%B9%89%E9%BC%A0%E6%A0%87%E5%8A%A8%E6%95%88.gif"
                alt=""
              />
            </div>
            <div class="play-content-text">
              <div
                class="play-content-li-title text-gray-50 mix-blend-difference"
              >
                自定义鼠标指针动效
              </div>
              <div
                class="play-content-li-subtitle text-gray-50 mix-blend-difference"
              >
                实现了一个开箱即用的 hooks
              </div>
            </div>
          </a>
        </li>

        <!-- 不可点击 -->
        <!-- <li class="play-content-2" data-title="Contact me">
          <router-link to="">
            <div class="play-content-view play-content-view-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
              >
                <g>
                  <path
                    d="M36,26H32V13a8,8,0,0,0-16,0V26H12V13a12,12,0,0,1,24,0Z"
                    fill="#c8c8c8"
                  ></path>
                  <path
                    d="M40,20H8a3,3,0,0,0-3,3V44a3,3,0,0,0,3,3H40a3,3,0,0,0,3-3V23A3,3,0,0,0,40,20Z"
                    fill="#ffd764"
                  ></path>
                  <path
                    d="M28,31a4,4,0,1,0-6,3.445V40a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1V34.445A3.982,3.982,0,0,0,28,31Z"
                    fill="#eba40a"
                  ></path>
                </g>
              </svg>
            </div>
            <div class="play-content-text">
              <div class="play-content-li-title text-gray-50 z-50">ZhaoM-Blog</div>
              <div class="play-content-li-subtitle text-gray-50 zh z-50">ZhaoM-Blog</div>
            </div>
            <div class=" bg-gray-900 w-full h-full absolute top-0 opacity-80"></div>
          </router-link>
        </li> -->
      </ul>
    </div>
  </div>
</template>

<script lang='ts'>
import { ref, reactive, onMounted } from "vue";
import { gsap } from "gsap";
// import * as anime from 'animejs/lib/anime.es.js'
import anime from "animejs/lib/anime.es.js";

export default {
  name: "Play",
  setup() {
    let playAnimeLine = gsap.timeline({
      delay: 1,
      onComplete() {
        document.body.style.overflow = "auto";
      },
    });

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

      let aLi = gsap.fromTo(
        ".play-content li",
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
      playAnimeLine.add(aLi, "-=0.5");
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
      MyAnime();
      MyTextAnime();
    });
    return {};
  },
};
</script>
<style scoped>
.Play {
  @apply bg-gray-100;
  min-height: 100vh;
}
.play-content {
  padding: 0 40px;
  width: 100%;
  max-width: 80rem;
}

.play-content-view {
  @apply w-full h-2/3 flex justify-center items-center;
  transition: transform 0.5s ease-in-out;
}

.play-content-text {
  @apply absolute bottom-0 w-full mb-16 flex flex-col text-center;
}

.play-content ul {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px 10px;
}

.play-content ul li {
  height: 45vh;
  max-height: 360px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.play-content ul li:hover .play-content-view {
  transform: scale(2);
}

.play-content ul li a {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.play-content ul li::after {
  /* content: "View Project"; */
  content: attr(data-title);
  display: inline-block;
  position: absolute;
  top: 0;
  right: 20px;
  background: #000;
  color: #fff;
  padding: 10px 20px;
  /* 透视 */
  transform-style: preserve-3d;
  perspective-origin: 50% 50%;
  transform: perspective(1000px) rotateX(-90deg);
  transform-origin: top center;
  transition: all 0.2s;
}
.play-content ul li:hover::after {
  transform: perspective(1000px) rotateX(0deg);
}

.play-content-li-title {
  @apply font-semibold text-2xl;
  /* mix-blend-mode: difference; */
}

.play-content-li-subtitle {
  @apply text-base  mt-2;
  /* mix-blend-mode: difference; */
}

.spinner {
  width: 40px;
  height: 40px;
  background-color: #fff;

  -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;
  animation: sk-rotateplane 1.2s infinite ease-in-out;
}

.play-content-2-view {
  width: 100%;
}

.textAnime {
  position: relative;
  font-weight: 900;
  font-size: 2em;
  top: 0;
  left: 0;
  width: 100%;
  height: 60%;

  display: flex;
  justify-content: center;
  align-items: center;
}
.textAnime .letters {
  position: absolute;
  opacity: 0;
}

.play-content-1 {
  background: #d2e1e1;
}

.play-content-2 {
  background: #f3e9c6;
}

.play-content-view-3 {
  background-image: url("../assets/codeplay/web-demo-ZhaoBlog.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  width: 100%;
  height: 100%;

  filter: blur(6px);
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

@media screen and (max-width: 768px) {
  .play-content ul {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 10px 10px;
  }
  .play-content ul li {
    /* background: blue; */
    height: 320px;
  }
}
</style>