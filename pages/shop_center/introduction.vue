<template>
  <div class="introduction">
    <div class="info">
      <div class="image">
        <img src="/shop_center/img1.jpg" alt="" />
      </div>
      <div class="desc">
        <div class="title">藤原家按摩店</div>
        <p>
          河南彭世健康管理集团有限公司始创于2000年，前身为郑州彭世足部保健服务有限公司，是中国知名的足部健康产业企业。经过20年的发展，
          集团成功打造特许连锁加盟经营模式，在全国地区加盟店达3000+家，打造“千城万店”战略规划。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.introduction {
  width: 90%;
  margin: 1rem auto;
  .info {
    background: #fff;
    border-radius: 1rem;
    overflow: hidden;
    .image {
      width: 100%;
      img {
        width: 100%;
      }
    }
    .desc {
      padding: 1rem;
      .title {
        width: 100%;
        text-align: center;
        font-weight: 600;
        color: #000;
        font-size: 1rem;
        margin: 0 0 1rem 0;
      }
      p {
        color: #6b6b6b;
      }
    }
  }
}
</style>
