<template>
  <div>
    <section class="white" id="scene">
      <div class="contents">
        <div class="headline">
          <h2>
            <span class="main" v-scroll-inview:fadeIn>導入シーン</span
            ><span class="sub_title" v-scroll-inview:fadeIn
              >遠隔接客サービスが様々な業界で活用されています。</span
            >
          </h2>
        </div>
        <div class="flex_box">
          <div
            class="round_box flex_box_three text_shadow_box_wrapper"
            v-scroll-inview:fadeIn
          >
            <div class="round_box_inner">
              <img src="~/assets/img/rura_scene_clinic.png" alt="" />
            </div>
            <div class="text_shadow_box shadow_box">
              <h3 class="small">クリニック</h3>
            </div>
          </div>
          <div
            class="round_box flex_box_three text_shadow_box_wrapper"
            v-scroll-inview:fadeIn
          >
            <div class="round_box_inner">
              <img src="~/assets/img/rura_scene_hotel.png" alt="" />
            </div>
            <div class="text_shadow_box shadow_box">
              <h3 class="small">ホテル</h3>
            </div>
          </div>
          <div
            class="round_box flex_box_three text_shadow_box_wrapper"
            v-scroll-inview:fadeIn
          >
            <div class="round_box_inner">
              <img src="~/assets/img/rura_scene_estate.png" alt="" />
            </div>
            <div class="text_shadow_box shadow_box">
              <h3 class="small">不動産</h3>
            </div>
          </div>
          <div
            class="round_box flex_box_three text_shadow_box_wrapper"
            v-scroll-inview:fadeIn
          >
            <div class="round_box_inner">
              <img src="~/assets/img/rura_scene_coworking.png" alt="" />
            </div>
            <div class="text_shadow_box shadow_box">
              <h3 class="small">コワーキングスペース</h3>
            </div>
          </div>
          <div
            class="round_box flex_box_three text_shadow_box_wrapper"
            v-scroll-inview:fadeIn
          >
            <div class="round_box_inner">
              <img src="~/assets/img/rura_scene_netcafe.png" alt="" />
            </div>
            <div class="text_shadow_box shadow_box">
              <h3 class="small">ネットカフェ</h3>
            </div>
          </div>
          <div
            class="round_box flex_box_three text_shadow_box_wrapper"
            v-scroll-inview:fadeIn
          >
            <div class="round_box_inner">
              <img src="~/assets/img/rura_scene_shop.png" alt="" />
            </div>
            <div class="text_shadow_box shadow_box">
              <h3 class="small">小売店</h3>
            </div>
          </div>
        </div>
        <p class="large mb_2vw" v-scroll-inview:fadeIn>
          他にも具体的な導入シーンや活用方法をご案内しております。詳しくはお問い合わせください。
        </p>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  components: {},
};
</script>
