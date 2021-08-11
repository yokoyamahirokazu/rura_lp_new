<template>
  <div>
    <section>
      <div class="contents news_box">
        <div class="news_box_right news_post_right">
          <div class="news_post">
            <h1 class="title">{{ postData.title }}</h1>
            <p class="">
              {{ new Date(postData.publishedAt).toLocaleDateString() }}
            </p>
            <div
              class="news_post_content"
              v-html="postData.editorContent"
            ></div>
          </div>
          <div class="news_post_back_to_btn">
            <nuxt-link class="button" to="/news">お知らせ一覧に戻る</nuxt-link>
            <nuxt-link class="button" to="/">トップページに戻る</nuxt-link>
          </div>
        </div>

        <div class="news_box_left news_post_left">
          <h3 class="news_post_related">
            <span class="main">最新のお知らせ</span>
          </h3>
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
    <ContactSection6 />
  </div>
</template>

<script>
import axios from "axios";

import ContactSection6 from "@/components/ContactSection6.vue";
export default {
  layout: "lower",

  components: {
    ContactSection6,
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
      queries: {
        limit: 10,
        orders: "-publishedAt",
      },
    });
    return {
      postData: data,
      newsItems: newsData.contents,
    };
  },
};
</script>
