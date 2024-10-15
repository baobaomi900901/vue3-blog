var textWrapper = document.querySelector(".title");
textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
);

anime.timeline().add({
    targets: ".title .letter",
    translateY: [-320, 0],
    easing: "easeOutExpo",
    duration: 1500,
    delay: (el, i) => 3500 + 50 * i,
});

gsap.to(".container", 2, {
    top: "60vh",
    ease: Expo.easeInOut,
    delay: 0.5,
});

gsap.to(".container", 2, {
    scale: "1",
    top: "35vh",
    ease: Expo.easeInOut,
    delay: 3,
});

gsap.from(
    ".menu-item",
    {
        opacity: 0,
        y: -100,
        duration: 1.6,
        stagger: 0.08,
        ease: Expo.easeInOut,
        delay: 3.2,
    }
);

gsap.from(
    ".info, .buy-now-cta, .prev-imgs > div, .marquee",
    {
        opacity: 0,
        y: 100,
        duration: 1,
        stagger: 0.1,
        delay: 4,
        ease: Power2.easeOut,
    }
);
