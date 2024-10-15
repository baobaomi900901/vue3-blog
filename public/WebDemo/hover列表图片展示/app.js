const links = document.querySelectorAll('.menu-item');

const linkImg = document.querySelectorAll('.hover-reveal__image');

links.forEach((link, idx) => {
    link.addEventListener('mousemove', (e) => {
        link.children[1].style.opacity = 1;
        link.children[0].style.zIndex = 3;
        link.children[1].style.transform = `translate(${e.clientX - 300}px, -${e.clientY / 3}px) rotate(${e.clientX / 20 - 45}deg)`;
        linkImg[idx].style.transform = "scale(1,1)";
        // console.log(e.clientX / 20);

        // 窗口大小
        // console.log(window.innerWidth, e.clientX);
        // e.clientX / 20 - 45
    })

    link.addEventListener('mouseleave', (e) => {
        link.children[1].style.opacity = 0;
        link.children[1].style.transform = `translate(${e.clientX - 300}px`;
        linkImg[idx].style.transform = "scale(0.5,0.5)";
        link.style.zIndex = 0;
    })

})