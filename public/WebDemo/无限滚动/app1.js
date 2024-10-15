const menu = document.querySelector('.menu'); // 获取元素 menu
const items = Array.from(document.querySelectorAll('.menu-item')); // 获取元素 menu-item

// 克隆每个 item
let clones = items.map(item => item.cloneNode(true));
// 将克隆的元素添加到 menu 中
clones.forEach(clone => menu.appendChild(clone));

menu.scrollTop = 1;
console.log(menu.scrollTop);

// 让滚动重置
function setScrollReset() {

    console.log(menu.offsetHeight, menu.scrollHeight, menu.scrollTop);
    if (menu.scrollTop <= 1) {
        console.log('滚动到顶部');
        menu.scrollTop = 838;
    } else if (menu.scrollTop >= menu.scrollHeight / 2 - 1) {
        menu.scrollTop = 1;
        console.log('滚动到底部');
    }
}

menu.addEventListener('scroll', setScrollReset);


// menu.addEventListener('load', () => {
//     menu.scrollTop = 0;
//     menu.addEventListener('scroll', setScrollReset);
// });