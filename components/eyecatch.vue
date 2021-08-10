<template>
  <div>
    <div class="eyecacth">
      <div class="eyecacth_bg">
        <img class="bg_1" src="~/assets/img/eye_bg_clinic.jpg" />
        <img class="bg_2" src="~/assets/img/eye_bg_cafe.jpg" />
        <img class="bg_3" src="~/assets/img/eye_bg_hotel.jpg" />
      </div>
      <div class="eyecacth_content">
        <p class="eyecacth_copy">接客を省コスト化するなら。</p>
        <div class="eyecacth_under">
          <div class="eyecacth_under_left">
            <div class="eyecacth_under_left_inner">
              <div class="eyecacth_logo">
                <p class="eyecacth_logo_copy">遠隔接客サービス</p>
                <img src="~/assets/img/rura_logo_white.svg" />
              </div>
              <h1 class="eyecacth_subcopy">
                <span>まるで瞬間移動。</span>
                <span>高スキルのスタッフをRURAで全国に０秒派遣。</span>
                <span> お店の無人化や人材不足に効果を発揮します。 </span>
              </h1>
              <div class="button_box">
                <nuxt-link
                  to="/contact"
                  class="button yellow"
                  @click="truckCc2()"
                >
                  <img src="~/assets/icon/icon_contact.svg" />お問い合わせ
                </nuxt-link>
                <p class="small">無料デモ・資料ダウンロード</p>
              </div>
            </div>
          </div>
          <div class="eyecacth_under_right">
            <img class="ho_1" src="~/assets/img/eye_display_horizontal.png" />
            <img class="ho_2" src="~/assets/img/eye_worker.png" />

            <img class="tb_1" src="~/assets/img/eye_display_tablet.png" />
            <img class="tb_2" src="~/assets/img/eye_tleepen.png" />
            <img class="tb_3" src="~/assets/img/eye_tablet_logo.png" />

            <img class="ve_1" src="~/assets/img/eye_display_vertical.png" />
            <img class="ve_1" src="~/assets/img/eye_avater.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    truckCc2() {
      this.$gtag("event", "click", {
        event_category: "contact",
        event_label: "click_contact_2",
      });
    },
  },
};
</script>
