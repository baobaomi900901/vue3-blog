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
    class="Play w-full h-full bg-gray-100 flex pt-32 justify-center"
  >
    <div class="play-content">
      <div
        class="play-content-title text-6xl font-black mb-8 sm:text-5xl mobile:text-4xl mobile:mb-4"
      >
        Play.
        <br />
        <span class="text-base font-medium text-gray-400 mix-blend-difference"
          >Creative code</span
        >
      </div>

      <ul class="play-content-ul">
        <li class="play-content-one">
          <router-link to="/loadingKit">
            <div class="spinner"></div>
            <div class="play-content-li-title">Loading Kit</div>
            <div class="play-content-li-subtitle mt-2 zh">
              一些 css 加载动画
            </div>
          </router-link>
        </li>
        <li class="play-content-two">
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
          <div class="play-content-li-title">web demo</div>
        </li>
        <li>789</li>
      </ul>
    </div>
  </div>
</template>

<script lang='ts'>
import { ref, reactive, onMounted } from "vue";
import { gsap } from "gsap";

export default {
  name: "Play",
  setup() {
    let playAnimeLine = gsap.timeline({
      delay: 1,
      onComplete() {
        document.body.style.overflow = "auto";
      },
    });

    function Anime() {
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

      let aUl = gsap.fromTo(
        ".play-content-ul",
        { opacity: 0 },
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

      playAnimeLine.add(aTitle, 0);
      playAnimeLine.add(aLi, "-=0.5");
    }

    onMounted(() => {
      Anime();
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
  max-width: 960px;
}

.play-content ul {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px 10px;
}

.play-content ul li {
  height: 300px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  position: relative;
}

.play-content ul li a {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.play-content ul li::after {
  content: "View Project";
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
  @apply mt-8 font-semibold text-2xl;
}

.play-content-li-subtitle {
  @apply text-base  mt-2;
}

.spinner {
  width: 40px;
  height: 40px;
  background-color: #fff;

  -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;
  animation: sk-rotateplane 1.2s infinite ease-in-out;
}

.play-content-one {
  background: #d2e1e1;
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
    background: blue;
    height: 240px;
  }
}
</style>