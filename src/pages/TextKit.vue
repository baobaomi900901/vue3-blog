<!--
* @description  参数1
* @fileName  TextKit
* @author userName
* @date 2023-03-13 13:18:02
* @version V3.0.0
!-->
<template>
  <div id="TextKit" class="TextKit">
    <div class="TextKit-content mb-32">
      <div
        class="content-title text-6xl font-black mb-8 sm:text-5xl mobile:text-4xl mobile:mb-4"
      >
        Text Anime Kit.
        <br />
        <span class="text-base font-medium text-gray-400 mix-blend-difference"
          >anime.js 实现的文字动画</span
        >
      </div>

      <ul>
        <li class="content-items LoadingKit-content">
          <div
            class="TextKit-content-itme-view"
            style="background: #333; color: #f3e9c6"
          >
            <h1 class="textAnime">
              <span class="letters letters-1">Ready</span>
              <span class="letters letters-2">Set</span>
              <span class="letters letters-3">Go!</span>
            </h1>
            <button
              type="button"
              @click="openModal"
              class="openModal-button rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              View Code
            </button>
          </div>
        </li>

        <li class="content-items LoadingKit-content-1">
          <div
            class="TextKit-content-itme-view bg-green-500"
            style="background: #c1605c; color: #fff"
          >
            <h1 class="textAnime1">Film Subtitle</h1>

            <button
              type="button"
              @click="openModal1"
              class="openModal-button rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              View Code
            </button>
          </div>
        </li>

        <li class="content-items LoadingKit-content-2">
          <div
            class="TextKit-content-itme-view"
            style="background: #45383c; color: #fff"
          >
            <h1 class="textAnime2">
              <span class="letters">Smart Fonts</span>
            </h1>

            <button
              type="button"
              @click="openModal2"
              class="openModal-button rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              View Code
            </button>
          </div>
        </li>

        <li class="content-items LoadingKit-content-3">
          <div
            class="TextKit-content-itme-view"
            style="background: #98bec8; color: #fff"
          >
            <h1 class="textAnime3">
              <span class="text-wrapper">
                <span class="line line1"></span>
                <span class="letters uppercase">throne</span>
                <span class="line line2"></span>
              </span>
            </h1>

            <button
              type="button"
              @click="openModal3"
              class="openModal-button rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              View Code
            </button>
          </div>
        </li>

        <li class="content-items LoadingKit-content-4">
          <div
            class="TextKit-content-itme-view"
            style="background: #9ba5b5; color: #fff"
          >
            <h1 class="textAnime4">BlendTrans</h1>
            <button
              type="button"
              @click="openModal4"
              class="openModal-button rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              View Code
            </button>
          </div>
        </li>

        <li class="content-items LoadingKit-content-5">
          <div
            class="TextKit-content-itme-view"
            style="background: #224a54; color: #fff"
          >
            <h1 class="textAnime5">
              <span class="text-wrapper">
                <span class="letters">Bounce Fonts</span>
              </span>
            </h1>

            <button
              type="button"
              @click="openModal5"
              class="openModal-button rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              View Code
            </button>
          </div>
        </li>

        <li class="content-items LoadingKit-content-6">
          <div
            class="TextKit-content-itme-view"
            style="background: #c1605c; color: #fff"
          >
            <h1 class="textAnime6">
              <span class="text-wrapper">
                <span class="line line1"></span>
                <span class="letters">Hello Goodbye</span>
              </span>
            </h1>

            <button
              type="button"
              @click="openModal6"
              class="openModal-button rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              View Code
            </button>
          </div>
        </li>

        <li class="content-items LoadingKit-content-7">
          <div
            class="TextKit-content-itme-view"
            style="background: #43383c; color: #fff"
          >
            <h1 class="textAnime7">A new production</h1>

            <button
              type="button"
              @click="openModal7"
              class="openModal-button rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              View Code
            </button>
          </div>
        </li>

        <li class="content-items LoadingKit-content-8">
          <div
            class="TextKit-content-itme-view"
            style="background: #2c4953; color: #fff"
          >
            <h1 class="textAnime8">Rising Strong</h1>

            <button
              type="button"
              @click="openModal8"
              class="openModal-button rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              View Code
            </button>
          </div>
        </li>

        <li class="content-items LoadingKit-content-9">
          <div
            class="TextKit-content-itme-view"
            style="background: #1a1a1a; color: #fff"
          >
            <h1 class="textAnime9">
              <span class="text-wrapper">
                <span class="letters">Find Your Element</span>
                <span class="line"></span>
              </span>
            </h1>

            <button
              type="button"
              @click="openModal9"
              class="openModal-button rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              View Code
            </button>
          </div>
        </li>

        <li class="content-items LoadingKit-content-10">
          <div
            class="TextKit-content-itme-view"
            style="background: #9da5b4; color: #fff"
          >
            <h1 class="textAnime10">
              <div class="letters-container">
                <div class="letters letters-left">Hi</div>
                <div class="letters bang">!</div>
              </div>
              <div class="circle circle-white"></div>
              <div class="circle circle-dark"></div>
              <div class="circle circle-container"></div>
              <div class="circle circle-dark-dashed"></div>
            </h1>

            <button
              type="button"
              @click="openModal10"
              class="openModal-button rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              View Code
            </button>
          </div>
        </li>

        <li class="content-items LoadingKit-content-11">
          <div class="TextKit-content-itme-view" style="background: #fff">
            <div class="textAnime11">
              <h1 class="letters">0%</h1>
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

                  <Disclosure as="div" class="mt-2" v-slot="{ open }">
                    <DisclosureButton
                      class="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75"
                    >
                      <span>JavaScript</span>
                      <ChevronUpIcon
                        :class="open ? 'rotate-180 transform' : ''"
                        class="h-5 w-5 text-blue-500"
                      />
                    </DisclosureButton>
                    <DisclosurePanel class="code-CSS">
                      <Highlight
                        :code="viewCode.JS"
                        type="js"
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

<script >
import { ref, reactive, onMounted } from "vue";
import { ChevronUpIcon } from "@heroicons/vue/20/solid";
import Highlight from "../components/Highlight.vue";
import { gsap } from "gsap";
import anime from "animejs/lib/anime.es.js";

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
  name: "TextKit",
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
    // 初始化
    const isOpen = ref(false);
    function closeModal() {
      isOpen.value = false;
    }
    const AnimeLine = gsap.timeline({
      delay: 1,
      onComplete() {},
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

    // code-data
    const viewCode = reactive({
      HTML: `HTML`,
      CSS: `CSS`,
      JS: `JS`,
    });
    const itemCode = reactive({
      HTML: `
<h1 class="textAnime">
    <span class="letters letters-1">Ready</span>
    <span class="letters letters-2">Set</span>
    <span class="letters letters-3">Go!</span>
</h1>`,
      CSS: `
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
}`,
      JS: `
const textAnime = {};
textAnime.opacityIn = [0, 1];
textAnime.scaleIn = [0.2, 1];
textAnime.scaleOut = 3;
textAnime.durationIn = 800;
textAnime.durationOut = 600;
textAnime.delay = 500;

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
  });`,
    });
    const itemCode1 = reactive({
      HTML: `
<h1 class="textAnime1">Sunny mornings</h1>`,
      CSS: `
.textAnime1 {
  font-weight: 900;
  font-size: 2em;
}

.textAnime1 .letter {
  display: inline-block;
  line-height: 1em;
}`,
      JS: `
const textWrapper = document.querySelector(".textAnime1");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);
anime
  .timeline({ loop: true })
  .add({
    targets: ".textAnime1 .letter",
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70 * i,
  })
  .add({
    targets: ".textAnime1",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });`,
    });
    const itemCode2 = reactive({
      HTML: `
<h1 class="textAnime2">
    <span class="letters">Beautiful Questions</span>
</h1>`,
      CSS: `
.textAnime2 {
  position: relative;
  font-weight: 900;
  font-size: 2em;
}

.textAnime2 .letter {
  display: inline-block;
  line-height: 1em;
}`,
      JS: `
const textWrapper = document.querySelector(".textAnime2 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".textAnime2 .letter",
    opacity: [0, 1],
    translateY: ["1rem", 0],
    delay: (el, i) => {
      console.log(el.innerHTML, i);
      return 50 * i;
    },
  })
  .add({
    targets: ".textAnime2",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });`,
    });
    const itemCode3 = reactive({
      HTML: `
<h1 class="textAnime3">
    <span class="text-wrapper">
        <span class="line line1"></span>
        <span class="letters">THURSDAY</span>
        <span class="line line2"></span>
    </span>
</h1>`,
      CSS: `
.textAnime3 {
  font-weight: 900;
  font-size: 3.5em;
}

.textAnime3 .letter {
  display: inline-block;
  line-height: 1em;
}

.textAnime3 .text-wrapper {
  position: relative;
  display: inline-block;
  padding-top: 0.1em;
  padding-right: 0.05em;
  padding-bottom: 0.15em;
}

.textAnime3 .line {
  opacity: 0;
  position: absolute;
  left: 0;
  height: 3px;
  width: 100%;
  background-color: #fff;
  transform-origin: 0 0;
}

.textAnime3 .line1 {
  top: 0;
}
.textAnime3 .line2 {
  bottom: 0;
}`,
      JS: `
const textWrapper = document.querySelector(".textAnime3 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".textAnime3 .letter",
    scale: [0.3, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 70 * (i + 1),
  })
  .add({
    targets: ".textAnime3 .line",
    scaleX: [0, 1],
    opacity: [0.5, 1],
    easing: "easeOutExpo",
    duration: 700,
    offset: "-=875",
    delay: (el, i, l) => 80 * (l - i),
  })
  .add({
    targets: ".textAnime3",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });`,
    });
    const itemCode4 = reactive({
      HTML: `
<h1 class="textAnime4">Great Thinkers</h1>`,
      CSS: `
.textAnime4 {
  font-weight: 900;
  font-size: 2em;
}`,
      JS: `
const textWrapper = document.querySelector(".textAnime5 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".textAnime5 .letter",
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i + 1),
  })
  .add({
    targets: ".textAnime5",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });`,
    });
    const itemCode5 = reactive({
      HTML: `
<h1 class="textAnime5">
  <span class="text-wrapper">
    <span class="letters">Coffee mornings</span>
  </span>
</h1>`,
      CSS: `
.textAnime5 {
  position: relative;
  font-weight: 200;
  font-size: 2em;
}

.textAnime5 .text-wrapper {
  position: relative;
  display: inline-block;
  padding-top: 0.2em;
  padding-right: 0.05em;
  padding-bottom: 0.1em;
  overflow: hidden;
}

.textAnime5 .letter {
  transform-origin: 50% 100%;
  display: inline-block;
  line-height: 1em;
}`,
      JS: `
const textWrapper = document.querySelector(".textAnime4");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime.timeline({loop: true})
  .add({
    targets: '.textAnime4 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.textAnime4',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });`,
    });
    const itemCode6 = reactive({
      HTML: `
<h1 class="textAnime6">
    <span class="text-wrapper">
        <span class="line line1"></span>
        <span class="letters">Hello Goodbye</span>
    </span>
</h1>
`,
      CSS: `
.textAnime6 {
  font-weight: 700;
  font-size: 2em;
}

.textAnime6 .text-wrapper {
  position: relative;
  display: inline-block;
  padding-top: 0.1em;
  padding-right: 0.05em;
  padding-bottom: 0.15em;
}

.textAnime6 .line {
  opacity: 0;
  position: absolute;
  left: 0;
  height: 100%;
  width: 3px;
  background-color: #fff;
  transform-origin: 0 50%;
}

.textAnime6 .line1 {
  top: 0;
  left: 0;
}

.textAnime6 .letter {
  display: inline-block;
  line-height: 1em;
}
`,
      JS: `
const textWrapper = document.querySelector(".textAnime6 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".textAnime6 .line",
    scaleY: [0, 1],
    opacity: [0.5, 1],
    easing: "easeOutExpo",
    duration: 700,
  })
  .add({
    targets: ".textAnime6 .line",
    translateX: [
      0,
      document.querySelector(".textAnime6 .letters").getBoundingClientRect()
        .width + 10,
    ],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100,
  })
  .add({
    targets: ".textAnime6 .letter",
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 34 * (i + 1),
  },"-=775")
  .add({
    targets: ".textAnime6",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });
`,
    });
    const itemCode7 = reactive({
      HTML: `
<h1 class="textAnime7">A new production</h1>
`,
      CSS: `
.textAnime7 {
  font-weight: 200;
  font-size: 1em;
  text-transform: uppercase;
  letter-spacing: 0.5em;
}

.textAnime7 .letter {
  display: inline-block;
  line-height: 1em;
}
`,
      JS: `
const textWrapper = document.querySelector(".textAnime7");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime.timeline({loop: true})
  .add({
    targets: '.textAnime7 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.textAnime7 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });
`,
    });
    const itemCode8 = reactive({
      HTML: `
<h1 class="textAnime8">Rising Strong</h1>
`,
      CSS: `
.textAnime8 {
  font-size: 1.4em;
  text-transform: uppercase;
  letter-spacing: 0.5em;
  font-weight: 600;
}

.textAnime8 .letter {
  display: inline-block;
  line-height: 1em;
}
`,
      JS: `
const textWrapper = document.querySelector(".textAnime8");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".textAnime8 .letter",
    translateY: [100, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 300 + 30 * i,
  })
  .add({
    targets: ".textAnime8 .letter",
    translateY: [0, -100],
    opacity: [1, 0],
    easing: "easeInExpo",
    duration: 1200,
    delay: (el, i) => 100 + 30 * i,
  });
`,
    });
    const itemCode9 = reactive({
      HTML: `
<h1 class="textAnime9">
    <span class="text-wrapper">
        <span class="letters">Find Your Element</span>
        <span class="line"></span>
    </span>
</h1>
`,
      CSS: `
.textAnime9 {
  font-weight: 200;
  font-size: 2em;
}

.textAnime9 .text-wrapper {
  position: relative;
  display: inline-block;
  padding-top: 0.1em;
  padding-right: 0.05em;
  padding-bottom: 0.15em;
}

.textAnime9 .line {
  opacity: 0;
  position: absolute;
  left: 0;
  height: 2px;
  width: 100%;
  background-color: #fff;
  transform-origin: 100% 100%;
  bottom: 0;
}

.textAnime9 .letter {
  display: inline-block;
  line-height: 1em;
}
`,
      JS: `
const textWrapper = document.querySelector(".textAnime9 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".textAnime9 .line",
    scaleX: [0, 1],
    opacity: [0.5, 1],
    easing: "easeInOutExpo",
    duration: 900,
  })
  .add(
    {
      targets: ".textAnime9 .letter",
      opacity: [0, 1],
      translateX: [40, 0],
      translateZ: 0,
      scaleX: [0.3, 1],
      easing: "easeOutExpo",
      duration: 800,
      delay: (el, i) => 150 + 25 * i,
    },
    "-=600"
  )
  .add({
    targets: ".textAnime9",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });
`,
    });
    const itemCode10 = reactive({
      HTML: `
<h1 class="textAnime10">
    <div class="letters-container">
        <div class="letters letters-left">Hi</div>
        <div class="letters bang">!</div>
    </div>
    <div class="circle circle-white"></div>
    <div class="circle circle-dark"></div>
    <div class="circle circle-container"></div>
    <div class="circle circle-dark-dashed"></div>
</h1>
`,
      CSS: `
      .textAnime10 {
  font-weight: 900;
  font-size: 8em;
  color: #fff;
  width: 100%;
  height: 3em;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.textAnime10 .letters-container {
  z-index: 10;
  display: flex;
  align-items: center;
}

.textAnime10 .letters-left {
  font-size: 4rem;
}

.textAnime10 .letters {
  line-height: 0.7em;
}

.textAnime10 .bang {
  font-size: 5rem;
}

.textAnime10 .circle {
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: 0;
  bottom: 0;
}

.textAnime10 .circle-white {
  width: 1.6em;
  height: 1.6em;
  border: 2px dashed white;
  border-radius: 2em;
}

.textAnime10 .circle-dark {
  width: 1.2em;
  height: 1.2em;
  background-color: #4f7b86;
  border-radius: 2em;
  z-index: 1;
}

.textAnime10 .circle-dark-dashed {
  width: 1.4em;
  height: 1.4em;
  border-radius: 2em;
  background-color: transparent;
  border: 2px dashed #4f7b86;
}
`,
      JS: `
anime
  .timeline({ loop: true })
  .add({
    targets: ".textAnime10 .circle-white",
    scale: [0, 3],
    opacity: [1, 0],
    easing: "easeInOutExpo",
    rotateZ: 360,
    duration: 1100,
  })
  .add(
    {
      targets: ".textAnime10 .circle-dark-dashed",
      opacity: [0, 1],
      duration: 900,
      easing: "easeInOutExpo",
    },
    "-=900"
  )
  .add(
    {
      targets: ".textAnime10 .circle-container",
      scale: [0, 1],
      duration: 1100,
      easing: "easeInOutExpo",
    },
    "-=1000"
  )
  .add(
    {
      targets: ".textAnime10 .circle-dark",
      scale: [0, 1],
      duration: 1100,
      easing: "easeOutExpo",
    },
    "-=600"
  )
  .add(
    {
      targets: ".textAnime10 .letters-left",
      scale: [0, 1],
      duration: 1200,
    },
    "-=550"
  )
  .add(
    {
      targets: ".textAnime10 .bang",
      scale: [0, 1],
      rotateZ: [45, 15],
      duration: 1200,
    },
    "-=1000"
  )
  .add({
    targets: ".textAnime10",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1400,
  });

anime({
  targets: ".textAnime10 .circle-dark-dashed",
  rotateZ: 360,
  duration: 8000,
  easing: "linear",
  loop: true,
});
`,
    });
    const itemCode11 = reactive({
      HTML: `
<div class="textAnime11">
    <h1 class="letters">0%</h1>
</div>
`,
      CSS: `
.textAnime11 {
  font-family: "Russo One", sans-serif;
  color: #333;
  font-size: 6em;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 30;
  transform-style: preserve-3d;
  perspective: 400px;
}
`,
      JS: `
anime
  .timeline({
    easing: "easeOutExpo",
    duration: 750,
    loop: true,
  })
  .add({
    targets: ".textAnime11 .letters",
    innerHTML: ["0%", "100%"],
    round: 1,
    easing: "easeInOutExpo",
    duration: 4000,
  })
  .add(
    {
      targets: ".textAnime11 .letters",
      rotateY: -20,
      rotateX: -20,
      rotateZ: 0,
      color: "#a72c32",
      duration: 800,
      easing: "easeInOutExpo",
    },
    "-=1200"
  )
  .add(
    {
      targets: ".textAnime11 .letters",
      rotateY: 120,
      rotateX: 120,
      rotateZ: 0,
      scale: 0,
      easing: "easeInOutExpo",
    },
    "-=100"
  )
  .add(
    {
      targets: ".textAnime11 .letters",
      opacity: 0,
      easing: "easeInOutExpo",
    },
    "-=400"
  )
`,
    });

    // anime-function
    function MyTextAnime() {
      const textAnime = {};
      textAnime.opacityIn = [0, 1];
      textAnime.scaleIn = [0.2, 1];
      textAnime.scaleOut = 3;
      textAnime.durationIn = 800;
      textAnime.durationOut = 600;
      textAnime.delay = 500;

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
    function MyTextAnime1() {
      const textWrapper = document.querySelector(".textAnime1");
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );

      anime
        .timeline({ loop: true })
        .add({
          targets: ".textAnime1 .letter",
          scale: [4, 1],
          opacity: [0, 1],
          translateZ: 0,
          easing: "easeOutExpo",
          duration: 950,
          delay: (el, i) => 70 * i,
        })
        .add({
          targets: ".textAnime1",
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000,
        });
    }
    function MyTextAnime2() {
      const textWrapper = document.querySelector(".textAnime2 .letters");
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );

      anime
        .timeline({ loop: true })
        .add({
          targets: ".textAnime2 .letter",
          opacity: [0, 1],
          translateY: ["1rem", 0],
          delay: (el, i) => {
            return 50 * i;
          },
        })
        .add({
          targets: ".textAnime2",
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000,
        });
    }
    function MyTextAnime3() {
      const textWrapper = document.querySelector(".textAnime3 .letters");
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );

      anime
        .timeline({ loop: true })
        .add({
          targets: ".textAnime3 .letter",
          scale: [0.3, 1],
          opacity: [0, 1],
          translateZ: 0,
          easing: "easeOutExpo",
          duration: 600,
          delay: (el, i) => 70 * (i + 1),
        })
        .add({
          targets: ".textAnime3 .line",
          scaleX: [0, 1],
          opacity: [0.5, 1],
          easing: "easeOutExpo",
          duration: 700,
          offset: "-=875",
          delay: (el, i, l) => 80 * (l - i),
        })
        .add({
          targets: ".textAnime3",
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000,
        });
    }
    function MyTextAnime4() {
      const textWrapper = document.querySelector(".textAnime4");
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );

      anime
        .timeline({ loop: true })
        .add({
          targets: ".textAnime4 .letter",
          opacity: [0, 1],
          easing: "easeInOutQuad",
          duration: 2250,
          delay: (el, i) => 150 * (i + 1),
        })
        .add({
          targets: ".textAnime4",
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000,
        });
    }
    function MyTextAnime5() {
      const textWrapper = document.querySelector(".textAnime5 .letters");
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );

      anime
        .timeline({ loop: true })
        .add({
          targets: ".textAnime5 .letter",
          scale: [0, 1],
          duration: 1500,
          elasticity: 600,
          delay: (el, i) => 45 * (i + 1),
        })
        .add({
          targets: ".textAnime5",
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000,
        });
    }
    function MyTextAnime6() {
      const textWrapper = document.querySelector(".textAnime6 .letters");
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );

      anime
        .timeline({ loop: true })
        .add({
          targets: ".textAnime6 .line",
          scaleY: [0, 1],
          opacity: [0.5, 1],
          easing: "easeOutExpo",
          duration: 700,
        })
        .add({
          targets: ".textAnime6 .line",
          translateX: [
            0,
            document
              .querySelector(".textAnime6 .letters")
              .getBoundingClientRect().width + 10,
          ],
          easing: "easeOutExpo",
          duration: 700,
          delay: 100,
        })
        .add(
          {
            targets: ".textAnime6 .letter",
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 600,
            delay: (el, i) => 34 * (i + 1),
          },
          "-=775"
        )
        .add({
          targets: ".textAnime6",
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000,
        });
    }
    function MyTextAnime7() {
      const textWrapper = document.querySelector(".textAnime7");
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );

      anime
        .timeline({ loop: true })
        .add({
          targets: ".textAnime7 .letter",
          translateX: [40, 0],
          translateZ: 0,
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 1200,
          delay: (el, i) => 500 + 30 * i,
        })
        .add({
          targets: ".textAnime7 .letter",
          translateX: [0, -30],
          opacity: [1, 0],
          easing: "easeInExpo",
          duration: 1100,
          delay: (el, i) => 100 + 30 * i,
        });
    }
    function MyTextAnime8() {
      const textWrapper = document.querySelector(".textAnime8");
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );

      anime
        .timeline({ loop: true })
        .add({
          targets: ".textAnime8 .letter",
          translateY: [100, 0],
          translateZ: 0,
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 1400,
          delay: (el, i) => 300 + 30 * i,
        })
        .add({
          targets: ".textAnime8 .letter",
          translateY: [0, -100],
          opacity: [1, 0],
          easing: "easeInExpo",
          duration: 1200,
          delay: (el, i) => 100 + 30 * i,
        });
    }
    function MyTextAnime9() {
      const textWrapper = document.querySelector(".textAnime9 .letters");
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );

      anime
        .timeline({ loop: true })
        .add({
          targets: ".textAnime9 .line",
          scaleX: [0, 1],
          opacity: [0.5, 1],
          easing: "easeInOutExpo",
          duration: 900,
        })
        .add(
          {
            targets: ".textAnime9 .letter",
            opacity: [0, 1],
            translateX: [40, 0],
            translateZ: 0,
            scaleX: [0.3, 1],
            easing: "easeOutExpo",
            duration: 800,
            delay: (el, i) => 150 + 25 * i,
          },
          "-=600"
        )
        .add({
          targets: ".textAnime9",
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000,
        });
    }
    function MyTextAnime10() {
      anime
        .timeline({ loop: true })
        .add({
          targets: ".textAnime10 .circle-white",
          scale: [0, 3],
          opacity: [1, 0],
          easing: "easeInOutExpo",
          rotateZ: 360,
          duration: 1100,
        })
        .add(
          {
            targets: ".textAnime10 .circle-dark-dashed",
            opacity: [0, 1],
            duration: 900,
            easing: "easeInOutExpo",
          },
          "-=900"
        )
        .add(
          {
            targets: ".textAnime10 .circle-container",
            scale: [0, 1],
            duration: 1100,
            easing: "easeInOutExpo",
          },
          "-=1000"
        )
        .add(
          {
            targets: ".textAnime10 .circle-dark",
            scale: [0, 1],
            duration: 1100,
            easing: "easeOutExpo",
          },
          "-=600"
        )
        .add(
          {
            targets: ".textAnime10 .letters-left",
            scale: [0, 1],
            duration: 1200,
          },
          "-=550"
        )
        .add(
          {
            targets: ".textAnime10 .bang",
            scale: [0, 1],
            rotateZ: [45, 15],
            duration: 1200,
          },
          "-=1000"
        )
        .add({
          targets: ".textAnime10",
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1400,
        });

      anime({
        targets: ".textAnime10 .circle-dark-dashed",
        rotateZ: 360,
        duration: 8000,
        easing: "linear",
        loop: true,
      });
    }
    function MyTextAnime11() {
      anime
        .timeline({
          easing: "easeOutExpo",
          duration: 750,
          loop: true,
        })
        .add({
          targets: ".textAnime11 .letters",
          innerHTML: ["0%", "100%"],
          round: 1,
          easing: "easeInOutExpo",
          duration: 4000,
        })
        .add(
          {
            targets: ".textAnime11 .letters",
            rotateY: -20,
            rotateX: -20,
            rotateZ: 0,
            color: "#a72c32",
            duration: 800,
            easing: "easeInOutExpo",
          },
          "-=1200"
        )
        .add(
          {
            targets: ".textAnime11 .letters",
            rotateY: 120,
            rotateX: 120,
            rotateZ: 0,
            scale: 0,
            easing: "easeInOutExpo",
          },
          "-=100"
        )
        .add(
          {
            targets: ".textAnime11 .letters",
            opacity: 0,
            easing: "easeInOutExpo",
          },
          "-=400"
        );
    }

    // button-function
    function openModal() {
      isOpen.value = true;
      viewCode.HTML = itemCode.HTML;
      viewCode.CSS = itemCode.CSS;
      viewCode.JS = itemCode.JS;
    }
    function openModal1() {
      isOpen.value = true;
      viewCode.HTML = itemCode1.HTML;
      viewCode.CSS = itemCode1.CSS;
      viewCode.JS = itemCode1.JS;
    }
    function openModal2() {
      isOpen.value = true;
      viewCode.HTML = itemCode2.HTML;
      viewCode.CSS = itemCode2.CSS;
      viewCode.JS = itemCode2.JS;
    }
    function openModal3() {
      isOpen.value = true;
      viewCode.HTML = itemCode3.HTML;
      viewCode.CSS = itemCode3.CSS;
      viewCode.JS = itemCode3.JS;
    }
    function openModal4() {
      isOpen.value = true;
      viewCode.HTML = itemCode4.HTML;
      viewCode.CSS = itemCode4.CSS;
      viewCode.JS = itemCode4.JS;
    }
    function openModal5() {
      isOpen.value = true;
      viewCode.HTML = itemCode5.HTML;
      viewCode.CSS = itemCode5.CSS;
      viewCode.JS = itemCode5.JS;
    }
    function openModal6() {
      isOpen.value = true;
      viewCode.HTML = itemCode6.HTML;
      viewCode.CSS = itemCode6.CSS;
      viewCode.JS = itemCode6.JS;
    }
    function openModal7() {
      isOpen.value = true;
      viewCode.HTML = itemCode7.HTML;
      viewCode.CSS = itemCode7.CSS;
      viewCode.JS = itemCode7.JS;
    }
    function openModal8() {
      isOpen.value = true;
      viewCode.HTML = itemCode8.HTML;
      viewCode.CSS = itemCode8.CSS;
      viewCode.JS = itemCode8.JS;
    }
    function openModal9() {
      isOpen.value = true;
      viewCode.HTML = itemCode9.HTML;
      viewCode.CSS = itemCode9.CSS;
      viewCode.JS = itemCode9.JS;
    }
    function openModal10() {
      isOpen.value = true;
      viewCode.HTML = itemCode10.HTML;
      viewCode.CSS = itemCode10.CSS;
      viewCode.JS = itemCode10.JS;
    }
    function openModal11() {
      isOpen.value = true;
      viewCode.HTML = itemCode11.HTML;
      viewCode.CSS = itemCode11.CSS;
      viewCode.JS = itemCode11.JS;
    }
    function openModal12() {
      isOpen.value = true;
      viewCode.HTML = itemCode12.HTML;
      viewCode.CSS = itemCode12.CSS;
      viewCode.JS = itemCode12.JS;
    }

    onMounted(() => {
      document.body.style.overflow = "auto";
      Anime();
      MyTextAnime();
      MyTextAnime1();
      MyTextAnime2();
      MyTextAnime3();
      MyTextAnime4();
      MyTextAnime5();
      MyTextAnime6();
      MyTextAnime7();
      MyTextAnime8();
      MyTextAnime9();
      MyTextAnime10();
      MyTextAnime11();
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
      openModal12,
    };
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Russo+One&display=swap");

/* base */
/* #region */
.TextKit {
  @apply bg-gray-100 pt-40 flex justify-center;
  min-height: 100vh;
}

.TextKit-content {
  width: 100%;
  /* max-width: 80rem; */
  padding: 0 4rem;
}

.content-title {
  @apply text-left w-full;
}

.TextKit-content ul {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.TextKit-content ul li {
  width: 100%;
  height: 55vh;
  max-height: 360px;
}

.TextKit-content-itme-view {
  @apply flex justify-center items-center w-full h-full;
  flex-direction: column;
  position: relative;
}

.openModal-button {
  position: absolute;
  bottom: 5%;
}

.code-HTML,
.code-CSS,
.code-JS {
  overflow: auto;
  max-height: 24rem;
}
/* #endregion */

/* code-items */
/* #region */
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
/* #endregion */

/* code-items-1 */
/* #region */
.textAnime1 {
  font-weight: 900;
  font-size: 2em;
}

.textAnime1 .letter {
  display: inline-block;
  line-height: 1em;
}
/* #endregion */

/* code-items-2 */
/* #region */
.textAnime2 {
  position: relative;
  font-weight: 900;
  font-size: 2em;
}

.textAnime2 .letter {
  display: inline-block;
  line-height: 1em;
}

/* #endregion */

/* code-items-3 */
/* #region */
.textAnime3 {
  font-weight: 900;
  font-size: 2em;
}

.textAnime3 .letter {
  display: inline-block;
  line-height: 1em;
}

.textAnime3 .text-wrapper {
  position: relative;
  display: inline-block;
  padding-top: 0.1em;
  padding-right: 0.05em;
  padding-bottom: 0.15em;
}

.textAnime3 .line {
  opacity: 0;
  position: absolute;
  left: 0;
  height: 3px;
  width: 100%;
  background-color: #fff;
  transform-origin: 0 0;
}

.textAnime3 .line1 {
  top: 0;
}
.textAnime3 .line2 {
  bottom: 0;
}
/* #endregion */

/* code-items-4 */
/* #region */
.textAnime4 {
  font-weight: 900;
  font-size: 2em;
}
/* #endregion */

/* code-items-5 */
/* #region */
.textAnime5 {
  position: relative;
  font-weight: 200;
  font-size: 2em;
}

.textAnime5 .text-wrapper {
  position: relative;
  display: inline-block;
  padding-top: 0.2em;
  padding-right: 0.05em;
  padding-bottom: 0.1em;
  overflow: hidden;
}

.textAnime5 .letter {
  transform-origin: 50% 100%;
  display: inline-block;
  line-height: 1em;
}
/* #endregion */

/* code-items-6 */
/* #region */
.textAnime6 {
  font-weight: 700;
  font-size: 2em;
}

.textAnime6 .text-wrapper {
  position: relative;
  display: inline-block;
  padding-top: 0.1em;
  padding-right: 0.05em;
  padding-bottom: 0.15em;
}

.textAnime6 .line {
  opacity: 0;
  position: absolute;
  left: 0;
  height: 100%;
  width: 3px;
  background-color: #fff;
  transform-origin: 0 50%;
}

.textAnime6 .line1 {
  top: 0;
  left: 0;
}

.textAnime6 .letter {
  display: inline-block;
  line-height: 1em;
}
/* #endregion */

/* code-items-7 */
/* #region */
.textAnime7 {
  font-weight: 200;
  font-size: 1em;
  text-transform: uppercase;
  letter-spacing: 0.5em;
}

.textAnime7 .letter {
  display: inline-block;
  line-height: 1em;
}
/* #endregion */

/* code-items-8 */
/* #region */
.textAnime8 {
  font-size: 1.4em;
  text-transform: uppercase;
  letter-spacing: 0.5em;
  font-weight: 600;
}

.textAnime8 .letter {
  display: inline-block;
  line-height: 1em;
}
/* #endregion */

/* code-items-9 */
/* #region */
.textAnime9 {
  font-weight: 200;
  font-size: 2em;
}

.textAnime9 .text-wrapper {
  position: relative;
  display: inline-block;
  padding-top: 0.1em;
  padding-right: 0.05em;
  padding-bottom: 0.15em;
}

.textAnime9 .line {
  opacity: 0;
  position: absolute;
  left: 0;
  height: 2px;
  width: 100%;
  background-color: #fff;
  transform-origin: 100% 100%;
  bottom: 0;
}

.textAnime9 .letter {
  display: inline-block;
  line-height: 1em;
}
/* #endregion */

/* code-items-10 */
/* #region */
.textAnime10 {
  font-weight: 900;
  font-size: 8em;
  color: #fff;
  width: 100%;
  height: 3em;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.textAnime10 .letters-container {
  z-index: 10;
  display: flex;
  align-items: center;
}

.textAnime10 .letters-left {
  font-size: 4rem;
}

.textAnime10 .letters {
  line-height: 0.7em;
}

.textAnime10 .bang {
  font-size: 5rem;
}

.textAnime10 .circle {
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: 0;
  bottom: 0;
}

.textAnime10 .circle-white {
  width: 1.6em;
  height: 1.6em;
  border: 2px dashed white;
  border-radius: 2em;
}

.textAnime10 .circle-dark {
  width: 1.2em;
  height: 1.2em;
  background-color: #4f7b86;
  border-radius: 2em;
  z-index: 1;
}

.textAnime10 .circle-dark-dashed {
  width: 1.4em;
  height: 1.4em;
  border-radius: 2em;
  background-color: transparent;
  border: 2px dashed #4f7b86;
}
/* #endregion */

/* code-items-11 */
/* #region */
.textAnime11 {
  /* loading w-full h-full flex justify-center items-center z-30 absolute */
  font-family: "Russo One", sans-serif;
  color: #333;
  font-size: 6em;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 30;
  transform-style: preserve-3d;
  perspective: 400px;
}
/* #endregion */

/* code-items-12 */
/* #region */
/* #endregion */

@media screen and (max-width: 960px) {
  .TextKit-content ul {
    display: grid;
    grid-template-columns: 1fr;
  }

  .TextKit-content {
    padding: 0 4rem;
  }
}

@media screen and (min-width: 1920px) {
  .TextKit-content ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* grid-gap: 20px; */
  }

  .TextKit-content {
    padding: 0 4rem;
  }
}
</style>