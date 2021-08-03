<template>
  <div class="main-content">
    <div>
      <div>
        <div v-for="(item, index) in newsItems" :key="index">
          <nuxt-link :to="'news/' + item.id">
            <div>
              <h3>{{ item.title }}</h3>
              <p>{{ new Date(item.publishedAt).toLocaleDateString() }}</p>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "default02",
  async asyncData({ $microcms }) {
    const newsData = await $microcms.get({
      endpoint: "news",
    });
    return {
      newsItems: newsData.contents,
    };
  },
};
</script>