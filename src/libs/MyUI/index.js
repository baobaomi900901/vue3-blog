import TButton from "./components/TButton";

const componentsMap = [TButton];

export default {
  // install 参数
  install: (app, options) => {
    // console.log(app, options);
    // app.component(组件名称, 组件文件)
    // app.mixin
    // app.directive
    // app.config.globalProperties.$bbm
    // this.$bbm
    // const { btnShadow } = options;
    // app.config.globalProperties.$MyUI = {
    //   btnShadow,
    // };

    // Vue3 全局注册组件
    componentsMap.forEach((component) => {
      app.component(component.name, component);
    });
  },
};
