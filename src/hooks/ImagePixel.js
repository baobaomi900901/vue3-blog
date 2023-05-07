import image1 from "../assets/img/vodafone.jpg";
import image2 from "../assets/img/agile-ui.jpg";
import image3 from "../assets/img/HKT.png";
import image4 from "../assets/img/ui-lego.png";
import image5 from "../assets/img/iSlace.jpg";

import image6 from "../assets/img/Design-system.png";
import image7 from "../assets/img/Template-market.jpg";
import image8 from "../assets/img/wordpress.jpg";
import image9 from "../assets/img/dataview.jpg";
import image10 from "../assets/img/Iot-cover.png";
import image11 from "../assets/img/redesing.png";
import image12 from "../assets/img/glaze.jpg";

// 缓动函数
function lerp(start, end, t) {
    return start * (1 - t) + end * t;
}

export default class ImagePixel {
    constructor() {
        this.canvas = document.querySelector(".canvas");
        this.ctx = this.canvas.getContext("2d");
        this.links = [...document.querySelectorAll('.row')];
        this.imgIndex = 0;
        this.imgs = [
            image1,
            image2,
            image3,
            image4,
            image5,
            image6,
            image7,
            image8,
            image9,
            image10,
            image11,
            image12
        ];
        this.imgArr = [];
        this.mouse = {
            x: 0,
            y: 0
        };
        this.current = {
            x: 0,
            y: 0
        };
        // 绘制 canvas
        this.percent = 0
        this.target = false; // 判断是否被悬停

        this.addImage();
        this.render();

    }
    // 获取鼠标位置
    onMouseMove() {
        window.addEventListener("mousemove", (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });
    }

    addImage() {
        this.imgs.forEach((image, index) => {
            let elImage = new Image(300);
            elImage.src = image;
            elImage.classList.add('project-image');
            document.body.append(elImage);
            this.imgArr.push(elImage)
        })
    }
    drawImage(index) {
        let { width, height } = this.imgArr[index].getBoundingClientRect();

        // canvas 适配高清屏, window.devicePixelRatio 为设备像素比
        this.canvas.width = width * window.devicePixelRatio;
        this.canvas.height = height * window.devicePixelRatio;
        this.canvas.style.width = `${width}px`;
        this.canvas.style.height = `${height}px`;

        // 关闭图片平滑处理
        this.ctx.webkitImageSmoothingEnabled = false;
        this.ctx.mozImageSmoothingEnabled = false;
        this.ctx.msSmoothingEnabled = false;
        this.ctx.imageSmoothingEnabled = false;

        if (this.target) { // 判断链接是否被悬停
            // console.log('hover');
            // 加速
            if (this.percent < 0.2) { // 缓慢加速
                // console.log('hover +');
                this.percent += .01;
            } else if (this.percent < 1) { // 逐渐加速
                // console.log('hover ++');
                this.percent += .1;
            }
        } else if (!this.target) {
            // console.log('out');
            if (this.percent > 0.2) { // 逐渐减速
                // console.log('ou --');
                this.percent -= .3
            } else if (this.percent > 0) { // 缓慢减速
                // console.log('ou -');
                this.percent -= .01;
            }
        }

        let scaledWidth = width * this.percent;
        let scaledHeight = height * this.percent;

        // 绘制 与 清除 图片
        if (this.percent >= 1) {
            this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
            this.ctx.drawImage(this.imgArr[index], 0, 0, width, height);
        } else {
            this.ctx.drawImage(this.imgArr[index], 0, 0, scaledWidth, scaledHeight);
            this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
            if (this.canvas.width !== 0 && this.canvas.height !== 0) {
                this.ctx.drawImage(this.canvas, 0, 0, scaledWidth, scaledHeight, 0, 0, width, height)
            }
        }

        for (let i = 0; i < this.links.length; i++) {
            // 鼠标悬停
            this.links[i].addEventListener('mouseover', () => {
                for (let j = 0; j < this.links.length; j++) {
                    if (j !== i) {
                        this.links[j].style.opacity = 0.2;
                        this.links[j].style.zIndex = 0;
                    } else {
                        this.links[j].style.opacity = 1;
                        this.links[j].style.zIndex = 3;
                    }
                }
            })

            this.links[i].addEventListener('mouseleave', () => {
                for (let i = 0; i < this.links.length; i++) {
                    this.links[i].style.opacity = 1;
                }
            })

            this.links[i].addEventListener('mouseenter', () => {
                this.imgIndex = i;
                this.target = true; // 鼠标悬停
            });

            this.links[i].addEventListener('mouseleave', () => {
                this.target = false; // 鼠标离开
            })
        }

    }



    render() {
        this.current.x = lerp(this.current.x, this.mouse.x, 0.075);
        this.current.y = lerp(this.current.y, this.mouse.y, 0.075);
        let { width, height } = this.imgArr[this.imgIndex].getBoundingClientRect();
        this.canvas.style.transform = `translate3d(${this.current.x - (width / 2)}px, ${this.current.y - (height / 2)}px, 0)`;
        this.drawImage(this.imgIndex);
        window.requestAnimationFrame(this.render);
    }

}

