<template>
  <div class="ranking">
    <div class="tags">
      <div
        v-for="(item, index) in tags"
        :key="item.label"
        @click="selected(index)"
        :style="item.selected ? selected_style : ''"
        class="tag"
      >
        {{ item.label }}
      </div>
    </div>
    <div class="list">
      <div class="item" v-for="item in 6" :key="item">
        <div class="img">
          <img src="/avator.jpg" alt="" />
        </div>
        <div class="info">
          <p>なおちゃん</p>
          <p>３サイズ</p>
          <p>お店：東京アロマスタイル</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: [
        { label: "标签一", selected: false },
        { label: "标签二", selected: false },
        { label: "标签三", selected: false },
        { label: "标签四", selected: false },
      ],
      selected_style: {
        borderBottom: "2px solid #fb8b8d",
        paddingBottom: "0.2rem",
      },
    };
  },
  methods: {
    selected(index) {
      this.tags.forEach((item) => {
        item.selected = false;
      });
      this.tags[index].selected = true;
    },
  },
};
</script>

<style lang="less" scoped>
.ranking {
  margin: 1rem;
  .tags {
    display: flex;
    margin: 1rem 0;
    font-size: 0.8rem;
    .tag {
      color: #6b6b6b;
      margin: 0 0.5rem;
    }
  }
  .list {
    padding-bottom: 3rem;
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    .item {
      border-radius: 1rem;
      overflow: hidden;
      width: 9rem;
      margin: 1rem 0;
      .img {
        width: 9rem;
        height: 9rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .info {
        background: #fff;
        padding: 0.5rem;
        p {
          font-size: 0.6rem;
        }
        p:nth-child(1),
        p:nth-child(2) {
          color: #9a9a9a;
        }
      }
    }
  }
}
</style>