<template>
  <div>
    <!--关卡模式页面-->
    <div class="common-layout">
      <el-container>
        <!-- 关卡详情 -->
        <el-header class="round-info">
          <p>页面尾部可进行在线算法实践。</p>
          <el-tabs type="border-card">
            <el-tab-pane label="round 1">
              <el-text>
                <h1>AI实现的基本思路-极大极小值搜索算法</h1>
                <p>
                  五子棋看起来有各种各样的走法，而实际上把每一步的走法展开，就是一颗巨大的博弈树。在这个树中，从根节点为0开始，奇数层表示电脑可能的走法，偶数层表示玩家可能的走法。
                </p>
                <p>
                  假设电脑先手，那么第一层就是电脑的所有可能的走法，第二层就是玩家的所有可能走法，以此类推。
                </p>
                <p>
                  我们假设平均每一步有50种可能的走法，那么从根节点开始，往下面每一层的节点数量是上一层的
                  50被，假设我们进行4层思考，也就是电脑和玩家各走两步，那么这颗博弈树的最后一层的节点数为
                  50^4 = 625W 个。
                </p>
                <p>
                  先不考虑这么多个节点需要多久能算出来。有了对博弈树的基本认识，我们就可以用递归来遍历这一棵树。
                </p>
                <p>
                  那么我们如何才能知道哪一个分支的走法是最优的，我们就需要一个评估函数能对当前整个局势作出评估，返回一个分数。我们规定对电脑越有利，分数越大，对玩家越有利，分数越小，分数的起点是0。
                </p>
                <p>我们遍历这颗博弈树的时候就很明显知道该如何选择分支了：</p>
                <ul>
                  <li>
                    电脑走棋的层我们称为
                    MAX层，这一层电脑要保证自己利益最大化，那么就需要选分最高的节点。
                  </li>
                  <li>
                    玩家走棋的层我们称为MIN层，这一层玩家要保证自己的利益最大化，那么就会选分最低的节点。
                  </li>
                </ul>
                <p>这也就是极大极小值搜索算法的名称由来。</p>
                <p></p>
                <p>
                  此图中甲是电脑，乙是玩家，那么在甲层的时候，总是选其中值最大的节点，乙层的时候，总是选其中最小的节点。
                </p>
                <p>
                  而每一个节点的分数，都是由子节点决定的，因此我们对博弈树只能进行深度优先搜索而无法进行广度优先搜索。深度优先搜索用递归非常容易实现，然后主要工作其实是完成一个评估函数，这个函数需要对当前局势给出一个比较准确的评分。
                </p>
                <h2>极大极小值搜索</h2>
                <p>
                  五子棋是一个15X15的棋盘，因为棋盘大小不会变动，所以目前来看用
                  15X15
                  的二维数组来存储，效果是最好的。极小化极大值搜索，正常需要两个函数，一个搜索极小值，一个搜索极大值。因为其实大部分逻辑是一样的，完全可以把这两个函数合并成一个。然后把对手的分数变成负的，就是我方的分数。这种实现就是<em>负极大值搜索</em>。
                </p></el-text
              >
            </el-tab-pane>
            <el-tab-pane label="round 2"
              >极大极小搜索算法+alpha-beta剪枝算法</el-tab-pane
            >
            <el-tab-pane label="round 3"
              >极大极小搜索算法+alpha-beta剪枝算法+启发式评估</el-tab-pane
            >
          </el-tabs>
        </el-header>
        <!-- 在线编程 -->
        <el-main>
          <my-ace-editor></my-ace-editor>
        </el-main>
      </el-container>
    </div>
  </div>
</template>
  
  <script>
import MyAceEditor from "@/components/MyAceEditor";
export default {
  name: "RoundIndexView",
  components: {
    MyAceEditor,
  },
  setup() {
    // let editor = ace.editor("")
    return {};
  },
};
</script>
  
  <style scoped >
.round-info {
  height: fit-content;
}
</style>