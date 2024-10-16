import * as THREE from "three";
// import images from './images';
import "./images.js";
import { images } from "./images.js";
import vertex from "./shaders/vertex.glsl?raw";
import fragment from "./shaders/fragment.glsl?raw";

function lerp(start, end, t) {
  return start * (1 - t) + end * t;
}

let targetX = 0;
let targetY = 0;

const texture1 = new THREE.TextureLoader().load(images.image1);
const texture2 = new THREE.TextureLoader().load(images.image2);
const texture3 = new THREE.TextureLoader().load(images.image3);
const texture4 = new THREE.TextureLoader().load(images.image4);
const texture5 = new THREE.TextureLoader().load(images.image5);
const texture6 = new THREE.TextureLoader().load(images.image6);
const texture7 = new THREE.TextureLoader().load(images.image7);
const texture8 = new THREE.TextureLoader().load(images.image8);
const texture9 = new THREE.TextureLoader().load(images.image9);
const texture10 = new THREE.TextureLoader().load(images.image10);
const texture11 = new THREE.TextureLoader().load(images.image11);
const texture12 = new THREE.TextureLoader().load(images.image12);



export default class WebGL {
  constructor() {
    this.container = document.querySelector(".caView");
    this.links = [...document.querySelectorAll(".inspirations ul li")];
    this.scene = new THREE.Scene();
    this.perspective = 100;
    this.sizes = new THREE.Vector2(0, 0);
    this.offset = new THREE.Vector2(0, 0); // 屏幕上位置.
    this.uniforms = {
      uTexture: {
        value: new THREE.TextureLoader().load(images.imageThree),
      },
      uAlpha: {
        value: 0.0,
      },
      uOffset: {
        value: new THREE.Vector2(0.0, 0.0),
      },
    };
    this.links.forEach((link, idx) => {
      link.addEventListener("mouseenter", () => {
        switch (idx) {
          case 0:
            this.uniforms.uTexture.value = texture1;
            break;
          case 1:
            this.uniforms.uTexture.value = texture2;
            break;
          case 2:
            this.uniforms.uTexture.value = texture3;
            break;
          case 3:
            this.uniforms.uTexture.value = texture4;
            break;
          case 4:
            this.uniforms.uTexture.value = texture5;
            break;
          case 5:
            this.uniforms.uTexture.value = texture6;
            break;
          case 6:
            this.uniforms.uTexture.value = texture7;
            break;
          case 7:
            this.uniforms.uTexture.value = texture8;
            break;
          case 8:
            this.uniforms.uTexture.value = texture9;
            break;
          case 9:
            this.uniforms.uTexture.value = texture10;
            break;
          case 10:
            this.uniforms.uTexture.value = texture11;
            break;
          case 11:
            this.uniforms.uTexture.value = texture12;
            break;
        }
      });

      link.addEventListener("mouseleave", () => {
        this.uniforms.uAlpha.value = lerp(this.uniforms.uAlpha.value, 0.0, 0.1);
      });

    });
    this.addEventListeners(document.querySelector(".inspirations .ul"));
    this.addEventListeners(document.querySelector(".inspirations .ul2"));
    this.addEventListeners(document.querySelector(".inspirations .ul3"));
    this.setUpCamera();
    this.onMouseMove();
    this.createMesh();
    this.render();
  }

  get viewport() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let aspectRatio = width / height;

    return {
      width,
      height,
      aspectRatio,
    };
  }

  addEventListeners(element) {
    element.addEventListener("mouseenter", () => {
      this.linkHovered = true;
      // console.log("true");
    });
    element.addEventListener("mouseleave", () => {
      this.linkHovered = false;
      // console.log("false");
    });
  }

  setUpCamera() {
    window.addEventListener("resize", this.onWindowResize.bind(this));

    let fov =
      (180 * (2 * Math.atan(this.viewport.height / 2 / this.perspective))) /
      Math.PI;
    this.camera = new THREE.PerspectiveCamera(
      fov,
      this.viewport.aspectRatio,
      0.1,
      1000
    );
    this.camera.position.set(0, 0, this.perspective);

    this.renderer = new THREE.WebGL1Renderer({
      antialias: true,
      alpha: true,
    });
    this.renderer.setSize(this.viewport.width, this.viewport.height);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.container.appendChild(this.renderer.domElement);
  }

  createMesh() {
    this.geometry = new THREE.PlaneGeometry(1, 1, 20, 20);
    this.material = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: vertex,
      fragmentShader: fragment,
      transparent: true,
      // wireframe: true,
      // side: THREE.DoubleSide
    });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.sizes.set(640, 480, 1);
    this.mesh.scale.set(this.sizes.x, this.sizes.y, 1);

    this.mesh.position.set(this.offset.x, this.offset.y, 0);

    this.scene.add(this.mesh);

  }
  onWindowResize() {
    this.camera.aspect = this.viewport.aspectRatio;
    this.camera.fov =
      (180 * (2 * Math.atan(this.viewport.height / 2 / this.perspective))) /
      Math.PI;
    this.renderer.setSize(this.viewport.width, this.viewport.height);
    this.camera.updateProjectionMatrix();
  }

  onMouseMove() {
    window.addEventListener("mousemove", (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    });
  }

  render() {
    this.offset.x = lerp(this.offset.x, targetX, 0.1);
    this.offset.y = lerp(this.offset.y, targetY, 0.1);
    this.uniforms.uOffset.value.set(
      (targetX - this.offset.x) * 0.0005,
      -(targetY - this.offset.y) * 0.0005
    );
    // this.mesh.scale.set(this.sizes.x, this.sizes.y)
    this.mesh.position.set(
      this.offset.x - window.innerWidth / 2,
      -this.offset.y + window.innerHeight / 2,
      0
    );

    // set uAlpha when list is hovered / unhovered
    this.linkHovered
      ? (this.uniforms.uAlpha.value = lerp(
        this.uniforms.uAlpha.value,
        1.0,
        0.1
      ))
      : (this.uniforms.uAlpha.value = lerp(
        this.uniforms.uAlpha.value,
        0.0,
        0.1
      ));

    // for (let i = 0; i < this.links.length; i++) {
    //   if (this.linkHovered) {
    //     this.links[i].style.opacity = 0.5
    //   } else {
    //     this.links[i].style.opacity = 1
    //   }

    // }

    this.renderer.render(this.scene, this.camera);
    window.requestAnimationFrame(this.render.bind(this));
  }
}

// new WebGL();
// export default new WebGL();
