<template>
  <div class="home">
    <div
      id="list"
      class="picutre_many"
      style="overflow: auto; width: 100%; margin: 0 auto"
    >
      <table cellspacing="0" cellpadding="0" style="width: 100%; border: 0">
        <tr>
          <td id="list1">
            <table style="border: 0" cellpadding="0" cellspacing="0">
              <tr id="pic">
                <td>
                  <a href=""
                    ><img style="border: 0" alt="" src="./img/logo1.png"
                  /></a>
                </td>
                <td>
                  <a href=""
                    ><img style="border: 0" alt="" src="./img/logo2.png"
                  /></a>
                </td>
                <td>
                  <a href=""
                    ><img style="border: 0" alt="" src="./img/logo3.png"
                  /></a>
                </td>
                <td>
                  <a href=""
                    ><img style="border: 0" alt="" src="./img/logo4.png"
                  /></a>
                </td>
                <td>
                  <a href=""
                    ><img style="border: 0" alt="" src="./img/logo5.png"
                  /></a>
                </td>
                <td>
                  <a href=""
                    ><img style="border: 0" alt="" src="./img/logo6.png"
                  /></a>
                </td>
                <td>
                  <a href=""
                    ><img style="border: 0" alt="" src="./img/logo7.png"
                  /></a>
                </td>
                <td>
                  <a href=""
                    ><img style="border: 0" alt="" src="./img/logo8.png"
                  /></a>
                </td>
                <td>
                  <a href=""
                    ><img style="border: 0" alt="" src="./img/logo9.png"
                  /></a>
                </td>
                <td>
                  <a href=""
                    ><img style="border: 0" alt="" src="./img/logo10.png"
                  /></a>
                </td>
                <td>
                  <a href=""
                    ><img style="border: 0" alt="" src="./img/logo11.png"
                  /></a>
                </td>
                <td>
                  <a href=""
                    ><img style="border: 0" alt="" src="./img/logo12.png"
                  /></a>
                </td>
                <td>
                  <a href=""
                    ><img style="border: 0" alt="" src="./img/logo13.png"
                  /></a>
                </td>
                <td>
                  <a href=""
                    ><img style="border: 0" alt="" src="./img/logo14.png"
                  /></a>
                </td>
                <td>
                  <a href=""
                    ><img style="border: 0" alt="" src="./img/logo15.png"
                  /></a>
                </td>
                <td>
                  <a href=""
                    ><img style="border: 0" alt="" src="./img/logo16.png"
                  /></a>
                </td>
                <td>
                  <a href=""
                    ><img style="border: 0" alt="" src="./img/logo17.png"
                  /></a>
                </td>
              </tr>
            </table>
          </td>
          <td id="list2"></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
// 引入 gsap
import { gsap } from "gsap";
// 引入图片像素化
// import ImagePixel from "../hooks/ImagePixel";
import image1 from "../assets/img/vodafone.jpg";
import image2 from "../assets/img/agile-ui.jpg";
import image3 from "../assets/img/HKT.png";
import image4 from "../assets/img/ui-lego.png";
import image5 from "../assets/img/iSlace.jpg";

import image6 from "../assets/img/Design-system.png";
import image7 from "../assets/img/Template-market.jpg";
import image8 from "../assets/img/wordpress.jpg";
import image9 from "../assets/img/dataview.jpg";
import image10 from "../assets/img/Iot-cover.png";
import image11 from "../assets/img/redesing.png";
import image12 from "../assets/img/glaze.jpg";

import { useRouter } from "vue-router";
const router = useRouter();

defineProps({});

// 像素化动画

onMounted(() => {
  /*图片滚动效果*/
  var speedpic = 30; //速度数值越大速度越慢
  document.getElementById("list2").innerHTML =
    document.getElementById("list1").innerHTML;

  function Marqueepic() {
    if (
      document.getElementById("list2").offsetWidth -
        document.getElementById("list").scrollLeft <=
      0
    ) {
      document.getElementById("list").scrollLeft -=
        document.getElementById("list1").offsetWidth;
    } else {
      document.getElementById("list").scrollLeft++;
    }
  }
  var MyMarpic = setInterval(Marqueepic, speedpic);
  document.getElementById("list").onmouseover = function () {
    clearInterval(MyMarpic);
  };
  document.getElementById("list").onmouseout = function () {
    MyMarpic = setInterval(Marqueepic, speedpic);
  };
});
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Neue Montreal", sans-serif;
  overflow: hidden;
}

#list1,
#list2 {
  width: 100vw;
  height: 100%;
  overflow: hidden;
  position: relative;
}
</style>