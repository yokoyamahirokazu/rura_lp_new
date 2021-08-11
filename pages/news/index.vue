<template>
  <div>
    <section>
      <div class="contents news_box">
        <div class="news_box_left">
          <h2>
            <span class="main">お知らせ一覧</span>
          </h2>
        </div>
        <div class="news_box_right">
          <ul class="news">
            <li v-for="item in newsItems" :key="item.id">
              <nuxt-link :to="`/news/${item.id}`">
                <p class="news_date small">
                  {{ new Date(item.publishedAt).toLocaleDateString() }}
                </p>
                <h3 class="news_title">{{ item.title }}</h3>
              </nuxt-link>
            </li>
          </ul>
          <div class="news_post_back_to_btn">
            <nuxt-link class="button" to="/">トップページに戻る</nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <ContactSection5 />
  </div>
</template>

<script>
import ContactSection5 from "@/components/ContactSection5.vue";
export default {
  layout: "lower",

  components: {
    ContactSection5,
  },

  async asyncData({ $microcms }) {
    const newsData = await $microcms.get({
      endpoint: "news",
      queries: { limit: 100, orders: "-publishedAt" },
    });
    return {
      newsItems: newsData.contents,
    };
  },
  data() {
    return {
      visible: false,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (!this.visible) {
        var top = this.$el.getBoundingClientRect().top;
        this.visible = top < window.innerHeight + 100;
      }
    },
  },
};
</script>
