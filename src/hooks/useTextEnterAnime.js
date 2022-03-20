import { isRef } from "vue";
import { gsap } from "gsap";
import useTextSplit from "./useTextSplit";

export default function (
  el,
  duration = 0.75,
  stagger = 0.01,
  delayTime = 0,
  y = 10
) {
  let spanClassName = `${el.value.className.split(" ")[0]}Span`;
  useTextSplit(el, spanClassName);

  let anime = gsap.fromTo(
    `.${spanClassName}`,
    {
      transformOrigin: "bottom  center",
      y: y,
      opacity: 0,
      rotateX: 90,
    },
    {
      y: 0,
      duration: duration,
      stagger: stagger,
      delay: delayTime,
      opacity: 1,
      rotateX: 0,
      // ease: "elastic.out(1, 0.75)"
    }
  );
  return anime;
}
