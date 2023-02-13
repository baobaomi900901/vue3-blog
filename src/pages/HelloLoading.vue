<template>
  <div
    ref="HelloLoading"
    class="
      HelloLoading
      StartPage
      absolute
      w-screen
      h-screen
      bg-gray-900
      z-50
      select-none
      z-50
    "
    style="z-index: 99"
  >
    <div
      class="
        StartAnimation
        w-full
        h-full
        relative
        z-50
        text-white
        flex flex-col
        justify-center
        items-center
      "
    >
      <div ref="SATextHead" class="SATextHead text-base mobile:text-sm mb-16">
        MobyTang™ 😼 Portfolio
      </div>
      <div class="SATextBox font-semibold mb-32 w-full text-center">
        <div class="t1 SATextItem absolute w-full text-6xl mobile:text-3xl t-1" ref="t1">
          I'm
        </div>
        <div class="t2 SATextItem absolute w-full text-6x mobile:text-3xl t-2" ref="t2">
          3D
        </div>
        <div class="t3 SATextItem absolute w-full text-6xl mobile:text-3xl t-3" ref="t3">
          Motion
        </div>
        <div class="t4 SATextItem absolute w-full text-6xl mobile:text-3xl t-4" ref="t4">
          Interaction
        </div>
        <div class="t5 SATextItem absolute w-full text-6xl mobile:text-3xl t-5" ref="t5">
          UI&UE
        </div>
        <div class="t6 SATextItem absolute w-full text-6xl mobile:text-3xl t-6" ref="t6">
          Webflow Developer
        </div>
      </div>
      <div ref="SATextFooter" class="SATextFooter opacity-80 mobile:text-sm">
        ©{{ (new Date()).getFullYear() }} Mading😼&🤡™ studio
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
import { gsap } from "gsap";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin"; // 导入gsap插件ScrollToPlugin
// gsap.registerPlugin(ScrollToPlugin); // 注册插件
import useTextEnterAnime from "../hooks/useTextEnterAnime";
import useTextOutAnime from "../hooks/useTextOutAnime";
import { useRouter } from "vue-router";
// using es modules
import device from "current-device";


export default {
  name: "HelloLoading",
  setup() {
    const router = useRouter();
    let SATextHead = ref(null);
    let SATextFooter = ref(null);
    let t1 = ref(null);
    let t2 = ref(null);
    let t3 = ref(null);
    let t4 = ref(null);
    let t5 = ref(null);
    let t6 = ref(null);
    let HelloLoading = ref(null);
    let duration = 0.5;
    let stagger = 0.05;
    onMounted(() => {
      // start animation
      let SATextHeadEnt = useTextEnterAnime(SATextHead, 0.4);
      let SATextFooterEnt = useTextEnterAnime(SATextFooter, 0.4);
      let t1Ent = useTextEnterAnime(t1, duration, stagger, 0.2);
      let t1Out = useTextOutAnime(t1, duration, stagger, 0.2);
      let t2Ent = useTextEnterAnime(t2, duration, stagger, 0.2);
      let t2Out = useTextOutAnime(t2, duration, stagger, 0.2);
      let t3Ent = useTextEnterAnime(t3, duration, stagger, 0.2);
      let t3Out = useTextOutAnime(t3, duration, stagger, 0.2);
      let t4Ent = useTextEnterAnime(t4, duration, stagger, 0.2);
      let t4Out = useTextOutAnime(t4, duration, stagger, 0.2);
      let t5Ent = useTextEnterAnime(t5, duration, stagger, 0.2);
      let t5Out = useTextOutAnime(t5, duration, stagger, 0.2);
      let t6Ent = useTextEnterAnime(t6, duration, stagger, 0.2);
      let t6Out = useTextOutAnime(t6, duration, stagger, 0.2);
      let SATextHeadOut = useTextOutAnime(SATextHead, 0.2);
      let SATextFooterOut = useTextOutAnime(SATextFooter, 0.2);
      let HelloLoadingOut = gsap.to(HelloLoading.value, {
        duration: 0.5,
        opacity: 0,
      });
      let StartPageLine = gsap.timeline({
        delay: 1,
        onStart: () => {
          console.log("device.mobile() === %s", device.desktop());
        },
        onComplete: () => {
          // router.push({ path: "home" });
          console.log("device.mobile() === %s", device.desktop());
          if (device.desktop()) {
            router.push({ path: "home" });
            return;
          } else {
            router.push({ path: "Prompt" });
          }
        },
      });
      StartPageLine.add(SATextHeadEnt);
      StartPageLine.add(SATextFooterEnt, 0.2);
      StartPageLine.add(t1Ent);
      StartPageLine.add(t1Out);
      StartPageLine.add(t2Ent, "-=0.7");
      StartPageLine.add(t2Out);
      StartPageLine.add(t3Ent, "-=0.6");
      StartPageLine.add(t3Out);
      StartPageLine.add(t4Ent, "-=0.8");
      StartPageLine.add(t4Out);
      StartPageLine.add(t5Ent, "-=0.8");
      StartPageLine.add(t5Out);
      StartPageLine.add(t6Ent, "-=0.8");
      StartPageLine.add(t6Out);
      StartPageLine.add(SATextHeadOut, "-=1");
      StartPageLine.add(SATextFooterOut, "-=0.8");
      StartPageLine.add(HelloLoadingOut);
    });
    return {
      SATextHead,
      SATextFooter,
      t1,
      t2,
      t3,
      t4,
      t5,
      t6,
      HelloLoading,
      device,
    };
  },
};
</script>
<style scoped></style>
