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
      <h2 class="font-bold text-3xl text-gray-400 mt-2">
        交互设计师 / 动效设计师 / 前端动画开发
      </h2>
      <div class="imgbox rounded-md">
        <img
          src="../assets/me.png"
          alt=""
          class="mt-10 h-80 rounded-full border-4 border-gray-300"
        />
      </div>
      <div class="flex flex-col justify-center w-full mb-20 items-center">
        <div class="aboutbox">
          <h3>联系</h3>
          <div class="border-b pb-16 border-gray-300">
            <p>我叫唐清伟, 朋友能称呼猫叔叔</p>
            <p class="mt-2">📱:13922832244</p>
            <p class="mt-2">📧:baobaomi900901@icloud.com</p>
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
            <p class="font-bold">界面设计:</p>
            <p>Adobe / Sketch / Figma / Axure</p>
            <br />
            <p class="font-bold">动效/3D设计:</p>
            <p>After Effects / Blender / Spine</p>
            <br />
            <p class="font-bold">前端开发:</p>
            <p>设计冲刺 / 原子设计 / 精益设计</p>
            <br />
            <p class="font-bold">DesignThink:</p>
            <p>
              HTML / CSS(熟练) / Javascript(初级) / Vue / WordPress /
              动画库(GSAP, Anime.js, Lottie)
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
            <p>2020 年 ~ 至今</p>
            <p class="font-bold mt-2">深圳市四格互联信息技术有限公司</p>
            <p class="mt-2 font-light">产品设计部 | 交互组组长</p>
            <br />
            <p>2016 年 ~ 2020 年</p>
            <p class="font-bold mt-2">
              深圳软通动力信息技术有限公司 | 华为 UCD 驻场
            </p>
            <p class="mt-2 font-light">软通高级主任工程师 7 级</p>
            <br />
            <p>2015 年 ~ 2016 年</p>
            <p class="font-bold mt-2">深圳市蘑菇财富技术有限公司</p>
            <p class="mt-2 font-light">交互设计师</p>
            <br />
            <p>2013 年 ~ 2015 年</p>
            <p class="font-bold mt-2">深圳市点视科技有限公司</p>
            <p class="mt-2 font-light">UI 设计师</p>
          </div>
        </div>

        <div
          class="
            w-full
            text-center
            border-t
            pt-16
            border-gray-300
            mt-40
            text-gray-300
          "
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
    onMounted(() => {
      console.log("document.body :>> ", document.body);
      document.body.classList.remove("overflow-hidden");
      document.body.classList.add("scrollbar-hide", "overflow-scroll");
    });
    return {
      box,
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
  @apply bg-gray-200 flex justify-center items-center mt-10;
  height: 720px;
}
</style>
