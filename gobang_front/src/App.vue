<template>
  <el-container>
    <!--侧栏导航-->
    <el-aside width="200px" style="user-select: none">
      <div class="aside-header">
        <span style="margin-left: 5px">五子棋实验对战测试平台</span>
      </div>
      <div class="aside-menu-container">
        <el-menu class="el-aside-menu">
          <router-link class="link-text" :to="{ name: 'platform_intro' }"
            ><el-menu-item index="1"
              ><span style="margin-left: 5px">网站说明</span></el-menu-item
            ></router-link
          >
          <router-link class="link-text" :to="{ name: 'round_index' }"
            ><el-menu-item index="2"
              ><span style="margin-left: 5px">实验关卡</span></el-menu-item
            ></router-link
          >
          <router-link class="link-text" :to="{ name: 'pk_index' }"
            ><el-menu-item index="3"
              ><span style="margin-left: 5px">游戏大厅</span></el-menu-item
            ></router-link
          >
        </el-menu>
      </div>
    </el-aside>
    <el-container class="right-container">
      <!--顶部导航-->
      <el-header style="user-select: none"
        ><el-menu
          :default-active="activeIndex"
          mode="horizontal"
          :ellipsis="false"
          @select="handleSelect"
        >
          <div class="current-page">{{ page }}</div>
          <div class="flex-grow"></div>
          <el-menu-item
            v-if="$store.state.user.is_login"
            index="1"
            style="margin-right: 20px; height: 60px"
          >
            <el-dropdown>
              <span>
                <el-icon>
                  <User />
                </el-icon>
                <span class="username">{{ $store.state.user.username }}</span>
                <el-icon> <CaretBottom /> </el-icon
              ></span>
              <template #dropdown>
                <el-dropdown-menu style="user-select: none">
                  <router-link
                    class="link-text"
                    :to="{ name: 'personal_space' }"
                    ><el-dropdown-item>个人空间</el-dropdown-item></router-link
                  >
                  <el-dropdown-item divided @click="logout"
                    >退出</el-dropdown-item
                  ></el-dropdown-menu
                ></template
              >
            </el-dropdown></el-menu-item
          >

          <router-link
            v-if="!$store.state.user.is_login"
            class="link-text"
            :to="{ name: 'user_account_login' }"
            ><el-menu-item index="1"
              ><span>登录</span></el-menu-item
            ></router-link
          >
          <router-link
            v-if="!$store.state.user.is_login"
            class="link-text"
            :to="{ name: 'user_account_register' }"
            ><el-menu-item index="2"
              ><span>注册</span></el-menu-item
            ></router-link
          >
        </el-menu></el-header
      >
      <!--介绍页内容-->
      <el-main class="main">
        <router-view :key="$route.fullPath"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import store from "./store";
import { useRoute } from "vue-router";
import { watch, ref, onMounted, h } from "vue";
import { ElNotification } from "element-plus";

export default {
  name: "App",
  components: {},
  //初始化
  setup() {
    // const store = useStore();
    const route = useRoute();
    const page = ref("");

    //修改page变量信息
    watch(
      () => route.name,
      () => {
        page.value = route.meta.description;
        console.log(page.value);
      }
    );
    //退出操作
    const logout = () => {
      store.dispatch("logout");
    };

    //欢迎提示
    onMounted(() => {
      ElNotification({
        title: "Welcome",
        message: h(
          "i",
          { style: "color: teal" },
          "欢迎来到五子棋实验对战测试平台！"
        ),
        offset: 70,
      });
    });
    return {
      page,
      logout,
    };
  },
  //vue加载完成后调用
  mounted() {},
};
</script>

<style>
/*浏览器兼容*/
/* Chrome Safari */
html:-webkit-scrollbar {
  display: none;
}

/* firefox */
/* IE 10+ */
html {
  scrollbar-width: none;
  -ms-overflow-style: none;
  overflow-x: hidden;
  overflow-y: auto;
}

body {
  margin: 0;
  height: 100%;
}
.el-header {
  padding: 0 0 !important;
}
.link-text {
  text-decoration: none;
  color: #409eff;
}
.aside-header {
  height: 60px;
  background-color: rgb(5, 25, 41);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}
.aside-menu-container {
  /* 未生效 */
  background-color: rgb(13, 66, 118);
}
.el-aside-menu {
  height: calc(100vh - 60px);
  border-right: none !important;
  color: #cccccc;
}
.el-aside-menu .el-menu-item.is-active {
  background-color: #1890ff !important;
  color: #fff;
}
.right-container {
  height: 100vh !important;
}
.flex-grow {
  flex-grow: 1;
}
.current-page {
  line-height: 60px;
  width: 200px;
  font-size: 17px;
  margin-left: 25px;
  display: flex;
}
.username {
  font-weight: 700;
  font-size: 17px;
}
.main {
  padding: 0;
  height: calc(100vh - 60px - 50px);
}
.main-scrollbar {
  height: calc(100vh - 60px - 50px) !important;
}
</style>
