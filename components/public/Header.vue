<template>
  <div class="header">
    <div class="row">
      <div class="back" @click="back">
        <img src="/public/back.png" alt="" />
      </div>
      <div class="logo">
        <img src="/public/logo.png" alt="" />
      </div>
    </div>
    <div class="search" v-show="search">
      <input type="text" placeholder="请输入关键字" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    search: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 999;
  .row {
    width: 100%;
    height: 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    background: #fff;
    box-sizing: border-box;
    .back {
      width: 1.5rem;
      height: 1.5rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .logo {
      width: 6rem;
      display: flex;
      align-items: center;
      img {
        width: 100%;
        height: 1.5rem;
      }
    }
  }
  .search {
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 0;
    input {
      width: 90%;
      background: #f2f2f2;
      border-radius: 1rem;
      padding: 0.25rem 0.5rem;
      color: #9a9a9a;
      font-size: 0.8rem;
    }
  }
}
</style>
