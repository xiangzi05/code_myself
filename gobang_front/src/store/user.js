// import $ from "jquery";
// import store from ".";
import router from "@/router";

//测试修改username值""为"实验品",修改islogin为true
export default {
  //state,数据，相当于data
  state: {
    //用户信息,id,name,password,is_login
    id:
      JSON.parse(localStorage.getItem("user")) === null
        ? 0
        : JSON.parse(localStorage.getItem("user")).id,
    username:
      JSON.parse(localStorage.getItem("user")) === null
        ? "实验品"
        : JSON.parse(localStorage.getItem("user")).username,
    is_login:
      JSON.parse(localStorage.getItem("user")) === null
        ? true
        : JSON.parse(localStorage.getItem("user")).is_login,
  },
  //getter=computed,常用于,进行state计算形成新的数据
  getters: {},
  //定义方法，操作state
  mutations: {
    //user.js数据更新
    updateUser(state, user) {
      //用户信息更新
      state.id = user.id;
      state.username = user.username;
      state.is_login = user.is_login;
      //本地储存用户记录
      localStorage.setItem("user", JSON.stringify(user));
    },
    //logout同步操作
    logout(state) {
      state.id = 0;
      state.username = "";
      state.is_login = false;
    },
  },
  // 异步操作mutation
  actions: {
    //登出
    logout(context) {
      localStorage.removeItem("user");
      context.commit("logout");
      router.push({ name: "user_account_login" });
    },
  },
  //module,分割嵌套子模块
  modules: {},
};
