<!--
* @description  参数1
* @fileName  navigation
* @author userName
* @date 2022-01-30 23:20:58
* @version V3.0.0
!-->
<template>
  <div class="fixed" style="z-index: 99">
    <div
      class="NavigationBar fixed w-full h-20 px-4 sm:px-8 md:px-16 flex items-center justify-between text-gray-400"
      :class="[
        {
          'bg-gray-100 shadow border-b border-gray-100': $route.name == 'about',
        },
      ]"
      style="zindex: 999"
    >
      <div class="flex items-center z-50" id="logo">
        <router-link to="/home">
          <img src="../assets/img/logo.png" alt="" class="w-8 h-8" />
        </router-link>
      </div>

      <nav
        class="pcNavBar hidden sm:grid grid-flow-col gap-6 items-center font-semibold leading-tight uppercase relative text-gray-500"
      >
        <router-link
          to="/home"
          :active-class="isActive ? 'active-bg-black' : 'active-bg-white'"
        >
          <span class="navBarItem hover:text-dark-blue inline-block">
            Home
          </span>
        </router-link>

        <router-link
          to="/About"
          :class="{ 'text-dark-blue': $route.name == 'about' }"
        >
          <span class="navBarItem hover:text-dark-blue inline-block">
            About
          </span>
        </router-link>

        <a
          class="navBarItem navBarItemSvg"
          href="https://github.com/baobaomi900901"
          target="_blank"
        >
          <svg
            width="24px"
            height="24px"
            style="
              vertical-align: -0.125em;
              -ms-transform: rotate(360deg);
              -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
            "
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 256 250"
          >
            <path
              d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46c6.397 1.185 8.746-2.777 8.746-6.158c0-3.052-.12-13.135-.174-23.83c-35.61 7.742-43.124-15.103-43.124-15.103c-5.823-14.795-14.213-18.73-14.213-18.73c-11.613-7.944.876-7.78.876-7.78c12.853.902 19.621 13.19 19.621 13.19c11.417 19.568 29.945 13.911 37.249 10.64c1.149-8.272 4.466-13.92 8.127-17.116c-28.431-3.236-58.318-14.212-58.318-63.258c0-13.975 5-25.394 13.188-34.358c-1.329-3.224-5.71-16.242 1.24-33.874c0 0 10.749-3.44 35.21 13.121c10.21-2.836 21.16-4.258 32.038-4.307c10.878.049 21.837 1.47 32.066 4.307c24.431-16.56 35.165-13.12 35.165-13.12c6.967 17.63 2.584 30.65 1.255 33.873c8.207 8.964 13.173 20.383 13.173 34.358c0 49.163-29.944 59.988-58.447 63.157c4.591 3.972 8.682 11.762 8.682 23.704c0 17.126-.148 30.91-.148 35.126c0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002C256 57.307 198.691 0 128.001 0zm-80.06 182.34c-.282.636-1.283.827-2.194.39c-.929-.417-1.45-1.284-1.15-1.922c.276-.655 1.279-.838 2.205-.399c.93.418 1.46 1.293 1.139 1.931zm6.296 5.618c-.61.566-1.804.303-2.614-.591c-.837-.892-.994-2.086-.375-2.66c.63-.566 1.787-.301 2.626.591c.838.903 1 2.088.363 2.66zm4.32 7.188c-.785.545-2.067.034-2.86-1.104c-.784-1.138-.784-2.503.017-3.05c.795-.547 2.058-.055 2.861 1.075c.782 1.157.782 2.522-.019 3.08zm7.304 8.325c-.701.774-2.196.566-3.29-.49c-1.119-1.032-1.43-2.496-.726-3.27c.71-.776 2.213-.558 3.315.49c1.11 1.03 1.45 2.505.701 3.27zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033c-1.448-.439-2.395-1.613-2.103-2.626c.301-1.01 1.747-1.484 3.207-1.028c1.446.436 2.396 1.602 2.095 2.622zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95c-1.53.034-2.769-.82-2.786-1.86c0-1.065 1.202-1.932 2.733-1.958c1.522-.03 2.768.818 2.768 1.868zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37c-1.485.271-2.861-.365-3.05-1.386c-.184-1.056.893-2.114 2.376-2.387c1.514-.263 2.868.356 3.061 1.403z"
              :fill="isActive ? '#9299a5' : '#9299a5'"
            />
          </svg>
        </a>
      </nav>
    </div>

    <!-- Menu for mobile  -->
    <!-- hamburger Menu-->
    <div
      class="mobileMenu"
      :class="{
        'mobileMenu-open': mobileMenu == true,
        'mobileMenu-close': mobileMenu == false,
        'pointer-events-none': mobileMenu == false,
      }"
      style="z-index: 99"
    >
      <div
        class="fixed w-full h-screen z-50 flex justify-center items-center"
        style="background: rgba(255, 255, 255, 0.95)"
      >
        <div>
          <ul
            class="text-5xl font-semibold inline-block h-auto 3xl:text-5xl z-50 mobileMenu-item"
            :class="{
              'mobileMenu-item-open': mobileMenu == true,
              'mobileMenu-item-close': mobileMenu == false,
            }"
          >
            <li>
              <router-link
                to="/home"
                :class="{
                  'text-dark-blue': $route.name == 'home',
                }"
                @click="mobileMenu = !mobileMenu"
              >
                <span class="hover:text-dark-blue inline-block zh"> Home </span>
              </router-link>
            </li>
            <li class="mt-8">
              <router-link
                to="/About"
                :class="{
                  'text-dark-blue': $route.name == 'about',
                }"
                @click="mobileMenu = !mobileMenu"
              >
                <span class="hover:text-dark-blue inline-block zh">
                  About
                </span>
              </router-link>
            </li>
          </ul>
          <div
            class="absolute top-0 left-0 h-full w-full text-8xl font-semibold opacity-5 uppercase flex justify-center items-center pointer-events-none"
          >
            <div
              class="mobileMenu-item2"
              :class="{
                'mobileMenu-item2-open': mobileMenu == true,
                'mobileMenu-item2-close': mobileMenu == false,
              }"
            >
              {{ $route.name == 'home' ? 'Home' : $route.name == 'about' ? 'About' : 'Work'  }}
            </div>
          </div>
        </div>
      </div>
      <div
        v-show="mobileMenu"
        class="mobileMenu-mask fixed bg-black w-full h-full opacity-50 pointer-events-none"
      ></div>
    </div>

    <button
      class="mobileNavBar fixed mt-5 mr-0 z-50 mobile:right-0 sm:right-4 "
      style="z-index: 1000" 
      @click="mobileMenu = !mobileMenu"
    >
      <div id="hamburger" class=" " :class="{ open: mobileMenu }">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, onUnmounted, defineComponent } from "vue";
import { gsap } from "gsap";
export default defineComponent({
  name: "NavigationBar",

  setup() {
    const isActive = ref(true);
    const mobileMenu = ref(false);

    function scrollToTopFn() {
      let scrollTop = document.body?.scrollTop;
      let offsetTop = document.querySelector("#homePage2")?.offsetTop;
      isActive.value = scrollTop + 50 <= offsetTop;
    }

    function navAnime() {
      let logoEA = gsap.fromTo(
        "#logo",
        {
          x: -20,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          onComplete() {},
        }
      );

      let navbar = gsap.fromTo(
        ".navBarItem",
        {
          x: 20,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: -0.05,
        }
      );

      let hamburger = gsap.fromTo(
        ".mobileNavBar",
        {
          x: 20,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
        }
      );
      

      let navAnimeLine = gsap.timeline({
        delay: 2,
        onComplete() {},
      });

      navAnimeLine.add(logoEA, 0);
      navAnimeLine.add(navbar, 0);
      navAnimeLine.add(hamburger, "-=0.8");
    }

    onMounted(() => {
      navAnime();
      window.addEventListener("scroll", scrollToTopFn, true);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", scrollToTopFn, true);
    });

    return {
      link: "https://baobaomi900901-blog.netlify.app/",
      isActive,
      mobileMenu,
    };
  },
});
</script>

<style scoped>
.active-bg-black {
  color: rgba(255, 255, 255, 1);
}
.active-bg-white {
  color: rgba(0, 58, 237, 1);
}
.navBarItem::before {
  display: inline-block;
  content: "";
  height: 2px;
  /* background: rgba(0, 58, 237, 1); */
  position: absolute;
  width: 100%;
  bottom: -8px;
  transition: transform 0.25s;
  transform: scaleX(0);
}

.navBarItem:hover:before {
  transform: scaleX(1);
}
.navBarItemSvg:hover:before {
  transform: scaleX(0);
}
svg:hover path {
  fill: rgba(0, 58, 237, 1);
}

#hamburger {
  width: 60px;
  height: 45px;
  position: relative;
  /* margin: 50px auto; */
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  transform: scale(0.5);
}

#hamburger span {
  @apply bg-gray-400;
  display: block;
  position: absolute;
  height: 9px;
  width: 51%;
  opacity: 1;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}

#hamburger span:nth-child(even) {
  left: 50%;
  border-radius: 0 9px 9px 0;
}

#hamburger span:nth-child(odd) {
  left: 0px;
  border-radius: 9px 0 0 9px;
}

#hamburger span:nth-child(1),
#hamburger span:nth-child(2) {
  top: 0px;
}

#hamburger span:nth-child(3),
#hamburger span:nth-child(4) {
  top: 18px;
}

#hamburger span:nth-child(5),
#hamburger span:nth-child(6) {
  top: 36px;
}

#hamburger.open span:nth-child(1),
#hamburger.open span:nth-child(6) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

#hamburger.open span:nth-child(2),
#hamburger.open span:nth-child(5) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

#hamburger.open span:nth-child(1) {
  left: 5px;
  top: 7px;
}

#hamburger.open span:nth-child(2) {
  left: calc(50% - 5px);
  top: 7px;
}

#hamburger.open span:nth-child(3) {
  left: -50%;
  opacity: 0;
}

#hamburger.open span:nth-child(4) {
  left: 100%;
  opacity: 0;
}

#hamburger.open span:nth-child(5) {
  left: 5px;
  top: 29px;
}

#hamburger.open span:nth-child(6) {
  left: calc(50% - 5px);
  top: 29px;
}

.mobileMenu {
  opacity: 0;
}

.mobileMenu-open {
  opacity: 1;
  transition: all 0.25s ease-in-out 0.05s;
}

.mobileMenu-close {
  opacity: 0;
  transition: all 0.25s ease-in-out 0.3s;
}

.mobileMenu-item {
  opacity: 0;
  transform: translateY(20px);
}
.mobileMenu-item-open {
  opacity: 1;
  transform: translateY(-20px);
  transition: all 0.25s ease-in-out 0.25s;
}

.mobileMenu-item-close {
  opacity: 0;
  transform: translateY(0px);
  transition: all 0.25s ease-in-out;
}

.mobileMenu-item2 {
  opacity: 0;
  transform: translateY(-20px);
}
.mobileMenu-item2-open {
  opacity: 1;
  letter-spacing: 8px;
  transition: opacity 0.25s ease-in-out 0.275s;
  transition: letter-spacing 0.25s ease-in-out 0.3s;
}

.mobileMenu-item2-close {
  opacity: 0;
  transition: all 0.25s ease-in-out;
}

@media screen and (max-width: 767px) {
  .pcNavBar {
    display: none;
  }
}

@media screen and (min-width: 768px) {
  .mobileNavBar {
    display: none;
  }
}
</style>
