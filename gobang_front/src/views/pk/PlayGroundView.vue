<template>
  <div class="playground">
    棋局对战页面,gameType:{{ $route.query.gameType }}
    <canvas
      ref="canvas"
      tabindex="0"
      @contextmenu.prevent=""
      style="height: 100%"
    ></canvas>
  </div>
</template>

<script>
export default {
  name: "PlayGroundView",
  components: {},
  setup() {
    return {};
  },
};
</script>

<style>
</style>