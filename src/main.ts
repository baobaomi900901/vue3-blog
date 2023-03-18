import { createApp } from "vue";
import App from "./App.vue";
// import MyUI from "./libs/MyUI";
import "./assets/index.css";
import router from "./router";

const app = createApp(App);

// app.use(MyUI, {
//   // install, options
//   btnShadow: true,
// });
app.use(router);
app.mount("#app");

// app.mount("#app");

// Vue.directive("highlight", function (el) {
//   let blocks = el.querySelectorAll("pre code");
//   blocks.forEach((block) => {
//     hljs.highlightBlock(block);
//   });
// });
