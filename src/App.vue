<template>
  <NavigationBar v-if="route.path !== '/' && terminal "></NavigationBar>
  <router-view></router-view>
</template>

<script>
import { ref, reactive, onMounted, watch } from "vue";
import NavigationBar from "./components/NavigationBar";
import { useRoute } from "vue-router";
// using es modules
import device from "current-device";

export default {
  name: "App",
  components: {
    NavigationBar,
  },
  setup() {
    let fristNavBar = ref();
    const route = useRoute();

    let terminal = ref(device.desktop());
    console.log("device :>> ", terminal.value);

    watch(
      () => route.path,
      () => {
        // console.log(`route.path:${route.path}`);
      },
      {
        immediate: true,
      }
    );
    return { route, terminal };
  },
};
</script>

<style>
body {
  @apply bg-black relative select-text;
}
</style>
