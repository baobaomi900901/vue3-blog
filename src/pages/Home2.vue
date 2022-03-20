<!--
* @description  参数1
* @fileName  Home
* @author userName
* @date 2022-01-30 20:58:49
* @version V3.0.0
!-->
<template>
  <!-- <NavigationBar></NavigationBar> -->
  <!-- overflow-hidden -->
  <div class="HomePage w-full flex z-10 select-none">
    <div
      class="
        HomePage_left
        w-4/12
        h-screen
        hidden
        lg:block
        fixed
        top-0
        z-10
        overflow-hidden
      "
    >
      <div class="h-full flex flex-col">
        <div
          id="leftMenuBox"
          class="
            HomePage_left_menu
            flex flex-1
            justify-center
            items-center
            z-10
            bg-gray-300
            overflow-hidden
          "
        >
          <ul
            class="
              menu-ul
              text-gray-900 text-4xl
              font-semibold
              inline-block
              w-1/2
              h-auto
            "
          >
            <h3 class="menu text-base text-gray-500 mb-10 uppercase">Menu</h3>
            <li class="menuItem mb-3">
              <button
                class="cyberpunk font-semibold"
                data-text="Home"
                @click="clickHome"
              >
                <span
                  class="text-gray-500"
                  :class="{ 'text-black font-bold': pageMenuClass == 1 }"
                >
                  Home</span
                >
              </button>
            </li>
            <li class="menuItem mb-3">
              <button
                class="cyberpunk font-semibold"
                data-text="Introduce"
                @click="clickIntroduce"
              >
                <span
                  class="text-gray-500"
                  :class="{ 'text-black font-bold': pageMenuClass == 2 }"
                >
                  Introduce</span
                >
              </button>
            </li>
            <li class="menuItem mb-3">
              <button
                class="cyberpunk font-semibold"
                data-text="Inspirations"
                @click="clickPortfolio"
              >
                <span
                  class="text-gray-500"
                  :class="{ 'text-black font-bold': pageMenuClass == 3 }"
                >
                  Portfolio</span
                >
              </button>
            </li>
            <li class="menuItem mb-3">
              <button
                class="cyberpunk font-semibold"
                data-text="Contact Me"
                @click="clickContactUs"
              >
                <span
                  class="text-gray-500"
                  :class="{ 'text-black font-bold': pageMenuClass == 4 }"
                >
                  Contact Me</span
                >
              </button>
            </li>
          </ul>
        </div>
        <div id="leftimgbox" class="leftimgbox h-1/5 relative z-0">
          <div
            class="leftimgmark w-full h-full bg-white absolute opacity-50"
          ></div>
          <div class="leftimg"></div>
        </div>
      </div>
    </div>

    <!-- overflow-hidden -->
    <div class="HomePage_content w-full h-screen flex relative">
      <div class="lg:w-4/12"></div>
      <div class="right relative w-full lg:w-8/12">
        <div
          id="HomePageContentHead"
          class="HomePage_content_head h-screen flex flex-col"
        >
          <div class="Introduce flex justify-center items-center flex-1 z-10">
            <div class="myself text-white opacity-80 uppercase leading-loose">
              <div
                ref="welcome"
                id="welcome"
                class="welcome vc text-base font-black mb-4"
              >
                Welcome
              </div>
              <div class="myname font-bold text-9xl">
                <p ref="myname1" id="myname1" class="myname1">i'm</p>
                <p ref="myname2" id="myname2" class="myname2">Rengar</p>
                <p ref="myname3" id="myname3" class="myname3">Tang</p>
              </div>
            </div>
          </div>
          <div class="flex h-1/5 z-10">
            <div
              id="aboutMeBox"
              class="
                aboutMeBox
                aboutme
                blue
                bg-dark-blue
                flex
                justify-center
                items-center
                w-1/2
                flex-1
              "
            >
              <p
                ref="aboutMe"
                id="aboutMe"
                class="text-white text-lg font-extrabold"
              >
                About Me
              </p>
            </div>

            <div class="about text-white text-base uppercase py-0 grid w-1/2">
              <div
                id="aboutLine"
                class="about-describe w-full h-full flex items-end"
              >
                <p
                  ref="aboutText"
                  id="aboutText"
                  class="aboutText text-1xl 2xl:text-2xl mb-4"
                >
                  We're a 3d/motion /interaction /UI /UX & webflow developer.
                </p>
              </div>
              <div
                class="
                  about-linkCoord
                  text-xs
                  flex
                  justify-between
                  items-center
                  box-border
                "
              >
                <a
                  ref="dribbbleLink"
                  id="dribbbleLink"
                  href="https://dribbble.com/MobyTang"
                  class="dribbbleLink"
                  >dribbble</a
                >
                <p ref="myCoords" id="myCoords" class="about-coord">
                  114.089592,22.635423
                </p>
              </div>
            </div>
          </div>
          <div class="w-full h-screen absolute top-0 left-0 bg-gray-50">
            <div
              class="marks absolute w-full h-full grid grid-cols-3 gap-1"
              style="z-index: 1"
            >
              <div class="mark mark1 bg-gray-50 opacity-50"></div>
              <div class="mark mark2 bg-gray-50 opacity-50"></div>
              <div class="mark mark3 bg-gray-50 opacity-50"></div>
            </div>
            <div class="hbimg"></div>
          </div>
        </div>

        <div
          id="homePage2"
          ref="homePage2"
          class="
            homePage2
            px-40
            lg:pl-40 lg:pr-20
            flex
            items-center
            flex-col
            bg-gray-200
          "
        >
          <div
            ref="el-content-one"
            class="el-Indt-content w-full flex flex-col mt-32"
          >
            <span
              id="elContentOne1"
              ref="elContentOne1"
              class="text-base font-bold"
              >01</span
            >
            <div
              ref="elContentOne2"
              class="elContentOne2 text-6xl font-semibold mb-10"
            >
              Maosusu.😾
            </div>
            <div class="text-2xl break-all" style="max-width: 640px">
              <div ref="elContentOne3" class="elContentOne3">
                Our iMacs will testify to what we use them,
              </div>
              <div ref="elContentOne4" class="elContentOne4">
                Sdfsdfsdd dfsdf dsfsdfffffs dffsfdsf sdsd,
              </div>
              <div ref="elContentOne5" class="elContentOne5">
                Our iMacs will testify to what we use them, Our iMacs will testi
              </div>
            </div>
          </div>

          <div class="el-Indt-fl-content w-full mt-32">
            <div ref="el-content-two">
              <span
                ref="elContentTwo1"
                class="elContentTwo1 text-base font-bold"
                >02</span
              >
              <div ref="elContentTwo2" class="elContentTwo2 mb-4">
                Looking forward to work
              </div>
              <div
                class="
                  w-full
                  flex
                  justify-between
                  items-center
                  pb-4
                  mb-4
                  relative
                "
              >
                <span
                  ref="elContentTwo3"
                  class="elContentTwo3 text-4xl font-bold text-dark-blue"
                  >Industry</span
                >
                <span
                  ref="elContentTwo4"
                  class="elContentTwo4 text-gray-400 font-light"
                  >toB</span
                >
                <div
                  ref="elContentTwo5"
                  class="elContentTwo5 line w-full border-b absolute bottom-0"
                ></div>
              </div>
              <div
                class="
                  w-full
                  flex
                  justify-between
                  items-center
                  pb-4
                  mb-4
                  relative
                "
              >
                <span
                  ref="elContentTwo6"
                  class="elContentTwo6 text-4xl font-bold text-dark-blue"
                  >Workplace</span
                >
                <span
                  ref="elContentTwo7"
                  class="elContentTwo7 text-gray-400 font-light"
                  >ShenZhen&ChangSha</span
                >
                <div
                  ref="elContentTwo8"
                  class="elContentTwo8 line w-full border-b absolute bottom-0"
                ></div>
              </div>
              <div
                class="
                  w-full
                  flex
                  justify-between
                  items-center
                  pb-4
                  mb-4
                  relative
                "
              >
                <span
                  ref="elContentTwo9"
                  class="elContentTwo9 text-4xl font-bold text-dark-blue"
                  >Anytime</span
                >
                <span
                  ref="elContentTwo10"
                  class="elContentTwo10 text-gray-400 font-light"
                  >995</span
                >
                <div
                  ref="elContentTwo11"
                  class="elContentTwo11 line w-full border-b absolute bottom-0"
                ></div>
              </div>
            </div>

            <div>
              <ul class="text-base mt-32 font-bold">
                <li ref="elContentTwo12" class="elContentTwo12">3D</li>
                <li ref="elContentTwo13" class="elContentTwo13">
                  UI/UX Design
                </li>
                <li ref="elContentTwo14" class="elContentTwo14">
                  Motion Design
                </li>
                <li ref="elContentTwo15" class="elContentTwo15">
                  Interaction Design
                </li>
                <li ref="elContentTwo16" class="elContentTwo16">
                  Brand Design
                </li>
                <li ref="elContentTwo17" class="elContentTwo17">
                  Web deveiopment
                </li>
              </ul>
              <div
                ref="elContentTwo18"
                class="elContentTwo18 w-full text-center mt-24 relative"
              >
                Good things comest to down-scrollers 🧼 😆
              </div>

              <div
                ref="elContentThree"
                class="elContentThree w-full mt-24 text-gray-900"
              >
                <div class="Portfolio-title relative mb-8 z-50">
                  <span
                    ref="elContentThree1"
                    class="elContentThree1 text-base font-bold"
                    >03</span
                  >
                  <div
                    ref="elContentThree2"
                    class="elContentThree2 text-6xl font-semibold mb-4"
                  >
                    Portfolio
                  </div>
                  <span
                    ref="elContentThree3"
                    class="
                      elContentThree3
                      text-base
                      font-bold
                      mr-4
                      text-dark-blue
                    "
                    >2017 ~ 2019
                  </span>
                  <span
                    ref="elContentThree4"
                    class="
                      elContentThree4
                      text-base
                      font-bold
                      text-gray-400
                      mix-blend-difference
                    "
                    >Involve in product design</span
                  >
                </div>

                <main class="inspirations z-50">
                  <ul class="ul">
                    <li
                      class="
                        relative
                        flex
                        items-center
                        justify-between
                        pb-4
                        mb-4
                      "
                    >
                      <RouterLink :to="{ name: 'vodafone-conceptual-design' }">
                        <span
                          ref="elContentThree5"
                          class="elContentThree5 content-title"
                          :class="{ cyberpunk: class3 }"
                          data-text="Vodafone Conceptual Design"
                          >Vodafone Conceptual Design</span
                        >
                      </RouterLink>
                      <span
                        ref="elContentThree6"
                        class="elContentThree6 subtitle"
                        >UI/UE/Motion</span
                      >
                      <div
                        ref="elContentThree7"
                        class="elContentThree7 line"
                      ></div>
                    </li>
                    <li>
                      <RouterLink :to="{ name: 'agile-ui' }">
                        <span
                          ref="elContentThree8"
                          class="elContentThree8 content-title"
                          :class="{ cyberpunk: class3 }"
                          data-text="Agile UI Design System"
                          >Agile UI Design System</span
                        >
                      </RouterLink>
                      <span
                        ref="elContentThree9"
                        class="elContentThree9 subtitle"
                        >UE</span
                      >
                      <div
                        ref="elContentThree10"
                        class="elContentThree10 line"
                      ></div>
                    </li>
                    <li>
                      <RouterLink :to="{ name: 'HKT-motion-design' }">
                        <span
                          ref="elContentThree11"
                          class="elContentThree11 content-title"
                          :class="{ cyberpunk: class3 }"
                          data-text="HKT Motion Design"
                          >HKT Motion Design</span
                        >
                      </RouterLink>
                      <span
                        ref="elContentThree12"
                        class="elContentThree12 subtitle"
                        >Motion/Code</span
                      >
                      <div
                        ref="elContentThree13"
                        class="elContentThree13 line"
                      ></div>
                    </li>
                    <li>
                      <RouterLink :to="{ name: 'UI-Lego' }">
                        <span
                          ref="elContentThree14"
                          class="elContentThree14 content-title"
                          :class="{ cyberpunk: class3 }"
                          data-text="UI-Lego"
                          >UI Lego</span
                        >
                      </RouterLink>
                      <span
                        ref="elContentThree15"
                        class="elContentThree15 subtitle"
                        >UE/UI</span
                      >
                      <div
                        ref="elContentThree16"
                        class="elContentThree16 line"
                      ></div>
                    </li>
                    <li>
                      <RouterLink :to="{ name: 'islace-mobile' }">
                        <span
                          ref="elContentThree17"
                          class="elContentThree17 content-title"
                          :class="{ cyberpunk: class3 }"
                          data-text="iSlace Mobile"
                          >iSlace Mobile</span
                        >
                      </RouterLink>
                      <span
                        ref="elContentThree18"
                        class="elContentThree18 subtitle"
                        >UE/Motion</span
                      >
                      <div
                        ref="elContentThree19"
                        class="elContentThree19 line"
                      ></div>
                    </li>
                  </ul>
                </main>
              </div>

              <div ref="el-content-four" class="w-full mt-24">
                <div class="Portfolio-title relative mb-8 z-50">
                  <span
                    ref="elContentFour"
                    class="elContentFour text-base font-bold"
                    >04</span
                  >
                  <br />
                  <span
                    ref="elContentFour1"
                    class="
                      elContentFour1
                      text-base
                      font-bold
                      mr-4
                      text-dark-blue
                    "
                    >2020 ~ New
                  </span>
                  <span
                    ref="elContentFour2"
                    class="
                      elContentFour2
                      text-base
                      font-bold
                      text-gray-400
                      mix-blend-difference
                    "
                    >Involve in product design</span
                  >
                </div>

                <main class="inspirations">
                  <ul class="ul2">
                    <li
                      class="
                        relative
                        flex
                        items-center
                        justify-between
                        pb-4
                        mb-4
                      "
                    >
                      <RouterLink :to="{ name: 'segi-design-system' }">
                        <span
                          ref="elContentFour3"
                          class="elContentFour3 content-title"
                          :class="{ cyberpunk: class3 }"
                          data-text="SEGI Design System"
                          >SEGI Design System</span
                        >
                      </RouterLink>
                      <span ref="elContentFour4" class="elContentFour4 subtitle"
                        >UE/Motion/Code</span
                      >
                      <div
                        ref="elContentFour5"
                        class="elContentFour5 line"
                      ></div>
                    </li>
                    <li>
                      <RouterLink :to="{ name: 'segi-template-market' }">
                        <span
                          ref="elContentFour6"
                          class="elContentFour6 content-title"
                          :class="{ cyberpunk: class4 }"
                          data-text="Template Market"
                          >Template Market</span
                        >
                      </RouterLink>
                      <span ref="elContentFour7" class="elContentFour7 subtitle"
                        >UE/Code</span
                      >
                      <div
                        ref="elContentFour8"
                        class="elContentFour8 line justify-center items-center"
                      ></div>
                    </li>
                    <li>
                      <RouterLink :to="{ name: 'document-system' }">
                        <span
                          ref="elContentFour9"
                          class="elContentFour9 content-title"
                          :class="{ cyberpunk: class4 }"
                          data-text="Document System"
                          >Document System</span
                        >
                      </RouterLink>
                      <span
                        ref="elContentFour10"
                        class="elContentFour10 subtitle"
                        >Motion/Code</span
                      >
                      <div
                        ref="elContentFour11"
                        class="elContentFour11 line"
                      ></div>
                    </li>
                    <li>
                      <RouterLink :to="{ name: 'visualized-data-platform' }">
                        <span
                          ref="elContentFour12"
                          class="elContentFour12 content-title"
                          :class="{ cyberpunk: class4 }"
                          data-text="Visualized Data Platform"
                          >Visualized Data Platform</span
                        >
                      </RouterLink>
                      <span
                        ref="elContentFour13"
                        class="elContentFour13 subtitle"
                        >UE/Code</span
                      >
                      <div
                        ref="elContentFour14"
                        class="elContentFour14 line"
                      ></div>
                    </li>
                    <li>
                      <span
                        ref="elContentFour15"
                        class="elContentFour15 content-title"
                        :class="{ cyberpunk: class4 }"
                        data-text="Billing Center"
                        >Billing Center</span
                      >
                      <span
                        ref="elContentFour16"
                        class="elContentFour16 subtitle"
                        >UE</span
                      >
                      <div
                        ref="elContentFour17"
                        class="elContentFour17 line"
                      ></div>
                    </li>
                  </ul>
                </main>
              </div>
              <div
                ref="elContentFour18"
                class="elContentFour18 w-full text-center mt-24 relative z-50"
              >
                Really 🐂 B huh 👏 😆
              </div>
              <br />
              <div class="" style="height: 400px">
                <div
                  ref="blueBallBox"
                  class="flex justify-center z-50 relative takeToMeBox flex"
                >
                  <div class="takeToMeHot absolute"></div>
                  <div
                    class="
                      absolute
                      w-80
                      h-32
                      flex
                      items-center
                      flex-col
                      text-white
                      font-bold
                    "
                    style="
                      z-index: 51;
                      transform: translate(-50%, -50%);
                      top: 50%;
                      left: 50%;
                    "
                  >
                    <div class="takeToMeText w-full text-center relative">
                      LET ME WORK
                    </div>
                    <div
                      class="
                        takeToMeText2
                        w-full
                        text-center
                        tracking-wide
                        relative
                      "
                      style="text-indent: 1rem"
                    >
                      TALK TO ME ✍️
                    </div>
                  </div>
                  <div class="lottie takeToMe w-80 h-80 z-50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="caView fixed top-0 z-10" style="pointer-events: none"></div>
  </div>
  <router-view></router-view>
</template>

<script lang="ts">
import { ref, reactive, onMounted, watch, onUpdated, computed } from "vue";
import { gsap } from "gsap";
import useTextEnterAnime from "../hooks/useTextEnterAnime";
import contentLineAnime from "../hooks/contentLineAnime";
import WebGL from "../hooks/app";
import { useRouter } from "vue-router";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import lottie from "lottie-web";

// import NavigationBar from "../components/NavigationBar";

export default {
  name: "Home",
  components: {
    // NavigationBar,
  },
  setup() {
    const router = useRouter();

    const class3 = ref(false);
    const class4 = ref(false);

    // elRef
    //#region
    let pageMenuClass = ref(1);
    let welcome = ref(null);
    let myname1 = ref(null);
    let myname2 = ref(null);
    let myname3 = ref(null);
    let aboutMe = ref(null);
    let aboutText = ref(null);
    let dribbbleLink = ref(null);
    let myCoords = ref(null);
    let homePage2 = ref(null);
    let elContentOne1 = ref(null);
    let elContentOne2 = ref(null);
    let elContentOne3 = ref(null);
    let elContentOne4 = ref(null);
    let elContentOne5 = ref(null);

    let elContentTwo1 = ref(null);
    let elContentTwo2 = ref(null);
    let elContentTwo3 = ref(null);
    let elContentTwo4 = ref(null);
    let elContentTwo5 = ref(null);
    let elContentTwo6 = ref(null);
    let elContentTwo7 = ref(null);
    let elContentTwo8 = ref(null);
    let elContentTwo9 = ref(null);
    let elContentTwo10 = ref(null);
    let elContentTwo11 = ref(null);
    let elContentTwo12 = ref(null);
    let elContentTwo13 = ref(null);
    let elContentTwo14 = ref(null);
    let elContentTwo15 = ref(null);
    let elContentTwo16 = ref(null);
    let elContentTwo17 = ref(null);
    let elContentTwo18 = ref(null);

    let elContentThree = ref(null);
    let elContentThree1 = ref(null);
    let elContentThree2 = ref(null);
    let elContentThree3 = ref(null);
    let elContentThree4 = ref(null);
    let elContentThree5 = ref(null);
    let elContentThree6 = ref(null);
    let elContentThree7 = ref(null);
    let elContentThree8 = ref(null);
    let elContentThree9 = ref(null);
    let elContentThree10 = ref(null);
    let elContentThree11 = ref(null);
    let elContentThree12 = ref(null);
    let elContentThree13 = ref(null);
    let elContentThree14 = ref(null);
    let elContentThree15 = ref(null);
    let elContentThree16 = ref(null);
    let elContentThree17 = ref(null);
    let elContentThree18 = ref(null);
    let elContentThree19 = ref(null);

    let elContentFour = ref(null);
    let elContentFour1 = ref(null);
    let elContentFour2 = ref(null);
    let elContentFour3 = ref(null);
    let elContentFour4 = ref(null);
    let elContentFour5 = ref(null);
    let elContentFour6 = ref(null);
    let elContentFour7 = ref(null);
    let elContentFour8 = ref(null);
    let elContentFour9 = ref(null);
    let elContentFour10 = ref(null);
    let elContentFour11 = ref(null);
    let elContentFour12 = ref(null);
    let elContentFour13 = ref(null);
    let elContentFour14 = ref(null);
    let elContentFour15 = ref(null);
    let elContentFour16 = ref(null);
    let elContentFour17 = ref(null);
    let elContentFour18 = ref(null);
    //#endregion

    function clickHome() {
      // let bodyScrollTopNew = document.body.scrollTop;
      let time = Math.abs(document.body.scrollTop - 0) * 0.001;
      time = time < 1 ? time : 1;
      gsap.to(document.body, {
        scrollTop: 0,
        duration: time,
      });
      pageMenuClass.value = 1;
    }

    function clickIntroduce() {
      let bodyScrollTopNew = document.querySelector(".homePage2")?.offsetTop;
      let time = Math.abs(document.body.scrollTop - bodyScrollTopNew) * 0.001;
      time = time < 1 ? time : 1;
      gsap.to(document.body, {
        scrollTop: bodyScrollTopNew,
        duration: time,
      });
      pageMenuClass.value = 2;
    }

    function clickPortfolio() {
      let bodyScrollTopNew =
        document.querySelector(".Portfolio-title")?.offsetTop;
      let time = Math.abs(document.body.scrollTop - bodyScrollTopNew) * 0.001;
      time = time < 1 ? time : 1;
      gsap.to(document.body, {
        scrollTop: bodyScrollTopNew - 100,
        duration: time,
      });
      pageMenuClass.value = 3;
    }

    function clickContactUs() {
      let bodyScrollTopNew = document.body.scrollHeight;

      let time = Math.abs(document.body.scrollTop - bodyScrollTopNew) * 0.001;
      time = time < 1 ? time : 1;
      gsap.to(document.body, {
        scrollTop: bodyScrollTopNew,
        duration: time,
      });
      pageMenuClass.value = 4;
    }

    function scrollToTopMemu() {
      let menu2 = document.querySelector(".homePage2")?.offsetTop;
      let menu3 = document.querySelector(".Portfolio-title")?.offsetTop - 100;
      let scrollHeight = document.body.scrollHeight;
      let scrollTop = document.body.scrollTop;
      let clientHeight = document.body.clientHeight;
      if (scrollTop < menu2) {
        pageMenuClass.value = 1;
      } else if (scrollTop >= menu2 && scrollTop < menu3) {
        pageMenuClass.value = 2;
      } else if (
        scrollTop >= menu3 &&
        scrollHeight > scrollTop + clientHeight
      ) {
        pageMenuClass.value = 3;
      } else {
        pageMenuClass.value = 4;
      }
    }

    onMounted(() => {
      // initialize menu
      scrollToTopMemu();
      window.addEventListener("scroll", scrollToTopMemu, true);
      // initialize scrollTop
      gsap.set("body", {
        scrollTop: 0,
      });

      // part1 start animation shader project
      //#region
      let leftMenuBox = gsap.fromTo(
        "#leftMenuBox",
        {
          transformOrigin: "left",
          scaleX: 0,
          opacity: 0,
        },
        {
          scaleX: 1,
          opacity: 1,
          duration: 0.5,
        }
      );
      let leftimgbox = gsap.fromTo(
        "#leftimgbox",
        {
          transformOrigin: "left",
          scaleX: 0,
          opacity: 0,
        },
        {
          scaleX: 1,
          opacity: 1,
          duration: 0.5,
        }
      );
      let leftimgmark = gsap.fromTo(
        ".leftimgmark",
        {
          transformOrigin: "right",
          scaleX: 1,
          opacity: 1,
        },
        {
          scaleX: 0,
          opacity: 0,
          duration: 0.5,
          stagger: 0,
          onComplete: function () {
            // console.log("mark");
          },
        }
      );
      let leftimg = gsap.fromTo(
        ".leftimg",
        {
          transformOrigin: "right",
          scale: 1.2,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "none",
        }
      );
      let HomePageContentHead = gsap.fromTo(
        "#HomePageContentHead",
        {
          transformOrigin: "left",
          scaleX: 0,
          opacity: 0,
        },
        {
          scaleX: 1,
          opacity: 1,
          duration: 0.8,
        }
      );
      let menu = gsap.fromTo(
        ".menu",
        {
          x: -20,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
        }
      );
      let menuItem = gsap.fromTo(
        ".menuItem",
        {
          x: -20,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
        }
      );
      let welcomeEA = useTextEnterAnime(welcome, 0.2);
      let myname1EA = useTextEnterAnime(myname1, 0.5, 0.02, null, 60);
      let myname2EA = useTextEnterAnime(myname2, 0.5, 0.02, null, 60);
      let myname3EA = useTextEnterAnime(myname3, 0.5, 0.02, null, 60);
      let aboutMeEA = useTextEnterAnime(aboutMe, 0.5, 0.02);
      let aboutTextEA = useTextEnterAnime(aboutText, 0.2, 0.01);
      let dribbbleLinkEA = useTextEnterAnime(dribbbleLink, 0.2, 0.01);
      let myCoordsEA = useTextEnterAnime(myCoords, 0.2, 0.01);
      let aboutMeBox = gsap.fromTo(
        "#aboutMeBox",
        {
          transformOrigin: "left",
          scaleX: 0,
          opacity: 0,
        },
        {
          scaleX: 1,
          opacity: 1,
          duration: 0.5,
        }
      );
      let aboutLine = gsap.fromTo(
        "#aboutLine",
        {
          transformOrigin: "left",
          scaleX: 0,
          opacity: 0,
        },
        {
          scaleX: 1,
          opacity: 1,
          duration: 0.5,
        }
      );
      let mark = gsap.fromTo(
        ".mark",
        {
          transformOrigin: "right",
          scaleX: 1,
          opacity: 1,
        },
        {
          scaleX: 0,
          opacity: 0,
          duration: 0.5,
          stagger: 0,
          onComplete: function () {
            // console.log("mark");
          },
        }
      );
      let hbimg = gsap.fromTo(
        ".hbimg",
        {
          transformOrigin: "left",
          scale: 1.2,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "none",
          // ease: "elastic.out(1, 1)",
        }
      );
      // part1 The timeline
      let homePage1Line = gsap.timeline({
        delay: 1,
        onComplete() {
          document
            .querySelector(".HomePage")
            .classList.remove("overflow-hidden");
          document
            .querySelector(".HomePage_content")
            .classList.remove("overflow-hidden");
          document.body.classList.add("scrollbar-hide", "overflow-scroll");
        },
      });
      homePage1Line.add(leftMenuBox, 0);
      homePage1Line.add(leftimgbox, 0.2);
      homePage1Line.add(leftimgmark, 1.15);
      homePage1Line.add(leftimg, 0.95);
      homePage1Line.add(HomePageContentHead, 0.4);
      homePage1Line.add(menu, 1);
      homePage1Line.add(menuItem, 1.2);
      homePage1Line.add(mark, 1.2); // "-=0.4"
      homePage1Line.add(hbimg, 1);
      homePage1Line.add(welcomeEA, "-=0.5");
      homePage1Line.add(myname1EA, "-=0.2");
      homePage1Line.add(myname2EA, "-=0.4");
      homePage1Line.add(myname3EA, "-=0.4");
      homePage1Line.add(aboutMeBox, "-=1");
      homePage1Line.add(aboutLine, "-=0.5");
      homePage1Line.add(aboutMeEA, "-=0.5");
      homePage1Line.add(aboutTextEA, "-=0.2");
      homePage1Line.add(dribbbleLinkEA, "-=0.8");
      homePage1Line.add(myCoordsEA, "-=0.8");
      //#endregion

      // 01 EA
      //#region
      let contentOneTimeLine = gsap.timeline({
        scrollTrigger: {
          trigger: "#homePage2",
          start: "top 90%", // 1. trigger 的上下左右, 2. 屏幕刻度
          // end: "-=50",
          // markers: true,
          toggleActions: "play play resume pause",
          // 1: play 执行,  restart 重新启动,
          // 2: play 执行, pause 停止,
          // 3: resume 重新开始(在哪停就接着执行), reverse 反向
          // 4: 屏幕外动画, 选项, 通常使用 pause 节省性能
        },
      });
      contentOneTimeLine.add(useTextEnterAnime(elContentOne1));
      contentOneTimeLine.add(useTextEnterAnime(elContentOne2));
      contentOneTimeLine.add(useTextEnterAnime(elContentOne3, 0.2), "-=0.5");
      contentOneTimeLine.add(useTextEnterAnime(elContentOne4, 0.2), "-=0.2");
      contentOneTimeLine.add(useTextEnterAnime(elContentOne5, 0.2), "-=0.2");
      //#endregion

      // 02-1 EA
      //#region
      let contentTwoTimeLine = gsap.timeline({
        scrollTrigger: {
          // markers: true,
          trigger: ".elContentTwo1",
          start: "top 98%",
          // end: "+=400",
          toggleActions: "play play resume pause",
        },
      });

      contentTwoTimeLine.add(useTextEnterAnime(elContentTwo1, 0.2), "+=1");
      contentTwoTimeLine.add(useTextEnterAnime(elContentTwo2, 0.4));

      contentTwoTimeLine.add(useTextEnterAnime(elContentTwo3, 0.4));
      contentTwoTimeLine.add(useTextEnterAnime(elContentTwo4, 0.2), "-=0.2");
      contentTwoTimeLine.add(contentLineAnime(elContentTwo5, 0.4), "-=0.1");

      contentTwoTimeLine.add(useTextEnterAnime(elContentTwo6, 0.4), "-=0.4");
      contentTwoTimeLine.add(useTextEnterAnime(elContentTwo7, 0.4), "-=0.2");
      contentTwoTimeLine.add(contentLineAnime(elContentTwo8, 0.4), "=-0.3");

      contentTwoTimeLine.add(useTextEnterAnime(elContentTwo9, 0.4), "-=0.4");
      contentTwoTimeLine.add(useTextEnterAnime(elContentTwo10, 0.2), "-=0.2");
      contentTwoTimeLine.add(contentLineAnime(elContentTwo11, 0.4), "-=0.1");
      //#endregion

      // 02-2 EA
      //#region
      let contentTwoTimeLine2 = gsap.timeline({
        scrollTrigger: {
          // markers: true,
          trigger: ".elContentTwo12",
          start: "top 98%",
          toggleActions: "play play resume pause",
        },
      });

      contentTwoTimeLine2.add(useTextEnterAnime(elContentTwo12, 0.2));
      contentTwoTimeLine2.add(useTextEnterAnime(elContentTwo13, 0.4), "-=0.1");
      contentTwoTimeLine2.add(useTextEnterAnime(elContentTwo14, 0.4), "-=0.2");
      contentTwoTimeLine2.add(useTextEnterAnime(elContentTwo15, 0.4), "-=0.2");
      contentTwoTimeLine2.add(useTextEnterAnime(elContentTwo16, 0.5), "-=0.2");
      contentTwoTimeLine2.add(useTextEnterAnime(elContentTwo17, 0.4), "-=0.2");
      contentTwoTimeLine2.add(useTextEnterAnime(elContentTwo18, 0.8), "-=0.2");
      //#endregion

      // 03 EA
      //#region
      let contentThreeTimeLine = gsap.timeline({
        scrollTrigger: {
          // markers: true, // 启用标尺
          trigger: ".elContentThree1",
          start: "top 95%",
          toggleActions: "play play resume pause",
        },
        onComplete: () => {
          new WebGL();
          class3.value = true;
        },
      });

      contentThreeTimeLine.add(useTextEnterAnime(elContentThree1, 0.2));
      contentThreeTimeLine.add(useTextEnterAnime(elContentThree2), "-=0.199");
      contentThreeTimeLine.add(
        useTextEnterAnime(elContentThree3, 0.4),
        "-=0.299"
      );
      contentThreeTimeLine.add(
        useTextEnterAnime(elContentThree4, 0.4),
        "-=0.299"
      );

      contentThreeTimeLine.add(
        useTextEnterAnime(elContentThree5, 0.4),
        "-=0.299"
      );
      contentThreeTimeLine.add(
        useTextEnterAnime(elContentThree6, 0.2),
        "-=0.399"
      );
      contentThreeTimeLine.add(contentLineAnime(elContentThree7, 0.4), "-=0.199");

      contentThreeTimeLine.add(
        useTextEnterAnime(elContentThree8, 0.4),
        "-=0.699"
      );
      contentThreeTimeLine.add(
        useTextEnterAnime(elContentThree9, 0.2),
        "-=0.299"
      );
      contentThreeTimeLine.add(
        contentLineAnime(elContentThree10, 0.4),
        "-=0.199"
      );

      contentThreeTimeLine.add(
        useTextEnterAnime(elContentThree11, 0.4),
        "-=0.699"
      );
      contentThreeTimeLine.add(
        useTextEnterAnime(elContentThree12, 0.2),
        "-=0.299"
      );
      contentThreeTimeLine.add(
        contentLineAnime(elContentThree13, 0.4),
        "-=0.199"
      );

      contentThreeTimeLine.add(
        useTextEnterAnime(elContentThree14, 0.4),
        "-=0.699"
      );
      contentThreeTimeLine.add(
        useTextEnterAnime(elContentThree15, 0.2),
        "-=0.299"
      );
      contentThreeTimeLine.add(
        contentLineAnime(elContentThree16, 0.4),
        "-=0.199"
      );

      contentThreeTimeLine.add(
        useTextEnterAnime(elContentThree17, 0.4),
        "-=0.699"
      );
      contentThreeTimeLine.add(
        useTextEnterAnime(elContentThree18, 0.2),
        "-=0.299"
      );
      contentThreeTimeLine.add(
        contentLineAnime(elContentThree19, 0.4),
        "-=0.199"
      );
      //#endregion

      // 04 EA
      //#region
      let contentFourTimeLine = gsap.timeline({
        scrollTrigger: {
          // markers: true, // 启用标尺
          trigger: ".elContentThree1",
          start: "top 95%",
          // end: "+=400",
          toggleActions: "play play play pause", //restart
        },
        onComplete: () => {
          class4.value = true;
        },
      });

      contentFourTimeLine.add(useTextEnterAnime(elContentFour, 0.2));
      contentFourTimeLine.add(useTextEnterAnime(elContentFour1, 0.4), "-=0.1");
      contentFourTimeLine.add(useTextEnterAnime(elContentFour2, 0.4), "-=0.2");

      contentFourTimeLine.add(useTextEnterAnime(elContentFour3, 0.4), "-=0.2");
      contentFourTimeLine.add(useTextEnterAnime(elContentFour4, 0.2), "-=0.2");
      contentFourTimeLine.add(contentLineAnime(elContentFour5, 0.4), "-=0.1");

      contentFourTimeLine.add(useTextEnterAnime(elContentFour6, 0.4), "-=0.6");
      contentFourTimeLine.add(useTextEnterAnime(elContentFour7, 0.2), "-=0.2");
      contentFourTimeLine.add(contentLineAnime(elContentFour8, 0.4), "-=0.1");

      contentFourTimeLine.add(useTextEnterAnime(elContentFour9, 0.4), "-=0.6");
      contentFourTimeLine.add(useTextEnterAnime(elContentFour10, 0.2), "-=0.2");
      contentFourTimeLine.add(contentLineAnime(elContentFour11, 0.4), "-=0.1");

      contentFourTimeLine.add(useTextEnterAnime(elContentFour12, 0.4), "-=0.6");
      contentFourTimeLine.add(useTextEnterAnime(elContentFour13, 0.2), "-=0.2");
      contentFourTimeLine.add(contentLineAnime(elContentFour14, 0.4), "-=0.1");

      contentFourTimeLine.add(useTextEnterAnime(elContentFour15, 0.4), "-=0.6");
      contentFourTimeLine.add(useTextEnterAnime(elContentFour16, 0.2), "-=0.2");
      contentFourTimeLine.add(contentLineAnime(elContentFour17, 0.4), "-=0.1");

      contentFourTimeLine.add(useTextEnterAnime(elContentFour18, 0.4), "-=0.3");

      contentFourTimeLine.add(
        gsap.fromTo(
          ".takeToMeBox",
          {
            y: 10,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
          }
        )
      );
      //#endregion

      // Contact Us
      //#region
      gsap.set(".takeToMeText", {
        y: 52,
        rotationX: 0,
      });

      gsap.set(".takeToMeText2", {
        x: -5,
        y: 32,
        rotationX: -90,
      });

      let mouseenterTrem = true;
      let mouseoutTrem = false;
      let takeToMeHot = document.querySelector(".takeToMeHot");

      const blueBall = lottie.loadAnimation({
        container: document.querySelector(".lottie"), //渲染位置
        renderer: "svg", // 形式 svg or cavans
        loop: false, // 是否重复
        path: "./src/pages/data.json", // 动画资源
        autoplay: false, // 初始化播放 or 停止
      });

      blueBall.onComplete = function () {
        blueBall.stop(); // 停止动画
        console.log("onComplete");
      };

      takeToMeHot.addEventListener("mouseenter", function () {
        if (mouseenterTrem) {
          blueBall.play();
          // console.log("mouseenter");
          gsap.fromTo(
            ".takeToMeText",
            0.2,
            {
              y: 52,
              rotationX: 0,
            },
            {
              y: 40,
              rotationX: 90,
            }
          );
          gsap.to(".takeToMeText2", 0.2, {
            y: 24,
            rotationX: 0,
            delay: 0.15,
            onComplete: function () {
              mouseoutTrem = true;
            },
          });
        }
        mouseenterTrem = false;
      });

      takeToMeHot.addEventListener("mouseout", function () {
        if (mouseoutTrem) {
          gsap.to(".takeToMeText2", 0.2, {
            y: 32,
            rotationX: -90,
          });
          gsap.to(".takeToMeText", 0.2, {
            y: 52,
            rotationX: 0,
            delay: 0.15,
            onComplete: function () {
              mouseenterTrem = true;
            },
          });
        }
        mouseoutTrem = false;
      });
      //#endregion
    });

    return {
      pageMenuClass,
      welcome,
      myname1,
      myname2,
      myname3,
      aboutMe,
      aboutText,
      dribbbleLink,
      myCoords,
      homePage2,
      elContentOne1,
      elContentOne2,
      elContentOne3,
      elContentOne4,
      elContentOne5,
      elContentTwo1,
      elContentTwo2,
      elContentTwo3,
      elContentTwo4,
      elContentTwo5,
      elContentTwo6,
      elContentTwo7,
      elContentTwo8,
      elContentTwo9,
      elContentTwo10,
      elContentTwo11,
      elContentTwo12,
      elContentTwo13,
      elContentTwo14,
      elContentTwo15,
      elContentTwo16,
      elContentTwo17,
      elContentTwo18,
      class3,
      elContentThree,
      elContentThree1,
      elContentThree2,
      elContentThree3,
      elContentThree4,
      elContentThree5,
      elContentThree6,
      elContentThree7,
      elContentThree8,
      elContentThree9,
      elContentThree10,
      elContentThree11,
      elContentThree12,
      elContentThree13,
      elContentThree14,
      elContentThree15,
      elContentThree16,
      elContentThree17,
      elContentThree18,
      elContentThree19,
      clickHome,
      clickIntroduce,
      clickPortfolio,
      clickContactUs,
      class4,
      elContentFour,
      elContentFour1,
      elContentFour2,
      elContentFour3,
      elContentFour4,
      elContentFour5,
      elContentFour6,
      elContentFour7,
      elContentFour8,
      elContentFour9,
      elContentFour10,
      elContentFour11,
      elContentFour12,
      elContentFour13,
      elContentFour14,
      elContentFour15,
      elContentFour16,
      elContentFour17,
      elContentFour18,
    };
  },
};
</script>

<style scoped>
#root {
  --gray-0: #fafafa;
}

svg:hover path {
  fill: #0042f6;
}

.navBar {
  z-index: 51;
}

/* .pageMenu-unActive {
  @apply text-gray-400;
}
.pageMenu {
  @apply text-red-500;
} */

.about {
  @apply text-white text-base uppercase py-0 px-8 grid;
  grid-template-rows: auto 40px;
}

.about-describe {
  @apply border-b border-white grid;
}

.about-describe p {
  /* @apply mb-8; */
}

.about-linkCoord {
}

.about-linkCoord a {
  @apply text-white;
}

/* item */
.cursor {
  @apply absolute top-1/2 left-1/2 bg-cover;
  width: 600px;
  height: 400px;
  /* transform: translate(-50%,-50%); */
  margin: -100px 0 0 -100px;
  background: no-repeat 50% 50%;
  z-index: 0;
}

.cursor img {
  @apply opacity-0 absolute w-full h-full;
}

.item {
  @apply border-b border-gray-300 flex justify-between items-center border-b border-gray-900;
  padding: 12px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-basis: 1;
  position: relative;
  z-index: 2;
  color: #fff;
  /* 背景混合 */
  mix-blend-mode: difference;
}

.item-title {
  @apply text-4xl font-bold mb-4 relative inline-block;
  /* mix-blend-mode: difference; */
}

.item-categ {
  font-weight: lighter;
}

.imgtrue {
  opacity: 1;
}

.imgfalse {
  opacity: 0;
}

/* img */

main {
  width: 100%;
  height: 100%;
}

.inspirations ul {
  position: relative;
  width: 100%;
  height: 60%;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 20;
}

.inspirations ul li {
  /* @apply flex justify-between items-center border-b pb-8 mb-8;
  position: relative;
  cursor: pointer;
  transition: 1s;
  border-color: rgba(0, 0, 0, 0.15); */
  @apply relative flex items-center justify-between pb-8 mb-8;
}

.line {
  @apply w-full border-b absolute bottom-0;
  border-color: rgba(0, 0, 0, 0.08);
}

.inspirations ul li .content-title {
  @apply text-4xl font-bold;
}

canvas {
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 10;
}

.takeToMeHot {
  width: 14rem;
  height: 14rem;
  z-index: 52;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.takeToMeText {
  z-index: 51;
}

.takeToMeText2 {
  z-index: 51;
}

.takeToMe {
  /* filter: hue-rotate(235deg); */
}

.hbimg {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  /* display: none;  */
  background-image: url(../assets/img/luckphoto.jpg);
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
}

.leftimg {
  width: 100%;
  height: 100%;
  background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(0, 0, 0, 0.34)),
      to(rgba(0, 0, 0, 0.34))
    ),
    url(../assets/img/luckphoto.jpg);
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.95),
      rgba(0, 0, 0, 0.75)
    ),
    url(../assets/img/luckphoto.jpg);
  background-position: 0 0, 0% 100%;
  background-size: 240%;
  background-repeat: repeat, no-repeat;
}

.content-title {
  color: #9ca3ae;
}

.cyberpunk,
.cyberpunk::after {
  color: #9ca3ae;
  display: inline-block;
  letter-spacing: 0px;
  /* 轮廓 */
  outline: transparent;
  position: relative;
  animation: clrEA 1s forwards;
}

.subtitle {
  color: #9ca3ae;
  margin-top: 8px;
}

.cyberpunk::after {
  --slice-0: inset(50% 50% 50% 50%);
  --slice-1: inset(80% -6px 0 0);
  --slice-2: inset(0% -6px 20% 0);
  --slice-3: inset(10% -6px 80% 0);
  --slice-4: inset(20% -6px 70% 0);
  --slice-5: inset(60% -6px 30% 0);
  --slice-6: inset(40% -6px 40% 0);
  --slice-7: inset(50% -6px 45% 0);
  --slice-8: inset(30% -6px 40% 0);
  --slice-9: inset(20% -6px 70% 0);
  --slice-10: inset(35% -6px 60% 0);
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  text-shadow: -10px -10px 0px #0042f6, 10px 10px 0px #ff5500;
  text-shadow: -10px -10px 0px #81fafb, 10px 10px 0px #e8514c;

  /* #81fafb #e8514c */
  clip-path: var(--slice-0);
  /* transform: translate(-4px, 2px); */
}

.cyberpunk:hover::after {
  animation: 0.5s glitch forwards;
}

.cyberpunk:hover {
  animation: 0.25s glitch2 forwards;
  color: #0042f6;
}

@keyframes clrEA {
  0% {
    color: #9ca3ae;
  }
  100% {
    color: #202020;
  }
}

@keyframes glitch {
  0% {
    clip-path: var(--slice-0);
    transform: translate(-8px, 4px);
  }
  10% {
    clip-path: var(--slice-1);
    transform: translate(-6px, 4px);
  }
  20% {
    clip-path: var(--slice-2);
    transform: translate(8px, -4px);
  }
  30% {
    clip-path: var(--slice-3);
    transform: translate(2px, 2px);
  }
  40% {
    clip-path: var(--slice-4);
    transform: translate(3px, -6px);
  }
  50% {
    clip-path: var(--slice-5);
    transform: translate(4px, -4px);
  }
  60% {
    clip-path: var(--slice-6);
    transform: translate(4px, 4px);
  }
  70% {
    clip-path: var(--slice-7);
    transform: translate(1px, 4px);
  }
  80% {
    clip-path: var(--slice-8);
    transform: translate(-4px, -4px);
  }
  90% {
    clip-path: var(--slice-9);
    transform: translate(-3px, 4px);
  }
  95% {
    clip-path: var(--slice-10);
    transform: translate(1px, 2px);
  }
  100% {
    clip-path: var(--slice-0);
    transform: translate(0px, 0px);
  }
}

@keyframes glitch2 {
  0% {
    opacity: 0;
  }
  33% {
    opacity: 1;
    color: #ff5500;
  }
  66% {
    opacity: 1;
    color: #0042f6;
  }
  90% {
    color: #0042f6;
  }
  100% {
    opacity: 1;
    color: #ff5500;
  }
}

@keyframes glitch3 {
  0% {
    /* opacity: 0; */
  }
  100% {
    /* opacity: 1; */
    color: #9ca3ae;
  }
}

@keyframes glitch4 {
  0% {
    /* opacity: 0; */
  }
  100% {
    /* opacity: 1; */
    color: #ff5500;
    /* font-weight: 700; */
  }
}

.inspirations:hover .cyberpunk,
.inspirations:hover .subtitle {
  animation: 0.5s glitch3 forwards;
}

.inspirations li:hover {
  opacity: 1;
}

.inspirations li:hover .cyberpunk::after {
  animation: 0.5s glitch forwards;
}

.inspirations li:hover .cyberpunk {
  animation: 0.25s glitch2 forwards;
  color: #0042f6;
  @apply mix-blend-difference;
}

.inspirations li:hover .subtitle {
  /* animation: 0.5s glitch4 forwards; */
}

.cyberpunk::after {
  content: attr(data-text);
}

.menu-ul li:hover span {
  animation: 0.25s glitch2 forwards;
  /* color: #0042f6; */
  @apply mix-blend-difference;
}
</style>
