<template>
  <div>
    <section class="light" id="design">
      <div class="contents contents_no_pb">
        <div class="headline">
          <h2>
            <span class="main" v-scroll-inview:fadeIn
              >設置場所に適応するデザイン</span
            >
          </h2>
        </div>

        <div class="flex_box">
          <div class="flex_box_half design_box" v-scroll-inview:fadeIn>
            <div class="shadow_box">
              <div class="shadow_box_inner">
                <div class="flex_box_contents">
                  <h3 v-scroll-inview:fadeIn>
                    ディスプレイ、タブレット、縦型画面、立体映像
                  </h3>
                  <p v-scroll-inview:fadeIn>
                    RURAはひとつのサービス上からあらゆる画面での接客を実現します。
                  </p>
                </div>
              </div>
            </div>
            <img
              v-scroll-inview:fadeIn
              src="~/assets/img/rura_design_1.png"
              alt=""
            />
          </div>
          <div class="flex_box_half design_box" v-scroll-inview:fadeIn>
            <div class="shadow_box">
              <div class="shadow_box_inner">
                <div class="flex_box_contents">
                  <h3 v-scroll-inview:fadeIn>
                    顔出し、キャラクター、アバター、ボイスチェンジ
                  </h3>
                  <p v-scroll-inview:fadeIn>
                    世界観や顧客層に合わせたスタイルで接客できます。
                  </p>
                </div>
              </div>
            </div>
            <img
              v-scroll-inview:fadeIn
              src="~/assets/img/rura_design_2.png"
              alt=""
            />
          </div>
          <div class="flex_box_half design_box" v-scroll-inview:fadeIn>
            <div class="shadow_box">
              <div class="shadow_box_inner">
                <div class="flex_box_contents">
                  <h3 v-scroll-inview:fadeIn>
                    画像、動画、スクリーンセーバー、背景
                  </h3>
                  <p v-scroll-inview:fadeIn>
                    既存の画像や動画素材を活用して接客に使ったり待機中に流せます。
                  </p>
                </div>
              </div>
            </div>
            <img
              v-scroll-inview:fadeIn
              src="~/assets/img/rura_design_3.png"
              alt=""
            />
          </div>
          <div class="flex_box_half design_box" v-scroll-inview:fadeIn>
            <div class="shadow_box">
              <div class="shadow_box_inner">
                <div class="flex_box_contents">
                  <h3 v-scroll-inview:fadeIn>
                    オリジナル制作（グラフィック・アバター・装飾・什器）
                  </h3>
                  <p v-scroll-inview:fadeIn>
                    各種オリジナルデザインの制作も承っております。
                  </p>
                </div>
              </div>
            </div>
            <img
              v-scroll-inview:fadeIn
              src="~/assets/img/rura_design_4.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  components: {},
};
</script>
