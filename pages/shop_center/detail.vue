<template>
  <div class="detail">
    <div class="detail-info">
      <div class="image">
        <img src="/shop_center/img1.jpg" alt="" />
      </div>
      <div class="info">
        <div class="name">
          <span>藤原家按摩店</span>
          <span>3.7km</span>
        </div>
        <div class="comment">
          <div class="score">*******评分 5.0</div>
          <div class="count">评论数：99</div>
        </div>
        <hr />
        <div class="menu">
          <div class="item">営業時間：24時間</div>
          <div class="item" style="width: 66%">３名在籍</div>
          <div class="item">仮眠OK</div>
          <div class="item">节一儿—么</div>
          <div class="item">完全涸室</div>
        </div>
        <div class="position">
          <div class="icon">icon</div>
          <div class="addr">福井県福井市⽂京５丁⽬６−２６ 福⼤前西福井駅駅から３分</div>
          <div class="navigation">导航</div>
        </div>
        <div class="nav">
          <div class="icon">icon</div>
          <div class="desc">
            <div class="title">店铺ホームページ セラビスト　</div>
            <div class="link">http://www.ran-fukui.xyz/</div>
          </div>
        </div>
      </div>
    </div>
    <div class="user-comments">
      <div class="title">用户评价</div>
      <div class="list">
        <div class="item" v-for="item in 3" :key="item">
          <div class="left">
            <img src="/avator.jpg" alt="" />
          </div>
          <div class="right">
            <div class="comments">*****评分5.0</div>
            <div class="date">2016.11.30</div>
            <div class="desc">派遣型性感觉美容沙龙OPELA</div>
            <div class="desc">从北区一/海关/日语/派邈/商务旅行</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.detail {
  .detail-info {
    margin: 1rem;
    background: #fff;
    border-radius: 1rem;
    overflow: hidden;
    .image {
      width: 100%;
      img {
        width: 100%;
      }
    }
    .info {
      margin: 1rem 0.5rem 0;
      .name {
        display: flex;
        justify-content: space-between;
        span:nth-child(2) {
          color: #6b6b6b;
        }
      }
      .comment {
        color: #9a9a9a;
        font-size: 0.6rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        line-height: 2.5rem;
      }
      .menu {
        display: flex;
        justify-content: flex-start;
        align-content: space-between;
        flex-wrap: wrap;
        font-size: 0.65rem;
        color: #252525;
        .item {
          margin: 0.25rem 0;
          width: 33%;
        }
      }
      .position {
        font-size: 0.5rem;
        display: flex;
        flex-flow: row nowrap;
        background: #fff4f4;
        align-items: center;
        justify-content: space-between;
        div {
          padding: 0.5rem;
        }
        .addr {
          width: 60%;
          color: #fb8d8d;
        }
        .navigation {
          background: #fb8d8d;
          padding: 0.5rem 1rem;
          border-radius: 1rem;
          overflow: hidden;
          color: #fff;
        }
      }
      .nav {
        margin-top: 1rem;
        font-size: 0.5rem;
        padding-bottom: 1rem;
        display: flex;
        align-items: center;
        .icon {
          padding: 0.5rem 1rem 0.5rem 0.5rem;
        }
        .desc {
          padding: 0 0.5rem;
          .link {
            color: #fb8d8d;
          }
        }
      }
    }
  }
  .user-comments {
    margin: 0 1rem;
    .title {
      display: flex;
      justify-content: space-between;
    }
    .list {
      padding-bottom: 3rem;
      font-size: 0.6rem;
      .item {
        margin: 1rem 0;
        border-radius: 1rem;
        overflow: hidden;
        display: flex;
        background: #fff;
        padding: 0.5rem;
        .right {
          color: #9a9a9a;
          display: flex;
          flex-flow: column nowrap;
          justify-content: space-between;
          padding-left: 1rem;
          .comments,
          .date {
            color: #9a9a9a;
          }
          .desc {
            color: #252525;
          }
        }
      }
    }
  }
}
</style>
