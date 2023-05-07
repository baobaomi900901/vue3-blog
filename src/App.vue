<template>
  <!-- v-if="route.path !== '/' && terminal" -->
  <NavigationBar
    v-if="route.path !== '/'"
    class="navBarDisplay"
    :class="{
      'navBarDisplay-open': navBarDisplay == true,
      'navBarDisplay-close': navBarDisplay == false,
    }"
  ></NavigationBar>
  <router-view></router-view>
</template>

<script lang="ts">
import { ref, watch, defineComponent, onMounted } from "vue";
import NavigationBar from "./components/NavigationBar2.vue";
import { useRoute } from "vue-router";
// using es modules
import device from "current-device";

export default defineComponent({
  name: "App",
  components: {
    NavigationBar,
  },
  setup() {
    const route = useRoute();

    const terminal = ref(device.desktop());
    // console.log("device :>> ", terminal.value);

    const navBarDisplay = ref(true);

    const myapp = document.getElementById("app");
    let oldTop = 0;

    const fn = (cb, time = 300) => {
      let timer = null;
      return () => {
        if (timer) return;
        timer = setTimeout(() => {
          cb();
          timer = null;
        }, time);
      };
    };


    // console.log("window.outerWidth",window.outerWidth);
    

    document.addEventListener(
      "scroll",
      fn(() => {
        let newTop = myapp?.getBoundingClientRect().top;

        if (oldTop !== newTop) {
          if (newTop > oldTop || newTop == 0) {
            navBarDisplay.value = true;
            // console.log("向下滚动", navBarDisplay.value, newTop, oldTop);
          } else {
            navBarDisplay.value = false;
            // console.log("向上滚动", navBarDisplay.value, newTop, oldTop);
          }
        }
        oldTop = newTop;
      }),
      10
    );

    watch(
      () => route.path,
      () => {
        // console.log(`route.path:${route.path}`);
      },
      {
        immediate: true,
      }
    );
    return { route, terminal, navBarDisplay };
  },
});
</script>

<style>
body {
  @apply bg-black relative select-text;
}
.navBarDisplay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.5s;
}
.navBarDisplay-open {
  opacity: 1;
}
.navBarDisplay-close {
  opacity: 0;
}
</style>
