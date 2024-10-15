let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo');
let header = document.querySelector('header');

logo.innerHTML = logo.textContent.replace(
    /\S/g,
    "<span class='logo-span'>$&</span>"
);




window.addEventListener('DOMContentLoaded', () => {
    let logoSpan = document.querySelectorAll('.logo-span');
    setTimeout(() => {
        // 启动 logo 出现
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400);
        });
        // 启动 logo 消失
        setTimeout(() => {
            logoSpan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50);
            });
        }, logoSpan.length * 600);

        // 启动页消失
        setTimeout(() => {
            intro.style.top = '-100vh';
        }, logoSpan.length * 400 + 2000);

        // header 出现
        setTimeout(() => {
            header.style.top = '0px';
        }, logoSpan.length * 400 + 2600);

    });
}
)