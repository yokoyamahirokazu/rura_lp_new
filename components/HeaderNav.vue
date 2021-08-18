<template>
  <div>
    <div class="hamburger-menu">
      <button class="menu-btn" v-on:click="navOpen = !navOpen">
        <span></span>
      </button>
    </div>

    <nav v-bind:class="{ active: navOpen }">
      <div class="nav_logo">
        <img src="~/assets/img/rura_logo_white.svg" />
        <button class="menu-btn close" v-on:click="navOpen = !navOpen">
          <span></span>
        </button>
      </div>
      <ul>
        <li>
          <nuxt-link
            @click.native="
              truckTest();
              navOpen = !navOpen;
            "
            to="#case"
            >導入事例</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            @click.native="
              truckService();
              navOpen = !navOpen;
            "
            to="#service"
            >サービス</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            @click.native="
              truckScene();
              navOpen = !navOpen;
            "
            to="#scene"
            >シーン</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            @click.native="
              truckDesign();
              navOpen = !navOpen;
            "
            to="#design"
            >デザイン</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            @click.native="
              truckFunction();
              navOpen = !navOpen;
            "
            to="#unique"
            >機能</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            @click.native="
              truckNews();
              navOpen = !navOpen;
            "
            to="#news"
            >お知らせ</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            @click.native="
              truckFaq();
              navOpen = !navOpen;
            "
            to="#faq"
            >FAQ</nuxt-link
          >
        </li>
      </ul>
      <div class="button_box">
        <nuxt-link to="/contact" class="button yellow">
          <img src="~/assets/icon/icon_contact.svg" />お問い合わせ
        </nuxt-link>
        <p class="small">無料デモ・資料ダウンロード</p>
      </div>
    </nav>
    <div class="nav_contact">
      <p class="small">無料デモ<br />資料ダウンロード</p>
      <nuxt-link
        to="/contact"
        class="button yellow header_contact"
        @click.native="truckCc1()"
      >
        <img src="~/assets/icon/icon_contact.svg" /><span>お問い合わせ</span>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    truckTest() {
      this.$gtag("event", "click", {
        event_category: "anchor",
        event_label: "click_header_case-study",
      });
    },
    truckCase() {
      this.$gtag("event", "click", {
        event_category: "anchor",
        event_label: "click_header_case-study",
      });
    },
    truckService() {
      this.$gtag("event", "click", {
        event_category: "anchor",
        event_label: "click_header_service",
      });
    },
    truckScene() {
      this.$gtag("event", "click", {
        event_category: "anchor",
        event_label: "click_header_scene",
      });
    },
    truckDesign() {
      this.$gtag("event", "click", {
        event_category: "anchor",
        event_label: "click_header_design",
      });
    },
    truckFunction() {
      this.$gtag("event", "click", {
        event_category: "anchor",
        event_label: "click_header_function",
      });
    },
    truckNews() {
      this.$gtag("event", "click", {
        event_category: "anchor",
        event_label: "click_header_news",
      });
    },
    truckFaq() {
      this.$gtag("event", "click", {
        event_category: "anchor",
        event_label: "click_header_faq",
      });
    },
    truckCc1() {
      this.$gtag("event", "click", {
        event_category: "contact",
        event_label: "click_contact_1",
      });
    },
  },

  data() {
    return {
      navOpen: false,
    };
  },
};
</script>
