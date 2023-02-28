<template>
  <div class="flex justify-center bg-gray-100">
    <div class="w-11/12 mt-24 sm:mt-40">
      <h1 class="font-bold text-4xl sm:text-5xl">Hi, I'm Maosusu</h1>
      <h2 class="font-bold text-3xl text-gray-400 mt-2 sm:mt-4">
        交互设计师 / 动效设计师 / 前端动画开发
      </h2>

      <div
        class="avatarContainer flex justify-center items-center mt-6 sm:mt-10 h-96 sm:h-192 relative overflow-hidden rounded-md bg-dark-blue"
      >
        <img
          ref="avatar"
          id="avatar"
          src="https://mtwork.oss-cn-shenzhen.aliyuncs.com/blog-assets/me.png"
          alt=""
          class="w-60 h-60 sm:w-80 sm:h-80 rounded-full border-4 border-gray-300 z-10 hidden"
        />
      </div>

      <div class="flex flex-col justify-center w-full my-10 items-center">
        <ul class="infoBox w-11/12">
          <h3 class="pb-4 sm:pb-8 font-bold text-dark-blue text-2xl sm:text-xl">
            介绍
          </h3>
          <div class="border-b pb-6 sm:pb-16 border-gray-300">
            <p>我叫唐清伟, 朋友们都称呼猫叔叔</p>
            <p class="mt-2">
              2012 年毕业, 大学专业是漫画, 毕业后第一份工作是做车载导航GUI,
              之后转型网页动效与交互。
            </p>
            <p class="mt-2 text-justify">
              2016 年在 Framer.cn 和 Flinto.cn 的 QQ 群认识了一个华为的设计专家,
              然后被他带到了 华为 UCD, 在设计二部 服务了 4 年, 在创新团队中承担
              动效 与 交互 工作。
            </p>
            <p class="mt-2 text-justify">
              20 年来到四格互联, 这是一家对接政府, 地产和园区物业的软件服务商,
              目前正在从事 "
              <a
                href="https://www.notion.so/246c3e8a9ae240e092bab74c3a2e7678"
                target="_blank"
                class="text-dark-blue underline hover:text-orange-500 font-bold"
                >设计资产数字化</a
              >
              " 的工作。
            </p>
          </div>

          <h3 class="pb-4 sm:pb-8 font-bold text-dark-blue text-2xl sm:text-xl">
            联系
          </h3>
          <div class="border-b pb-6 sm:pb-16 border-gray-300">
            <p class="">Phone: 13922832244</p>
            <p class="mt-2">Email: baobaomi900901@icloud.com</p>
            <p class="mt-2">
              BiliBili:
              <a
                href="https://space.bilibili.com/20388600?spm_id_from=333.1007.0.0"
                target="_blank"
                class="text-dark-blue underline hover:text-orange-500 font-bold"
                >CodingStartup_阿喵</a
              >
              <span class="text-gray-400">(前端动画案例, 学习总结为主)</span>
            </p>
          </div>

          <h3 class="sm:y-8 font-bold text-dark-blue text-2xl sm:text-xl">
            教育
          </h3>
          <div class="border-b pb-6 sm:pb-16 border-gray-300">
            <p>2009 年 ~ 2012 年</p>
            <p class="font-bold mt-2">湖南大众传媒职业技术学院 | 大专</p>
            <p class="mt-2">卡漫设计与制作</p>
            <br />
            <p>2018 年 ~ 2021 年</p>
            <p class="font-bold mt-2">湖南师范大学 | 非全日制本科</p>
            <p class="mt-2">心理学</p>
            <br />
          </div>

          <h3 class="sm:pb-8 font-bold text-dark-blue text-2xl sm:text-xl">
            我会什么?
          </h3>
          <div class="border-b pb-6 sm:pb-16 border-gray-300">
            <p class="font-bold">界面设计与交互:</p>
            <p class="font-light">Adobe、Sketch、Figma、Axure</p>
            <br />
            <p class="font-bold">动效&3D设计:</p>
            <p class="font-light">After Effects、Blender、Spine</p>
            <br />
            <p class="font-bold">DesignThink:</p>
            <p class="font-light">原子设计、设计冲刺、精益设计</p>
            <br />
            <p class="font-bold">Code:</p>
            <p class="font-light">
              HTML、Javascript(初级)、
              CSS(熟练)、SASS、LESS、Tailwind、Vue、WordPress、 动画库(
              GSAP、Anime.js、Lottie )
            </p>
          </div>

          <h3 class="sm:pb-8 font-bold text-dark-blue text-2xl sm:text-xl">
            在做什么?
          </h3>
          <div class="border-b pb-6 sm:pb-16 border-gray-300">
            <p class="font-bold">
              构建设计系统 / 交互设计 / 动效设计 / 前端动画开发
            </p>
            <p class="font-light">
              运用丰富的工作经验和前端知识, 给设计团队赋能
            </p>
          </div>

          <h3 class="sm:pb-8 font-bold text-dark-blue text-2xl sm:text-xl">
            想做什么?
          </h3>
          <div class="border-b pb-6 sm:pb-16 border-gray-300">
            <p class="font-bold">
              设计实现(Design+code) / 前端动画开发 / WebGL 设计
            </p>
          </div>

          <h3 class="sm:pb-8 font-bold text-dark-blue text-2xl sm:text-xl">
            在学什么?
          </h3>
          <div class="border-b pb-6 sm:pb-16 border-gray-300">
            <p>WebGL, Three.js, Blender</p>
          </div>

          <h3 class="sm:pb-8 font-bold text-dark-blue text-2xl sm:text-xl">
            经验
          </h3>
          <div class="space-y-2 pb-6 sm:pb-16">
            <p class="font-bold">inke映客直播广州分公司</p>
            <p class="text-base">
              2022.06 ~ 2022.11 | 设计部-交互组组长、UX2 组代理组长
            </p>
            <p class="font-light pt">
              负责社交, 电子书,
              盲盒的版本迭代的交互设计;搭配前端开发提高版本质量,
              优化用户体验;对内负责组内人员的知识培训和项目管理。
              <br />
              <br />
              <span class="font-normal">工作内容:</span>:
              <br />
              1. 协助1v1交友、盲盒、电子书次级赛道的产品经理完成交互设计;
              <br />
              2.每周二、四晚上为设计团队培训 Web 前端知识;
              <br />
              3. 协助项目 UX 设计师与前端开发落地设计;
              <br />
              4. 筹划 INKE 广分公司的设计资产数字化变革，因INKE
              广分公司业务线调整， 11 月解散设计部门，此终止;
            </p>
            <br />
            <br />
            <p class="font-bold">深圳市四格互联信息技术有限公司</p>
            <p class="text-base">2020.03 ~ 2022.05 | 产品设计部 - 交互组组长</p>
            <p class="font-light pt">
              四格互联是一家园区经营软件供应商, 我在其中负责: 租赁、OA、CRM
              、数据大屏等核心产品的交互设计; 并且配合前端团队输出 代码级 组件
              与 页面模板 code, 协调并帮助前端团队设计落地。
              <br />
              <br />
              <span class="font-normal">工作内容:</span>
              <br />
              在完成本身业务需求外, 协调产品经理元件库(axure), UI 设计 symbol,
              前端组件样式统一, 并与前端开发共同输出基于 tailwindcss
              的代码级模板, 提升 SaaS 平台多产品线设计一致性的同时 减少 UI
              出图这一低价值步骤。
            </p>
            <br />
            <p class="font-bold">
              深圳软通动力信息技术有限公司 | 华为 UCD 驻场
            </p>
            <p class="text-base">
              2016 年 ~ 2020 年 | 交互设计师 ( 高级主任工程师 7 级 )
            </p>
            <p class="font-light pt">
              外包岗位，驻深圳龙岗华为基地 2012 实验室 UCD ，协助创新团队完成
              TOP 级项目的交互设计、动画设计、原型制作 以及 Web 端设计落地;
              <br />
              <br />
              <span class="font-normal">经历项目:</span>
              <br />
              1. BES 电信据点 Web 端后台设计；
              <br />
              2. 2018 巴塞罗那电信展，Vodafone 移动应用概念设计；
              <br />
              3. 2018 IF 红点奖, Agile UI 的组件设计 ；
              <br />
              4. 无代码建站工具 UI +交互设计；
              <br />
              5. 2018香港电信运营商 HKT 数字化转型项目，动画设计与代码落地；
              <br />
              6. 华为销售系统 iSlace 移动端设计；
              <br />
              7. 华为供应链 ISC+ 体验优化，交互&UI 规范；
            </p>
            <br />
            <br />
            <p class="font-bold">深圳市蘑菇财富技术有限公司</p>
            <p class="text-base">2015 年 ~ 2016 年 | UI / 交互设计师</p>
            <p class="font-light pt">
              统筹设计组三人的工作，负责的交互设计与金融游戏的动画设计。
              <br />
            </p>
            <br />
            <br />
            <p class="font-bold">东莞远峰科技有限公司</p>
            <p class="font-base">2012 年 ~ 2015 年 | GUI 设计师</p>
            <p class="font-light pt">
              负责公司便携式导航设备(PND)、安卓电视盒UI设计。
            </p>
          </div>
        </ul>

        <div
          class="w-full flex flex-col justify-center items-center text-center text-xl"
        >
          <p
            class="w-full border-t border-gray-300 pt-10 mb-10"
            style="max-width: 960px"
          >
            👏🏻 欢迎联系我!
          </p>
          <div class="space-x-8">
            <button
              class="border-2 border-dark-blue text-lg text-dark-blue font-normal uppercase p-5 hover:text-white hover:bg-dark-blue transition duration-200 ease-linear"
              style="min-width: 8rem"
              @click="contact"
            >
              联系我
            </button>
            <button
              class="border-2 border-dark-blue text-lg text-dark-blue font-normal uppercase p-5 hover:text-white hover:bg-dark-blue transition duration-200 ease-linear"
              @click="resume"
              style="min-width: 8rem"
            >
              查看简历
            </button>
          </div>
        </div>

        <div
          class="w-full mt-10 sm:my-20 text-sm text-center text-gray-800 border-gray-300"
        >
          <p>项目中的所有信息都是我个人产出的。</p>
          <p>所有信息都符合保密协定🤐</p>
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
      });
    });

    function contact() {
      window.location.href = "mailto:baobaomi900901@icloud.com";
    }

    function resume() {
      window.open(
        // "https://mtwork.oss-cn-shenzhen.aliyuncs.com/blog-assets/%E7%AE%80%E5%8E%86-%E5%94%90%E6%B8%85%E4%BC%9F-2022-new.pdf"
        "https://mtwork.oss-cn-shenzhen.aliyuncs.com/blog-assets/%E7%AE%80%E5%8E%86-%E5%94%90%E6%B8%85%E4%BC%9F-2023.pdf"
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

@media (max-width: 767px) {
  .infoBox {
    max-width: 100%;
    grid-row-gap: 1rem;
    grid-template-columns: auto;
  }
}

@media (min-width: 768px) {
  .infoBox {
    @apply mt-20 grid text-lg;
    max-width: 960px;
    grid-row-gap: 4rem;
    grid-template-columns: minmax(120px, 320px) auto;
  }
}
</style>
