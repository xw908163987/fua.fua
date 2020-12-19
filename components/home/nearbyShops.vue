<template>
  <div class="nearby-shops">
    <div class="header">
      <div class="title">近く店舗</div>
      <nuxt-link tag="div" to="/shop_center/moreShops" class="more">More</nuxt-link>
    </div>
    <div class="list">
      <nuxt-link
        tag="div"
        class="item"
        :to="{ path: '/shop_center/detail' }"
        v-for="item in 3"
        :key="item"
      >
        <div class="imgs">
          <img src="/1607861641(1).jpg" alt="" />
          <img src="/1607861641(1).jpg" alt="" />
        </div>
        <div class="info">
          <div class="name">
            <span>藤原家按摩店</span>
            <span>3.7km</span>
          </div>
          <div class="tags">
            <div class="tag">标签1</div>
            <div class="tag">标签2</div>
            <div class="tag">标签3</div>
          </div>
          <div class="desc">
            <span
              >★五反田职1分★【口口少对策徽底】通常营业中小7了以少日√o七大注目!话题D藁剂左费富亿取极八大人气</span
            >
          </div>
          <div class="trans">
            <span>五反田职办5徒步1分☆注目D大人氨女口少☆TE...</span>
          </div>
          <div class="comment">
            <div class="count">评论数 624</div>
            <div class="score">评分 5.0</div>
            <div class="cost">羊力以卜￥2,100</div>
          </div>
          <div class="bottom">夕一术>·x二1一在晃为</div>
        </div>
      </nuxt-link>
    </div>
    <div class="image">
      <img src="/img2.jpg" alt="" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.nearby-shops {
  width: 100%;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      font-weight: 600;
    }
    .more {
      font-size: 0.8rem;
      color: #9a9a9a;
    }
  }
  .list {
    .item {
      padding: 1rem 1rem 0 1rem;
      background: #fff;
      border-radius: 1rem;
      overflow: hidden;
      margin: 1rem 0;
      .imgs {
        display: flex;
        justify-content: space-between;
        border-radius: 1rem;
        overflow: hidden;
        img {
          width: 8rem;
          height: 8rem;
          border-radius: 1rem;
          overflow: hidden;
        }
      }
      .info {
        margin-top: 1rem;
        .name {
          display: flex;
          justify-content: space-between;
          span:nth-child(2) {
            color: #6b6b6b;
          }
        }
        .tags {
          display: flex;
          justify-content: flex-start;
          padding: 0.5rem 0;
          font-size: 0.6rem;
          .tag {
            margin-right: 0.5rem;
            background: #fff4f4;
            color: #fb8d8d;
            border-radius: 1rem;
            overflow: hidden;
            padding: 0.25rem 1rem;
          }
        }
        .desc {
          color: #9a9a9a;
          font-size: 0.6rem;
          line-height: 1.2rem;
        }
        .trans {
          margin: 1rem 0;
          font-size: 0.6rem;
        }
        .comment {
          color: #9a9a9a;
          font-size: 0.6rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #cccccc;
          padding-bottom: 1rem;
        }
        .bottom {
          line-height: 2.5rem;
          text-align: center;
          color: #fb8d8d;
          font-weight: bold;
        }
      }
    }
  }
  .image {
    width: 90%;
    margin: 1rem auto;
    img {
      width: 100%;
    }
  }
}
</style>
