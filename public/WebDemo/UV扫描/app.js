let pos = document.documentElement;
let uvLight = document.querySelector('.uv-light');

pos.style.setProperty("--x", '120px');


document.body.addEventListener('mousemove', (e) => {
    pos.style.setProperty("--x", e.clientX + 'px');
    uvLight.style.left = e.clientX - 15 + 'px';
})