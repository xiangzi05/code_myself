<template>
  <el-form>
    <!--代码操作框-->
    <el-form-item label="代码(python3在线输入)">
      <span
        ><el-button type="warning"> 调试 </el-button>
        <el-button type="primary">保存</el-button>
        <el-button type="success">运行</el-button></span
      >
      <div style="flex-grow: 1"></div>
      <span class="refresh">
        <el-icon :size="25">
          <Refresh />
        </el-icon>
      </span>
    </el-form-item>
    <!--代码输入框-->
    <v-ace-editor
      v-model:value="content"
      @init="editorInit"
      lang="python"
      theme="chrome"
      style="height: 300px"
    />
    <!--调试结果-->
    <!--弹出提示-->
  </el-form>
</template>

<script>
// import ace from "ace-builds";
import { VAceEditor } from "vue3-ace-editor";
import "ace-builds/src-min-noconflict/mode-python"; // python
import "ace-builds/src-min-noconflict/mode-batchfile"; // bash
import "ace-builds/src-min-noconflict/mode-powershell"; // powershell
import "ace-builds/src-min-noconflict/mode-yaml"; // yaml
import "ace-builds/src-min-noconflict/mode-text"; // 文本
import "ace-builds/src-noconflict/snippets/text";
import "ace-builds/src-min-noconflict/ext-language_tools";

export default {
  name: "MyAceEditor",
  components: {
    VAceEditor,
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
</style>