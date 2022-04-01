---
name: SEGI设计系统
---

# <center>**<span class=" font-bold ">SEGI</span> 设计系统**</center>

##### <center class="text-gary-500 font-light">支撑 SEGI Web 产品的设计系统</center>

<br>
<div style="display: flex; justify-content: center;">
    <img src="https://book.rxshc.com/blog-assets/assets/segi/SEGI.png"/>
</div>
<br>
<br>

##### 初来此地

2020 年 3 月, 我来来到 <a href="https://www.segiuhome.com/" target="_blank">SEGI</a> 加入到产品设计部任职交互组组长, 并在此工作至今。

<br>

##### 项目背景

SEGI 创立于 2013 年, 主营智慧园区不动产数字化平台, 产品大多是中后台产品, 公司拥有四个研发中心和五个产品线, 我所在设计部门有 8 个设计师, 因为没有一个 "设计系统", 所以大家都在孤立工作, 且在不断的 "**重新设计**" 。

<!-- 我将使用 Agile UI 的经验为 SEGI 构建一套设计系统, 包含 sketch 组件库、Axure 元件库, 以及与开发人员一起编写组件库样式与动画代码。 -->

<br>

##### 大多数团队现状:

1.设计师不知前端如何实现, 只能被动走查页面;

2.开发不懂设计语言, get 不到设计细节, 只要功能跑的通, 样式差不多久行了;

所以纵使有看似完整的 UI 规范, 因为颗粒度和理解偏差, 导致将 UI 规范转译成代码时保真率无法保证.

<br>

> **解决方案:**

> 1.给设计师培训够用的前端知识, 让其在画图的同时能够给出工程实施的解决方案;

> > <span class="text-gray-400"> ps: 经过实践, 必须了解这些知识点: HTML, CSS 选择器, CSS 基础样式, CSS 伪类, flex 布局与 grid 布局。</span>

> <span>2.</span> <span class="line-through">将 UI 属性提取出来, 编辑成变量表;</span>

> > <span class="text-gray-400"> ps: 实践中发现并不能完美解决项目中保真率的问题, 于是和前端团队一起使用 TaiwindCSS 将 UI 规范转译成代码 CSS 类 进行管理。</span>

<br>

##### 我做了什么?

如下:

> **1.** 与两名设计师组成一个工作组, 带领他们认识设计系统, 并教会他们基础的 前端布局, CSS 样式代码, 知道设计如何实现设计;
>
> **2.** 引入 Markdown + Git 为工具的文档体系;
>
> **3.** 将公司的 UI 规范迁移至 Sketch , 并输出组件库, 给予中台 UI 设计师使用;
>
> **4.** 制作与 Sketch 组件库同版本的 Axure 元件库, 给予产品经理使用;
>
> **6.** 使用 Tailwind 配置 CSS 类;
>
> **7.** 与开发使用 <a href="https://storybook.js.org/" target="_blank">Storybook</a> 编写组件文档;
>
> **8.** 为部分页面模板提供 前端可用的**自适应适配方案**;
>
> **9.** 编写了一个设计部门对内的门户网站, 用于发布文档与设计数字资产 (icons, 设计规范, 组件库, 元件库)。

<br>

##### 学到了什么?

**"不是每个人一开始都会喜欢这个设计系统，甚至不知道它是什么。"**

虽然公司同意我提议构建设计系统，但是这个系统并不能我一个人完成, 同时其他同事, 部门的产品线项目任务也很重, 在没有看到利益的情况下, 并不是所有人都支持。

<br>

**如何与开发协同工作**

> **互相尊重**:
>
> 各司其职, 明确设计师和开发的技能重叠在哪里, 使用相同的语言沟通, 尊重开发人员, 并且获得他们的尊重;
>
> **搁置争议**:
>
> 良好的协作在于完成共同目标, 一定要避免出现问题就开始指责: "规范不准确" 或者 "开发能力不行"😅;
>
> **尽早让开发人员参与进来**:
>
> 尽早拉入开发人员参与不仅仅是出于礼貌, 开发人员越了解全局设计目&价值，他们就越能满足设计师愿景;
>
> **开发人员一起审核 <span class="font-bold">Low-Hi</span>**:
>
> 一起商讨实现方式, 共同相互学习, 保证设计容错避免设计无法落地;
>
> <center class="bg-yellow-50 ml-9 mb-8 font-thin">" 如果实现很复杂, 那么对于用户来说可能也很复杂。"</center>
>
> **使用现代设计工具**:
>
> 使用 sketch + measure or 蓝湖, 让开发不用盲猜设计规范, 当然这还不够, 规范越是详细, 越是得分类向需要这些规范的开发人员宣讲, 帮助他们理解为何如此设计, 避免将颗粒度太低信息传递给开发。这样就可以双方的节省时间，消除不必要的错误，并提高质量。

 <br>

**需要做的很多, 但是要有优先级**

设计落地是最基础的价值标准, 任务优先级如下:

> 1.Sketch 设计系统规范;
>
> 2.Axure 元件库;
>
> 3.扩充新组件的标准与流程;
>
> 4.重构老旧组件增加扩展性;
>
> 5.向其他部门宣讲设计系统的意义, 要让其他人感觉到设计系统能够帮助他们简化工作;
>
> 6.Storybook 中组件库贡献代码, 前提你至少熟练使用 HTML, CSS;
>
> 7.使用 JIRA、禅道等工具整理的需求;
>
> 8.最终开放设计系统, 让大家一起构建使其茁壮成长。

<br>
<br>

##### 产出截图

因为系统是内网部署, 所以只能展示一些截图:

<ul class="slides rounded-sm">
  <input type="radio" id="control-1" name="control" checked>
  <input type="radio" id="control-2" name="control">
  <input type="radio" id="control-3" name="control">
  <input type="radio" id="control-4" name="control">
  
  <!--  Left/Right Button  -->
  <div class="navigator slide-1">
    <label for="control-4">
      <div class="fas fa-chevron-left"></div>
    </label>
    <label for="control-2">
      <div class="fas fa-chevron-right"></div>
    </label>
  </div>
  
  <div class="navigator slide-2">
    <label for="control-1">
      <div class="fas fa-chevron-left"></div>
    </label>
    <label for="control-3">
      <div class="fas fa-chevron-right"></div>
    </label>
  </div>
  
  <div class="navigator slide-3">
    <label for="control-2">
      <div class="fas fa-chevron-left"></div>
    </label>
    <label for="control-4">
      <div class="fas fa-chevron-right"></div>
    </label>
  </div>

  <div class="navigator slide-4">
    <label for="control-3">
      <div class="fas fa-chevron-left"></div>
    </label>
    <label for="control-1">
      <div class="fas fa-chevron-right"></div>
    </label>
  </div>

  <!--  /Left/Right Button  -->

  <li class="slide">
    <img src="https://book.rxshc.com/blog-assets/assets/segi/SEGI-Component.png" class=" absolute w-10/12">
    <span class="text-sm text-white">Sketch 设计系统规范</span>
  </li>
  <li class="slide">
    <img src="https://book.rxshc.com/blog-assets/assets/segi/SEGI-storybook.png" class=" absolute w-10/12">
    <span class="text-sm text-white">Storybook 组件开发工具</span>
  </li>
  <li class="slide">
    <img src="https://book.rxshc.com/blog-assets/assets/segi/SEGI-design-studio.png" class=" absolute w-10/12">
    <span class="text-sm text-white">设计部门对内门户网站</span>
  </li>
  <li class="slide">
    <img src="https://book.rxshc.com/blog-assets/assets/segi/SEGI-Markdown.png" class=" absolute w-10/12">
    <span class="text-sm text-white">Markdown 文档</span>
  </li>
  
  <div class="controls-visible">
    <label for="control-1"></label>
    <label for="control-2"></label>
    <label for="control-3"></label>
    <label for="control-4"></label>
  </div>
</ul>

<br>
<br>

##### 写在最后

设计应该 **务实**, 而非花大量时间去纠结 样式好不好看, 动画顺不顺畅, 我们需要参与到产品的全生命周期中去。 跨职能协作时, 我们要尽足最大努力让每个参与放都觉得可用, 有用, 愉悦, 说到底, 设计部门是内部支撑部门, 部门价值来源于兄弟部门的肯定。

<br>

通常工程关键阶段: **计划-开发-测试-发布**

> **计划**:
>
> 通常一个功能从澄清需求到设计完成, 在设计师手上的事件少则 3~5 天, 最多不过一个月, 而我们的产品经理大部分在这个领域已经经营了好几年, 这中间存在巨大的信息差, 为了避免项目实施时鸡同鸭讲, 应该在计划阶段主动参与收集需求, 分析需求, 竞品分析等;
>
> **开发**:
>
> 主动了解工程实现逻辑, 提供详细的 UI/UE 细节, 提出问题的同时, 尽量提供解决思路 (当然, 有解决方案更好);

> **测试**:
>
> 即使有其他测试人员, 也应该主动参与视觉 QA, 确保 UI/UE 细节按预期实现并质量优秀;

> **发布**:
>
> 发布后, 要主动和产品负责人沟通, 获取用户反馈, 区分问题优先级, 反思产品迭代时如何改进。

<br>

实现以上构想的根本在于解放设计部门的生产力, 用运用 **设计系统** 去解决重复性工作。
