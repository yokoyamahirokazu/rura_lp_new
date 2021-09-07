<template>
  <div>
    <section class="thanks">
      <div class="contents">
        <div class="headline">
          <h1>
            <span class="small"
              >お問い合わせいただきありがとうございます。</span
            >
          </h1>
        </div>
        <div class="thanks_dl">
          <h2 class="thanks_dl_title">
            資料ダウンロードはこちら
          </h2>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1YvNmlliK4gPVTtgfebTQ6AKVf0mmo1om/view"
            class="button yellow"
            ><img
              src="~/assets/icon/file-text.svg"
            />資料ダウンロードはこちら</a
          >
        </div>
        <p>
          この度は弊社へのお問い合わせをいただき、誠にありがとうございます。<br />
          お問い合わせ内容を確認の上、担当者よりご連絡させていただきます。<br />
        </p>
        <div class="thanks_under_btn">
          <nuxt-link to="/" class="button">
            ホームへ戻る
          </nuxt-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$adobeFonts(document);
  },

  layout: "lower",
  head() {
    return {
      title: "送信完了｜遠隔接客サービス RURA",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "RURAへのお問い合わせページです。"
        },
        { hid: "robots", name: "robots", content: "noindex" }
      ]
    };
  }
};
</script>
