<template>
  <div>
    <Eyecatch />
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
        <div class="case_contents_wrapper">
          <client-only>
            <slick :options="caseSlider">
              <div class="" v-for="item in caseItems" v-bind:key="item.id">
                <div class="case_contents_box">
                  <div
                    class="round_box box_golden case_img box_case_slider_img"
                  >
                    <div class="round_box_inner box_golden_inner">
                      <img :src="item.caseImg.url" alt="" />
                    </div>
                  </div>
                  <div class="case_body">
                    <div class="case_logo">
                      <img
                        v-if="item.caseLogo1"
                        :src="item.caseLogo1.url"
                        alt=""
                      />
                      <img
                        v-if="item.caseLogo2"
                        :src="item.caseLogo2.url"
                        alt=""
                      />
                    </div>
                    <h3 class="case_title">{{ item.caseName }}</h3>
                    <p class="small case_type">{{ item.caseType }}</p>
                    <p class="case_body_txt">{{ item.caseBody }}</p>
                  </div>
                </div>
              </div>
            </slick>
          </client-only>
        </div>
      </div>
    </section>

    <Service />
    <ContactSection />
    <Scene />
    <Design />
    <ContactSection />

    <section class="white">
      <div class="case_contents">
        <div class="contents case_contents_headline">
          <div class="headline">
            <h2>
              <span class="main">RURAをオススメする理由</span>
            </h2>
          </div>
        </div>
        <slick :options="recommendSlider">
          <div
            class="shadow_box recommend_box"
            v-for="item in recommendItems"
            v-bind:key="item.id"
          >
            <div class="shadow_box_inner">
              <div class="recommend_box_inner">
                <div class="box_circle recommend_box_img">
                  <div class="box_circle_inner">
                    <img :src="item.img.url" alt="" />
                  </div>
                </div>
                <div class="recommend_box_body">
                  <h3 class="case_title">{{ item.body }}</h3>
                  <p>{{ item.company }}</p>
                  <p>{{ item.name }}</p>
                </div>
              </div>
            </div>
          </div>
        </slick>
      </div>
    </section>

    <Unique />
    <ContactSection />

    <section class="white">
      <div class="contents news_box">
        <div class="news_box_left">
          <h2>
            <span class="main">お知らせ</span>
          </h2>
          <!-- <nuxt-link to="/news" class="button">View More</nuxt-link> -->
        </div>
        <div class="news_box_right">
          <ul class="news">
            <li v-for="item in newsItems" v-bind:key="item.id">
              <p class="news_date small">
                {{ new Date(item.publishedAt).toLocaleDateString() }}
              </p>
              <h3 class="news_title">{{ item.title }}</h3>
            </li>
          </ul>
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
        <div class="flex_box faq_content">
          <div
            class="shadow_box flex_box_half"
            v-for="item in faqItems"
            v-bind:key="item.id"
          >
            <div class="shadow_box_inner">
              <div class="flex_box_contents faq_content">
                <h3 class="small">Q {{ item.question }}</h3>
                <p>{{ item.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ContactSection />
  </div>
</template>

<script>
const { createClient } = microcms;

// Initialize Client SDK.
const client = createClient({
  serviceDomain: "rura", // YOUR_DOMAIN is the XXXX part of XXXX.microcms.io
  apiKey: "905f8b65-262a-41b6-8a39-dd16be30f5c2",
});

import ContactSection from "@/components/ContactSection.vue";
import Service from "@/components/service.vue";
import Scene from "@/components/scene.vue";
import Design from "@/components/design.vue";
import Case from "@/components/case.vue";
import Unique from "@/components/unique.vue";
import Eyecatch from "@/components/eyecatch.vue";
export default {
  components: {
    ContactSection,
    Service,
    Scene,
    Design,
    Case,
    Unique,
    Eyecatch,
  },

  async asyncData({ $microcms }) {
    const newsData = await $microcms.get({
      endpoint: "news",
      queries: { limit: 5 },
    });
    const caseData = await $microcms.get({
      endpoint: "case",
    });
    const faqData = await $microcms.get({
      endpoint: "faq",
    });
    const recommendData = await $microcms.get({
      endpoint: "recommend",
    });
    return {
      newsItems: newsData.contents,
      caseItems: caseData.contents,
      faqItems: faqData.contents,
      recommendItems: recommendData.contents,
    };
  },
  data() {
    return {
      caseSlider: {
        arows: false,
        dots: true,
        centerMode: true,
        arrows: true,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 1280,
            settings: {},
          },
          {
            breakpoint: 640,
            settings: {
              arrows: false,
            },
          },
        ],
      },
      recommendSlider: {
        arows: false,
        slidesToShow: 1,
        dots: true,
        arrows: true,
        centerMode: true,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 640,
            settings: {
              arrows: false,
            },
          },
        ],
      },
    };
  },
};
</script>
<style>
</style>
