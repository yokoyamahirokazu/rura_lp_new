<template>
  <div class="lower">
    <Header />
    <main>
      <nuxt />
    </main>
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/header.vue"; // headerをインポート
import Footer from "@/components/footer.vue"; // footerをインポート
export default {
  components: {
    Header,
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
