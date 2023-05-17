<template>
  <div class="content-field">
    <el-row>
      <el-col :span="18" :offset="3">
        <el-card shadow="always" class="card">
          <h1>
            五子棋实验对战测试平台,可实现在线编译,在线对战等功能,用于进行五子棋人工智能算法学习。
          </h1></el-card
        >
      </el-col>
    </el-row>
  </div>
</template>
  
<script>
export default {
  name: "PlatformIntroView",
  components: {},
  setup() {
    return {};
  },
};
</script>
  
  <style scoped >
div.content-field {
  margin-top: 40px;
}

.card {
  background-color: #fafafa;
}
</style>