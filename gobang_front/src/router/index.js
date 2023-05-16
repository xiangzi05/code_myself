import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";
import PlatformIntroView from "@/views/intro/PlatformIntroView";
import UserAccountLoginView from "@/views/user/UserAccountLoginView";
import UserAccountRegisterView from "@/views/user/UserAccountRegisterView";
import PersonalSpaceView from "@/views/user/PersonalSpaceView";
import UserAccountUpdateView from "@/views/user/UserAccountUpdateView";
import PkIndexView from "@/views/pk/PkIndexView";
import RoundIndexView from "@/views/round/RoundIndexView";
import NotFound from "@/views/error/NotFound";

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/intro",
    meta: { description: "首页", isRoot: true },
  },
  //intro介绍页
  {
    path: "/intro",
    name: "platform_intro",
    component: PlatformIntroView,
    meta: { description: "网站介绍", isRoot: true },
  },
  //user用户页
  {
    path: "/user/login",
    name: "user_account_login",
    component: UserAccountLoginView,
    meta: { description: "登录", isRoot: false },
  },
  {
    path: "/user/register",
    name: "user_account_register",
    component: UserAccountRegisterView,
    meta: { description: "注册", isRoot: false },
  },
  {
    path: "/user/space",
    name: "personal_space",
    component: PersonalSpaceView,
    meta: { description: "个人空间", isRoot: false },
  },
  {
    path: "/user/update",
    name: "user_account_update",
    component: UserAccountUpdateView,
    meta: { description: "个人信息修改", isRoot: false },
  },
  //游戏大厅
  {
    path: "/pk",
    name: "pk_index",
    component: PkIndexView,
    meta: { description: "游戏厅首页", isRoot: false },
  },
  //实验闯关
  {
    path: "/round",
    name: "round_index",
    component: RoundIndexView,
    meta: { description: "闯关首页", isRoot: false },
  },
  //页面报错提示
  {
    path: "/404",
    name: "404",
    component: NotFound,
    meta: {
      description: "",
      isRoot: true,
    },
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404",
  },
];
const router = createRouter({ history: createWebHistory(), routes });
router.beforeEach((to) => {
  console.log("router", router.currentRoute.value.fullpath);
  if (to.meta.isRoot) store.commit("updateBackPage", "");
});

export default router;
