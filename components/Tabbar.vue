<template>
  <div class="tabbar-container">
    <div class="item" v-for="item in routes" :key="item.path">
      <nuxt-link :to="item.path">{{ item.text }} </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routes: [
        {
          text: "主页",
          path: "/home",
        },
        {
          text: "发现",
          path: "/discover",
        },
        {
          text: "地图",
          path: "/map",
        },
        {
          text: "个人",
          path: "/user/login",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.tabbar-container {
  display: flex;
  background: #fff;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 0;
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
