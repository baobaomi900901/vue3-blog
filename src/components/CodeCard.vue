<template>
  <div ref="CodeCard" class="item-content" data-title="View Project">
    <a :href="props.href" target="_blank">
      <div class="item-content-preview flex justify-center items-center">
        <div
          v-if="imgState == false"
          class="w-full h-56 text-4xl text-center font-semibold flex justify-center items-center"
        >
          <span class="text-red-50 mix-blend-difference">404</span>
        </div>
        <img
          ref="CodeCardImg"
          :src="props.imgSrc"
          alt=""
          class="CodeCardImg  h-full object-cover"
          :class=" imgState == false ? 'hidden' : ''"
        />
      </div>
      <div class="item-content-textBox">
        <div class="textBox-title text-gray-50 mix-blend-difference">
          {{ title }}
        </div>
        <div class="textBox-subtitle text-gray-400 mix-blend-difference">
          {{ subTitle }}
        </div>
      </div>
    </a>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  bgColor: {
    type: String,
    default: "#fafafa", // 默认值
  },
  imgSrc: {
    type: String,
    default: "", // 默认值
  },
  title: {
    type: String,
    default: "Loading.", // 默认值
  },
  subTitle: {
    type: String,
    default: "Loading.", // 默认值
  },
  href: {
    type: String,
    default: "", // 默认值
  },
});

const CodeCard = ref(null);
const CodeCardImg = ref(null);

const imgState = ref(false);

onMounted(() => {
  CodeCard.value.style.backgroundColor =
    props.bgColor == true ? "#ff5500" : props.bgColor;

  CodeCardImg.value.addEventListener("load", () => {
    console.log("图片加载成功");
    imgState.value = true;
  });

  CodeCardImg.value.addEventListener("error", () => {
    console.log("图片加载失败");
    imgState.value = false;
  });
});
</script>

<style scoped>

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
</style>