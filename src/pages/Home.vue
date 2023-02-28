<!--
* @description  参数1
* @fileName  Home
* @author userName
* @date 2022-01-30 20:58:49
* @version V3.0.0
!-->
<template>
  <div class="HomePage w-full flex z-10 select-none">
    <!-- menu -->
    <div
      class="HomePage_left w-4/12 h-screen hidden lg:block fixed top-0 z-10 overflow-hidden"
    >
      <div class="h-full flex flex-col">
        <div
          id="leftMenuBox"
          class="HomePage_left_menu flex flex-1 justify-center items-center z-10 bg-gray-300 overflow-hidden"
        >
          <ul
            class="menu-ul text-gray-900 text-4xl font-semibold inline-block w-1/2 h-auto 3xl:text-5xl"
          >
            <h3
              class="menu text-base text-gray-500 mb-10 uppercase 3xl:text-xl"
            >
              Menu
            </h3>
            <li class="menuItem mb-3">
              <button
                class="cyberpunk font-medium hover:font-bold"
                data-text="Home"
                @click="clickHome"
              >
                <span
                  class="text-gray-500 italic"
                  :class="{ 'text-black font-bold': pageMenuClass == 1 }"
                >
                  Home</span
                >
              </button>
            </li>
            <li class="menuItem mb-3">
              <button
                class="cyberpunk font-medium hover:font-bold"
                data-text="Introduce"
                @click="clickIntroduce"
              >
                <span
                  class="text-gray-500 italic"
                  :class="{ 'text-black font-bold': pageMenuClass == 2 }"
                >
                  Introduce</span
                >
              </button>
            </li>
            <li class="menuItem mb-3">
              <button
                class="cyberpunk font-medium hover:font-bold"
                data-text="Portfolio"
                @click="clickPortfolio"
              >
                <span
                  class="text-gray-500 italic"
                  :class="{ 'text-black font-bold': pageMenuClass == 3 }"
                >
                  Portfolio</span
                >
              </button>
            </li>
            <li class="menuItem mb-3">
              <button
                class="cyberpunk font-medium hover:font-bold"
                data-text="Contact"
                @click="clickContactUs"
              >
                <span
                  class="text-gray-500 italic"
                  :class="{ 'text-black font-bold': pageMenuClass == 4 }"
                >
                  Contact</span
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

    <!-- content -->
    <div class="HomePage_content w-full h-screen flex relative">
      <!-- placeholder -->
      <div class="lg:w-4/12"></div>

      <div class="right relative w-full lg:w-8/12">
        <div
          id="HomePageContentHead"
          class="HomePage_content_head h-screen flex flex-col"
        >
          <div
            class="Introduce flex justify-center items-center flex-1 px-4 md:px-8 z-10"
          >
            <div class="myself text-white opacity-80 uppercase leading-loose">
              <div
                ref="welcome"
                id="welcome"
                class="welcome vc font-black mb-4 mobile:text-sm sm:text-xs md:text-sm lg:text-base 3xl:text-xl"
              >
                Welcome
              </div>
              <div
                class="myname font-extrabold text-6xl md:text-7xl xl:text-9xl mobile:text-5xl"
              >
                <p ref="myname1" id="myname1" class="myname1">i'm</p>
                <p ref="myname2" id="myname2" class="myname2">maosusu</p>
                <p ref="myname3" id="myname3" class="myname3">Designer</p>
              </div>
            </div>
          </div>
          <div class="flex z-10 h-1/5">
            <div
              id="aboutMeBox"
              class="aboutMeBox aboutme blue bg-dark-blue flex justify-center items-center w-1/2 flex-1"
            >
              <p
                ref="aboutMe"
                id="aboutMe"
                class="text-white text-lg font-extrabold 3xl:text-2xl"
              >
                About Me
              </p>
            </div>

            <div
              class="about text-white text-base uppercase px-1 py-0 grid w-1/2 px-2 3xl:px-4"
            >
              <div
                id="aboutLine"
                class="about-describe w-full h-full flex items-center"
              >
                <p ref="aboutText" id="aboutText" class="aboutText">
                  We're a motion, interaction, UI, UX & webflow developer.
                </p>
              </div>

              <div
                class="about-linkCoord text-xs flex justify-between items-center h-full"
              >
                <a
                  ref="dribbbleLink"
                  id="dribbbleLink"
                  href="https://dribbble.com/MobyTang"
                  target="_blank"
                  class="dribbbleLink"
                  data-text=""
                  >dribbble</a
                >
                <p ref="myCoords" id="myCoords" class="about-coord">
                  114.089592,22.635423
                </p>
              </div>
            </div>
          </div>

          <!-- mask -->
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

        <!-- content - 01 -->
        <div
          id="homePage2"
          ref="homePage2"
          class="homePage2 flex items-center flex-col bg-gray-200 sm:px-24 lg:pl-24 lg:py-24 xl:pl-32 xl:py-32 3xl:pl-32 3xl:pr-60 mobile:px-8 mobile:py-8"
        >
          <div
            ref="el-content-one"
            class="el-Indt-content w-full flex flex-col mt-20 sm:mt-24 md:mt-16"
          >
            <span
              id="elContentOne1"
              ref="elContentOne1"
              class="text-base font-bold mobile:text-sm 3xl:text-xl"
              >01</span
            >
            <div
              ref="elContentOne2"
              class="elContentOne2 text-6xl font-black mb-10 sm:text-5xl mobile:text-4xl mobile:mb-8"
            >
              Maosusu.😼
            </div>
            <div
              class="text-lg font-normal break-all sm:text-base md:text-lg 3xl:text-2xl mobile:text-sm"
            >
              <div ref="elContentOne3" class="elContentOne3 zh">
                我是一个灵活的多功能(Design + Code)设计师，
              </div>
              <div ref="elContentOne4" class="elContentOne4 mt-2 zh">
                交互设计、动效、前端动画实现经验丰富；
              </div>
              <div ref="elContentOne5" class="elContentOne5 mt-8 zh">
                最近 6 年从事 B2B 产品设计，项目经验包含:
              </div>
              <div ref="elContentOne6" class="elContentOne6 mt-2 zh">
                海外仓、电商、电信运营、企业供应链、园区物业管理、
              </div>
              <div ref="elContentOne7" class="elContentOne7 mt-2 zh">
                OA、数据大屏、Web可视化开发等；
              </div>
              <div ref="elContentOne8" class="elContentOne8 mt-8 zh">
                渴望探索新知识，并能持续学习；
              </div>
              <div ref="elContentOne9" class="elContentOne9 mt-2 zh">
                现已自学并熟悉VUE、WordPress、GSAP、Pixi.js、THREE.js等；
              </div>
              <div ref="elContentOne10" class="elContentOne10 mt-8 zh">
                善于工作中解决实际问题，能帮助团队设计落地，
              </div>
              <div ref="elContentOne11" class="elContentOne11 mt-2 zh">
                乐于团队间的交流和知识分享，以提升团队效率；
              </div>

              <div class="mt-8 zh">
                <span ref="elContentOne12" class="elContentOne12">
                  目前正在从事 "
                </span>
                <a
                  href="https://www.notion.so/246c3e8a9ae240e092bab74c3a2e7678"
                  target="_blank"
                  ref="elContentOne13"
                  class="elContentOne13 text-dark-blue underline hover:text-orange-500 font-bold"
                  >设计资产数字化</a
                >
                <span ref="elContentOne14" class="elContentOne14"
                  >🔍" 的工作。</span
                >
              </div>
            </div>
          </div>

          <div class="el-Indt-fl-content w-full mt-20 sm:mt-26 md:mt-32">
            <div ref="el-content-two">
              <div
                ref="elContentTwo2"
                class="elContentTwo2 mb-4 font-medium text-gray-900 mb-6 sm:text-lg md:text-xl 3xl:text-3xl mobile:text-base"
              >
                我希望的工作:
              </div>
              <div
                class="w-full flex justify-between items-center pb-4 mb-4 relative"
              >
                <span
                  ref="elContentTwo3"
                  class="elContentTwo3 text-4xl font-bold text-dark-blue mobile:text-3xl"
                  >Industry</span
                >
                <span
                  ref="elContentTwo4"
                  class="elContentTwo4 text-gray-400 font-normal"
                  >toB</span
                >
                <div
                  ref="elContentTwo5"
                  class="elContentTwo5 line w-full border-b absolute bottom-0"
                ></div>
              </div>
              <div
                class="w-full flex justify-between items-center pb-4 mb-4 relative"
              >
                <span
                  ref="elContentTwo6"
                  class="elContentTwo6 text-4xl font-bold text-dark-blue mobile:text-3xl"
                  >Workplace</span
                >
                <span
                  ref="elContentTwo7"
                  class="elContentTwo7 text-gray-400 zh font-normal"
                  >深圳 & 广州</span
                >
                <div
                  ref="elContentTwo8"
                  class="elContentTwo8 line w-full border-b absolute bottom-0"
                ></div>
              </div>
              <div
                class="w-full flex justify-between items-center pb-4 mb-4 relative"
              >
                <span
                  ref="elContentTwo9"
                  class="elContentTwo9 text-4xl font-bold text-dark-blue mobile:text-3xl"
                  >WorkingTime</span
                >
                <span
                  ref="elContentTwo10"
                  class="elContentTwo10 text-gray-400 font-normal"
                  >995</span
                >
                <div
                  ref="elContentTwo11"
                  class="elContentTwo11 line w-full border-b absolute bottom-0"
                ></div>
              </div>
            </div>

            <div>
              <ul
                class="mt-32 font-normal text-gray-700 mobile:text-sm mobile:mt-16 sm:text-base md:text-lg 3xl:text-2xl mobile:text-sm"
              >
                <li
                  ref="elContentTwo12"
                  class="elContentTwo12 font-medium text-gray-900 mb-6 sm:text-lg md:text-xl 3xl:text-3xl mobile:text-base"
                >
                  职能:
                </li>
                <li ref="elContentTwo13" class="elContentTwo13 mb-3 zh">
                  UI Design | 界面设计
                </li>
                <li ref="elContentTwo14" class="elContentTwo14 mb-3 zh">
                  Interaction Design | 交互设计
                </li>
                <li ref="elContentTwo15" class="elContentTwo15 mb-3 zh">
                  Motion Design | 动效设计
                </li>
                <li ref="elContentTwo16" class="elContentTwo16 mb-3 zh">
                  Web Deveiopment | 前端开发
                </li>
              </ul>
              <div
                ref="elContentTwo18"
                class="elContentTwo18 w-full text-center mt-24 relative mobile:text-xs mobile:mt-20 text-gray-400"
              >
                请向下滑 🧼 查看我的作品
              </div>

              <div
                ref="elContentThree"
                class="elContentThree w-full mt-24 text-gray-900"
              >
                <div class="Portfolio-subtitle relative mb-8 z-50">
                  <span
                    ref="elContentThree1"
                    class="elContentThree1 text-base font-bold mobile:text-sm 3xl:text-xl"
                    >02</span
                  >
                  <div
                    ref="elContentThree2"
                    class="elContentThree2 text-6xl font-black mb-10 sm:text-5xl mobile:text-4xl mobile:mb-4"
                  >
                    Portfolio
                  </div>
                  <span
                    ref="elContentThree3"
                    class="elContentThree3 text-base font-bold mr-4 text-dark-blue"
                    >2017 ~ 2019
                  </span>
                  <span
                    ref="elContentThree4"
                    class="elContentThree4 text-base font-semibold text-gray-400 mix-blend-difference"
                    >Involve in product design</span
                  >
                </div>

                <main class="inspirations z-50">
                  <ul class="ul">
                    <li class="portfolio-items">
                      <RouterLink :to="{ name: 'vodafone-conceptual-design' }">
                        <span
                          ref="elContentThree5"
                          class="elContentThree5 main-heading"
                          :class="{ cyberpunk: class3 }"
                          data-text="沃达丰概念设计"
                          >沃达丰概念设计</span
                        >
                        <span
                          ref="elContentThree5TitleType"
                          class="elContentThree5TitleType title-type"
                          >移动端、客服、电商</span
                        >
                        <span
                          ref="elContentThree5Subtitle"
                          class="elContentThree5Subtitle subtitle"
                          >UI/UE/Motion</span
                        >
                      </RouterLink>
                      <div
                        ref="elContentThree5Line"
                        class="elContentThree5Line line"
                      ></div>
                    </li>
                    <li class="portfolio-items">
                      <RouterLink :to="{ name: 'agile-ui' }">
                        <span
                          ref="elContentThree6"
                          class="elContentThree6 main-heading"
                          :class="{ cyberpunk: class3 }"
                          data-text="敏捷营商设计系统"
                          >Agile UI 设计系统</span
                        >
                        <span
                          ref="elContentThree6TitleType"
                          class="elContentThree6TitleType title-type elContentThree81"
                          >电信运营后台、设计系统</span
                        >
                        <span
                          ref="elContentThree6Subtitle"
                          class="elContentThree6Subtitle subtitle"
                          >UE</span
                        >
                      </RouterLink>
                      <div
                        ref="elContentThree6Line"
                        class="elContentThree6Line line"
                      ></div>
                    </li>
                    <li class="portfolio-items">
                      <RouterLink :to="{ name: 'HKT-motion-design' }">
                        <span
                          ref="elContentThree7"
                          class="elContentThree7 main-heading"
                          :class="{ cyberpunk: class3 }"
                          data-text="香港电讯运营后台"
                          >香港电讯运营后台</span
                        >
                        <span
                          ref="elContentThree7TitleType"
                          class="elContentThree7TitleType title-type"
                          >动效设计、开发实现</span
                        >
                        <span
                          ref="elContentThree7Subtitle"
                          class="elContentThree7Subtitle subtitle"
                          >Motion/Code</span
                        >
                      </RouterLink>
                      <div
                        ref="elContentThree7Line"
                        class="elContentThree7Line line"
                      ></div>
                    </li>
                    <li class="portfolio-items">
                      <RouterLink :to="{ name: 'UI-Lego' }">
                        <span
                          ref="elContentThree8"
                          class="elContentThree8 main-heading"
                          :class="{ cyberpunk: class3 }"
                          data-text="华为可视化 Web 工具"
                          >华为可视化 Web 工具</span
                        >
                        <span
                          ref="elContentThree8TitleType"
                          class="elContentThree8TitleType title-type"
                          >低代码、组件设计</span
                        >
                        <span
                          ref="elContentThree8Subtitle"
                          class="elContentThree8Subtitle subtitle"
                          >UE/UI</span
                        >
                      </RouterLink>
                      <div
                        ref="elContentThree8Line"
                        class="elContentThree8Line line"
                      ></div>
                    </li>
                    <li class="portfolio-items">
                      <RouterLink :to="{ name: 'islace-mobile' }">
                        <span
                          ref="elContentThree9"
                          class="elContentThree9 main-heading"
                          :class="{ cyberpunk: class3 }"
                          data-text="iSlace 体验升级"
                          >iSlace 体验升级</span
                        >
                        <span
                          ref="elContentThree9TitleType"
                          class="elContentThree9TitleType title-type"
                          >移动端、协同工具</span
                        >
                        <span
                          ref="elContentThree9Subtitle"
                          class="elContentThree9Subtitle subtitle"
                          >UE/Motion</span
                        >
                      </RouterLink>
                      <div
                        ref="elContentThree9Line"
                        class="elContentThree9Line line"
                      ></div>
                    </li>
                  </ul>
                </main>
              </div>

              <div ref="el-content-four" class="w-full mt-12">
                <div class="Portfolio-subtitle relative mb-8 z-50">
                  <span
                    ref="elContentFour1"
                    class="elContentFour1 text-base font-bold mr-4 text-dark-blue"
                    >2020 ~ New
                  </span>
                  <span
                    ref="elContentFour2"
                    class="elContentFour2 text-base font-semibold text-gray-400 mix-blend-difference"
                    >Involve in product design</span
                  >
                </div>

                <main class="inspirations">
                  <ul class="ul2">
                    <li class="portfolio-items">
                      <RouterLink :to="{ name: 'segi-design-system' }">
                        <span
                          ref="elContentFour5"
                          class="elContentFour5 main-heading"
                          :class="{ cyberpunk: class3 }"
                          data-text="SEGI设计系统"
                          >SEGI 设计系统</span
                        >
                        <span
                          ref="elContentFour5TitleType"
                          class="elContentFour5TitleType title-type"
                          >园区管理, 设计系统</span
                        >
                        <span
                          ref="elContentFour5Subtitle"
                          class="elContentFour5Subtitle subtitle"
                          >UE/Motion/Code</span
                        >
                      </RouterLink>
                      <div
                        ref="elContentFour5Line"
                        class="elContentFour5Line line"
                      ></div>
                    </li>
                    <li class="portfolio-items">
                      <RouterLink :to="{ name: 'segi-template-market' }">
                        <span
                          ref="elContentFour6"
                          class="elContentFour6 main-heading"
                          :class="{ cyberpunk: class3 }"
                          data-text="模板市场"
                          >模板市场</span
                        >
                        <span
                          ref="elContentFour6TitleType"
                          class="elContentFour6TitleType title-type"
                          >组件代码, 页面模板代码</span
                        >
                        <span
                          ref="elContentFour6Subtitle"
                          class="elContentFour6Subtitle subtitle"
                          >UE/Code</span
                        >
                      </RouterLink>
                      <div
                        ref="elContentFour6Line"
                        class="elContentFour6Line line"
                      ></div>
                    </li>
                    <li class="portfolio-items">
                      <RouterLink :to="{ name: 'document-system' }">
                        <span
                          ref="elContentFour7"
                          class="elContentFour7 main-heading"
                          :class="{ cyberpunk: class3 }"
                          data-text="CMS系统"
                          >CMS 系统</span
                        >
                        <span
                          ref="elContentFour7TitleType"
                          class="elContentFour7TitleType title-type"
                          >全栈开发</span
                        >
                        <span
                          ref="elContentFour7Subtitle"
                          class="elContentFour7Subtitle subtitle"
                          >Motion/Code</span
                        >
                      </RouterLink>
                      <div
                        ref="elContentFour7Line"
                        class="elContentFour7Line line"
                      ></div>
                    </li>
                    <li class="portfolio-items">
                      <RouterLink :to="{ name: 'visualized-data-platform' }">
                        <span
                          ref="elContentFour8"
                          class="elContentFour8 main-heading"
                          :class="{ cyberpunk: class3 }"
                          data-text="数据可视化平台"
                          >数据可视化平台</span
                        >
                        <span
                          ref="elContentFour8TitleType"
                          class="elContentFour8TitleType title-type"
                          >数据大屏、低代码、组件设计</span
                        >
                        <span
                          ref="elContentFour8Subtitle"
                          class="elContentFour8Subtitle subtitle"
                          >UE/Code</span
                        >
                      </RouterLink>
                      <div
                        ref="elContentFour8Line"
                        class="elContentFour8Line line"
                      ></div>
                    </li>
                    <li class="portfolio-items">
                      <RouterLink :to="{ name: 'billing-center' }">
                        <span
                          ref="elContentFour9"
                          class="elContentFour9 main-heading"
                          :class="{ cyberpunk: class3 }"
                          data-text="重新设计算费中心"
                          >重新设计算费中心</span
                        >
                        <span
                          ref="elContentFour9TitleType"
                          class="elContentFour9TitleType title-type"
                          >重构老旧系统</span
                        >
                        <span
                          ref="elContentFour9Subtitle"
                          class="elContentFour9Subtitle subtitle"
                          >UE</span
                        >
                      </RouterLink>
                      <div
                        ref="elContentFour9Line"
                        class="elContentFour9Line line"
                      ></div>
                    </li>
                  </ul>
                </main>
              </div>
              <div
                ref="elContentFour10"
                class="elContentFour10 w-full text-center mb-40 mt-24 relative mobile:text-xs mobile:mt-10 mobile:mb-20 text-gray-400"
              >
                更多项目请与我联系 👏 😆
              </div>

              <div ref="elContent40" class="elContent40 mt-24">
                <div
                  ref="elContent41"
                  class="elContent41 text-base font-bold mobile:text-sm 3xl:text-xl"
                >
                  03
                </div>
                <div
                  ref="elContent42"
                  class="elContent42 text-6xl font-black mb-10 sm:text-5xl mobile:text-4xl mobile:mb-8"
                >
                  Contact Me
                </div>
                <div
                  class="text-lg font-normal break-all sm:text-base md:text-lg 3xl:text-2xl mobile:text-sm"
                >
                  <div ref="elContent43" class="elContent43">
                    需要我成为团队中的一员吗? 😼
                  </div>
                  <div ref="elContent44" class="elContent44 mt-4">
                    我们可以共同努力, 用工程思维建造
                  </div>
                  <div ref="elContent45" class="elContent45 mt-4">
                    一套更先进的工作流程, 以更有意义、
                  </div>

                  <div
                    ref="elContent46"
                    class="elContent46 mt-4 mb-20 mobile:mb-12"
                  >
                    有效和完整的设计解决方案来为产品赋能。👏👏
                  </div>
                </div>
                <!-- blueBallBox -->
                <div
                  ref="blueBallBox"
                  class="blueBallBox z-1"
                  style="height: 400px"
                >
                  <div
                    ref="blueBallBox"
                    class="flex justify-center z-50 relative takeToMeBox"
                  >
                    <div
                      class="takeToMeHot absolute cursor-pointer"
                      @click="mailto"
                    ></div>
                    <div
                      class="absolute w-80 h-32 flex items-center flex-col text-white font-bold"
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
                        class="takeToMeText2 w-full text-center tracking-wide relative"
                        style="text-indent: 1rem"
                      >
                        TALK TO ME ✍️
                      </div>
                    </div>
                    <div class="lottie takeToMe w-80 h-80 z-10"></div>
                  </div>
                  <p
                    class="w-full text-center mb-20 mt-24 relative mobile:text-xs mobile:mt-10 mobile:mt-1 text-gray-400 leading-10"
                  >
                    <span ref="elContent47" class="elContent47">👆想知道蓝色的圆圈是干啥的吗?</span>
                    <br />
                    <span ref="elContent48" class="elContent48">点一下看看吧 😆 </span>
                  </p>
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
import {
  ref,
  reactive,
  onMounted,
  watch,
  onUpdated,
  computed,
  defineComponent,
} from "vue";
import { gsap } from "gsap";
import useTextEnterAnime from "../hooks/useTextEnterAnime";
import contentLineAnime from "../hooks/contentLineAnime";
import WebGL from "../hooks/app";
import { useRouter } from "vue-router";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import lottie from "lottie-web";

// import NavigationBar from "../components/NavigationBar";

export default defineComponent({
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
    const pageMenuClass = ref(1);
    const welcome = ref(null);
    const myname1 = ref(null);
    const myname2 = ref(null);
    const myname3 = ref(null);
    const aboutMe = ref(null);
    const aboutText = ref(null);
    const dribbbleLink = ref(null);
    const myCoords = ref(null);
    const homePage2 = ref(null);
    const elContentOne1 = ref(null);
    const elContentOne2 = ref(null);
    const elContentOne3 = ref(null);
    const elContentOne4 = ref(null);
    const elContentOne5 = ref(null);
    const elContentOne6 = ref(null);

    const elContentOne7 = ref(null);
    const elContentOne8 = ref(null);
    const elContentOne9 = ref(null);
    const elContentOne10 = ref(null);
    const elContentOne11 = ref(null);
    const elContentOne12 = ref(null);
    const elContentOne13 = ref(null);
    const elContentOne14 = ref(null);

    // const elContentTwo1 = ref(null);
    const elContentTwo2 = ref(null);
    const elContentTwo3 = ref(null);
    const elContentTwo4 = ref(null);
    const elContentTwo5 = ref(null);
    const elContentTwo6 = ref(null);
    const elContentTwo7 = ref(null);
    const elContentTwo8 = ref(null);
    const elContentTwo9 = ref(null);
    const elContentTwo10 = ref(null);
    const elContentTwo11 = ref(null);
    const elContentTwo12 = ref(null);
    const elContentTwo13 = ref(null);
    const elContentTwo14 = ref(null);
    const elContentTwo15 = ref(null);
    const elContentTwo16 = ref(null);
    const elContentTwo17 = ref(null);
    const elContentTwo18 = ref(null);

    const elContentThree = ref(null);
    const elContentThree1 = ref(null);
    const elContentThree2 = ref(null);
    const elContentThree3 = ref(null);
    const elContentThree4 = ref(null);

    const elContentThree5 = ref(null);
    const elContentThree5TitleType = ref(null);
    const elContentThree5Subtitle = ref(null);
    const elContentThree5Line = ref(null);

    const elContentThree6 = ref(null);
    const elContentThree6TitleType = ref(null);
    const elContentThree6Subtitle = ref(null);
    const elContentThree6Line = ref(null);

    const elContentThree7 = ref(null);
    const elContentThree7TitleType = ref(null);
    const elContentThree7Subtitle = ref(null);
    const elContentThree7Line = ref(null);

    const elContentThree8 = ref(null);
    const elContentThree8TitleType = ref(null);
    const elContentThree8Subtitle = ref(null);
    const elContentThree8Line = ref(null);

    const elContentThree9 = ref(null);
    const elContentThree9TitleType = ref(null);
    const elContentThree9Subtitle = ref(null);
    const elContentThree9Line = ref(null);

    const elContentFour1 = ref(null);
    const elContentFour2 = ref(null);

    const elContentFour5 = ref(null);
    const elContentFour5TitleType = ref(null);
    const elContentFour5Subtitle = ref(null);
    const elContentFour5Line = ref(null);

    const elContentFour6 = ref(null);
    const elContentFour6TitleType = ref(null);
    const elContentFour6Subtitle = ref(null);
    const elContentFour6Line = ref(null);

    const elContentFour7 = ref(null);
    const elContentFour7TitleType = ref(null);
    const elContentFour7Subtitle = ref(null);
    const elContentFour7Line = ref(null);

    const elContentFour8 = ref(null);
    const elContentFour8TitleType = ref(null);
    const elContentFour8Subtitle = ref(null);
    const elContentFour8Line = ref(null);

    const elContentFour9 = ref(null);
    const elContentFour9TitleType = ref(null);
    const elContentFour9Subtitle = ref(null);
    const elContentFour9Line = ref(null);

    const elContentFour10 = ref(null);

    const elContent40 = ref(null);
    const elContent41 = ref(null);
    const elContent42 = ref(null);
    const elContent43 = ref(null);
    const elContent44 = ref(null);
    const elContent45 = ref(null);
    const elContent46 = ref(null);
    const elContent47 = ref(null);
    const elContent48 = ref(null);

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
      console.log("home", pageMenuClass.value);
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
      console.log("Introduce", pageMenuClass.value);
    }

    function clickPortfolio() {
      let bodyScrollTopNew = document.querySelector(
        ".Portfolio-subtitle"
      )?.offsetTop;
      let time = Math.abs(document.body.scrollTop - bodyScrollTopNew) * 0.001;
      time = time < 1 ? time : 1;
      gsap.to(document.body, {
        scrollTop: bodyScrollTopNew - 100,
        duration: time,
      });
      pageMenuClass.value = 3;
      console.log("Portfolio", pageMenuClass.value);
    }

    function clickContactUs() {
      // let bodyScrollTopNew = document.body.scrollHeight;
      let bodyScrollTopNew = document.querySelector(".elContent40")?.offsetTop;

      let time = Math.abs(document.body.scrollTop - bodyScrollTopNew) * 0.001;
      time = time < 1 ? time : 1;
      gsap.to(document.body, {
        scrollTop: bodyScrollTopNew - 100,
        duration: time,
      });
      pageMenuClass.value = 4;
      console.log("ContactUs", pageMenuClass.value);
    }

    function scrollToTopMemu() {
      let menu2 = document.querySelector(".homePage2")?.offsetTop;
      let menu3 =
        document.querySelector(".Portfolio-subtitle")?.offsetTop - 100;
      let scrollHeight = document.body.scrollHeight;
      let scrollTop = document.body.scrollTop;
      let clientHeight = document.body.clientHeight;
      if (scrollTop < menu2) {
        pageMenuClass.value = 1;
      } else if (scrollTop >= menu2 && scrollTop < menu3) {
        pageMenuClass.value = 2;
      } else if (
        scrollTop >= menu3 &&
        scrollHeight > scrollTop + clientHeight + 100
      ) {
        pageMenuClass.value = 3;
      } else {
        pageMenuClass.value = 4;
      }
    }

    function mailto() {
      console.log(123);
      window.open("mailto:baobaomi900901@icloud.com");
    }

    onMounted(() => {
      new WebGL();
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
          document
            .querySelector("#dribbbleLink")
            .setAttribute("data-text", "dribbble");
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
      contentOneTimeLine.add(useTextEnterAnime(elContentOne3, 0.4), "-=0.5");
      contentOneTimeLine.add(useTextEnterAnime(elContentOne4, 0.3), "-=0.2");
      contentOneTimeLine.add(useTextEnterAnime(elContentOne5, 0.4), "-=0.1");
      contentOneTimeLine.add(useTextEnterAnime(elContentOne6, 0.2), "-=0.2");
      contentOneTimeLine.add(useTextEnterAnime(elContentOne7, 0.4), "-=0.1");
      contentOneTimeLine.add(useTextEnterAnime(elContentOne8, 0.4), "-=0.2");
      contentOneTimeLine.add(useTextEnterAnime(elContentOne9, 0.3), "-=0.2");
      contentOneTimeLine.add(useTextEnterAnime(elContentOne10, 0.4), "-=0.2");
      contentOneTimeLine.add(useTextEnterAnime(elContentOne11, 0.4), "-=0.2");
      contentOneTimeLine.add(useTextEnterAnime(elContentOne12, 0.2), "-=0.2");
      contentOneTimeLine.add(useTextEnterAnime(elContentOne13, 0.2));
      contentOneTimeLine.add(useTextEnterAnime(elContentOne14, 0.2));

      //#endregion

      // 02-1 EA
      //#region
      let contentTwoTimeLine = gsap.timeline({
        scrollTrigger: {
          // markers: true,
          trigger: ".elContentTwo2",
          start: "top 80%",
          // end: "+=400",
          toggleActions: "play play resume pause",
        },
      });

      // contentTwoTimeLine.add(useTextEnterAnime(elContentTwo1, 0.2), "+=1");
      contentTwoTimeLine.add(useTextEnterAnime(elContentTwo2, 0.2));

      contentTwoTimeLine.add(useTextEnterAnime(elContentTwo3, 0.4), "-=0.2");
      contentTwoTimeLine.add(useTextEnterAnime(elContentTwo4, 0.2), "-=0.2");
      contentTwoTimeLine.add(contentLineAnime(elContentTwo5, 0.4), "-=0.1");

      contentTwoTimeLine.add(useTextEnterAnime(elContentTwo6, 0.4), "-=0.4");
      contentTwoTimeLine.add(useTextEnterAnime(elContentTwo7, 0.4), "-=0.2");
      contentTwoTimeLine.add(contentLineAnime(elContentTwo8, 0.4), "=-0.3");

      contentTwoTimeLine.add(useTextEnterAnime(elContentTwo9, 0.4), "-=0.4");
      contentTwoTimeLine.add(useTextEnterAnime(elContentTwo10, 0.2), "-=0.2");
      contentTwoTimeLine.add(contentLineAnime(elContentTwo11, 0.4), "-=0.1");

      contentTwoTimeLine.add(useTextEnterAnime(elContentTwo12, 0.2), "-=0.4");
      contentTwoTimeLine.add(useTextEnterAnime(elContentTwo13, 0.4), "-=0.1");
      contentTwoTimeLine.add(useTextEnterAnime(elContentTwo14, 0.4), "-=0.2");
      contentTwoTimeLine.add(useTextEnterAnime(elContentTwo15, 0.4), "-=0.2");
      contentTwoTimeLine.add(useTextEnterAnime(elContentTwo16, 0.5), "-=0.2");
      contentTwoTimeLine.add(useTextEnterAnime(elContentTwo17, 0.4), "-=0.2");
      contentTwoTimeLine.add(useTextEnterAnime(elContentTwo18, 0.8), "-=0.2");
      //#endregion

      // 03 EA
      //#region
      let contentThreeTimeLine = gsap.timeline({
        scrollTrigger: {
          // markers: true, // 启用标尺
          trigger: ".elContentThree1",
          start: "top 80%",
          toggleActions: "play play resume pause",
        },
        onStart: () => {
          class3.value = true;
        },
      });

      contentThreeTimeLine.add(useTextEnterAnime(elContentThree1, 0.2));
      contentThreeTimeLine.add(useTextEnterAnime(elContentThree2), "-=0.2");
      contentThreeTimeLine.add(
        useTextEnterAnime(elContentThree3, 0.4),
        "-=0.3"
      );
      contentThreeTimeLine.add(
        useTextEnterAnime(elContentThree4, 0.4),
        "-=0.3"
      );

      contentThreeTimeLine.add(
        useTextEnterAnime(elContentThree5, 0.4),
        "-=0.2"
      );
      contentThreeTimeLine.add(
        useTextEnterAnime(elContentThree5TitleType, 0.2),
        "-=0.2"
      );
      contentThreeTimeLine.add(
        useTextEnterAnime(elContentThree5Subtitle, 0.2),
        "-=0.2"
      );
      contentThreeTimeLine.add(
        contentLineAnime(elContentThree5Line, 0.4),
        "-=0.1"
      );

      contentThreeTimeLine.add(
        useTextEnterAnime(elContentThree6, 0.4),
        "-=0.2"
      );
      contentThreeTimeLine.add(
        useTextEnterAnime(elContentThree6TitleType, 0.2),
        "-=0.2"
      );
      contentThreeTimeLine.add(
        useTextEnterAnime(elContentThree6Subtitle, 0.2),
        "-=0.2"
      );
      contentThreeTimeLine.add(
        contentLineAnime(elContentThree6Line, 0.4),
        "-=0.1"
      );

      contentThreeTimeLine.add(
        useTextEnterAnime(elContentThree7, 0.4),
        "-=0.2"
      );
      contentThreeTimeLine.add(
        useTextEnterAnime(elContentThree7TitleType, 0.2),
        "-=0.2"
      );
      contentThreeTimeLine.add(
        useTextEnterAnime(elContentThree7Subtitle, 0.2),
        "-=0.2"
      );
      contentThreeTimeLine.add(
        contentLineAnime(elContentThree7Line, 0.4),
        "-=0.1"
      );

      contentThreeTimeLine.add(
        useTextEnterAnime(elContentThree8, 0.4),
        "-=0.2"
      );
      contentThreeTimeLine.add(
        useTextEnterAnime(elContentThree8TitleType, 0.2),
        "-=0.2"
      );
      contentThreeTimeLine.add(
        useTextEnterAnime(elContentThree8Subtitle, 0.2),
        "-=0.2"
      );
      contentThreeTimeLine.add(
        contentLineAnime(elContentThree8Line, 0.4),
        "-=0.1"
      );

      contentThreeTimeLine.add(
        useTextEnterAnime(elContentThree9, 0.4),
        "-=0.2"
      );
      contentThreeTimeLine.add(
        useTextEnterAnime(elContentThree9TitleType, 0.2),
        "-=0.2"
      );
      contentThreeTimeLine.add(
        useTextEnterAnime(elContentThree9Subtitle, 0.2),
        "-=0.2"
      );
      contentThreeTimeLine.add(
        contentLineAnime(elContentThree9Line, 0.4),
        "-=0.1"
      );

      //#endregion

      // 04 EA
      //#region
      let contentFourTimeLine = gsap.timeline({
        scrollTrigger: {
          // markers: true, // 启用标尺
          trigger: ".elContentFour1",
          start: "top 80%",
          toggleActions: "play play resume pause",
        },
        onStart: () => {
          class3.value = true;
        },
      });

      contentFourTimeLine.add(useTextEnterAnime(elContentFour1, 0.4), "-=0.1");
      contentFourTimeLine.add(useTextEnterAnime(elContentFour2, 0.4), "-=0.2");

      contentFourTimeLine.add(useTextEnterAnime(elContentFour5, 0.4), "-=0.2");
      contentFourTimeLine.add(
        useTextEnterAnime(elContentFour5TitleType, 0.2),
        "-=0.2"
      );
      contentFourTimeLine.add(
        useTextEnterAnime(elContentFour5Subtitle, 0.2),
        "-=0.2"
      );
      contentFourTimeLine.add(
        contentLineAnime(elContentFour5Line, 0.4),
        "-=0.1"
      );

      contentFourTimeLine.add(useTextEnterAnime(elContentFour6, 0.4), "-=0.2");
      contentFourTimeLine.add(
        useTextEnterAnime(elContentFour6TitleType, 0.2),
        "-=0.2"
      );
      contentFourTimeLine.add(
        useTextEnterAnime(elContentFour6Subtitle, 0.2),
        "-=0.2"
      );
      contentFourTimeLine.add(
        contentLineAnime(elContentFour6Line, 0.4),
        "-=0.1"
      );

      contentFourTimeLine.add(useTextEnterAnime(elContentFour7, 0.4), "-=0.2");
      contentFourTimeLine.add(
        useTextEnterAnime(elContentFour7TitleType, 0.2),
        "-=0.2"
      );
      contentFourTimeLine.add(
        useTextEnterAnime(elContentFour7Subtitle, 0.2),
        "-=0.2"
      );
      contentFourTimeLine.add(
        contentLineAnime(elContentFour7Line, 0.4),
        "-=0.1"
      );

      contentFourTimeLine.add(useTextEnterAnime(elContentFour8, 0.4), "-=0.2");
      contentFourTimeLine.add(
        useTextEnterAnime(elContentFour8TitleType, 0.2),
        "-=0.2"
      );
      contentFourTimeLine.add(
        useTextEnterAnime(elContentFour8Subtitle, 0.2),
        "-=0.2"
      );
      contentFourTimeLine.add(
        contentLineAnime(elContentFour8Line, 0.4),
        "-=0.1"
      );

      contentFourTimeLine.add(useTextEnterAnime(elContentFour9, 0.4), "-=0.2");
      contentFourTimeLine.add(
        useTextEnterAnime(elContentFour9TitleType, 0.2),
        "-=0.2"
      );
      contentFourTimeLine.add(
        useTextEnterAnime(elContentFour9Subtitle, 0.2),
        "-=0.2"
      );
      contentFourTimeLine.add(
        contentLineAnime(elContentFour9Line, 0.4),
        "-=0.1"
      );

      contentFourTimeLine.add(useTextEnterAnime(elContentFour10, 0.4), "-=0.3");

      // contentFourTimeLine.add(
      //   gsap.fromTo(
      //     ".takeToMeBox",
      //     {
      //       y: 10,
      //       opacity: 0,
      //     },
      //     {
      //       y: 0,
      //       opacity: 1,
      //       duration: 0.5,
      //       onComplete: () => {
      //         console.log("takeToMeBox end");
      //       },
      //     }
      //   )
      // );
      //#endregion

      // Contact Us
      let content4TimeLine = gsap.timeline({
        scrollTrigger: {
          // markers: true, // 启用标尺
          trigger: ".elContent40",
          start: "top 80%",
          // end: "+=400",
          toggleActions: "play play play pause", //restart
        },
      });

      content4TimeLine.add(useTextEnterAnime(elContent41, 0.2), "+=1");
      content4TimeLine.add(useTextEnterAnime(elContent42, 0.4));
      content4TimeLine.add(useTextEnterAnime(elContent43, 0.4), "-=0.2");
      content4TimeLine.add(useTextEnterAnime(elContent44, 0.4), "-=0.2");
      content4TimeLine.add(useTextEnterAnime(elContent45, 0.4), "-=0.2");
      content4TimeLine.add(useTextEnterAnime(elContent46, 0.4), "-=0.2");

      let blueBallBox = gsap.fromTo(
        ".blueBallBox",
        {
          duration: 1,
          y: 10,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power2.inOut",
        }
      );

      content4TimeLine.add(blueBallBox, "-=0.2");
      content4TimeLine.add(useTextEnterAnime(elContent47, 0.4), "-=0.2");
      content4TimeLine.add(useTextEnterAnime(elContent48, 0.4), "-=0.2");

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
        path: "/data.json", // 动画资源
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
      elContentOne6,
      elContentOne7,
      elContentOne8,
      elContentOne9,
      elContentOne10,
      elContentOne11,
      elContentOne12,
      elContentOne13,
      elContentOne14,
      // elContentTwo1,
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
      elContentThree5TitleType,
      elContentThree5Subtitle,
      elContentThree5Line,
      elContentThree6,
      elContentThree6TitleType,
      elContentThree6Subtitle,
      elContentThree6Line,
      elContentThree7,
      elContentThree7TitleType,
      elContentThree7Subtitle,
      elContentThree7Line,
      elContentThree8,
      elContentThree8TitleType,
      elContentThree8Subtitle,
      elContentThree8Line,
      elContentThree9,
      elContentThree9TitleType,
      elContentThree9Subtitle,
      elContentThree9Line,
      clickHome,
      clickIntroduce,
      clickPortfolio,
      clickContactUs,
      class4,
      elContentFour1,
      elContentFour2,
      elContentFour5,
      elContentFour5TitleType,
      elContentFour5Subtitle,
      elContentFour5Line,
      elContentFour6,
      elContentFour6TitleType,
      elContentFour6Subtitle,
      elContentFour6Line,
      elContentFour7,
      elContentFour7TitleType,
      elContentFour7Subtitle,
      elContentFour7Line,
      elContentFour8,
      elContentFour8TitleType,
      elContentFour8Subtitle,
      elContentFour8Line,
      elContentFour9,
      elContentFour9TitleType,
      elContentFour9Subtitle,
      elContentFour9Line,
      elContentFour10,
      elContent40,
      elContent41,
      elContent42,
      elContent43,
      elContent44,
      elContent45,
      elContent46,
      elContent47,
      elContent48,
      mailto,
    };
  },
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@100;300;400;500;700;900&display=swap");

#root {
  --gray-0: #fafafa;
  --highlight-1: #0042f6;
  --highlight-2: #09feff;
}

.zh {
  font-family: "Noto Sans SC", sans-serif;
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
  /* grid-template-rows: auto 40px; */
}

.about-describe {
  @apply border-b border-white grid;
  container-type: inline-size;
}

.aboutText {
  font-size: 4.2cqh;
  line-height: 120%;
}

@media (max-width: 390px) {
  .aboutText {
    font-size: 2.7cqh;
    line-height: 120%;
  }

  .about-coord {
    display: none;
  }
}

.about-describe p {
  /* @apply mb-8; */
}

.about-linkCoord {
  font-size: 1.7cqh;
  line-height: 120%;
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
  @apply relative flex items-center justify-between pb-8 mb-8;
}

.line {
  @apply w-full border-b absolute bottom-0;
  border-color: rgba(0, 0, 0, 0.08);
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
  background-image: url(https://mtwork.oss-cn-shenzhen.aliyuncs.com/blog-assets/home-big-image.png);
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
    url(https://mtwork.oss-cn-shenzhen.aliyuncs.com/blog-assets/home-big-image.png);
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.95),
      rgba(0, 0, 0, 0.75)
    ),
    url(https://mtwork.oss-cn-shenzhen.aliyuncs.com/blog-assets/home-big-image.png);
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

.portfolio-items a {
  @apply relative w-full grid;
  grid-template-rows: 1fr auto;
  grid-auto-flow: column;
  grid-auto-rows: 10px;
}

.portfolio-items:hover .main-heading {
  @apply font-semibold mix-blend-difference;
  transition: 0.5s;
  color: unset;
}

.main-heading {
  @apply text-4xl zh mb-2 italic font-medium;
}

.subtitle {
  @apply text-gray-500 font-medium text-base;
  /* font-weight: 500; */
  margin-bottom: 0.5rem;
  justify-self: end;
  align-self: end;
  color: #9ca3ae;
}

.title-type {
  @apply ml-2;
  color: #9ca3ae;
  margin-top: 8px;
}

.cyberpunk::after {
  /* --slice-0: inset(50% 50% 50% 50%);
  --slice-1: inset(80% -6px 0 0);
  --slice-2: inset(0% -6px 20% 0);
  --slice-3: inset(10% -6px 80% 0);
  --slice-4: inset(20% -6px 70% 0);
  --slice-5: inset(60% -6px 30% 0);
  --slice-6: inset(40% -6px 40% 0);
  --slice-7: inset(50% -6px 45% 0);
  --slice-8: inset(30% -6px 40% 0);
  --slice-9: inset(20% -6px 70% 0);   
  --slice-10: inset(35% -6px 60% 0); */

  --slice-0: inset(50% 50% 50% 50%);
  --slice-1: inset(80% -16px 0 0);
  --slice-2: inset(50% -6px 30% 0);
  --slice-3: inset(10% -16px 85% 0);
  --slice-4: inset(40% -6px 43% 0);
  --slice-5: inset(80% -16px 5% 0);

  display: block;
  position: absolute;
  top: 0;
  left: 0;
  text-shadow: -10px -10px 0px var(--highlight-1), 10px 10px 0px #e8514c;
  text-shadow: -10px -10px 0px #09feff, 10px 10px 0px #e8514c;

  /* #09FEFF #e8514c */
  clip-path: var(--slice-0);
  /* transform: translate(-4px, 2px); */
}

.cyberpunk:hover::after {
  animation: 0.5s glitch forwards;
}

.cyberpunk:hover {
  /* animation: 0.5s glitch2 forwards; */
  /* color: var(--highlight-1); */
  /* transition: 0.5s; */
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
    clip-path: var(--slice-1);
    transform: translate(-24px, -14px);
  }
  10% {
    clip-path: var(--slice-3);
    transform: translate(14px, 14px);
  }
  20% {
    clip-path: var(--slice-1);
    transform: translate(-14px, 14px);
  }
  30% {
    clip-path: var(--slice-3);
    transform: translate(4px, 15px);
  }
  40% {
    clip-path: var(--slice-2);
    transform: translate(-15px, 4px);
  }
  50% {
    clip-path: var(--slice-3);
    transform: translate(15px, 4px);
  }
  60% {
    clip-path: var(--slice-4);
    transform: translate(15px, 14px);
  }
  70% {
    clip-path: var(--slice-2);
    transform: translate(-14px, 14px);
  }
  80% {
    clip-path: var(--slice-5);
    transform: translate(24px, -14px);
  }
  90% {
    clip-path: var(--slice-1);
    transform: translate(-14px, 4px);
  }
  100% {
    clip-path: var(--slice-0);
    /* transform: translate(-20px, -10px); */
  }
}

@keyframes glitch2 {
  0% {
    opacity: 0;
  }
  99% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    color: #ff5500;
  }
}

@keyframes glitch3 {
  100% {
    opacity: 0.1;
  }
}

@keyframes glitch3-2 {
  100% {
    opacity: 0.8;
    color: #ff5500;
  }
}

.inspirations:hover .cyberpunk,
.inspirations:hover .title-type {
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

.inspirations li:hover .title-type {
  animation: 0.5s glitch3-2 forwards;
  @apply mix-blend-difference;
}

.cyberpunk::after {
  content: attr(data-text);
}

.menu-ul li:hover span {
  animation: 0.25s glitch2 forwards;
  /* color: #0042f6; */
  @apply mix-blend-difference;
}

#dribbbleLink {
  position: relative;
  overflow: hidden;
  transition: color 0s 0.5s;
}

#dribbbleLink:hover {
  position: relative;
  color: rgba(255, 255, 255, 0);
  transition: color 0s 0s;
}

#dribbbleLink::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  transform: translateY(16px);
  color: #fff;
  transition: 0.5s;
}

#dribbbleLink::after {
  content: attr(data-text);
  position: absolute;
  left: 0;
  transform: translateY(0px);
  color: #fff;
  transition: 0.5s;
}

#dribbbleLink:hover::before {
  transform: translateY(0px);
}

#dribbbleLink:hover::after {
  transform: translateY(-16px);
}

@media screen and (max-width: 390px) {
  .Portfolio-subtitle {
    @apply mb-8;
  }
  .portfolio-items {
    padding-bottom: 8px !important;
    margin-bottom: 24px !important;
  }
  .portfolio-items a {
    @apply relative w-full grid;
    grid-template-rows: 1fr auto;
    grid-auto-flow: row dense;
    grid-auto-rows: 10px;
  }

  .portfolio-items a span:nth-child(1) {
    color: red;
  }

  .main-heading {
    @apply text-3xl;
  }

  .title-type {
    @apply text-sm;
    color: #9ca3ae;
    margin-top: 4px !important;
    margin-left: 0px !important;
  }

  .subtitle {
    @apply text-sm;
    font-size: 0.875rem !important;
    line-height: 1.25rem !important;
  }
}

@media screen and (min-width: 640px) {
  .Portfolio-subtitle {
    @apply mb-8;
  }
  .portfolio-items {
    padding-bottom: 8px !important;
    margin-bottom: 24px !important;
  }
  .portfolio-items a {
    @apply relative w-full grid;
    grid-template-rows: 1fr auto;
    grid-auto-flow: column dense;
    grid-auto-rows: 10px;
  }

  .portfolio-items a span:nth-child(1) {
    color: red;
  }

  .main-heading {
    @apply text-3xl;
  }

  .title-type {
    @apply text-sm;
    color: #9ca3ae;
    margin-top: 4px !important;
    margin-left: 0px !important;
  }

  .subtitle {
    @apply text-sm;
    font-size: 0.875rem !important;
    line-height: 1.25rem !important;
  }
}
</style>
