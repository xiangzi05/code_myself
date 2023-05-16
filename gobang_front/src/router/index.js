import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";
import PlatformIntroView from "@/views/intro/PlatformIntroView";
import GameIntroView from "@/views/intro/GameIntroView";
import CodeHelperIntroView from "@/views/intro/CodeHelperIntroView";
import UserAccountLoginView from "@/views/user/UserAccountLoginView";
import UserAccountRegisterView from "@/views/user/UserAccountRegisterView";
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
  {
    path: "/game_intro",
    name: "game_intro",
    component: GameIntroView,
    meta: { description: "游戏介绍", isRoot: false },
  },
  {
    path: "/codehelper",
    name: "code_helper_intro",
    component: CodeHelperIntroView,
    meta: { description: "代码编写指南", isRoot: false },
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
  //未找到
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
    redirect: "/404/",
  },
];
const router = createRouter({ history: createWebHistory(), routes });
router.beforeEach((to) => {
  console.log("begfore");
  if (to.meta.isRoot) store.commit("updateBackPage", "");
});

export default router;
