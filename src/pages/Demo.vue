<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="page w-full h-full flex flex-row">
    <!-- 过滤器 -->
    <SG-filter class="SG-filter page-tab h-full"></SG-filter>

    <!-- 内容区 -->
    <div class="page-header w-full flex flex-col">

      <!-- 标题与功能 -->
      <div class="page-header-first w-full flex px-9 py-4 justify-between">

        <!-- 标题 -->
        <div class="page-title">
          <SG-title>{{ title }}</SG-title>
          <SG-button icon="sg-icon-pin" class="ml-2.5">123</SG-button>
        </div>

        <!-- 功能 -->
        <div class="page-control">
          <SG-button type="primary" icon="sg-icon-add">新增</SG-button>
          <SG-button icon="sg-icon-import" class="ml-4">导入</SG-button>
          <SG-button icon="sg-icon-export" class="ml-4">导出</SG-button>
        </div>
      </div>

      <!-- 统计与筛选 -->
      <div class="page-header-second w-full flex px-9 py-4 justify-between">

        <!-- 统计 -->
        <div class="page-total">
          <SG-title>{{ pageTotal }}</SG-title>
        </div>

        <!-- 筛选 -->
        <div class="page-control">
          <SG-input
            placeholder="请输入内容"
            prefix-icon="sg-icon-search"
            v-model="input4"
          >
          </SG-input>
          <SG-button icon="sg-icon-refresh">1</SG-button>
          <SG-button icon="sg-icon-field" class="ml-4">2</SG-button>
          <SG-button icon="sg-icon-filter" class="ml-4">3</SG-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { ref, reactive } from "vue";
export default {
  name: "Demo",
  setup() {
    return {};
  },
};
</script>
<style scoped>
</style>
