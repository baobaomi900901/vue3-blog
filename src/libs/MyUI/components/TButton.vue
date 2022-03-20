<!--
* @description  参数1
* @fileName  Button
* @author userName
* @date 2022-01-30 00:19:36
* @version V3.0.0
!-->
<template>
  <button id="TButton" class="TButton bg-red-500" @click="showBtn">
    TButton: {{ sum }}
  </button>
</template>

<script lang="ts">
import { ref, reactive } from "vue";
export default {
  name: "TButton",
  props: ["sum"],
  setup(Proxy, context) {
    function showBtn() {
      console.log("showBtn", Proxy.sum);
      context.emit("sum");
    }

    return {
      showBtn,
    };
  },
};
</script>
<style scoped></style>
