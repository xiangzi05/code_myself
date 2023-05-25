import { createRouter, createWebHistory } from "vue-router";
import PlatformIntroView from "@/views/intro/PlatformIntroView";
import UserAccountLoginView from "@/views/user/UserAccountLoginView";
import UserAccountRegisterView from "@/views/user/UserAccountRegisterView";
import PersonalSpaceView from "@/views/user/PersonalSpaceView";
import UserAccountUpdateView from "@/views/user/UserAccountUpdateView";
import PkIndexView from "@/views/pk/PkIndexView";
import MatchRoomView from "@/views/pk/MatchRoomView";
import PlayGroundView from "@/views/pk/PlayGroundView";
import RoundIndexView from "@/views/round/RoundIndexView";
import NotFound from "@/views/error/NotFound";

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/intro",
    meta: { description: "首页" },
  },
  //intro介绍页
  {
    path: "/intro",
    name: "platform_intro",
    component: PlatformIntroView,
    meta: { description: "网站说明" },
  },
  //user用户页
  {
    path: "/user/login",
    name: "user_account_login",
    component: UserAccountLoginView,
    meta: { description: "登录" },
  },
  {
    path: "/user/register",
    name: "user_account_register",
    component: UserAccountRegisterView,
    meta: { description: "注册" },
  },
  {
    path: "/user/space",
    name: "personal_space",
    component: PersonalSpaceView,
    meta: { description: "个人空间" },
  },
  {
    path: "/user/update",
    name: "user_account_update",
    component: UserAccountUpdateView,
    meta: { description: "个人信息修改" },
  },
  //游戏大厅
  {
    path: "/pk",
    name: "pk_index",
    component: PkIndexView,
    meta: { description: "游戏对战" },
  },
  {
    path: "/pk/match",
    name: "match_room",
    component: MatchRoomView,
    meta: { description: "在线匹配" },
  },
  {
    path: "/pk/play",
    name: "play_ground",
    component: PlayGroundView,
    meta: { description: "棋局对战" },
  },
  //实验闯关
  {
    path: "/round",
    name: "round_index",
    component: RoundIndexView,
    meta: { description: "实验闯关" },
  },
  //页面报错提示
  {
    path: "/404",
    name: "404",
    component: NotFound,
    meta: {
      description: "",
    },
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404",
  },
];
const router = createRouter({ history: createWebHistory(), routes });

export default router;
