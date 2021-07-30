<template>
  <div class="main-content">
    <div>
      <div>
        <div v-for="(item, index) in items" :key="index">
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
import axios from "axios";
export default {
  layout: "default02",
  async asyncData() {
    const { data } = await axios.get("https://rura.microcms.io/api/v1/news", {
      headers: { "X-API-KEY": "905f8b65-262a-41b6-8a39-dd16be30f5c2" },
    });
    return {
      items: data.contents,
    };
  },
};
</script>