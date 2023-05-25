<template>
  <div>
    <!--对战模式选择-->
    <el-card>
      <template #header>
        <div class="card-header">
          <span>游戏模式</span>
        </div>
      </template>
      <el-button-group>
        <el-button text type="primary">人人对弈</el-button>
        <el-button text type="primary" @click="showCodeChoiceDialog = true"
          >人机对弈</el-button
        >
        <el-button text type="primary" @click="showCodeChoiceDialog = true"
          >算法对弈</el-button
        >
      </el-button-group>
    </el-card>
    <el-dialog v-model="showCodeChoiceDialog" title="人机对弈">
      <el-form>
        <el-form-item label="选择机器算法">
          <!-- 代码选择-->
          <el-select> </el-select>
          <!-- 查看代码 -->
          <el-popover placement="right" :width="270" trigger="click">
            <template #reference>
              <el-icon :size="15" class="zoom">
                <ZoomIn />
              </el-icon>
            </template>
            <div class="popover-code-title">查看代码</div>
            <el-scrollbar height="300px">
              <pre class="popover-content">这里显示具体代码</pre>
            </el-scrollbar>
          </el-popover>
        </el-form-item>
      </el-form>
      <template #footer
        ><span
          ><el-button type="primary">确认</el-button>
          <el-button @click="showCodeChoiceDialog = flase"
            >取消</el-button
          ></span
        ></template
      >
    </el-dialog>
    <!-- 排行榜 -->
    <el-card>
      <template #header>
        <div class="card-header">
          <span>排行榜</span>
        </div>
      </template>
      <el-table :data="tableData" height="250" style="width: 100%">
        <el-table-column label="排行" prop="rank" />
        <el-table-column label="用户名" prop="username" />
        <el-table-column label="分数" prop="score" />
      </el-table>
      <el-pagination
        :page-size="10"
        :pager-count="5"
        layout="prev, pager, next"
        :total="100"
      />
    </el-card>
  </div>
</template>
    
  <script>
import { ref } from "vue";
export default {
  name: "PkIndexView",
  components: {},
  setup() {
    const showCodeChoiceDialog = ref(false);
    //模拟数据
    const tableData = [
      { rank: 1, username: "zzq", score: 1640 },
      { rank: 2, username: "xz", score: 1610 },
      { rank: 3, username: "sjc", score: 1580 },
      { rank: 4, username: "dd", score: 1500 },
      { rank: 4, username: "cs", score: 1500 },
      { rank: 6, username: "wss", score: 1480 },
    ];
    return { showCodeChoiceDialog, tableData };
  },
};
</script>
    
  <style scoped >
.el-card {
  margin-bottom: 2rem;
}
.el-button-group {
  display: flex;
  vertical-align: middle;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
}
.el-button--text {
  margin-right: 15px;
}
.popover-code-title {
  font-size: 17px;
  font-weight: 700;
  margin: 10px 10px;
  user-select: none;
}
.popover-content {
  margin: 0 10px;
  width: 250px;
}
</style>