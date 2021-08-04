<template>
  <div>
    <footer>
      <div class="footer_logo">
        <p class="footer_logo_copy">遠隔接客サービス</p>
        <img src="~/assets/img/rura_logo_white.svg" />
      </div>
      <p class="footer_company small">
        運営会社：タイムリープ株式会社<br />
        <a class="link_white" href="https://timeleap.co.jp/" target="_blank"
          >https://timeleap.co.jp/</a
        >
      </p>
      <p class="small">Copyright© 2021 Timeleap inc. All Rights Reserved.</p>
    </footer>
    <transition name="page_top_btn">
      <button
        class="page_top_btn button"
        v-show="buttonActive"
        @click="returnTop"
      >
        <img src="~/assets/icon/chevron-top.svg" />
      </button>
    </transition>
  </div>
</template>
<script>
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      buttonActive: false,
      scroll: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrollWindow);
  },
  methods: {
    returnTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    scrollWindow() {
      const top = 500; // ボタンを表示させたい位置
      this.scroll = window.scrollY;
      if (top <= this.scroll) {
        this.buttonActive = true;
      } else {
        this.buttonActive = false;
      }
    },
  },
});
</script>
