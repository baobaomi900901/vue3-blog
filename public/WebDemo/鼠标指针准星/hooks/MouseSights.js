class MyMouse {
    constructor() {
        this.isInit = false
    }

    init(...args) {
        this.doms = [...args]
        if (this.isInit == false) {
            this.darw()
            this.getDOMs()
            this.bind()
            this.isInit = true
        }
    }

    // 获取dom
    getDOMs() {
        let demoArgs = [...this.doms];
        this.targets = [];
        for (const argsItem of demoArgs) {
            this.targets.push(...document.querySelectorAll(argsItem));
        }
    }

    // 画图
    darw() {
        const template = `
        <div id="cursor" class="">
          <div class="angle angle-t-l"></div>
          <div class="angle angle-t-r"></div>
          <div class="angle angle-b-l"></div>
          <div class="angle angle-b-r"></div>
          <div class="aperture"></div>
        </div>
  
        <div id="rect" class="">
          <div class="rect-inner rect-inner-t-l"></div>
          <div class="rect-inner rect-inner-t-r"></div>
          <div class="rect-inner rect-inner-b-l"></div>
          <div class="rect-inner rect-inner-b-r"></div>
          <div class="round"></div>
        </div>
        `
        this.mymouse = document.createElement('div')
        this.mymouse.classList.add('my-mouse')

        this.mymouse.innerHTML = template
        document.body.appendChild(this.mymouse)

    }

    // 绑定事件
    bind() {
        let cursor = this.mymouse.querySelector("#cursor");
        let rect = this.mymouse.querySelector("#rect");

        document.addEventListener("mousemove", function (e) {
            cursor.style.opacity = 1;
            rect.style.opacity = 1;
            rect.style.top = e.clientY + "px";
            rect.style.left = e.clientX + "px";

            let stout = setTimeout(() => {
                cursor.style.top = e.clientY + "px";
                cursor.style.left = e.clientX + "px";
                clearTimeout(stout);
            }, 24);
        });

        document.addEventListener("mouseout", function (e) {
            cursor.style.opacity = 0;
            rect.style.opacity = 0;
        });


        for (const target of this.targets) {
            target.addEventListener("mouseover", () => {
                cursor.classList.add("cursor-A");
                rect.classList.add("rect-A");
            });
            target.addEventListener("mouseout", () => {
                cursor.classList.remove("cursor-A");
                rect.classList.remove("rect-A");
            });
        }

    }

}