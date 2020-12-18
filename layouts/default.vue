<template>
  <div>
    <Header />
    <Nuxt />
    <Tabbar />
  </div>
</template>

<script>
export default {
  mounted() {
    require("@/assets/reset.css");
  },
};
</script>
