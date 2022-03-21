<!--
* @description  参数1
* @fileName  Prompt
* @author userName
* @date 2022-03-21 09:58:30
* @version V3.0.0
!-->
<template>
  <div
    id="Prompt"
    class="Prompt bg-white w-screen h-screen flex justify-center items-center"
  >
    <div
      class="
        w-3/4
        text-md
        leading-loose
        text-center
        italic
        mt-20
        font-light
        flex flex-col
        justify-center
        items-center
      "
    >
      <p class="cat-text">
        <span class="text-2xl not-italic">😼</span> : "为了更好的阅读, 请移步<br />到
        Web 端阅览"
      </p>
      <img
        src="../assets/cat404.png"
        alt=""
        class="cat-img opacity-1000 mt-10"
      />
    </div>
  </div>
</template>

<script lang='ts'>
import { ref, reactive, onMounted } from "vue";
import { gsap } from "gsap";

export default {
  name: "Prompt",
  setup() {
    onMounted(() => {
      gsap.fromTo(
        ".Prompt",
        {
          backgroundColor: "##111826",
        },
        {
          backgroundColor: "#fff",
          delay: 1,
          duration: 1,
        }
      );

      gsap.fromTo(
        ".cat-text",
        {
          y: 10,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          delay: 1,
          duration: 0.5,
        }
      );

      gsap.fromTo(
        ".cat-img",
        {
          y: 10,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          delay: 1.5,
          duration: 0.5,
        }
      );
    });
    return {};
  },
};
</script>
<style scoped>
</style>