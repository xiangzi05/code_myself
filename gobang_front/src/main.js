import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
//引入ElementPlus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App);
app.use(store).use(router).mount("#app");

//引入ElementPlus
app.use(ElementPlus);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
