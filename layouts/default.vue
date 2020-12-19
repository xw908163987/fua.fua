<template>
  <div class="container">
    <Header />
    <Nuxt />
    <Tabbar />
  </div>
</template>

<script>
export default {
  mounted() {
    require("@/assets/reset.css");
  },
};
</script>

<style lang="less" scoped>
.container {
  width: 100vw;
  height: 100vh;
}
</style>
