<template>
  <div>
    <section class="thanks">
      <div class="contents">
        <div class="footer_logo thanks_logo">
          <p class="footer_logo_copy">遠隔接客サービス</p>
          <img src="~/assets/img/rura_logo_white.svg" />
        </div>
        <div class="headline">
          <h2>
            <span class="main">お問い合わせいただきありがとうございます。</span
            ><span class="sub_title"></span>
          </h2>
        </div>
        <p>
          この度は弊社へのお問い合わせをいただき、誠にありがとうございます。<br />
          お問い合わせ内容を確認の上、担当者よりご連絡させていただきます。<br />
          <br />
          資料は下記ボタンよりダウンロードいただけます。
        </p>
        <div class="thanks_under_btn">
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1YvNmlliK4gPVTtgfebTQ6AKVf0mmo1om/view"
            class="button yellow"
            ><img src="~/assets/icon/file-text.svg" />資料ダウンロード</a
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: "lower",
  head() {
    return {
      // titleタグ変更
      title: "This is a title",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "descriptiondescriptiondescription",
        },
      ],
    };
  },
};
</script>
