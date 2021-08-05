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
          <h1 class="title">{{ title }}</h1>
          <p class="publishedAt">{{ publishedAt }}</p>
          <div class="post">{{ body }}</div>
        </div>
      </div>
    </section>
    <ContactSection />
  </div>
</template>

<script>
import axios from "axios";

import ContactSection from "@/components/ContactSection.vue";
export default {
  layout: "lower",

  components: {
    ContactSection,
  },

  async asyncData({ params }) {
    const { data } = await axios.get(
      `https://rura.microcms.io/api/v1/news/${params.id}`,
      {
        headers: { "X-API-KEY": process.env.API_KEY },
      }
    );
    return data;
  },
};
</script>
