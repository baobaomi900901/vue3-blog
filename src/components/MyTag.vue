<!--
* @description  参数1
* @fileName  myTag
* @author userName
* @date 2023-03-09 21:27:57
* @version V3.0.0
!-->
<template>
  <div
    id="MyTag"
    class="MyTag zh"
    :class="{ 'bg-blue-100 text-blue-500': type == 'blue' }"
  >
    <slot></slot>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
export default {
  name: "MyTag",
  props: {
    type: String,
  },
  setup(props) {
  },
};
</script>
<style scoped>
.MyTag {
  @apply text-center px-2 pb-0.5 rounded-md lg:mt-4 lg:text-base mobile:mt-2 mobile:text-xs;
  display: inline-block;
}
.MyTag + .MyTag {
  @apply lg:ml-4 mobile:ml-2;
}
</style>