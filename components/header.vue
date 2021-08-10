<template>
  <div>
    <header>
      <div class="header_logo">
        <nuxt-link to="/" @click="truckHeaderLogo()">
          <img src="~/assets/img/rura_logo_white.svg" />
          <p class="small">遠隔接客サービス</p>
        </nuxt-link>
      </div>
      <HeaderNav />
    </header>
  </div>
</template>
<script>
import HeaderNav from "@/components/HeaderNav.vue";
export default {
  truckHeaderLogo() {
    this.$gtag("event", "click", {
      header: "contact",
      event_label: "click_header_logo",
    });
  },

  components: {
    HeaderNav,
  },
};
</script>
