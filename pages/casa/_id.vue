<template>
  <div class="main-content">
    <div class="l-content">
      <h2>{{ item.title }}</h2>
      <p>{{ new Date(item.publishedAt).toLocaleDateString() }}</p>
      <p>{{ item.body }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  async asyncData({ params }) {
    const { data } = await axios.get(
      `https://rura.microcms.io/api/v1/news/${params.id}`,
      {
        headers: { "X-API-KEY": "905f8b65-262a-41b6-8a39-dd16be30f5c2" },
      }
    );
    return {
      item: data,
    };
  },
};
</script>
