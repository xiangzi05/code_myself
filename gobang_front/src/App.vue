<template>
  <el-container>
    <!--侧栏导航-->
    <el-aside width="200px" style="user-select: none">
      <div class="aside-header">
        <span style="margin-left: 5px">五子棋实验对战测试平台</span>
      </div>
      <el-menu class="el-aside-menu">
        <router-link :to="{ name: 'platform_intro' }"
          ><el-menu-item index="1">网站说明</el-menu-item></router-link
        >
        <router-link :to="{ name: 'round_index' }"
          ><el-menu-item index="2">实验关卡</el-menu-item></router-link
        >
        <router-link :to="{ name: 'pk_index' }"
          ><el-menu-item index="3">游戏大厅</el-menu-item></router-link
        >
      </el-menu>
    </el-aside>
    <el-container>
      <!--顶部导航-->
      <el-header style="user-select: none"
        ><el-menu>
          <div>{{ page }}</div>
          <el-dropdown>
            <span>
              <el-icon>
                <User />
              </el-icon>
              <span class="username">{{ $store.state.user.username }}</span>
              <el-icon> <CaretBottom /> </el-icon
            ></span>
            <template #dropdown>
              <el-dropdown-menu>
                <router-link :to="{ name: 'personal_space' }"
                  ><el-dropdown-item>个人空间</el-dropdown-item></router-link
                >
                <el-dropdown-item>退出</el-dropdown-item></el-dropdown-menu
              ></template
            >
          </el-dropdown>
          <router-link :to="{ name: 'user_account_login' }"
            ><el-menu-item index="1"
              ><span>登录</span></el-menu-item
            ></router-link
          >
          <router-link :to="{ name: 'user_account_register' }"
            ><el-menu-item index="2"
              ><span>注册</span></el-menu-item
            ></router-link
          >
        </el-menu></el-header
      >
      <!--介绍页内容-->
      <el-main
        ><el-scrollbar>
          <router-view :key="$route.fullPath"></router-view> </el-scrollbar
      ></el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "App",
  components: {},
  //初始化
  setup() {
    return {};
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
.aside-header {
  height: 60px;
  background-color: rgb(5, 25, 41);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}
/*

.el-aside-menu {
  height: calc(100vh - 60px);
  border-right: none !important;
}

.aside-scrollbar {
  height: calc(100vh - 60px);
}

.el-aside-menu .el-menu-item.is-active {
  background-color: #1890ff !important;
}

.flex-grow {
  flex-grow: 1;
}

.right-container {
  height: 100vh !important;
}

.back-menu {
  margin-right: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.el-header {
  padding: 0 0 !important;
}

.el-footer {
  margin-top: 20px;
  height: 30px !important;
}

.main-scrollbar {
  height: calc(100vh - 60px - 50px) !important;
}

.footer {
  height: 1px;
  width: 100%;
  background-color: #fff;
}

.link-text {
  text-decoration: none;
}

.username {
  line-height: 60px;
  font-weight: 700;
  font-size: 17px;
}

.current-page {
  line-height: 60px;
  width: 200px;
  font-size: 17px;
  margin-left: 25px;
  display: flex;
} */
</style>
