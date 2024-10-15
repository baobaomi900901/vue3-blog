import { createApp } from "vue";
import App from "./App.vue";
// import MyUI from "./libs/MyUI";
import "./assets/index.css";
import router from "./router";
import CodeCard from "./components/CodeCard.vue";
import "overlayscrollbars/styles/overlayscrollbars.css"; // 引入overlayscrollbars样式

const app = createApp(App);

// app.use(MyUI, {
//   // install, options
//   btnShadow: true,
// });
app.use(router);
app.component("CodeCard", CodeCard);
app.mount("#app");

// app.mount("#app");

// Vue.directive("highlight", function (el) {
//   let blocks = el.querySelectorAll("pre code");
//   blocks.forEach((block) => {
//     hljs.highlightBlock(block);
//   });
// });
