<template>
  <div class="flex justify-center bg-gray-100">
    <div class="w-11/12 mt-40">
      <h1 class="font-bold text-5xl">Hi, I'm Maosusu</h1>
      <h2 class="font-bold text-3xl text-gray-400 mt-4">
        交互设计师 / 动效设计师 / 前端动画开发 / 宅
      </h2>

      <div class="avatarContainer flex justify-center items-center mt-10 relative overflow-hidden rounded-md bg-dark-blue" style="height: 720px">
        <img
          ref="avatar"
          id="avatar"
          src="https://mtwork.oss-cn-shenzhen.aliyuncs.com/blog-assets/me.png"
          alt=""
          class="mt-10 h-80 rounded-full border-4 border-gray-300 z-10 hidden"
        />
      </div>

      <div class="flex flex-col justify-center w-full mb-10 items-center">
        <ul class="infoBox">
          <h3 class="font-bold text-dark-blue text-xl">联系</h3>
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
          <div class="space-y-2">
            <p class="font-bold">深圳市四格互联信息技术有限公司</p>
            <p class="font-light">
              2020.03 ~ 至今 | 产品设计部 - 交互组组长
            </p>
            <br />
            <p class="font-bold">
              深圳软通动力信息技术有限公司 | 华为 UCD 驻场
            </p>
            <p class="font-light">
              2016 年 ~ 2020 年 | 交互设计师 ( 高级主任工程师 7 级 )
            </p>
            <br />
            <p class="font-bold">深圳市蘑菇财富技术有限公司</p>
            <p class="font-light">2015 年 ~ 2016 年 | 交互设计师</p>
            <br />
            <p class="font-bold">深圳市点视科技有限公司</p>
            <p class="font-light">2012 年 ~ 2015 年 | UI 设计师</p>
          </div>
        </ul>

        <div class="mt-20 w-full flex flex-col justify-center items-center text-center text-xl">
          <p class="w-2/3 border-t border-gray-300 pt-10 mb-10">
            Feel free to say hi!
          </p>
          <div class="space-x-8">
            <button class="border-2  border-dark-blue text-lg text-dark-blue  font-normal uppercase p-5 hover:text-white hover:bg-dark-blue transition duration-200 ease-linear" @click="contact">contact me</button>
            <button class="border-2  border-dark-blue text-lg text-dark-blue  font-normal uppercase p-5 hover:text-white hover:bg-dark-blue transition duration-200 ease-linear" @click="resume">view resume</button>
          </div>
        </div>
        <div class="w-full my-20 pt-10 text-center text-gray-300 border-gray-300">
          <p>All information in the projects are my own and does not necessarily reflect the views of respective companies.</p>
          <p>All the projects complies to the NDA</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, defineComponent, nextTick } from "vue";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default defineComponent({
  name: "About",

  setup() {
    gsap.registerPlugin(ScrollTrigger);

    const box = ref(null);
    const avatar = ref<HTMLImageElement>();

    onMounted(() => {
      document.body.classList.remove("overflow-hidden");

      gsap.set("body", {
        scrollTop: 0,
        onComplete: () => {
          document.body.classList.add("scrollbar-hide", "overflow-scroll");
        },
      });

      for (let i = 0; i <= 100; i++) {
        const cards = document.createElement("div");
        cards.classList.add("card", "w-24", "h-40", "bg-dark-blue", "absolute");
        document.querySelector(".avatarContainer")?.appendChild(cards);
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

      nextTick(() => {
        if (avatar.value) {
          avatar.value.onload = () => {
            avatar.value?.classList.remove("hidden");
            gsap.fromTo(
              avatar.value || {},
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
        }
      })
    });

    function contact() {
      window.location.href = "mailto:baobaomi900901@icloud.com";
    }

    function resume() {
      window.open(
        "https://mtwork.oss-cn-shenzhen.aliyuncs.com/blog-assets/%E7%AE%80%E5%8E%86-%E5%94%90%E6%B8%85%E4%BC%9F-2022-new.pdf"
      );
    }

    return {
      avatar,
      box,
      contact,
      resume,
    };
  },
});
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

.infoBox {
  @apply mt-20 grid text-lg;
  width: 960px;
  grid-row-gap: 4rem;
  grid-template-columns: 360px auto;
}
</style>
