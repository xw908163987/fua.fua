<template>
  <div class="container">
    <Header />
    <Nuxt />
    <Tabbar />
  </div>
</template>

<script>
export default {
  mounted() {
    require("@/assets/fontAdaptation.js");
  },
};
</script>
