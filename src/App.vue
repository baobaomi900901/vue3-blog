<template>
  <NavigationBar v-if="route.path !== '/'"></NavigationBar>
  <router-view></router-view>
</template>

<script>
import { ref, reactive, onMounted, watch } from "vue";
import NavigationBar from "./components/NavigationBar";
import { useRoute } from "vue-router";
export default {
  name: "App",
  components: {
    NavigationBar,
  },
  setup() {
    let fristNavBar = ref();
    const route = useRoute();
    watch(
      () => route.path,
      () => {
        // console.log(`route.path:${route.path}`);
      },
      {
        immediate: true,
      }
    );
    return { route };
  },
};
</script>

<style>
body {
  @apply bg-black relative select-text ;
}
</style>
