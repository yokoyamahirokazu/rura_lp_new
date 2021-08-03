<template>
  <div>
    <section class="white">
      <div class="case_contents">
        <div class="contents case_contents_headline">
          <div class="headline">
            <h2>
              <span class="main">導入事例</span
              ><span class="sub_title">導入店舗、ぞくぞく増加中！</span>
            </h2>
          </div>
        </div>
        <div
          class="case_contents_box"
          v-for="item in caseItems"
          v-bind:key="item.id"
        >
          <div class="round_box box_golden case_img">
            <div class="round_box_inner box_golden_inner">
              <img :src="item.caseImg.url" alt="" />
            </div>
          </div>
          <div class="case_body">
            <div class="case_logo">
              <img v-if="item.caseLogo1" :src="item.caseLogo1.url" alt="" />
              <img v-if="item.caseLogo2" :src="item.caseLogo2.url" alt="" />
            </div>
            <h3 class="case_title">{{ item.caseName }}</h3>
            <p class="small case_type">{{ item.caseType }}</p>
            <p class="case_body_txt">{{ item.caseBody }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- <Unique /> -->
    <section class="white">
      <h2>
        <span class="main">お知らせ</span>
      </h2>

      <div v-for="item in newsItems" v-bind:key="item.id">
        <div>
          <h3>{{ item.title }}</h3>
          <p>{{ new Date(item.publishedAt).toLocaleDateString() }}</p>
        </div>
      </div>
    </section>

    <section class="light">
      <div class="contents">
        <div class="headline">
          <h2>
            <span class="main">よくあるご質問</span
            ><span class="sub_title"
              >遠隔接客サービスが様々な業界で活用されています。</span
            >
          </h2>
        </div>
        <div class="flex_box">
          <div
            class="shadow_box flex_box_half"
            v-for="item in faqItems"
            v-bind:key="item.id"
          >
            <div class="shadow_box_inner">
              <div class="flex_box_contents faq_content">
                <h3 class="small">Q{{ item.question }}</h3>
                <p>{{ item.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Slick from "vue-slick";
import Unique from "@/components/unique.vue";
import ContactSection from "@/components/ContactSection.vue";
import Service from "@/components/service.vue";
import Scene from "@/components/scene.vue";
import Design from "@/components/design.vue";
import Case from "@/components/case.vue";
export default {
  components: {
    Unique,
    ContactSection,
    Service,
    Scene,
    Design,
    Case,
  },

  async asyncData({ $microcms }) {
    const newsData = await $microcms.get({
      endpoint: "news",
    });
    const caseData = await $microcms.get({
      endpoint: "case",
    });
    const faqData = await $microcms.get({
      endpoint: "faq",
    });
    return {
      newsItems: newsData.contents,
      caseItems: caseData.contents,
      faqItems: faqData.contents,
    };
  },
};
</script>
