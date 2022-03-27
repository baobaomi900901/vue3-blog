<!--
* @fileName  ContentNew1 - segi 设计系统
* @author Moby Tang
* @date 2022-03-10 11:08:56
* @version V3.0.0
!-->
<template>
  <div
    id="ContentNew1"
    class="
      ContentNew1
      flex flex-col
      items-center
      bg-dark-blue
      p-3
      overflow-auto
    "
  >
    <div class="ContentNew1-page bg-white w-full h-full flex flex-col items-center rounded-sm">
      <contentNew01 />
      <div
        class="
          flex
          justify-between
          border-t border-gray-400
          pt-10
          mt-20
          mb-12
          w-11/12
          px-6
        "
        style="max-width: 1024px"
      >
        <RouterLink
          class="before-button flex items-center"
          :to="{ name: 'islace-mobile' }"
        >
          <svg width="74px" height="74px">
            <g
              id="r1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g
                id="lsvg"
                transform="translate(-95.000000, -9628.000000)"
                stroke="#000000"
              >
                <g id="Group-18" transform="translate(96.000000, 9572.000000)">
                  <g id="Group-16" transform="translate(0.000000, 57.000000)">
                    <circle id="Oval" cx="36" cy="36" r="36"></circle>
                    <polyline
                      id="Path"
                      transform="translate(41.000000, 36.000000) rotate(45.000000) translate(-41.000000, -36.000000) "
                      points="51 46 31 46 31 26"
                    ></polyline>
                  </g>
                </g>
              </g>
            </g>
          </svg>
          <div class="ml-4 flex flex-col items-start">
            <span class="font-semibold">上一页</span>
            <span class="font-normal">iSlace 移动体验升级</span>
          </div>
        </RouterLink>

        <RouterLink
          class="after-button flex items-center flex-row-reverse"
          :to="{ name: 'segi-template-market' }"
        >
          <svg width="74px" height="74px">
            <g
              id="r1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g
                id="rsvg"
                transform="translate(-1511.000000, -9628.000000)"
                stroke="#000000"
              >
                <g id="Group-18" transform="translate(96.000000, 9572.000000)">
                  <g
                    id="Group-17-Copy"
                    transform="translate(1136.000000, 57.000000)"
                  >
                    <g
                      id="Group-16"
                      transform="translate(316.000000, 36.000000) rotate(180.000000) translate(-316.000000, -36.000000) translate(280.000000, 0.000000)"
                    >
                      <circle id="Oval" cx="36" cy="36" r="36"></circle>
                      <polyline
                        id="Path"
                        transform="translate(41.000000, 36.000000) rotate(45.000000) translate(-41.000000, -36.000000) "
                        points="51 46 31 46 31 26"
                      ></polyline>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
          <div class="mr-4 flex flex-col items-end">
            <span class="font-semibold text-right">下一页</span>
            <span class="font-normal text-right">SEGI 模板市场</span>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import contentNew01 from "../contents/contentNew01.md";

export default {
  name: "ContentNew1",
  components: {
    contentNew01,
  },
  setup() {
    onMounted(() => {
      let scrollTop = document.body.scrollTop;
      scrollTop = 0;
      console.log(scrollTop);
      gsap.set("body", {
        scrollTop: 0,
        onComplete: () => {
          document.body.classList.add("scrollbar-hide", "overflow-scroll");
        },
      });
      gsap.fromTo(".ContentNew1-page", {
        y:10,
      opacity:0,
      },{
        y:0,
        opacity:1,
        duration:0.5,
        delay:0,
        ease:"power3.inOut",
      });
    });
  },
};
</script>
<style >
@import "../assets/contentStyle.css";
@import "../assets/markdownStyle.css";
@import "../assets/slide4.css";
</style>