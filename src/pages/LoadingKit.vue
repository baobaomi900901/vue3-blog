<!--
* @description  参数1
* @fileName  LoadingKit
* @author userName
* @date 2023-03-10 16:46:43
* @version V3.0.0
!-->
<template>
  <div id="LoadingKit" class="LoadingKit">
    <div class="LoadingKit-content mb-32">
      <div
        class="content-title text-6xl font-black mb-8 sm:text-5xl mobile:text-4xl mobile:mb-4"
      >
        Loading Kit.
        <br />
        <span class="text-base font-medium text-gray-400 mix-blend-difference"
          >CSS 实现的加载动画</span
        >
      </div>

      <ul>
        <li class="content-items LoadingKit-content-one">
          <div class="LoadingKit-content-itme-view" style=" background:#d5e1e1;">
            <div class="parent"></div>
            <button
              type="button"
              @click="openModal"
              class="openModal-button rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              View Code
            </button>
          </div>
        </li>

        <li class="content-items LoadingKit-content-two">
          <div class="LoadingKit-content-itme-view" style=" background:#9ba5b5;">
            <div class="parent-round">
              <div class="round-dot"></div>
              <div class="round-dot"></div>
              <div class="round-dot"></div>
              <div class="round-dot"></div>
              <div class="round-dot"></div>
              <div class="round-dot"></div>
            </div>
            <button
              type="button"
              @click="openModal1"
              class="openModal-button rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              View Code
            </button>
          </div>
        </li>

        <li class="content-items LoadingKit-content-three">
          <div class="LoadingKit-content-itme-view" style=" background:#98bec8;">
            <div class="parent2">
              <div class="double-bounce1"></div>
              <div class="double-bounce2"></div>
            </div>
            <button
              type="button"
              @click="openModal2"
              class="openModal-button rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              View Code
            </button>
          </div>
        </li>

        <li class="content-items LoadingKit-content-four">
          <div class="LoadingKit-content-itme-view" style=" background:#45383c;">
            <div class="parent3">
              <div class="rect1"></div>
              <div class="rect2"></div>
              <div class="rect3"></div>
              <div class="rect4"></div>
              <div class="rect5"></div>
            </div>
            <button
              type="button"
              @click="openModal3"
              class="openModal-button rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              View Code
            </button>
          </div>
        </li>

        <li class="content-items LoadingKit-content-five">
          <div class="LoadingKit-content-itme-view" style=" background:#c1605c;">
            <div class="parent4">
              <div class="cube1"></div>
              <div class="cube2"></div>
            </div>
            <button
              type="button"
              @click="openModal4"
              class="openModal-button rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              View Code
            </button>
          </div>
        </li>

        <li class="content-items LoadingKit-content-six">
          <div class="LoadingKit-content-itme-view" style=" background:#333333;">
            <div class="parent5"></div>
            <button
              type="button"
              @click="openModal5"
              class="openModal-button rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              View Code
            </button>
          </div>
        </li>

        <li class="content-items LoadingKit-content-seven">
          <div class="LoadingKit-content-itme-view" style=" background:#224a54;">
            <div class="parent6">
              <div class="dot1"></div>
              <div class="dot2"></div>
            </div>
            <button
              type="button"
              @click="openModal6"
              class="openModal-button rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              View Code
            </button>
          </div>
        </li>

        <li class="content-items LoadingKit-content-eight">
          <div class="LoadingKit-content-itme-view" style=" background:#9ba5b5;">
            <div class="parent7">
              <div class="bounce1"></div>
              <div class="bounce2"></div>
              <div class="bounce3"></div>
            </div>
            <button
              type="button"
              @click="openModal7"
              class="openModal-button rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              View Code
            </button>
          </div>
        </li>

        <li class="content-items LoadingKit-content-nine">
          <div class="LoadingKit-content-itme-view" style=" background:#d5e1e1;">
            <div class="sk-circle">
              <div class="sk-circle1 sk-child"></div>
              <div class="sk-circle2 sk-child"></div>
              <div class="sk-circle3 sk-child"></div>
              <div class="sk-circle4 sk-child"></div>
              <div class="sk-circle5 sk-child"></div>
              <div class="sk-circle6 sk-child"></div>
              <div class="sk-circle7 sk-child"></div>
              <div class="sk-circle8 sk-child"></div>
              <div class="sk-circle9 sk-child"></div>
              <div class="sk-circle10 sk-child"></div>
              <div class="sk-circle11 sk-child"></div>
              <div class="sk-circle12 sk-child"></div>
            </div>
            <button
              type="button"
              @click="openModal8"
              class="openModal-button rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              View Code
            </button>
          </div>
        </li>

        <li class="content-items LoadingKit-content-ten">
          <div class="LoadingKit-content-itme-view" style=" background:#43383c;">
            <div class="sk-cube-grid">
              <div class="sk-cube sk-cube1"></div>
              <div class="sk-cube sk-cube2"></div>
              <div class="sk-cube sk-cube3"></div>
              <div class="sk-cube sk-cube4"></div>
              <div class="sk-cube sk-cube5"></div>
              <div class="sk-cube sk-cube6"></div>
              <div class="sk-cube sk-cube7"></div>
              <div class="sk-cube sk-cube8"></div>
              <div class="sk-cube sk-cube9"></div>
            </div>
            <button
              type="button"
              @click="openModal9"
              class="openModal-button rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              View Code
            </button>
          </div>
        </li>

        <li class="content-items LoadingKit-content-eleven">
          <div class="LoadingKit-content-itme-view" style=" background:#1a1a1a;">
            <div class="sk-fading-circle">
              <div class="sk-circle1 sk-circleA"></div>
              <div class="sk-circle2 sk-circleA"></div>
              <div class="sk-circle3 sk-circleA"></div>
              <div class="sk-circle4 sk-circleA"></div>
              <div class="sk-circle5 sk-circleA"></div>
              <div class="sk-circle6 sk-circleA"></div>
              <div class="sk-circle7 sk-circleA"></div>
              <div class="sk-circle8 sk-circleA"></div>
              <div class="sk-circle9 sk-circleA"></div>
              <div class="sk-circle10 sk-circleA"></div>
              <div class="sk-circle11 sk-circleA"></div>
              <div class="sk-circle12 sk-circleA"></div>
            </div>
            <button
              type="button"
              @click="openModal10"
              class="openModal-button rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              View Code
            </button>
          </div>
        </li>

        <li class="content-items LoadingKit-content-twelve">
          <div class="LoadingKit-content-itme-view" style=" background:#9da5b4;">
            <div class="sk-folding-cube">
              <div class="sk-cube1 sk-cube"></div>
              <div class="sk-cube2 sk-cube"></div>
              <div class="sk-cube4 sk-cube"></div>
              <div class="sk-cube3 sk-cube"></div>
            </div>
            <button
              type="button"
              @click="openModal11"
              class="openModal-button rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              View Code
            </button>
          </div>
        </li>
      </ul>
      <div class="content-items text-2xl text-center mt-12 text-gray-300">
        <router-link
          to=""
          @click="$router.go(-1)"
          class="transition-all duration-300 transform hover:text-gray-100 hover:text-3xl hover:tracking-widest"
          >~~ 🔙 ~~</router-link
        >
      </div>
      
      <TransitionRoot appear :show="isOpen" as="template">
        <Dialog as="div" @close="closeModal" class="relative z-10">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <div class="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>

          <div class="fixed inset-0 overflow-y-auto">
            <div
              class="flex min-h-full items-center justify-center p-4 text-center"
            >
              <TransitionChild
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0 scale-95"
                enter-to="opacity-100 scale-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100 scale-100"
                leave-to="opacity-0 scale-95"
              >
                <DialogPanel
                  class="w-full max-w-3xl max-h-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
                >
                  <Disclosure v-slot="{ open }">
                    <DisclosureButton
                      class="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75"
                    >
                      <span>HTML</span>
                      <ChevronUpIcon
                        :class="open ? 'rotate-180 transform' : ''"
                        class="h-5 w-5 text-blue-500"
                      />
                    </DisclosureButton>
                    <DisclosurePanel class="code-HTML">
                      <Highlight
                        :code="viewCode.HTML"
                        type="html"
                        theme="stackoverflow-dark"
                      />
                    </DisclosurePanel>
                  </Disclosure>
                  <Disclosure as="div" class="mt-2" v-slot="{ open }">
                    <DisclosureButton
                      class="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75"
                    >
                      <span>CSS</span>
                      <ChevronUpIcon
                        :class="open ? 'rotate-180 transform' : ''"
                        class="h-5 w-5 text-blue-500"
                      />
                    </DisclosureButton>
                    <DisclosurePanel class="code-CSS">
                      <Highlight
                        :code="viewCode.CSS"
                        type="css"
                        theme="stackoverflow-dark"
                      />
                    </DisclosurePanel>
                  </Disclosure>

                  <div class="mt-4 flex justify-end">
                    <button
                      type="button"
                      class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      @click="closeModal"
                    >
                      Close
                    </button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </TransitionRoot>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
import { ChevronUpIcon } from "@heroicons/vue/20/solid";
import Highlight from "../components/Highlight.vue";
import { gsap } from "gsap";

// 引入
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/vue";
export default {
  name: "LoadingKit",
  components: {
    Highlight,
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    ChevronUpIcon,
  },
  setup() {
    const isOpen = ref(false);
    function closeModal() {
      isOpen.value = false;
    }

    function openModal() {
      isOpen.value = true;
      viewCode.HTML = itemCode.HTML;
      viewCode.CSS = itemCode.CSS;
    }

    function openModal1() {
      isOpen.value = true;
      viewCode.HTML = itemCode1.HTML;
      viewCode.CSS = itemCode1.CSS;
    }

    function openModal2() {
      isOpen.value = true;
      viewCode.HTML = itemCode2.HTML;
      viewCode.CSS = itemCode2.CSS;
    }

    function openModal3() {
      isOpen.value = true;
      viewCode.HTML = itemCode3.HTML;
      viewCode.CSS = itemCode3.CSS;
    }

    function openModal4() {
      isOpen.value = true;
      viewCode.HTML = itemCode4.HTML;
      viewCode.CSS = itemCode4.CSS;
    }

    function openModal5() {
      isOpen.value = true;
      viewCode.HTML = itemCode5.HTML;
      viewCode.CSS = itemCode5.CSS;
    }

    function openModal6() {
      isOpen.value = true;
      viewCode.HTML = itemCode6.HTML;
      viewCode.CSS = itemCode6.CSS;
    }

    function openModal7() {
      isOpen.value = true;
      viewCode.HTML = itemCode7.HTML;
      viewCode.CSS = itemCode7.CSS;
    }

    function openModal8() {
      isOpen.value = true;
      viewCode.HTML = itemCode8.HTML;
      viewCode.CSS = itemCode8.CSS;
    }

    function openModal9() {
      isOpen.value = true;
      viewCode.HTML = itemCode9.HTML;
      viewCode.CSS = itemCode9.CSS;
    }

    function openModal10() {
      isOpen.value = true;
      viewCode.HTML = itemCode10.HTML;
      viewCode.CSS = itemCode10.CSS;
    }

    function openModal11() {
      isOpen.value = true;
      viewCode.HTML = itemCode11.HTML;
      viewCode.CSS = itemCode11.CSS;
    }

    const viewCode = reactive({
      HTML: `HTML`,
      CSS: `CSS`,
    });

    const itemCode = reactive({
      HTML: `<div class="parent"></div>`,
      CSS: `
.parent {
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
`,
    });

    const itemCode1 = reactive({
      HTML: `
<div class="parent-round">
  <div class="round-dot"></div>
  <div class="round-dot"></div>
  <div class="round-dot"></div>
  <div class="round-dot"></div>
  <div class="round-dot"></div>
  <div class="round-dot"></div>
</div>`,
      CSS: `
.parent-round{
  width: 80px;
  height: 80px;
  position: relative;
  animation: round-bot-rotate 2.5s infinite linear both;
}

.round-dot {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0; 
  animation: round-dot 2.0s infinite ease-in-out both; 
}

.round-dot:before {
  content: '';
  display: block;
  width: 25%;
  height: 25%;
  background-color: #fff;
  border-radius: 100%;
  animation: round-dot-before 2.0s infinite ease-in-out both; 
}

.round-dot:nth-child(1) { animation-delay: -1.1s; }
.round-dot:nth-child(2) { animation-delay: -1.0s; }
.round-dot:nth-child(3) { animation-delay: -0.9s; }
.round-dot:nth-child(4) { animation-delay: -0.8s; }
.round-dot:nth-child(5) { animation-delay: -0.7s; }
.round-dot:nth-child(6) { animation-delay: -0.6s; }
.round-dot:nth-child(1):before { animation-delay: -1.1s; }
.round-dot:nth-child(2):before { animation-delay: -1.0s; }
.round-dot:nth-child(3):before { animation-delay: -0.9s; }
.round-dot:nth-child(4):before { animation-delay: -0.8s; }
.round-dot:nth-child(5):before { animation-delay: -0.7s; }
.round-dot:nth-child(6):before { animation-delay: -0.6s; }

@keyframes round-bot-rotate {
  100% { transform: rotate(360deg); } 
}

@keyframes round-dot {
  80%, 100% { transform: rotate(360deg); } 
}

@keyframes round-dot-before {
  50% {
    transform: scale(0.4); 
  } 100%, 0% {
    transform: scale(1.0); 
  } 
}`,
    });

    const itemCode2 = reactive({
      HTML: `
<div class="parent2">
  <div class="double-bounce1"></div>
  <div class="double-bounce2"></div>
</div>`,
      CSS: `
.parent2 {
  width: 60px;
  height: 60px;

  position: relative;
  margin: 100px auto;
}

.double-bounce1, .double-bounce2 {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #333;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  
  -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
  animation: sk-bounce 2.0s infinite ease-in-out;
}

.double-bounce2 {
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}

@-webkit-keyframes sk-bounce {
  0%, 100% { -webkit-transform: scale(0.0) }
  50% { -webkit-transform: scale(1.0) }
}

@keyframes sk-bounce {
  0%, 100% { 
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 50% { 
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
}`,
    });

    const itemCode3 = reactive({
      HTML: `
<div class="parent3">
  <div class="rect1"></div>
  <div class="rect2"></div>
  <div class="rect3"></div>
  <div class="rect4"></div>
  <div class="rect5"></div>
</div>`,
      CSS: `
.parent3 {
  margin: 100px auto;
  width: 50px;
  height: 40px;
  text-align: center;
  font-size: 10px;
  display: flex;
  gap: 2px;
}

.parent3 > div {
  background-color: #fff;
  height: 100%;
  width: 6px;
  display: inline-block;

  -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
  animation: sk-stretchdelay 1.2s infinite ease-in-out;
}

.parent3 .rect2 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}

.parent3 .rect3 {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}

.parent3 .rect4 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}

.parent3 .rect5 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}

@-webkit-keyframes sk-stretchdelay {
  0%,
  40%,
  100% {
    -webkit-transform: scaleY(0.4);
  }
  20% {
    -webkit-transform: scaleY(1);
  }
}

@keyframes sk-stretchdelay {
  0%,
  40%,
  100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
    -webkit-transform: scaleY(1);
  }
}
`,
    });

    const itemCode4 = reactive({
      HTML: `
<div class="parent4">
  <div class="cube1"></div>
  <div class="cube2"></div>
</div>`,
      CSS: `
.parent4 {
  margin: 100px auto;
  width: 40px;
  height: 40px;
  position: relative;
}

.cube1, .cube2 {
  background-color: #fff;
  width: 15px;
  height: 15px;
  position: absolute;
  top: 0;
  left: 0;
  
  -webkit-animation: sk-cubemove 1.8s infinite ease-in-out;
  animation: sk-cubemove 1.8s infinite ease-in-out;
}

.cube2 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}

@-webkit-keyframes sk-cubemove {
  25% { -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5) }
  50% { -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg) }
  75% { -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5) }
  100% { -webkit-transform: rotate(-360deg) }
}

@keyframes sk-cubemove {
  25% { 
    transform: translateX(42px) rotate(-90deg) scale(0.5);
    -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);
  } 50% { 
    transform: translateX(42px) translateY(42px) rotate(-179deg);
    -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);
  } 50.1% { 
    transform: translateX(42px) translateY(42px) rotate(-180deg);
    -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);
  } 75% { 
    transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
    -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
  } 100% { 
    transform: rotate(-360deg);
    -webkit-transform: rotate(-360deg);
  }
}
`,
    });

    const itemCode5 = reactive({
      HTML: `
<div class="parent5"></div>`,
      CSS: `
.parent5 {
  width: 60px;
  height: 60px;
  margin: 100px auto;
  background-color: #fff;

  border-radius: 100%;  
  -webkit-animation: sk-scaleout 1.0s infinite ease-in-out;
  animation: sk-scaleout 1.0s infinite ease-in-out;
}

@-webkit-keyframes sk-scaleout {
  0% { -webkit-transform: scale(0) }
  100% {
    -webkit-transform: scale(1.0);
    opacity: 0;
  }
}

@keyframes sk-scaleout {
  0% { 
    -webkit-transform: scale(0);
    transform: scale(0);
  } 100% {
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
    opacity: 0;
  }
}`,
    });

    const itemCode6 = reactive({
      HTML: `
<div class="parent6">
  <div class="dot1"></div>
  <div class="dot2"></div>
</div>`,
      CSS: `
.parent6 {
  margin: 100px auto;
  width: 40px;
  height: 40px;
  position: relative;
  text-align: center;

  -webkit-animation: sk-rotate 2s infinite linear;
  animation: sk-rotate 2s infinite linear;
}

.dot1,
.dot2 {
  width: 60%;
  height: 60%;
  display: inline-block;
  position: absolute;
  top: 0;
  background-color: #fff;
  border-radius: 100%;

  -webkit-animation: sk-bounce 2s infinite ease-in-out;
  animation: sk-bounce 2s infinite ease-in-out;
}

.dot2 {
  top: auto;
  bottom: 0;
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}

@-webkit-keyframes sk-rotate {
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes sk-rotate {
  100% {
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
  }
}

@-webkit-keyframes sk-bounce {
  0%,
  100% {
    -webkit-transform: scale(0);
  }
  50% {
    -webkit-transform: scale(1);
  }
}

@keyframes sk-bounce {
  0%,
  100% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  50% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}
      `,
    });

    const itemCode7 = reactive({
      HTML: `
<div class="parent7">
    <div class="bounce1"></div>
    <div class="bounce2"></div>
    <div class="bounce3"></div>
</div>`,
      CSS: `
.parent7 {
  width: 70px;
  text-align: center;
  display: flex;
  gap: 8px;
}

.parent7 > div {
  width: 18px;
  height: 18px;
  background-color: #fff;

  border-radius: 100%;
  display: inline-block;
  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}

.parent7 .bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.parent7 .bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

@-webkit-keyframes sk-bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
  }
}

@keyframes sk-bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
`,
    });

    const itemCode8 = reactive({
      HTML: `
<div class="sk-circle">
  <div class="sk-circle1 sk-child"></div>
  <div class="sk-circle2 sk-child"></div>
  <div class="sk-circle3 sk-child"></div>
  <div class="sk-circle4 sk-child"></div>
  <div class="sk-circle5 sk-child"></div>
  <div class="sk-circle6 sk-child"></div>
  <div class="sk-circle7 sk-child"></div>
  <div class="sk-circle8 sk-child"></div>
  <div class="sk-circle9 sk-child"></div>
  <div class="sk-circle10 sk-child"></div>
  <div class="sk-circle11 sk-child"></div>
  <div class="sk-circle12 sk-child"></div>
</div>`,
      CSS: `
.sk-circle {
  margin: 100px auto;
  width: 80px;
  height: 80px;
  position: relative;
}
.sk-circle .sk-child {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.sk-circle .sk-child:before {
  content: "";
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: #fff;
  border-radius: 100%;
  -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;
  animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;
}
.sk-circle .sk-circle2 {
  -webkit-transform: rotate(30deg);
  -ms-transform: rotate(30deg);
  transform: rotate(30deg);
}
.sk-circle .sk-circle3 {
  -webkit-transform: rotate(60deg);
  -ms-transform: rotate(60deg);
  transform: rotate(60deg);
}
.sk-circle .sk-circle4 {
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
}
.sk-circle .sk-circle5 {
  -webkit-transform: rotate(120deg);
  -ms-transform: rotate(120deg);
  transform: rotate(120deg);
}
.sk-circle .sk-circle6 {
  -webkit-transform: rotate(150deg);
  -ms-transform: rotate(150deg);
  transform: rotate(150deg);
}
.sk-circle .sk-circle7 {
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}
.sk-circle .sk-circle8 {
  -webkit-transform: rotate(210deg);
  -ms-transform: rotate(210deg);
  transform: rotate(210deg);
}
.sk-circle .sk-circle9 {
  -webkit-transform: rotate(240deg);
  -ms-transform: rotate(240deg);
  transform: rotate(240deg);
}
.sk-circle .sk-circle10 {
  -webkit-transform: rotate(270deg);
  -ms-transform: rotate(270deg);
  transform: rotate(270deg);
}
.sk-circle .sk-circle11 {
  -webkit-transform: rotate(300deg);
  -ms-transform: rotate(300deg);
  transform: rotate(300deg);
}
.sk-circle .sk-circle12 {
  -webkit-transform: rotate(330deg);
  -ms-transform: rotate(330deg);
  transform: rotate(330deg);
}
.sk-circle .sk-circle2:before {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}
.sk-circle .sk-circle3:before {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}
.sk-circle .sk-circle4:before {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}
.sk-circle .sk-circle5:before {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}
.sk-circle .sk-circle6:before {
  -webkit-animation-delay: -0.7s;
  animation-delay: -0.7s;
}
.sk-circle .sk-circle7:before {
  -webkit-animation-delay: -0.6s;
  animation-delay: -0.6s;
}
.sk-circle .sk-circle8:before {
  -webkit-animation-delay: -0.5s;
  animation-delay: -0.5s;
}
.sk-circle .sk-circle9:before {
  -webkit-animation-delay: -0.4s;
  animation-delay: -0.4s;
}
.sk-circle .sk-circle10:before {
  -webkit-animation-delay: -0.3s;
  animation-delay: -0.3s;
}
.sk-circle .sk-circle11:before {
  -webkit-animation-delay: -0.2s;
  animation-delay: -0.2s;
}
.sk-circle .sk-circle12:before {
  -webkit-animation-delay: -0.1s;
  animation-delay: -0.1s;
}

@-webkit-keyframes sk-circleBounceDelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes sk-circleBounceDelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}`,
    });

    const itemCode9 = reactive({
      HTML: `
<div class="sk-cube-grid">
  <div class="sk-cube sk-cube1"></div>
  <div class="sk-cube sk-cube2"></div>
  <div class="sk-cube sk-cube3"></div>
  <div class="sk-cube sk-cube4"></div>
  <div class="sk-cube sk-cube5"></div>
  <div class="sk-cube sk-cube6"></div>
  <div class="sk-cube sk-cube7"></div>
  <div class="sk-cube sk-cube8"></div>
  <div class="sk-cube sk-cube9"></div>
</div>`,
      CSS: `
.sk-cube-grid {
  width: 60px;
  height: 60px;
  margin: 100px auto;
}

.sk-cube-grid .sk-cube {
  width: 33%;
  height: 33%;
  background-color: #fff;
  float: left;
  -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
          animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out; 
}
.sk-cube-grid .sk-cube1 {
  -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s; }
.sk-cube-grid .sk-cube2 {
  -webkit-animation-delay: 0.3s;
          animation-delay: 0.3s; }
.sk-cube-grid .sk-cube3 {
  -webkit-animation-delay: 0.4s;
          animation-delay: 0.4s; }
.sk-cube-grid .sk-cube4 {
  -webkit-animation-delay: 0.1s;
          animation-delay: 0.1s; }
.sk-cube-grid .sk-cube5 {
  -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s; }
.sk-cube-grid .sk-cube6 {
  -webkit-animation-delay: 0.3s;
          animation-delay: 0.3s; }
.sk-cube-grid .sk-cube7 {
  -webkit-animation-delay: 0s;
          animation-delay: 0s; }
.sk-cube-grid .sk-cube8 {
  -webkit-animation-delay: 0.1s;
          animation-delay: 0.1s; }
.sk-cube-grid .sk-cube9 {
  -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s; }

@-webkit-keyframes sk-cubeGridScaleDelay {
  0%, 70%, 100% {
    -webkit-transform: scale3D(1, 1, 1);
            transform: scale3D(1, 1, 1);
  } 35% {
    -webkit-transform: scale3D(0, 0, 1);
            transform: scale3D(0, 0, 1); 
  }
}

@keyframes sk-cubeGridScaleDelay {
  0%, 70%, 100% {
    -webkit-transform: scale3D(1, 1, 1);
            transform: scale3D(1, 1, 1);
  } 35% {
    -webkit-transform: scale3D(0, 0, 1);
            transform: scale3D(0, 0, 1);
  } 
}`,
    });

    const itemCode10 = reactive({
      HTML: `
<div class="sk-fading-circle">
  <div class="sk-circle1 sk-circleA"></div>
  <div class="sk-circle2 sk-circleA"></div>
  <div class="sk-circle3 sk-circleA"></div>
  <div class="sk-circle4 sk-circleA"></div>
  <div class="sk-circle5 sk-circleA"></div>
  <div class="sk-circle6 sk-circleA"></div>
  <div class="sk-circle7 sk-circleA"></div>
  <div class="sk-circle8 sk-circleA"></div>
  <div class="sk-circle9 sk-circleA"></div>
  <div class="sk-circle10 sk-circleA"></div>
  <div class="sk-circle11 sk-circleA"></div>
  <div class="sk-circle12 sk-circleA"></div>
</div>`,
      CSS: `
.sk-fading-circle {
  width: 80px;
  height: 80px;
  position: relative;
  
  display: flex;
  justify-content: center;
    align-items: center;
}

.sk-fading-circle .sk-circleA {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}

.sk-fading-circle .sk-circleA:before {
  content: '';
  display: block;
  width: 15%;
  height: 15%;
  background-color: #fff;
  border-radius: 100%;
  -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;
          animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;
}
.sk-fading-circle .sk-circle2 {
  -webkit-transform: rotate(30deg);
      -ms-transform: rotate(30deg);
          transform: rotate(30deg);
}
.sk-fading-circle .sk-circle3 {
  -webkit-transform: rotate(60deg);
      -ms-transform: rotate(60deg);
          transform: rotate(60deg);
}
.sk-fading-circle .sk-circle4 {
  -webkit-transform: rotate(90deg);
      -ms-transform: rotate(90deg);
          transform: rotate(90deg);
}
.sk-fading-circle .sk-circle5 {
  -webkit-transform: rotate(120deg);
      -ms-transform: rotate(120deg);
          transform: rotate(120deg);
}
.sk-fading-circle .sk-circle6 {
  -webkit-transform: rotate(150deg);
      -ms-transform: rotate(150deg);
          transform: rotate(150deg);
}
.sk-fading-circle .sk-circle7 {
  -webkit-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
          transform: rotate(180deg);
}
.sk-fading-circle .sk-circle8 {
  -webkit-transform: rotate(210deg);
      -ms-transform: rotate(210deg);
          transform: rotate(210deg);
}
.sk-fading-circle .sk-circle9 {
  -webkit-transform: rotate(240deg);
      -ms-transform: rotate(240deg);
          transform: rotate(240deg);
}
.sk-fading-circle .sk-circle10 {
  -webkit-transform: rotate(270deg);
      -ms-transform: rotate(270deg);
          transform: rotate(270deg);
}
.sk-fading-circle .sk-circle11 {
  -webkit-transform: rotate(300deg);
      -ms-transform: rotate(300deg);
          transform: rotate(300deg); 
}
.sk-fading-circle .sk-circle12 {
  -webkit-transform: rotate(330deg);
      -ms-transform: rotate(330deg);
          transform: rotate(330deg); 
}
.sk-fading-circle .sk-circle2:before {
  -webkit-animation-delay: -1.1s;
          animation-delay: -1.1s; 
}
.sk-fading-circle .sk-circle3:before {
  -webkit-animation-delay: -1s;
          animation-delay: -1s; 
}
.sk-fading-circle .sk-circle4:before {
  -webkit-animation-delay: -0.9s;
          animation-delay: -0.9s; 
}
.sk-fading-circle .sk-circle5:before {
  -webkit-animation-delay: -0.8s;
          animation-delay: -0.8s; 
}
.sk-fading-circle .sk-circle6:before {
  -webkit-animation-delay: -0.7s;
          animation-delay: -0.7s; 
}
.sk-fading-circle .sk-circle7:before {
  -webkit-animation-delay: -0.6s;
          animation-delay: -0.6s; 
}
.sk-fading-circle .sk-circle8:before {
  -webkit-animation-delay: -0.5s;
          animation-delay: -0.5s; 
}
.sk-fading-circle .sk-circle9:before {
  -webkit-animation-delay: -0.4s;
          animation-delay: -0.4s;
}
.sk-fading-circle .sk-circle10:before {
  -webkit-animation-delay: -0.3s;
          animation-delay: -0.3s;
}
.sk-fading-circle .sk-circle11:before {
  -webkit-animation-delay: -0.2s;
          animation-delay: -0.2s;
}
.sk-fading-circle .sk-circle12:before {
  -webkit-animation-delay: -0.1s;
          animation-delay: -0.1s;
}

@-webkit-keyframes sk-circleFadeDelay {
  0%, 39%, 100% { opacity: 0; }
  40% { opacity: 1; }
}

@keyframes sk-circleFadeDelay {
  0%, 39%, 100% { opacity: 0; }
  40% { opacity: 1; } 
}
`,
    });

    const itemCode11 = reactive({
      HTML: `
<div class="sk-folding-cube">
  <div class="sk-cube1 sk-cube"></div>
  <div class="sk-cube2 sk-cube"></div>
  <div class="sk-cube4 sk-cube"></div>
  <div class="sk-cube3 sk-cube"></div>
</div>`,
      CSS: `
.sk-folding-cube {
  margin: 20px auto;
  width: 40px;
  height: 40px;
  position: relative;
  -webkit-transform: rotateZ(45deg);
          transform: rotateZ(45deg);
}

.sk-folding-cube .sk-cube {
  float: left;
  width: 50%;
  height: 50%;
  position: relative;
  -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
          transform: scale(1.1); 
}
.sk-folding-cube .sk-cube:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  -webkit-animation: sk-foldCubeAngle 2.4s infinite linear both;
          animation: sk-foldCubeAngle 2.4s infinite linear both;
  -webkit-transform-origin: 100% 100%;
      -ms-transform-origin: 100% 100%;
          transform-origin: 100% 100%;
}
.sk-folding-cube .sk-cube2 {
  -webkit-transform: scale(1.1) rotateZ(90deg);
          transform: scale(1.1) rotateZ(90deg);
}
.sk-folding-cube .sk-cube3 {
  -webkit-transform: scale(1.1) rotateZ(180deg);
          transform: scale(1.1) rotateZ(180deg);
}
.sk-folding-cube .sk-cube4 {
  -webkit-transform: scale(1.1) rotateZ(270deg);
          transform: scale(1.1) rotateZ(270deg);
}
.sk-folding-cube .sk-cube2:before {
  -webkit-animation-delay: 0.3s;
          animation-delay: 0.3s;
}
.sk-folding-cube .sk-cube3:before {
  -webkit-animation-delay: 0.6s;
          animation-delay: 0.6s; 
}
.sk-folding-cube .sk-cube4:before {
  -webkit-animation-delay: 0.9s;
          animation-delay: 0.9s;
}
@-webkit-keyframes sk-foldCubeAngle {
  0%, 10% {
    -webkit-transform: perspective(140px) rotateX(-180deg);
            transform: perspective(140px) rotateX(-180deg);
    opacity: 0; 
  } 25%, 75% {
    -webkit-transform: perspective(140px) rotateX(0deg);
            transform: perspective(140px) rotateX(0deg);
    opacity: 1; 
  } 90%, 100% {
    -webkit-transform: perspective(140px) rotateY(180deg);
            transform: perspective(140px) rotateY(180deg);
    opacity: 0; 
  } 
}

@keyframes sk-foldCubeAngle {
  0%, 10% {
    -webkit-transform: perspective(140px) rotateX(-180deg);
            transform: perspective(140px) rotateX(-180deg);
    opacity: 0; 
  } 25%, 75% {
    -webkit-transform: perspective(140px) rotateX(0deg);
            transform: perspective(140px) rotateX(0deg);
    opacity: 1; 
  } 90%, 100% {
    -webkit-transform: perspective(140px) rotateY(180deg);
            transform: perspective(140px) rotateY(180deg);
    opacity: 0; 
  }
}`,
    });

    const AnimeLine = gsap.timeline({
      delay: 1,
      onComplete() {
        document.body.style.overflow = "auto";
      },
    });

    function Anime() {
      let aTitle = gsap.fromTo(
        ".content-title",
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          duration: 1,
          y: 0,
          ease: "power4.out",
        }
      );

      let aLi = gsap.fromTo(
        ".content-items",
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power4.out",
        }
      );

      AnimeLine.add(aTitle);
      AnimeLine.add(aLi, "-=0.5");
    }

    onMounted(() => {
      Anime();
    });
    return {
      isOpen,
      closeModal,
      viewCode,
      openModal,
      openModal1,
      openModal2,
      openModal3,
      openModal4,
      openModal5,
      openModal6,
      openModal7,
      openModal8,
      openModal9,
      openModal10,
      openModal11,
    };
  },
};
</script>

<style scoped>
.LoadingKit {
  @apply bg-gray-100 pt-40 flex justify-center;
  min-height: 100vh;
}

.LoadingKit-content {
  width: 100%;
  /* max-width: 80rem; */
  padding: 0 4rem;
}

.content-title {
  @apply text-left w-full;
}

.LoadingKit-content ul {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.LoadingKit-content ul li {
  width: 100%;
  height: 55vh;
  max-height: 360px;
}

.LoadingKit-content-itme-view {
  @apply flex justify-center items-center w-full h-full;
  flex-direction: column;
  position: relative;
}

.openModal-button {
  position: absolute;
  bottom: 5%;
}

.code-HTML,
.code-CSS {
  overflow: auto;
  max-height: 24rem;
}

/* itemCode - parent */
.parent {
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

/* itemCode-TWO */

.parent-round {
  width: 80px;
  height: 80px;
  position: relative;
  animation: round-bot-rotate 2.5s infinite linear both;
}

.round-dot {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  animation: round-dot 2s infinite ease-in-out both;
}

.round-dot:before {
  content: "";
  display: block;
  width: 25%;
  height: 25%;
  background-color: #fff;
  border-radius: 100%;
  animation: round-dot-before 2s infinite ease-in-out both;
}

.round-dot:nth-child(1) {
  animation-delay: -1.1s;
}
.round-dot:nth-child(2) {
  animation-delay: -1s;
}
.round-dot:nth-child(3) {
  animation-delay: -0.9s;
}
.round-dot:nth-child(4) {
  animation-delay: -0.8s;
}
.round-dot:nth-child(5) {
  animation-delay: -0.7s;
}
.round-dot:nth-child(6) {
  animation-delay: -0.6s;
}
.round-dot:nth-child(1):before {
  animation-delay: -1.1s;
}
.round-dot:nth-child(2):before {
  animation-delay: -1s;
}
.round-dot:nth-child(3):before {
  animation-delay: -0.9s;
}
.round-dot:nth-child(4):before {
  animation-delay: -0.8s;
}
.round-dot:nth-child(5):before {
  animation-delay: -0.7s;
}
.round-dot:nth-child(6):before {
  animation-delay: -0.6s;
}

@keyframes round-bot-rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes round-dot {
  80%,
  100% {
    transform: rotate(360deg);
  }
}

@keyframes round-dot-before {
  50% {
    transform: scale(0.4);
  }
  100%,
  0% {
    transform: scale(1);
  }
}

/* itemCode-THREE */
.parent2 {
  width: 60px;
  height: 60px;

  position: relative;
  margin: 100px auto;
}

.double-bounce1,
.double-bounce2 {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #fff;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;

  -webkit-animation: sk-bounce 2s infinite ease-in-out;
  animation: sk-bounce 2s infinite ease-in-out;
}

.double-bounce2 {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}

@-webkit-keyframes sk-bounce {
  0%,
  100% {
    -webkit-transform: scale(0);
  }
  50% {
    -webkit-transform: scale(1);
  }
}

@keyframes sk-bounce {
  0%,
  100% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  50% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}

/* itemCode-4 */
.parent3 {
  margin: 100px auto;
  width: 50px;
  height: 40px;
  text-align: center;
  font-size: 10px;
  display: flex;
  gap: 2px;
}

.parent3 > div {
  background-color: #fff;
  height: 100%;
  width: 6px;
  display: inline-block;

  -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
  animation: sk-stretchdelay 1.2s infinite ease-in-out;
}

.parent3 .rect2 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}

.parent3 .rect3 {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}

.parent3 .rect4 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}

.parent3 .rect5 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}

@-webkit-keyframes sk-stretchdelay {
  0%,
  40%,
  100% {
    -webkit-transform: scaleY(0.4);
  }
  20% {
    -webkit-transform: scaleY(1);
  }
}

@keyframes sk-stretchdelay {
  0%,
  40%,
  100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
    -webkit-transform: scaleY(1);
  }
}

/* itemCode-5 */
.parent4 {
  margin: 100px auto;
  width: 40px;
  height: 40px;
  position: relative;
}

.cube1,
.cube2 {
  background-color: #fff;
  width: 15px;
  height: 15px;
  position: absolute;
  top: 0;
  left: 0;

  -webkit-animation: sk-cubemove 1.8s infinite ease-in-out;
  animation: sk-cubemove 1.8s infinite ease-in-out;
}

.cube2 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}

@-webkit-keyframes sk-cubemove {
  25% {
    -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);
  }
  50% {
    -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);
  }
  75% {
    -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg)
      scale(0.5);
  }
  100% {
    -webkit-transform: rotate(-360deg);
  }
}

@keyframes sk-cubemove {
  25% {
    transform: translateX(42px) rotate(-90deg) scale(0.5);
    -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);
  }
  50% {
    transform: translateX(42px) translateY(42px) rotate(-179deg);
    -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);
  }
  50.1% {
    transform: translateX(42px) translateY(42px) rotate(-180deg);
    -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);
  }
  75% {
    transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
    -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg)
      scale(0.5);
  }
  100% {
    transform: rotate(-360deg);
    -webkit-transform: rotate(-360deg);
  }
}

/* itemCode-6 */
.parent5 {
  width: 60px;
  height: 60px;
  margin: 100px auto;
  background-color: #fff;

  border-radius: 100%;
  -webkit-animation: sk-scaleout 1s infinite ease-in-out;
  animation: sk-scaleout 1s infinite ease-in-out;
}

@-webkit-keyframes sk-scaleout {
  0% {
    -webkit-transform: scale(0);
  }
  100% {
    -webkit-transform: scale(1);
    opacity: 0;
  }
}

@keyframes sk-scaleout {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0;
  }
}

/* itemCode-7 */
.parent6 {
  margin: 100px auto;
  width: 40px;
  height: 40px;
  position: relative;
  text-align: center;

  -webkit-animation: sk-rotate 2s infinite linear;
  animation: sk-rotate 2s infinite linear;
}

.dot1,
.dot2 {
  width: 60%;
  height: 60%;
  display: inline-block;
  position: absolute;
  top: 0;
  background-color: #fff;
  border-radius: 100%;

  -webkit-animation: sk-bounce 2s infinite ease-in-out;
  animation: sk-bounce 2s infinite ease-in-out;
}

.dot2 {
  top: auto;
  bottom: 0;
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}

@-webkit-keyframes sk-rotate {
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes sk-rotate {
  100% {
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
  }
}

@-webkit-keyframes sk-bounce {
  0%,
  100% {
    -webkit-transform: scale(0);
  }
  50% {
    -webkit-transform: scale(1);
  }
}

@keyframes sk-bounce {
  0%,
  100% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  50% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}

/* itemCode-8 */
.parent7 {
  width: 70px;
  text-align: center;
  display: flex;
  gap: 8px;
}

.parent7 > div {
  width: 18px;
  height: 18px;
  background-color: #fff;

  border-radius: 100%;
  display: inline-block;
  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}

.parent7 .bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.parent7 .bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

@-webkit-keyframes sk-bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
  }
}

@keyframes sk-bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

/* itemCode-9 */
.sk-circle {
  margin: 100px auto;
  width: 80px;
  height: 80px;
  position: relative;
}
.sk-circle .sk-child {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.sk-circle .sk-child:before {
  content: "";
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: #fff;
  border-radius: 100%;
  -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;
  animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;
}
.sk-circle .sk-circle2 {
  -webkit-transform: rotate(30deg);
  -ms-transform: rotate(30deg);
  transform: rotate(30deg);
}
.sk-circle .sk-circle3 {
  -webkit-transform: rotate(60deg);
  -ms-transform: rotate(60deg);
  transform: rotate(60deg);
}
.sk-circle .sk-circle4 {
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
}
.sk-circle .sk-circle5 {
  -webkit-transform: rotate(120deg);
  -ms-transform: rotate(120deg);
  transform: rotate(120deg);
}
.sk-circle .sk-circle6 {
  -webkit-transform: rotate(150deg);
  -ms-transform: rotate(150deg);
  transform: rotate(150deg);
}
.sk-circle .sk-circle7 {
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}
.sk-circle .sk-circle8 {
  -webkit-transform: rotate(210deg);
  -ms-transform: rotate(210deg);
  transform: rotate(210deg);
}
.sk-circle .sk-circle9 {
  -webkit-transform: rotate(240deg);
  -ms-transform: rotate(240deg);
  transform: rotate(240deg);
}
.sk-circle .sk-circle10 {
  -webkit-transform: rotate(270deg);
  -ms-transform: rotate(270deg);
  transform: rotate(270deg);
}
.sk-circle .sk-circle11 {
  -webkit-transform: rotate(300deg);
  -ms-transform: rotate(300deg);
  transform: rotate(300deg);
}
.sk-circle .sk-circle12 {
  -webkit-transform: rotate(330deg);
  -ms-transform: rotate(330deg);
  transform: rotate(330deg);
}
.sk-circle .sk-circle2:before {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}
.sk-circle .sk-circle3:before {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}
.sk-circle .sk-circle4:before {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}
.sk-circle .sk-circle5:before {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}
.sk-circle .sk-circle6:before {
  -webkit-animation-delay: -0.7s;
  animation-delay: -0.7s;
}
.sk-circle .sk-circle7:before {
  -webkit-animation-delay: -0.6s;
  animation-delay: -0.6s;
}
.sk-circle .sk-circle8:before {
  -webkit-animation-delay: -0.5s;
  animation-delay: -0.5s;
}
.sk-circle .sk-circle9:before {
  -webkit-animation-delay: -0.4s;
  animation-delay: -0.4s;
}
.sk-circle .sk-circle10:before {
  -webkit-animation-delay: -0.3s;
  animation-delay: -0.3s;
}
.sk-circle .sk-circle11:before {
  -webkit-animation-delay: -0.2s;
  animation-delay: -0.2s;
}
.sk-circle .sk-circle12:before {
  -webkit-animation-delay: -0.1s;
  animation-delay: -0.1s;
}

@-webkit-keyframes sk-circleBounceDelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes sk-circleBounceDelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

/* itemCode-10 */
.sk-cube-grid {
  width: 60px;
  height: 60px;
  margin: 100px auto;
}

.sk-cube-grid .sk-cube {
  width: 33%;
  height: 33%;
  background-color: #fff;
  float: left;
  -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
  animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
}
.sk-cube-grid .sk-cube1 {
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}
.sk-cube-grid .sk-cube2 {
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
}
.sk-cube-grid .sk-cube3 {
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
}
.sk-cube-grid .sk-cube4 {
  -webkit-animation-delay: 0.1s;
  animation-delay: 0.1s;
}
.sk-cube-grid .sk-cube5 {
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}
.sk-cube-grid .sk-cube6 {
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
}
.sk-cube-grid .sk-cube7 {
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
}
.sk-cube-grid .sk-cube8 {
  -webkit-animation-delay: 0.1s;
  animation-delay: 0.1s;
}
.sk-cube-grid .sk-cube9 {
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}

@-webkit-keyframes sk-cubeGridScaleDelay {
  0%,
  70%,
  100% {
    -webkit-transform: scale3D(1, 1, 1);
    transform: scale3D(1, 1, 1);
  }
  35% {
    -webkit-transform: scale3D(0, 0, 1);
    transform: scale3D(0, 0, 1);
  }
}

@keyframes sk-cubeGridScaleDelay {
  0%,
  70%,
  100% {
    -webkit-transform: scale3D(1, 1, 1);
    transform: scale3D(1, 1, 1);
  }
  35% {
    -webkit-transform: scale3D(0, 0, 1);
    transform: scale3D(0, 0, 1);
  }
}

/* itemCode-11 */
.sk-fading-circle {
  width: 80px;
  height: 80px;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
}

.sk-fading-circle .sk-circleA {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}

.sk-fading-circle .sk-circleA:before {
  content: "";
  display: block;
  width: 15%;
  height: 15%;
  background-color: #fff;
  border-radius: 100%;
  -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;
  animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;
}
.sk-fading-circle .sk-circle2 {
  -webkit-transform: rotate(30deg);
  -ms-transform: rotate(30deg);
  transform: rotate(30deg);
}
.sk-fading-circle .sk-circle3 {
  -webkit-transform: rotate(60deg);
  -ms-transform: rotate(60deg);
  transform: rotate(60deg);
}
.sk-fading-circle .sk-circle4 {
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
}
.sk-fading-circle .sk-circle5 {
  -webkit-transform: rotate(120deg);
  -ms-transform: rotate(120deg);
  transform: rotate(120deg);
}
.sk-fading-circle .sk-circle6 {
  -webkit-transform: rotate(150deg);
  -ms-transform: rotate(150deg);
  transform: rotate(150deg);
}
.sk-fading-circle .sk-circle7 {
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}
.sk-fading-circle .sk-circle8 {
  -webkit-transform: rotate(210deg);
  -ms-transform: rotate(210deg);
  transform: rotate(210deg);
}
.sk-fading-circle .sk-circle9 {
  -webkit-transform: rotate(240deg);
  -ms-transform: rotate(240deg);
  transform: rotate(240deg);
}
.sk-fading-circle .sk-circle10 {
  -webkit-transform: rotate(270deg);
  -ms-transform: rotate(270deg);
  transform: rotate(270deg);
}
.sk-fading-circle .sk-circle11 {
  -webkit-transform: rotate(300deg);
  -ms-transform: rotate(300deg);
  transform: rotate(300deg);
}
.sk-fading-circle .sk-circle12 {
  -webkit-transform: rotate(330deg);
  -ms-transform: rotate(330deg);
  transform: rotate(330deg);
}
.sk-fading-circle .sk-circle2:before {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}
.sk-fading-circle .sk-circle3:before {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}
.sk-fading-circle .sk-circle4:before {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}
.sk-fading-circle .sk-circle5:before {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}
.sk-fading-circle .sk-circle6:before {
  -webkit-animation-delay: -0.7s;
  animation-delay: -0.7s;
}
.sk-fading-circle .sk-circle7:before {
  -webkit-animation-delay: -0.6s;
  animation-delay: -0.6s;
}
.sk-fading-circle .sk-circle8:before {
  -webkit-animation-delay: -0.5s;
  animation-delay: -0.5s;
}
.sk-fading-circle .sk-circle9:before {
  -webkit-animation-delay: -0.4s;
  animation-delay: -0.4s;
}
.sk-fading-circle .sk-circle10:before {
  -webkit-animation-delay: -0.3s;
  animation-delay: -0.3s;
}
.sk-fading-circle .sk-circle11:before {
  -webkit-animation-delay: -0.2s;
  animation-delay: -0.2s;
}
.sk-fading-circle .sk-circle12:before {
  -webkit-animation-delay: -0.1s;
  animation-delay: -0.1s;
}

@-webkit-keyframes sk-circleFadeDelay {
  0%,
  39%,
  100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}

@keyframes sk-circleFadeDelay {
  0%,
  39%,
  100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}

/* itemCode-12 */
.sk-folding-cube {
  margin: 20px auto;
  width: 40px;
  height: 40px;
  position: relative;
  -webkit-transform: rotateZ(45deg);
  transform: rotateZ(45deg);
}

.sk-folding-cube .sk-cube {
  float: left;
  width: 50%;
  height: 50%;
  position: relative;
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}
.sk-folding-cube .sk-cube:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  -webkit-animation: sk-foldCubeAngle 2.4s infinite linear both;
  animation: sk-foldCubeAngle 2.4s infinite linear both;
  -webkit-transform-origin: 100% 100%;
  -ms-transform-origin: 100% 100%;
  transform-origin: 100% 100%;
}
.sk-folding-cube .sk-cube2 {
  -webkit-transform: scale(1.1) rotateZ(90deg);
  transform: scale(1.1) rotateZ(90deg);
}
.sk-folding-cube .sk-cube3 {
  -webkit-transform: scale(1.1) rotateZ(180deg);
  transform: scale(1.1) rotateZ(180deg);
}
.sk-folding-cube .sk-cube4 {
  -webkit-transform: scale(1.1) rotateZ(270deg);
  transform: scale(1.1) rotateZ(270deg);
}
.sk-folding-cube .sk-cube2:before {
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
}
.sk-folding-cube .sk-cube3:before {
  -webkit-animation-delay: 0.6s;
  animation-delay: 0.6s;
}
.sk-folding-cube .sk-cube4:before {
  -webkit-animation-delay: 0.9s;
  animation-delay: 0.9s;
}
@-webkit-keyframes sk-foldCubeAngle {
  0%,
  10% {
    -webkit-transform: perspective(140px) rotateX(-180deg);
    transform: perspective(140px) rotateX(-180deg);
    opacity: 0;
  }
  25%,
  75% {
    -webkit-transform: perspective(140px) rotateX(0deg);
    transform: perspective(140px) rotateX(0deg);
    opacity: 1;
  }
  90%,
  100% {
    -webkit-transform: perspective(140px) rotateY(180deg);
    transform: perspective(140px) rotateY(180deg);
    opacity: 0;
  }
}

@keyframes sk-foldCubeAngle {
  0%,
  10% {
    -webkit-transform: perspective(140px) rotateX(-180deg);
    transform: perspective(140px) rotateX(-180deg);
    opacity: 0;
  }
  25%,
  75% {
    -webkit-transform: perspective(140px) rotateX(0deg);
    transform: perspective(140px) rotateX(0deg);
    opacity: 1;
  }
  90%,
  100% {
    -webkit-transform: perspective(140px) rotateY(180deg);
    transform: perspective(140px) rotateY(180deg);
    opacity: 0;
  }
}

/* itemCode-13 */

@media screen and (max-width: 960px) {
  .LoadingKit-content ul {
    display: grid;
    grid-template-columns: 1fr;
  }

  .LoadingKit-content {
    padding: 0 4rem;
  }
}

@media screen and (min-width: 1920px) {
  .LoadingKit-content ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* grid-gap: 20px; */
  }

  .LoadingKit-content {
    padding: 0 4rem;
  }
}
</style>