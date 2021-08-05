<template>
  <div>
    <section>
      <div class="contents news_box">
        <div class="news_box_left">
          <h2>
            <span class="main">お知らせ</span>
          </h2>
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
        <div class="news_box_right">
          <h1 class="title">{{ postData.title }}</h1>
          <p class="">
            {{ new Date(postData.publishedAt).toLocaleDateString() }}
          </p>
          <div class="post" v-html="postData.editorContent"></div>
        </div>
      </div>
    </section>
    <ContactSection />
  </div>
</template>

<script>
import axios from "axios";
const { createClient } = microcms;

import ContactSection from "@/components/ContactSection.vue";
export default {
  layout: "lower",

  components: {
    ContactSection,
  },

  async asyncData({ params, $microcms }) {
    const { data } = await axios.get(
      `https://rura.microcms.io/api/v1/news/${params.id}`,
      {
        headers: { "X-API-KEY": process.env.API_KEY },
      }
    );
    const newsData = await $microcms.get({
      endpoint: "news",
      queries: { limit: 5, orders: "-publishedAt" },
    });
    return {
      postData: data,
      newsItems: newsData.contents,
    };
  },
};
</script>
