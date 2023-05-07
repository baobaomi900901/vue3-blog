<!--
* @description  参数1
* @fileName  Blog
* @author userName
* @date 2023-03-09 18:38:37
* @version V3.0.0
!-->
<template>
  <div
    id="Blog"
    class="Blog w-full h-full bg-gray-100 flex py-32 justify-center"
  >
    <div class="blog-content">
      <div
        class="blog-content-title text-6xl font-black mb-8 sm:text-5xl mobile:text-4xl mobile:mb-4"
      >
        Blog.
        <br />
        <span class="text-base font-medium text-gray-400 mix-blend-difference"
          >记录一些思考与技术分享</span
        >
      </div>

      <ul
        class="blog-content-ul font-normal text-gray-700 mobile:text-sm mobile:mt-12 sm:text-lg md:text-2xl 3xl:text-2xl mobile:text-lg zh"
      >
        <li>
          <a
            class="blog-content-li"
            href="https://iodized-samba-a1b.notion.site/246c3e8a9ae240e092bab74c3a2e7678"
            target="_blank"
            >🤔 什么是设计资产数字化?</a
          >
          <br />
          <MyTag type="blue">经验</MyTag>
          <MyTag type="blue">思考</MyTag>
        </li>
        <li>
          <a
            class="blog-content-li"
            href="https://iodized-samba-a1b.notion.site/Design-Code-5d84a410128b425e8c561f6c292588ce"
            target="_blank"
            >👨‍💻 Design + Code 提升用户体验实践</a
          >
          <br />
          <MyTag type="blue">code</MyTag>
          <MyTag type="blue">用户体验</MyTag>
        </li>

        <li>
          <a
            class="blog-content-li"
            href="https://iodized-samba-a1b.notion.site/PRD-8571d50dd07c4e018f45bb050bb2665f"
            target="_blank"
            >📝 交互设计师-PRD文档-自查表</a
          >
          <br />
          <MyTag type="blue">UE</MyTag>
          <MyTag type="blue">经验</MyTag>
        </li>

        <li>
          <a
            class="blog-content-li"
            href="https://iodized-samba-a1b.notion.site/6c342c6e015349f880ad6f8a683d7f17"
            target="_blank"
            >🔍 如何快速了解一个产品</a
          >
          <br />
          <MyTag type="blue">UE</MyTag>
          <MyTag type="blue">经验</MyTag>
        </li>

        <li>
          <a
            class="blog-content-li"
            href="https://iodized-samba-a1b.notion.site/Sketch-Figma-58956aa4bd244929a30e1ac5e005a410"
            target="_blank"
            >🎨 是否需要从 Sketch 迁移到 Figma?</a
          >
          <br />
          <MyTag type="blue">工具</MyTag>
          <MyTag type="blue">思考</MyTag>
        </li>

        <li>
          <a
            class="blog-content-li"
            href="https://iodized-samba-a1b.notion.site/2a19c8949cb34393a75dcda4ebee8a64"
            target="_blank"
            >🍌 缓动动画函数</a
          >
          <br />
          <MyTag type="blue">code</MyTag>
          <MyTag type="blue">经验</MyTag>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted, defineComponent } from "vue";
import { gsap } from "gsap";
import MyTag from "../components/MyTag.vue";

export default defineComponent({
  name: "Blog",
  components: {
    MyTag,
  },
  setup() {
    let blogAnimeLine = gsap.timeline({
      delay: 1,
      onComplete() {
        document.body.classList.add("scrollbar-hide", "overflow-scroll");
      },
    });

    function Anime() {
      let aTitle = gsap.fromTo(
        ".blog-content-title",
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          duration: 1,
          y: 0,
          ease: "power4.out",
        }
      );

      let aUl = gsap.fromTo(
        ".blog-content-ul",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          y: 0,
          ease: "power4.out",
        }
      );

      let aLi = gsap.fromTo(
        ".blog-content li",
        { y: 100 },
        {
          duration: 1,
          y: 0,
          stagger: 0.2,
          ease: "power4.out",
        }
      );

      blogAnimeLine.add(aTitle, 0);
      blogAnimeLine.add(aUl, "-=0.5");
      blogAnimeLine.add(aLi, "-=2");
    }

    onMounted(() => {
      Anime();
      gsap.set("body", {
        scrollTop: 0,
      });
    });
    return {};
  },
});
</script>
<style scoped>
#root {
  --gray-0: #fafafa;
  --highlight-1: #0042f6;
  --highlight-2: #09feff;
}

.Blog {
  min-height: 100vh;
}

.blog-content {
  padding: 0 40px;
  width: 100%;
  max-width: 80rem;
}

.blog-content ul li {
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 20px;
  transition: all 1s;
}
.blog-content ul li + li {
  margin-top: 40px;
}

.blog-content ul li:hover a {
  @apply text-dark-blue;
  letter-spacing: 0.5px;
}

.blog-content ul li:hover {
  border-bottom: 1px solid #d8d8d8;
}

.blog-content ul li a {
  position: relative;
  letter-spacing: 0px;
  transition: letter-spacing 0.5s;
}

.blog-content ul li a::after {
  transition: letter-spacing 0.5s;
}

.blog-content ul li:hover a::after {
  content: "👉︎";
  position: absolute;
  animation: labelA 0.5s ease-in-out infinite reverse;
}

@keyframes labelA {
  0% {
    left: -32px;
  }
  100% {
    left: -28px;
  }
}

@media screen and (max-width: 960px) {
  .blog-content {
    padding: 0 2rem !important;
  }
}
</style>