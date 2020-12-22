<template>
  <div class="home">
    <Swiper />
    <Menus />
    <div class="notice">進めニュース</div>
    <NearbyShops />
    <HotGirls />
  </div>
</template>

<script>
import Swiper from "@/components/home/swiper";
import Menus from "@/components/home/menus";
import NearbyShops from "@/components/home/nearbyShops";
import HotGirls from "@/components/home/hotGirls";
export default {
  components: {
    Swiper,
    Menus,
    NearbyShops,
    HotGirls,
  },
};
</script>

<style lang="less" scoped>
.home {
  padding-bottom: 3rem;
  display: flex;
  margin: 1rem;
  flex-flow: column nowrap;
  align-items: center;
  .notice {
    padding: 0.5rem 0.5rem;
    box-sizing: border-box;
    background: #fff;
    width: 100%;
    border-radius: 1rem;
    margin: 1rem auto;
    overflow: hidden;
  }
}
</style>
