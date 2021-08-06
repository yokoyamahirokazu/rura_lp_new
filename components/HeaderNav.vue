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
            @click.native="navOpen = !navOpen"
            to="#case"
            @click="
              gtag('event', 'click', {
                event_category: 'anchor',
                event_label: 'click_header_case-study',
              })
            "
            >導入事例</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            @click.native="navOpen = !navOpen"
            to="#service"
            @click="
              gtag('event', 'click', {
                event_category: 'anchor',
                event_label: 'click_header_service',
              })
            "
            >サービス</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            @click.native="navOpen = !navOpen"
            to="#scene"
            @click="
              gtag('event', 'click', {
                event_category: 'anchor',
                event_label: 'click_header_scene',
              })
            "
            >シーン</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            @click.native="navOpen = !navOpen"
            to="#design"
            @click="
              gtag('event', 'click', {
                event_category: 'anchor',
                event_label: 'click_header_design',
              })
            "
            >デザイン</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            @click.native="navOpen = !navOpen"
            to="#unique"
            @click="
              gtag('event', 'click', {
                event_category: 'anchor',
                event_label: 'click_header_function',
              })
            "
            >機能</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            @click.native="navOpen = !navOpen"
            to="#news"
            @click="
              gtag('event', 'click', {
                event_category: 'anchor',
                event_label: 'click_header_news',
              })
            "
            >お知らせ</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            @click.native="navOpen = !navOpen"
            to="#faq"
            @click="
              gtag('event', 'click', {
                event_category: 'anchor',
                event_label: 'click_header_faq',
              })
            "
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
        @click="
          gtag('event', 'click', {
            event_category: 'contact',
            event_label: 'click_contact_1',
          })
        "
      >
        <img src="~/assets/icon/icon_contact.svg" /><span>お問い合わせ</span>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navOpen: false,
    };
  },
};
</script>
