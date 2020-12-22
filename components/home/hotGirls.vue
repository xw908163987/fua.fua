<template>
  <div class="hot-girls">
    <div class="title">⼈気女の⼦</div>
    <div class="list">
      <div class="item" v-for="item in 6" :key="item">
        <div class="img">
          <img src="/avator.jpg" alt="" />
        </div>
        <div class="info">
          <div>内容一</div>
          <div>内容二</div>
          <div>店名：东京热血一番街</div>
        </div>
      </div>
    </div>
    <div class="more-btn">查看更多</div>
  </div>
</template>

<style lang="less" scoped>
.hot-girls {
  .title {
    margin: 1rem 0;
  }
  .list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    font-size: 0.7rem;
    .item {
      width: 8.5rem;
      border-radius: 1rem;
      overflow: hidden;
      margin: 0.5rem 0;
      .img {
        width: 8.5rem;
        height: 8.5rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .info {
        padding: 0.5rem;
        background: #fff;
        div:nth-child(1),
        div:nth-child(2) {
          color: #9a9a9a;
        }
      }
    }
  }
  .more-btn {
    width: 40%;
    background: #fb8b8d;
    color: #fff;
    text-align: center;
    padding: 0.5rem;
    border-radius: 1rem;
    overflow: hidden;
    margin: 1rem auto;
  }
}
</style>
