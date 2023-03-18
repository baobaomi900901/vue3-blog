<!--
* @description  参数1
* @fileName  Highlight
* @author userName
* @date 2023-03-10 22:14:42
* @version V3.0.0
!-->
<template>
  <div class="hljs-container">
    <pre>
      <code class="hl-css" :language="type">
        {{code}}
      </code>
    </pre>
  </div>
</template>

<script setup>
// import 'highlight.js/styles/stackoverflow-dark.css'
// import 'highlight.js/styles/base16/github.css'
import "highlight.js/styles/agate.css";

import hljs from "highlight.js";
import { onMounted } from "vue";
const props = defineProps({
  code: String,
  type: String,
  theme: String,
});
onMounted(() => {
  const blocks = document.querySelectorAll("pre code");
  blocks.forEach((block) => {
    hljs.highlightBlock(block);
    // 从这开始是设置行号 把每一行代码放入li标签中实现行号
    block.innerHTML = block.innerHTML.replace(/^\s{9}/gm, "");
    block.innerHTML = `<ol data-v-589b9458><li data-v-589b9458>${block.innerHTML.replace(
        /\n/g,
      `</li><li data-v-589b9458>`
    )}</li></ol>`;
  });
});
</script>

<style scoped>
pre {
  position: relative;
  min-width: 600px;
}
.hljs-container {
  background-color: #fff;
}

.hl-css ol {
  list-style-type: decimal;
  position: relative;
}
.hl-css ol li {
  color: #abb2bf;
  white-space: pre;
  list-style-position: outside;
  height: 28px;
  width: 100%;
  border-left: 1px solid #8a8a8a;
  position: absolute;
  left: -40px;
}
</style>