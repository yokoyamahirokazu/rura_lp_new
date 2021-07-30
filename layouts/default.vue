<template>
  <div class="main">
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
html,
body {
  margin: 0;
  padding: 0;
}
</style>