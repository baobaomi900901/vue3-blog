<!--
* @description  参数1
* @fileName  About
* @author userName
* @date 2022-01-30 21:38:11
* @version V3.0.0
!-->
<template>
  <div class="AboutPage bg-gray-100 h-full flex justify-center">
    <div class="w-11/12 mt-40">
      <h1 class="font-bold text-5xl">Hi, I'm Maosusu</h1>
      <h2 class="font-bold text-3xl text-gray-400 mt-4">
        交互设计师 / 动效设计师 / 前端动画开发 / 宅
      </h2>
      <div class="imgbox rounded-md bg-dark-blue">
        <img
          id="me"
          alt=""
          class="mt-10 h-80 rounded-full border-4 border-gray-300 z-10 hidden"
        />
      </div>
      <div class="flex flex-col justify-center w-full mb-10 items-center">
        <div class="aboutbox">
          <h3>联系</h3>
          <div class="border-b pb-16 border-gray-300">
            <p>我叫唐清伟, 朋友们都称呼猫叔叔</p>
            <p class="mt-2">Phone: 13922832244</p>
            <p class="mt-2">Email: baobaomi900901@icloud.com</p>
          </div>

          <h3>教育</h3>
          <div class="border-b pb-16 border-gray-300">
            <p>2018 年 ~ 2021 年</p>
            <p class="font-bold mt-2">湖南师范大学 | 非全日制本科</p>
            <p class="mt-2">心理学</p>
            <br />
            <p>2009 年 ~ 2012 年</p>
            <p class="font-bold mt-2">湖南大众传媒职业技术学院 | 大专</p>
            <p class="mt-2">卡漫设计与制作</p>
          </div>

          <h3>我会什么?</h3>
          <div class="border-b pb-16 border-gray-300">
            <p class="font-bold">界面设计与交互:</p>
            <p>Adobe、Sketch、Figma、Axure</p>
            <br />
            <p class="font-bold">动效&3D设计:</p>
            <p>After Effects、Blender、Spine</p>
            <br />
            <p class="font-bold">DesignThink:</p>
            <p>原子设计、设计冲刺、精益设计</p>
            <br />
            <p class="font-bold">Code:</p>
            <p>
              HTML、Javascript(初级)、 CSS(熟练)、SASS、LESS、 Vue、WordPress、
              动画库( GSAP、Anime.js、Lottie )
            </p>
          </div>

          <h3>在做什么?</h3>
          <div class="border-b pb-16 border-gray-300">
            <p class="font-bold">
              UI 设计 / 交互设计 / 动效设计 / 前端动画开发
            </p>
          </div>

          <h3>在学什么?</h3>
          <div class="border-b pb-16 border-gray-300">
            <p class="font-bold">WebGL:</p>
            <p>Three.js + Blender</p>
          </div>

          <h3>经验</h3>
          <div class="">
            <p class="font-bold mt-2">深圳市四格互联信息技术有限公司</p>
            <p class="mt-2 font-light">
              2020.03 ~ 至今 | 产品设计部 - 交互组组长
            </p>
            <br />
            <p class="font-bold mt-2">
              深圳软通动力信息技术有限公司 | 华为 UCD 驻场
            </p>
            <p class="mt-2 font-light">
              2016 年 ~ 2020 年 | 交互设计师 ( 高级主任工程师 7 级 )
            </p>
            <br />
            <p class="font-bold mt-2">深圳市蘑菇财富技术有限公司</p>
            <p class="mt-2 font-light">2015 年 ~ 2016 年 | 交互设计师</p>
            <br />
            <p class="font-bold mt-2">深圳市点视科技有限公司</p>
            <p class="mt-2 font-light">2012 年 ~ 2015 年 | UI 设计师</p>
          </div>
        </div>

        <div
          class="
            mt-20
            w-full
            text-xl text-center
            flex flex-col
            justify-center
            items-center
          "
        >
          <div class="w-2/3 border-t border-gray-300 pt-10 mb-10">
            Feel free to say hi!
          </div>
          <div>
            <button @click="contact">contact me</button>
            <button @click="resume">view resume</button>
          </div>
        </div>
        <div
          class="w-full text-center pt-10 border-gray-300 my-20 text-gray-300"
        >
          All information in the projects are my own and does not necessarily
          reflect the views of respective companies. <br />
          All the projects complies to the NDA
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, reactive, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// import NavigationBar from "../components/NavigationBar";
export default {
  name: "About",
  components: {
    // NavigationBar,
  },
  setup() {
    let box = ref(null);
    function contact() {
      // console.log("contact");
      window.location.href = "mailto:baobaomi900901@icloud.com";
    }
    function resume() {
      // console.log("resume");
      window.open(
        "https://mtwork.oss-cn-shenzhen.aliyuncs.com/blog-assets/%E7%AE%80%E5%8E%86-%E5%94%90%E6%B8%85%E4%BC%9F-2022-new.pdf"
      );
    }
    onMounted(() => {
      // console.log("document.body :>> ", document.body);
      document.body.classList.remove("overflow-hidden");
      // document.body.classList.add("scrollbar-hide", "overflow-scroll");

      let scrollTop = document.body.scrollTop;
      scrollTop = 0;
      gsap.set("body", {
        scrollTop: 0,
        onComplete: () => {
          document.body.classList.add("scrollbar-hide", "overflow-scroll");
        },
      });
    });

    onMounted(() => {
      const container = document.querySelector(".imgbox");
      for (let i = 0; i <= 100; i++) {
        const cards = document.createElement("div");
        cards.classList.add("card", "w-24", "h-40", "bg-dark-blue", "absolute");
        container.appendChild(cards);
      }

      function anime() {
        gsap.to(".card", {
          boxShadow: "0 10px 20px 0 rgba(0, 0, 0, 0.15)",
          x: () => {
            return gsap.utils.random(-window.innerWidth, window.innerWidth);
          },
          y: () => {
            return gsap.utils.random(
              -window.innerHeight / 2,
              window.innerHeight / 2
            );
          },
          scale: () => {
            return gsap.utils.random(0.8, 2.4);
          },
          delay: 0,
          stagger: {
            amount: 1,
          },
          ease: "power2.inOut",
          duration: () => {
            // return gsap.utils.random(5, 10);
            return 5;
          },
          onComplete: () => {
            setTimeout(() => {
              console.log(1);
              anime();
            }, 1000);
          },
        });
      }

      const img = document.querySelector("#me");
      img.src =
        "https://mtwork.oss-cn-shenzhen.aliyuncs.com/blog-assets/me.png";
      img.onload = () => {
        img?.classList.remove("hidden");
        gsap.fromTo(
          img,
          {
            y: 10,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
          }
        );
        gsap.to(".card", {
          boxShadow: "0 10px 20px 0 rgba(0, 0, 0, 0.001)",
          onComplete: () => {
            anime();
          },
        });
      };
    });

    return {
      box,
      contact,
      resume,
    };
  },
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  background-color: #fff;
  overflow: auto;
}

.aboutbox {
  @apply mt-20 grid text-lg;
  width: 960px;
  grid-row-gap: 4rem;
  grid-template-columns: 360px auto;
}

.aboutbox h3 {
  @apply font-bold text-dark-blue text-xl;
}

.imgbox {
  @apply flex justify-center items-center mt-10 relative overflow-hidden;
  height: 720px;
}

button {
  @apply border-2  border-dark-blue text-lg text-dark-blue  font-normal uppercase p-5;
  transition: 0.25s;
}

button:hover {
  @apply bg-dark-blue text-white;
}

button + button {
  @apply ml-20;
}
</style>
