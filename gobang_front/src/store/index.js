import { createStore } from "vuex";
import ModuleUser from "./user";

export default createStore({
  //state,数据，相当于data
  state: {
    backpage: "",
  },
  //getter=computed,常用于,进行state计算形成新的数据
  getters: {},
  //定义方法，操作state
  mutations: {
    updateBackPage(state, backpage) {
      state.backpage = backpage;
    },
  },
  // 异步操作mutation
  actions: {},
  //module,分割嵌套子模块
  modules: {
    user: ModuleUser,
  },
});
