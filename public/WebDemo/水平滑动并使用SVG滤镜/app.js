let mainSlider = document.querySelector('.slider-main');
let innerSliderOne = document.querySelector('.slider-inner-one');
let innerSliderTwo = document.querySelector('.slider-inner-two');
let images = [...document.querySelectorAll('svg')];
let imageItems = [];

let current = 0;
let target = 0;
let ease = 0.075;


window.onload = function () {
    window.addEventListener('resize', init)

    // 缓动函数
    function lerp(start, end, t) {
        return start * (1 - t) + end * t;
    }

    // 初始化
    function init() {
        // body 高度 = 滑动区域高度 - (窗口宽度 - 窗口高度)
        let bodyHeight = mainSlider.getBoundingClientRect().width - (window.innerWidth - window.innerHeight);
        console.log("@", bodyHeight);
        document.body.style.height = `${bodyHeight}px`;
    }

    // 设置元素的 transform 属性
    function transformElement(el, transform) {
        el.style.transform = transform;
    }

    function animate() {
        target = window.scrollY;
        current = lerp(current, target, ease).toFixed(2)
        console.log(current, target);
        // 让 mainSlider x轴 滑动代替 body y 轴滑动
        transformElement(mainSlider, `translate3d(${-current}px, 0, 0)`);
        // 让 innerSliderTwo 的滚动洗漱比 innerSliderOne 慢
        transformElement(innerSliderTwo, `translate3d(${-(current * 1.1).toFixed(2)}px, 0, 0)`);

        for (let i = 0; i < imageItems.length; i++) {
            imageItems[i].render()
            // 当前滚动大于或者小于 目标位置 正负50 区间时, 缩放图片
            if (current < target - 50 || current > target + 50) {
                transformElement(imageItems[i].el, `scale(0.8)`)
            } else {
                transformElement(imageItems[i].el, `scale(1)`)
            }
        }
        requestAnimationFrame(animate)
    }


    let options = {
        rootMargin: '0px',
        threshold: .9
    }

    class ImageItem {
        constructor(el) {
            this.el = el;
            this.isVisible = false;
            // 创建 IntersectionObserver 实例, 并设置其属性
            this.observer = new IntersectionObserver(entries => {
                // 当 el 进入或者离开视口时, 触发回调函数, 并设置 isVisible 属性
                entries.forEach(entry => this.isVisible = entry.isIntersecting);
            }, options)
            // 监听 el, 当 el 进入或者离开视口时, 触发回调函数
            this.observer.observe(this.el)
            this.current = 150;
            this.target = 150;
            this.ease = 0.1
            this.setDisplacement();
        }

        // 设置滤镜
        setDisplacement() {
            // 创建 feDisplacementMap 元素, 并设置其属性
            this.el.querySelector('feDisplacementMap').scale.baseVal = this.current;
        }

        render() {
            // 当 el 进入视口时, 设置 target 为 0, 并添加 active 类
            if (this.isVisible && this.target != 0) {
                this.target = 0;
                this.el.classList.add('active');
            }
            this.current = lerp(this.current, this.target, this.ease).toFixed(2);
            this.el.querySelector('feDisplacementMap').scale.baseVal = this.current;
        }
    }


    images.forEach(image => {
        imageItems.push(new ImageItem(image))
    })


    requestAnimationFrame(animate)
    requestAnimationFrame(init)
}