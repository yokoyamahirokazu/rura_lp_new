<template>
  <div>
    <section class="light" id="service">
      <div class="contents contents_no_pb">
        <div class="headline">
          <h2>
            <span class="main" v-scroll-inview:fadeIn>遠隔接客サービス</span
            ><span class="sub_title" v-scroll-inview:fadeIn
              >RURAは店頭スタッフと変わらない接客サービスの提供を目指しています。</span
            >
          </h2>
        </div>
        <div class="flex_box">
          <div class="shadow_box flex_box_half" v-scroll-inview:fadeIn>
            <div class="shadow_box_inner">
              <img src="~/assets/img/rura_service_1.png" alt="" />
              <div class="flex_box_contents">
                <h3>画面を見せながらの接客</h3>
                <p>
                  タブレットを見せながら接客しているかのように、画像や動画を出したり切り替えたりしながら案内できます。
                </p>
              </div>
            </div>
          </div>
          <div class="shadow_box flex_box_half" v-scroll-inview:fadeIn>
            <div class="shadow_box_inner">
              <img src="~/assets/img/rura_service_2.png" alt="" />
              <div class="flex_box_contents">
                <h3>声かけ・呼び出し</h3>
                <p>
                  店頭同様にスタッフ側から声かけしたり、お客様側から呼び鈴で呼び出す形式のどちらもできます。
                </p>
              </div>
            </div>
          </div>
          <div class="shadow_box flex_box_half" v-scroll-inview:fadeIn>
            <div class="shadow_box_inner">
              <img src="~/assets/img/rura_service_3.png" alt="" />
              <div class="flex_box_contents">
                <h3>いつものスタッフが画面から</h3>
                <p>
                  店頭に立っていたスタッフが画面越しに多拠点接客できるようになります。
                </p>
              </div>
            </div>
          </div>
          <div class="shadow_box flex_box_half" v-scroll-inview:fadeIn>
            <div class="shadow_box_inner">
              <img src="~/assets/img/rura_service_4.png" alt="" />
              <div class="flex_box_contents">
                <h3>顔出し、アバター、キャラクター</h3>
                <p>
                  店頭同様の顔出し接客はもちろん、画面越しならではのアバターやキャラクターも選べます。
                </p>
              </div>
            </div>
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
