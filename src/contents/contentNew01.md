---
name: SEGI设计系统
---

# <center>**<span class=" font-bold ">SEGI</span> 设计系统**</center>

##### <center class="text-gary-500 font-light">支撑 SEGI 园区管理产品的设计系统</center>

<br>
<div style="display: flex; justify-content: center;">
    <img src="../assets/segi/SEGI.png"/>
</div>
<br>
<br>

<a href="#name">目录</a>

##### 初来此地

2020 年 3 月，我来来到 <a href="https://www.segiuhome.com/" target="_blank">SEGI</a> 加入到产品设计部任职交互组组长，并在此工作至 2022 年 5 月。

<br>

##### 项目背景

SEGI 创立于 2013 年，主营智慧园区不动产数字化平台，产品大多是中后台产品，公司拥有四个研发中心和五个产品线，我所在设计部门有 8 个设计师，因为没有一个 "设计系统"，所以大家都在孤立工作，且在不断的 "**重新设计**" 。

我将使用 **Agile UI** 的经验为 <a href="https://www.segiuhome.com/" target="_blank">SEGI</a> 构建一套设计系统，包含 sketch 组件库、Axure 元件库，以及与开发人员一起编写组件库样式与动画代码。

<br>

##### 发现问题

大多数团队现状:

1.设计师不知前端如何实现，只能被动走查页面;

2.开发不懂设计语言，get 不到设计细节，只要功能跑的通，样式差不多久行了;

所以纵使有看似完整的 UI 规范，因为颗粒度和理解偏差，导致将 UI 规范转译成代码时保真率无法保证。

<br>

##### 如何改变僵局?

<br>

1.给设计师培训够用的前端知识，让其在画图的同时能够给出工程实施的解决方案;

<span class="text-gray-500 text-base rounded-sm" > ps: 经过实践，必须了解这些知识点: HTML，CSS 选择器，CSS 基础样式，CSS 伪类，flex 布局与 grid 布局。</span>

<span>2.</span><span class="line-through">将 UI 属性提取出来，编辑成变量表;</span>

<span class="text-gray-500 text-base bg-blue-100 px-2 py-1"> ps: 实践中发现并不能完美解决项目中保真率的问题，于是和前端团队一起使用 TaiwindCSS 将 UI 规范转译成代码 CSS 类 进行管理。</span>

<br>
<br>

##### 我做了什么?

<br>

###### 1. 将团队工作流从 Photoshop + 蓝湖 转换到 Sketch + Measure + SVN

**为什么不使用蓝湖 和 Figma?**

我们日常在于开发人员协作时，经常会听到吐槽"蓝湖加载慢"，加之考虑到未来设计部门也会纳入数据安全的范围，我们选择主动放弃蓝湖。

至于 Figma，我有一篇专栏文章，欢迎 <a href="https://www.bilibili.com/read/cv16113580" target="_blank">点击阅读</a>。

<br>

###### 2. 转变设计思路

以往的设计思路是项目需要什么，设计部门就提供什么样的图。这样设计部门的规范就变得非常局限，缺乏对平台级产品的的全局观，导致一些子产品之间，**UI 样式** 与 **交互形式** 让用户产生割裂感(不像是在使用一家公司的产品)，同时不同设计师之间存在重复设计，导致后期项目迭代的设计维护成本变得非常高。

我们对产品进行模块化设计，对通用交互模块进行按平台维度进行设计。这里提供一个与租赁产品部门合作，用新组件赋能产品提升用户体验的例子。

分为三个步骤: 1.发现问题，2.提出设想，3.落地实施。

<div class="pl-10">
  <div class="mt-4 text-lg font-medium">2.1.发现问题</div>
  <div class=" font-normal mt-2 mb-4">首先从不涉及业务的页面框架的通用问题着手, 标准关键词如: 
    <span class="font-semibold">用户视觉动线、用户场景匹配、防御性设计</span>
  </div>
  <div class=" flex flex-col justify-center items-center rounded-sm  mt-2 bg-gray-200 shadow-lg p-4">
      <img src="../assets/segi/组件改版案例/合同台账体验优化.003.png" class="">
      <img src="../assets/segi/组件改版案例/合同台账体验优化.004.png" class="mt-6">
      <img src="../assets/segi/组件改版案例/合同台账体验优化.005.png" class="mt-6">
      <img src="../assets/segi/组件改版案例/合同台账体验优化.006.png" class="mt-6">
      <img src="../assets/segi/组件改版案例/合同台账体验优化.007.png" class="mt-6">
      <img src="../assets/segi/组件改版案例/合同台账体验优化.008.png" class="mt-6">
      <img src="../assets/segi/组件改版案例/合同台账体验优化.009.png" class="mt-6">
      <img src="../assets/segi/组件改版案例/合同台账体验优化.010.png" class="mt-6">
  </div>
</div>

<div class="pl-10 mt-8">
  <div class="mt-4 text-lg font-medium">2.2.提出设想</div>
  <div class=" font-normal mt-2 mb-4">用 <span class="font-semibold text-dark-blue ">When__ , I want to__, so I can__</span> 模型对问题场景化, 提出解决方案 : 
  </div>
  <div class=" flex flex-col justify-center items-center rounded-sm  mt-2 bg-gray-200 shadow-lg p-4">
      <img src="../assets/segi/组件改版案例/合同台账体验优化.012.png" class="">
      <img src="../assets/segi/组件改版案例/合同台账体验优化.013.png" class="mt-6">
      <img src="../assets/segi/组件改版案例/合同台账体验优化.014.png" class="mt-6">
      <img src="../assets/segi/组件改版案例/合同台账体验优化.015.png" class="mt-6">
      <img src="../assets/segi/组件改版案例/合同台账体验优化.016.png" class="mt-6">
      <img src="../assets/segi/组件改版案例/合同台账体验优化.017.png" class="mt-6">
      <img src="../assets/segi/组件改版案例/合同台账体验优化.018.png" class="mt-6">
      <img src="../assets/segi/组件改版案例/合同台账体验优化.019.png" class="mt-6">
      <img src="../assets/segi/组件改版案例/合同台账体验优化.020.png" class="mt-6">
      <img src="../assets/segi/组件改版案例/合同台账体验优化.021.png" class="mt-6">
      <img src="../assets/segi/组件改版案例/合同台账体验优化.022.png" class="mt-6">
      <img src="../assets/segi/组件改版案例/合同台账体验优化.023.png" class="mt-6">
      <img src="../assets/segi/组件改版案例/合同台账体验优化.024.png" class="mt-6">
      <img src="../assets/segi/组件改版案例/合同台账体验优化.025.png" class="mt-6">
  </div>
</div>

<br>

###### 3. 将 Sketch 和 Axure 元件库转换成组件库

为什么要做这个?

产品经理的低保真是所有项目的源头，必须与他们合作共同维护设计规范，从源头上治理产品一致性体验的问题。输出与设计稿统一版本的元件库也是在帮助他们工作中更容易，更规范，更美观的输出低保真产品原型。

<div class="flex justify-center items-center rounded-sm bg-gray-200 shadow-lg p-4">
    <video src="https://mtwork.oss-cn-shenzhen.aliyuncs.com/blog-assets/segi/axure.mp4" controls></video>
</div>

<br>

###### 4. 评估已有组件的扩展性

之前的组件库的开发模式是从各个产品线中抽调人力对 **antdv**，**element** 的组件进行二次封装。 代码质量参差不齐，css 样式类也是各自独立引用，api 也没有全部封装到位 等等问题。我们对标设计规范，对其进行评估，并输出评估清单，与前端部门共同确定工作目标与工作顺序。

<div class="flex justify-center items-center rounded-sm bg-gray-200 shadow-lg p-4">
    <img src="../assets/segi/SEGI-组件走查.png" class="border">
</div>

<br>

###### 5. 扩充新的组件与构建组件回收机制

我们与前端部门讨论过后，将组件分为两大类: **基础组件**，**业务组件**。

**基础组件**: 如按钮，单选，多选，输入框，下拉选择器等，这类与实际业务无关的组件。这类组件我们参与 api 设计，保证满足现有设计的同时，为将来可能遇到的深度定制 UI 样式 做扩展性做评估。

**业务组件**: 如各种按钮组，多选组(卡片)，树，表单，表格，表格查询，弹出框等，这类涉及多个基础组件组合的使用，或与业务相关的组件。这类组件我们提供布局，以及主流分辨率下的适配方案。

**组件回收机制**: 考虑实际场景，设计部门并不会参与到所有项目，预先准备的组件设计也不能保证 100% 支撑所有场景，所以，我们需要有一个回收机制。即遇到现有组件不支持的情景时，允许项目组开发组件，并在项目项目交付时放在临时组件仓库中，设计部门和前端中台部门定时 **review** -> **评估** -> **改进** -> **吸收到组件库中迭代**。

<br>

###### 6. 向其他部门宣讲设计系统的意义

设计的价值在一定程度上也收受到营销的影响，我们要改变以前等着兄弟部门来找我们合作的方式，主动的去与其他部门合作沟通，方式包括，但是不限于:
**定期展开内部分享会**，**参与产品规划阶段的友商分析**，**旁听现场同事与产品经理的需求澄清会议**等等。 一切的目的是运用设计知识来帮助其他团队赋能，牢记设计部门是来帮忙的，而非争功劳/甩锅。培养跨部门的团队信任对公司、部门和个人是三赢。

###### 7. 使用 Taiwindcss 配置 CSS 类

Taiwindcss 是什么? <a href="https://zhuanlan.zhihu.com/p/397880385" target="_blank">阅读此篇</a>，考虑到看这片文章的大概率是设计师，咱们尽量不聊技术细节。只要知道 Taiwindcss 只是一个工具，本质上它与 sketch、 AI 、Eagle 和 taglyst 无异。它能够帮助我们将设计规范 **原子化解构**，**语义化命名** 后，交给开发团队直接使用，这样设计规范传达给开发会实现 **0 失真**的效果。

###### 8. 与前端使用 Storybook 编写组件文档

Storybook 是什么? <a href="https://www.zhihu.com/search?type=content&q=Storybook" target="_blank">阅读此篇</a>，我们可以在线对组件 api 的值进行修改，来完成可用性测试与验收。

###### 9. 为部分页面提供代码级页面模板，且提供自适应方案

以往设计稿以 1366 作为基准进行设计，自适应这方交由前端部门自行解决，导致产品在不同终端设备的用户体验不一致。

我们对系统进行埋点，用户侦测用户终端显示器的分辨率，得知大部分用户的显示器已经是 1440(52%) / 1920+(31%)，于是我们基于满足大部分用户的体验运用栅格系统对界面进行自适应适配方案设计。

###### 10. 编写一个设计部门对公司内部的门户网站

以往设计部门没有一个统一渠道与人力在每一次设计迭代时将设计思想传达到所有相关方，于是我运用 VuePress 给部门设计了一个统一的门户网站，以便公司内部的同事可以在这个网站上获取我们的设计文档与设计数字资产(icon，插图，以及各版本 UI & 交互稿)。

<br>
<br>

##### 项目回顾

**"不是每个人一开始都会喜欢这个设计系统，甚至不知道它是什么。"**

虽然公司同意我提议构建设计系统，但是这个系统并不能我一个人完成，同时其他同事，部门的产品线项目任务也很重要，在没有看到利益的情况下，并不是所有人都支持。

<br>

**如何与开发协同工作**

> **互相尊重**:
>
> 各司其职，明确设计师和开发的技能重叠在哪里，使用相同的语言沟通，尊重开发人员，并且获得他们的尊重;
>
> **搁置争议**:
>
> 良好的协作在于完成共同目标，一定要避免出现问题就开始指责: "规范不准确" 或者 "开发能力不行"😅;
>
> **尽早让开发人员参与进来**:
>
> 尽早拉入开发人员参与不仅仅是出于礼貌，开发人员越了解全局设计目&价值，他们就越能满足设计师愿景;
>
> **开发人员一起审核 <span class="font-bold">Low-Hi</span>**:
>
> 一起商讨实现方式，共同相互学习，保证设计容错避免设计无法落地;
>
> <center class="bg-yellow-50 ml-9 mb-8 font-thin">" 如果实现很复杂，那么对于用户来说可能也很复杂。"</center>
>
> **使用现代设计工具**:
>
> 使用 sketch + measure，让开发不用盲猜设计规范，当然这还不够，规范越是详细，越是得分类向需要这些规范的开发人员宣讲，帮助他们理解为何如此设计，避免将颗粒度太低信息传递给开发。这样就可以双方的节省时间，消除不必要的错误，并提高质量。

<br>

<br>
<br>

##### 产出截图

因为系统是内网部署，所以只能展示一些截图:

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

  <li class="slide p-24">
    <img src="../assets/segi/SEGI-Component.png" class=" w-11/12">
    <span class="text-sm text-white">Sketch 设计系统规范</span>
  </li>
  <li class="slide">
    <img src="../assets/segi/SEGI-storybook.png" class=" w-10/12">
    <span class="text-sm text-white">Storybook 组件开发工具</span>
  </li>
  <li class="slide">
    <img src="../assets/segi/SEGI-design-studio.png" class=" absolute w-10/12">
    <span class="text-sm text-white">设计部门对内门户网站</span>
  </li>
  <li class="slide">
    <img src="../assets/segi/SEGI-Markdown.png" class=" absolute w-10/12">
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

设计应该 **务实**，而非花大量时间去纠结 样式好不好看，动画顺不顺畅，我们需要参与到产品的全生命周期中去。 跨职能协作时，我们要尽足最大努力让每个参与方都觉得可用、有用、愉悦，说到底，设计部门是内部支撑部门，设计部门价值来源于兄弟部门的肯定。

<br>

通常工程关键阶段: **计划-开发-测试-发布**

> **计划**:
>
> 通常一个功能从澄清需求到设计完成，在设计师手上的事件少则 3~5 天，最多不过一个月，而我们的产品经理大部分在这个领域已经经营了好几年，这中间存在巨大的信息差，为了避免项目实施时鸡同鸭讲，应该在计划阶段主动参与收集需求，分析需求，竞品分析等;
>
> **开发**:
>
> 主动了解工程实现逻辑，提供详细的 UI/UE 细节，提出问题的同时，尽量提供解决思路 (当然，有解决方案更好);

> **测试**:
>
> 即使有其他测试人员，也应该主动参与视觉 QA，确保 UI/UE 细节按预期实现并质量优秀;

> **发布**:
>
> 发布后，要主动和产品负责人沟通，获取用户反馈，区分问题优先级，反思产品迭代时如何改进。

<br>

实现以上构想的根本在于解放设计部门的生产力，用运用 **设计系统** 去解决重复性工作。

这里有一篇我写的扩展文章<a href="https://iodized-samba-a1b.notion.site/Design-Code-5d84a410128b425e8c561f6c292588ce" target="_blank"> Design+Code 提升用户体验实践 </a>。
