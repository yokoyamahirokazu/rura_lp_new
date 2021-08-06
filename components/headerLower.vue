<template>
  <div>
    <header>
      <div class="header_logo">
        <nuxt-link
          to="/"
          @click="
            gtag('event', 'click', {
              header: 'contact',
              event_label: 'click_header_logo',
            })
          "
        >
          <img src="~/assets/img/rura_logo_white.svg" />
          <p class="small">遠隔接客サービス</p>
        </nuxt-link>
      </div>
      <HeaderNavLower />
    </header>
  </div>
</template>
<script>
import HeaderNavLower from "@/components/HeaderNavLower.vue";
export default {
  components: {
    HeaderNavLower,
  },
};
</script>
