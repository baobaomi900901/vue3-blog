<template>
  <div class="row-box" @click="toAgileUi">
    <router-link :to="url" target="_blank">
      <div class="row">
        <div class="col" v-if="projectName">{{ projectName }}</div>
        <div class="col" v-if="hightLights">{{ hightLights }}</div>
        <div class="col" v-if="work">{{ work }}</div>
        <div class="col" v-if="company">{{ company }}</div>
        <div class="col" v-if="time">{{ time }}</div>
      </div>
      <div class="divider"></div>
    </router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  projectName: {
    type: String,
    default: "", // 默认值
  },
  hightLights: {
    type: String,
    default: "", // 默认值
  },
  work: {
    type: String,
    default: "", // 默认值
  },
  company: {
    type: String,
    default: "", // 默认值
  },
  time: {
    type: String,
    default: "", // 默认值
  },
  url: {
    type: String,
    default: "http://www.mobytang.com", // 默认值
  },
});

const CodeCard = ref(null);
const CodeCardImg = ref(null);
const imgState = ref(false);

onMounted(() => {
  // 监测 url字段 是否包含 'http://' 或 'https://'
  if (props.url.indexOf("http://") == -1 && props.url.indexOf("https://") == -1) {
    console.log('yes');
  }
});
</script>

<style scoped>
.row {
  margin-bottom: 0.5rem;
  /* 指针 */
  cursor: pointer;
}
.row + .divider {
  margin-bottom: 1rem;
}

.row:nth-child(1) {
  margin-top: 1rem;
}
.divider {
  width: 100%;
  height: 1px;
  background: #fff;
  margin: 0.2em 0rem;

  transition: background 0.2s ease-in-out;
}

.divider:nth-last-child(1) {
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
  flex: 1.8;
}

.row > .col:nth-child(2){
  flex: 1.4;
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
  .row .col{
    font-size: 0.825rem;
  }
}
</style>