<!--
* @fileName  ContentNew4 - 可视化数据平台
* @author Moby Tang
* @date 2022-03-10 11:08:56
* @version V3.0.0
!-->
<template>
  <div
    id="ContentNew4"
    class="
      ContentNew4
      flex flex-col
      items-center
      bg-dark-blue
      p-3
      overflow-auto
    "
  >
    <div class="bg-white w-full h-full flex flex-col items-center rounded-sm">
      <contentNew04 />
      <div
        class="flex justify-between border-t border-gray-400 pt-10 mt-20 mb-12 w-11/12 px-6"
        style="max-width:1024px"
      >
        <RouterLink class="before-button flex items-center" :to="{ name: 'document-system' }">
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
            <span class="font-normal">SEGI 文档系统</span>
          </div>
        </RouterLink>

        <RouterLink class="after-button flex items-center flex-row-reverse opacity-30 pointer-events-none" :to="{name: 'billing-center'}">
          <svg
            width="74px"
            height="74px"
          >
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
            <span class="font-normal text-right"
              >计费中心(更新中)</span
            >
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import contentNew04 from "../contents/contentNew04.md";

export default {
  name: "ContentNew4",
  components: {
    contentNew04,
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
    });
    return {
    };
  },
};
</script>
<style >
@import "../assets/contentStyle.css";
@import "../assets/markdownStyle.css";
@import "../assets/slide4.css";
</style>