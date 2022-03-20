import { isRef } from "vue";
import { gsap } from "gsap";

export default function (
    el,
    duration = 0.75,
) {
    let anime = gsap.fromTo(`.${el.value.className.split(" ")[0]}`, {
        transformOrigin: 'left',
        scaleX: 0,
        // opacity: 0
    }, {
        scaleX: 1,
        // opacity: 1,
        duration: duration,
    })
    return anime
}
