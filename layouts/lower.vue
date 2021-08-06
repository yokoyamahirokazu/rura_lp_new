<template>
  <div class="lower">
    <HeaderLower />
    <main>
      <nuxt />
    </main>
    <Footer />
  </div>
</template>
<script>
import HeaderLower from "@/components/headerLower.vue"; // headerLowerをインポート
import Footer from "@/components/footer.vue"; // footerをインポート
export default {
  components: {
    HeaderLower,
    Footer,
  },
};
</script>
<style>
.lower header {
  position: relative;
}
.lower header::before {
  background-color: var(--primary-500);
}
</style>
