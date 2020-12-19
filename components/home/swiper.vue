<template>
  <div class="swiper">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in 3" :key="item">
        <img src="/shop_center/img1.jpg" alt="" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<style lang="less" scoped>
.swiper {
  margin: 1rem auto;
  width: 100%;
  border-radius: 1rem;
  overflow: hidden;
}
</style>
