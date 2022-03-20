import { gsap } from "gsap";

export default function (
  el,
  duration = 0.5,
  stagger = 0.01,
  delayTime = 0.2,
  fn = null
) {
  let spanClassName = `${el.value.className.split(" ")[0]}Span`;
  let anime = gsap.to(`.${spanClassName}`, {
    transformOrigin: "top  center",
    y: 0,
    duration: duration,
    stagger: stagger,
    delay: delayTime,
    opacity: 0,
    rotateX: 90,
    // ease: "elastic.out(1, 0.75)",
    onComplete: () => {
      fn;
    },
  });
  return anime;
}
