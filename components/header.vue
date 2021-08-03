<template>
  <header>
    <div class="header_logo">
      <nuxt-link to="/">
        <img src="~/assets/img/rura_logo_white.svg" />
        <p class="small">遠隔接客サービス</p>
      </nuxt-link>
    </div>
    <HeaderNav />
  </header>
</template>
<script>
import HeaderNav from "@/components/HeaderNav.vue";
export default {
  components: {
    HeaderNav,
  },
};
</script>
