<template>
  <div>匹配页面,gameType:{{ $route.query.gameType }}</div>
  <el-row style="margin-top: 20px; user-select: none">
    <el-col :span="6" :offset="9"> 匹配时间:0s</el-col>
    <el-col :span="9" :offset="2">
      <div><img :src="imgUrl" /></div>
      <div>username1</div>
    </el-col>
  </el-row>
</template>
    
    <script>
export default {
  name: "MatchRoomView",
  components: {},
  setup() {
    const imgUrl = "";
    return { imgUrl };
  },
};
</script>
    
    <style scoped ></style>