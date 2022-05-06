import { createRouter, createWebHistory } from "vue-router";
// createWebHistory
// createWebHashHistory, 带哈希值 #
import HelloLoading from "../pages/HelloLoading";
import Home from "../pages/Home";
import Prompt from "../pages/Prompt";
import About from "../pages/About";
import ContentOld1 from "../pages/ContentOld1"; // vodafone-conceptual-design
import ContentOld2 from "../pages/ContentOld2"; // agile-ui
import ContentOld3 from "../pages/ContentOld3"; // HKT-motion-design
import ContentOld4 from "../pages/ContentOld4"; // UI-Lego
import ContentOld5 from "../pages/ContentOld5"; // iSlace 
import ContentNew1 from "../pages/ContentNew1"; // vodafone-conceptual-design
import ContentNew2 from "../pages/ContentNew2"; // vodafone-conceptual-design
import ContentNew3 from "../pages/ContentNew3"; // document-system
import ContentNew4 from "../pages/ContentNew4"; // Visualized Data Platform
import ContentNew5 from "../pages/ContentNew5"; // billing center

const routes = [
  {
    path: "/",
    component: HelloLoading,
  },
  {
    path: "/Home",
    name: "Homex",
    component: Home,
  },
  {

    path: "/prompt",
    name: "prompt",
    component: Prompt
  },
  {
    path: "/About",
    name: "about",
    component: About,
  },
  {
    path: "/vodafone-conceptual-design",
    name: "vodafone-conceptual-design",
    component: ContentOld1,
    hidden: true
  },
  {
    path: "/agile-ui",
    name: "agile-ui",
    component: ContentOld2,
  },
  {
    path: "/HKT-motion-design",
    name: "HKT-motion-design",
    component: ContentOld3,
  },
  {
    path: "/UI-Lego",
    name: "UI-Lego",
    component: ContentOld4,
  },
  {
    path: "/islace-mobile",
    name: "islace-mobile",
    component: ContentOld5,
  },
  {
    path: "/segi-design-system",
    name: "segi-design-system",
    component: ContentNew1,
  },
  {
    path: "/segi-template-market",
    name: "segi-template-market",
    component: ContentNew2,
  },
  {
    path: "/document-system",
    name: "document-system",
    component: ContentNew3,
  },
  {
    path: "/visualized-data-platform",
    name: "visualized-data-platform",
    component: ContentNew4,
  },
  {
    path: "/billing-center",
    name: "billing-center",
    component: ContentNew5,
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
