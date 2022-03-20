import { ref } from "vue";
import { gsap } from "gsap";

export default function (el, spanClassName) {
  let elArr = [...el.value.innerHTML.trim().replace("amp;", "")];
  elArr.reduce(function (pre, cur, index) {
    if (pre === index) {
      el.value.innerHTML = "";
    }
    // 创建一个 span
    let span = document.createElement("span");
    // span 内容等于 cur
    span.innerHTML = cur;
    // 处理空格
    if (cur == " ") {
      span.innerHTML = `&nbsp;`;
    } else {
      span.innerHTML = cur;
    }
    el.value.appendChild(span).classList.add(spanClassName, "inline-block");
    // console.log(pre, cur, index);
  }, 0);
}
