<template>
  <!-- v-if="route.path !== '/' && terminal" -->
  <NavigationBar v-if="route.path !== '/'"></NavigationBar>
  <router-view></router-view>
</template>

<script lang="ts">
import { ref, watch, defineComponent,onMounted } from "vue";
import NavigationBar from "./components/NavigationBar.vue";
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

    let terminal = ref(device.desktop());
    console.log("device :>> ", terminal.value);

    // 获取整个页面的高度
    let pageHeight = document.documentElement.clientHeight;
    console.log("@", pageHeight);

    onMounted(() => {
      let myapp = document.getElementById("app");
      console.log("myapp", myapp);
      console.log("myappHeight", myapp?.style);
    });

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
});
</script>

<style>
body {
  @apply bg-black relative select-text;
}
</style>
