<template>
  <div>
    <div v-for="item in newsArchives" v-bind:key="item.id">
      <nuxt-link :to="`/news/${item.id}`">
        <h3>{{ item.title }}</h3>
        <p>{{ new Date(item.publishedAt).toLocaleDateString() }}</p>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $microcms }) {
    const newsArchive = await $microcms.get({
      endpoint: "news",
    });
    return {
      newsArchives: newsArchive.contents,
    };
  },
};
</script>