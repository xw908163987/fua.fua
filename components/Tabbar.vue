<template>
  <div class="tabbar-container">
    <div class="item" v-for="(item,index) in routes" @click="select(index)" :key="item.path">
      <nuxt-link :to="item.path" :class="[item.is_selected ? 'selected' : '']">{{ item.text }} </nuxt-link>
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
          is_selected:false
        },
        {
          text: "发现",
          path: "/shop_center/introduction",
          is_selected:false
        },
        {
          text: "地图",
          path: "/map",
          is_selected:false
        },
        {
          text: "个人",
          path: "/user/login",
          is_selected:false
        },
      ],
    };
  },
  methods:{
    select(index){
      this.routes.forEach(item=>{
        item.is_selected = false
      })
      this.routes[index].is_selected = true
    }
  }
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
  .selected{
  color: #FB8B8D;
}
}

</style>
