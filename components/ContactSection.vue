<template>
  <div>
    <section class="contact">
      <div class="contact_section_inner">
        <div class="contact_section_contents">
          <div class="contact_section_contents_inner">
            <h2 class="contact_section_title" v-scroll-inview:fadeIn>
              接客を省コスト化するなら
            </h2>
            <div class="contact_section_logo">
              <p class="" v-scroll-inview:fadeIn>遠隔接客サービス</p>
              <img
                v-scroll-inview:fadeIn
                src="~/assets/img/rura_logo_white.svg"
              />
            </div>
            <div class="button_box">
              <nuxt-link
                v-scroll-inview:fadeIn
                to="/contact"
                class="button yellow"
                @click="truckCc3()"
              >
                <img src="~/assets/icon/icon_contact.svg" />お問い合わせ
              </nuxt-link>
              <p v-scroll-inview:fadeIn class="small">
                無料デモ・資料ダウンロード
              </p>
            </div>
          </div>
        </div>
        <div class="contact_section_document">
          <img
            v-scroll-inview:fadeIn
            class="contact_section_document_img_2"
            src="~/assets/img/rura_dl_document_2.png"
          />
          <img
            v-scroll-inview:fadeIn
            class="contact_section_document_img_1"
            src="~/assets/img/rura_dl_document_1.png"
          />
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  methods: {
    truckCc3() {
      this.$gtag("event", "click", {
        event_category: "contact",
        event_label: "click_contact_3",
      });
    },
  },

  components: {},
};
</script>
