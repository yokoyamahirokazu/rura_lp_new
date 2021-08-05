<template>
  <div>
    <section>
      <div class="contents news_box">
        <div class="news_box_left">
          <h2>
            <span class="main">お知らせ</span>
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
        </div>
      </div>
    </section>
    <ContactSection />
  </div>
</template>

<script>
const { createClient } = microcms;

import ContactSection from "@/components/ContactSection.vue";
export default {
  layout: "lower",

  components: {
    ContactSection,
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
};
</script>
