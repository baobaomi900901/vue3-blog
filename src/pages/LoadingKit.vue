<!--
* @description  参数1
* @fileName  LoadingKit
* @author userName
* @date 2023-03-10 16:46:43
* @version V3.0.0
!-->
<template>
  <div id="LoadingKit" class="LoadingKit">
    <div class="LoadingKit-ccontent overflow-scroll">
      <ul>
        <li class="LoadingKit-ccontent-one">
          <div class="LoadingKit-ccontent-itme-view bg-orange-500">
            <div class="spinner"></div>
            <button>view code</button>
          </div>
          <div class="LoadingKit-ccontent-itme-code m-6"></div>
        </li>
        <li class="LoadingKit-ccontent-two">
          <div class="LoadingKit-ccontent-itme-view bg-green-500">
            <div class="sk-chase">
              <div class="sk-chase-dot"></div>
              <div class="sk-chase-dot"></div>
              <div class="sk-chase-dot"></div>
              <div class="sk-chase-dot"></div>
              <div class="sk-chase-dot"></div>
              <div class="sk-chase-dot"></div>
            </div>
          </div>
          <div class="LoadingKit-ccontent-itme-code m-6"></div>
        </li>
        <li class="LoadingKit-ccontent-three">
          <div class="LoadingKit-ccontent-itme-view bg-green-500"></div>
          <div class="LoadingKit-ccontent-itme-code m-6"></div>
        </li>
      </ul>
    </div>


    <!-- <PopUpModal :show="true">
      <template #title>
        <div>header</div>
      </template>
      <template #content>
        <div>
          12334
        </div>
      </template>
      <template #footer>
        <div>
          footer
        </div>
      </template>
    </PopUpModal> -->
  </div>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
// 引入
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogDescription,
} from "@headlessui/vue";
import { ChevronRightIcon } from "@heroicons/vue/20/solid";

export default {
  name: "LoadingKit",
  components: {
    Dialog,
    DialogPanel,
    DialogTitle,
    DialogDescription,
  },
  setup() {
    const isOpen = ref(true);
    function setIsOpen(value) {
      isOpen.value = value;
    }

    onMounted(() => {
      document.body.style.overflow = "auto";
    });
    return {
      isOpen,
    };
  },
};
</script>
<style scoped>
.LoadingKit {
  @apply bg-gray-100 pt-40;
  min-height: 100vh;
}

.LoadingKit-ccontent {
  display: flex;
  justify-content: center;
}

.LoadingKit-ccontent ul {
  width: 100%;
  max-width: 960px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
}

.LoadingKit-ccontent ul li {
  width: 100%;
  height: 40vh;
}

.LoadingKit-ccontent-itme-view {
  @apply flex justify-center items-center w-full h-full;
  flex-direction: column;
}

/* ONE - spinner */
.spinner {
  width: 80px;
  height: 80px;
  background-color: #fff;

  margin: 100px auto;
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

/* TWO - sk-chase */

.sk-chase {
  width: 80px;
  height: 80px;
  position: relative;
  animation: sk-chase 2.5s infinite linear both;
}

.sk-chase-dot {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  animation: sk-chase-dot 2s infinite ease-in-out both;
}

.sk-chase-dot:before {
  content: "";
  display: block;
  width: 25%;
  height: 25%;
  background-color: #fff;
  border-radius: 100%;
  animation: sk-chase-dot-before 2s infinite ease-in-out both;
}

.sk-chase-dot:nth-child(1) {
  animation-delay: -1.1s;
}
.sk-chase-dot:nth-child(2) {
  animation-delay: -1s;
}
.sk-chase-dot:nth-child(3) {
  animation-delay: -0.9s;
}
.sk-chase-dot:nth-child(4) {
  animation-delay: -0.8s;
}
.sk-chase-dot:nth-child(5) {
  animation-delay: -0.7s;
}
.sk-chase-dot:nth-child(6) {
  animation-delay: -0.6s;
}
.sk-chase-dot:nth-child(1):before {
  animation-delay: -1.1s;
}
.sk-chase-dot:nth-child(2):before {
  animation-delay: -1s;
}
.sk-chase-dot:nth-child(3):before {
  animation-delay: -0.9s;
}
.sk-chase-dot:nth-child(4):before {
  animation-delay: -0.8s;
}
.sk-chase-dot:nth-child(5):before {
  animation-delay: -0.7s;
}
.sk-chase-dot:nth-child(6):before {
  animation-delay: -0.6s;
}

@keyframes sk-chase {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes sk-chase-dot {
  80%,
  100% {
    transform: rotate(360deg);
  }
}

@keyframes sk-chase-dot-before {
  50% {
    transform: scale(0.4);
  }
  100%,
  0% {
    transform: scale(1);
  }
}
</style>