<template>
  <div>
    <section>
      <div class="contents contact_form">
        <div class="headline">
          <h2>
            <span class="main">お問い合わせテスト</span
            ><span class="sub_title"></span>
          </h2>
        </div>

        <p>
          RURAにご関心いただきありがとうございます。
          必須項目を入力の上、フォームの送信をお願いします。<br />
          担当者が内容を確認の上、折り返し連絡させていただきます。<br />
          ※RURAのダウンロード資料は、フォーム入力後にダウンロードできます。
        </p>

        <form
          class="formrun"
          action="https://form.run/api/v1/r/7f2p3yy9yrknpi16oqc2w1c9"
          method="post"
        >
          <div class="contact_form_content">
            <div class="contact_form_box">
              <span class="form_title"
                >お問い合わせの種類<span class="form_title_small required"
                  >必須</span
                ></span
              >
              <div class="check_box_wrapper">
                <label class="check_box">
                  <input
                    type="radio"
                    name="お問い合わせの種類"
                    value="RURAの資料ダウンロード"
                    data-formrun-required
                  />
                  RURAの資料ダウンロード
                </label>

                <label class="check_box">
                  <input
                    type="radio"
                    name="お問い合わせの種類"
                    value="RURAに関する詳細な説明がほしい"
                    data-formrun-required
                  />
                  RURAに関する詳細な説明がほしい
                </label>
                <label class="check_box">
                  <input
                    type="radio"
                    name="お問い合わせの種類"
                    value="RURAを自社に導入することを検討している"
                    data-formrun-required
                  />
                  RURAを自社に導入することを検討している
                </label>
                <label class="check_box">
                  <input
                    type="radio"
                    name="お問い合わせの種類"
                    value="RURAを代理店として扱いたい／自社サービスと組み合わせて扱いたい"
                    data-formrun-required
                  />
                  RURAを代理店として扱いたい／自社サービスと組み合わせて扱いたい
                </label>
              </div>
              <span
                class="text_danger"
                data-formrun-show-if-error="お問い合わせの種類"
                >お問い合わせの種類を選択してください</span
              >
            </div>

            <div class="contact_form_box">
              <span class="form_title"
                >お問い合わせ内容詳細<span class="form_title_small required"
                  >必須</span
                ></span
              >
              <textarea
                name="お問い合わせ内容詳細"
                data-formrun-required
              ></textarea>

              <span
                class="text_danger"
                data-formrun-show-if-error="お問い合わせ内容詳細"
                >お問い合わせ内容詳細を正しく入力してください</span
              >
            </div>

            <div class="contact_form_box">
              <span class="form_title"
                >お名前<span class="form_title_small required">必須</span></span
              >
              <input name="お名前" type="text" data-formrun-required />

              <span class="text_danger" data-formrun-show-if-error="お名前"
                >お名前を正しく入力してください</span
              >
            </div>

            <div class="contact_form_box">
              <span class="form_title"
                >メールアドレス
                <span class="form_title_small required">必須</span>
              </span>
              <input
                name="メールアドレス"
                type="text"
                data-formrun-type="email"
                data-formrun-required
              />

              <span
                class="text_danger"
                data-formrun-show-if-error="メールアドレス"
                >メールアドレスを正しく入力してください</span
              >
            </div>
            <div class="contact_form_box">
              <span class="form_title"
                >電話番号<span class="form_title_small required"
                  >必須</span
                ></span
              >
              <input
                type="text"
                name="電話番号"
                data-formrun-type="tel"
                data-formrun-required
              />
              <span class="text_danger" data-formrun-show-if-error="電話番号"
                >電話番号を正しく入力してください</span
              >
            </div>

            <div class="contact_form_box">
              <span class="form_title"
                >会社名<span class="form_title_small required">必須</span></span
              >
              <input name="会社名" type="text" data-formrun-required />

              <span class="text_danger" data-formrun-show-if-error="会社名"
                >会社名を正しく入力してください</span
              >
            </div>
            <div class="contact_form_box">
              <span class="form_title"
                >役職<span class="form_title_small">任意</span></span
              >
              <input name="役職" type="text" />
            </div>
            <div class="contact_form_box">
              <span class="form_title"
                >部署<span class="form_title_small">任意</span></span
              >
              <input name="部署" type="text" />
            </div>

            <div class="contact_form_box">
              <span class="form_title"
                >RURAをどちらでお知りになりましたか？<span
                  class="form_title_small"
                  >任意</span
                ></span
              >
              <div class="check_box_wrapper">
                <label class="check_box">
                  <input
                    type="checkbox"
                    name="RURAをどちらでお知りになりましたか？[]"
                    value="テレビ"
                  />
                  テレビ
                </label>
                <label class="check_box">
                  <input
                    type="checkbox"
                    name="RURAをどちらでお知りになりましたか？[]"
                    value="新聞"
                  />
                  新聞</label
                >
                <label class="check_box">
                  <input
                    type="checkbox"
                    name="RURAをどちらでお知りになりましたか？[]"
                    value="雑誌"
                  />
                  雑誌
                </label>
                <label class="check_box">
                  <input
                    type="checkbox"
                    name="RURAをどちらでお知りになりましたか？[]"
                    value="Webメディア"
                  />
                  Webメディア
                </label>
                <label class="check_box">
                  <input
                    type="checkbox"
                    name="RURAをどちらでお知りになりましたか？[]"
                    value="企業HP"
                  />
                  企業HP
                </label>
                <label class="check_box">
                  <input
                    type="checkbox"
                    name="RURAをどちらでお知りになりましたか？[]"
                    value="SNS・ブログ"
                  />
                  SNS・ブログ
                </label>
                <label class="check_box">
                  <input
                    type="checkbox"
                    name="RURAをどちらでお知りになりましたか？[]"
                    value="友人・知人"
                  />
                  友人・知人
                </label>

                <div>
                  <div class="other_flex">
                    <span class="form_title">その他</span>
                    <input
                      name="RURAをどちらでお知りになりましたか？その他"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>
            <input
              type="hidden"
              name="リードソース"
              value="問い合わせフォーム"
            />

            <!-- ボット投稿をブロックするためのタグ -->
            <div class="_formrun_gotcha">
              <style media="screen">
                ._formrun_gotcha {
                  position: absolute !important;
                  height: 1px;
                  width: 1px;
                  overflow: hidden;
                }
              </style>
              <label for="_formrun_gotcha"
                >If you are a human, ignore this field</label
              >
              <input
                type="text"
                name="_formrun_gotcha"
                id="_formrun_gotcha"
                tabindex="-1"
              />
            </div>
            <div class="submit_box">
              <button
                class="button"
                type="submit"
                data-formrun-error-text="未入力の項目があります"
                data-formrun-submitting-text="送信中..."
              >
                送信する
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: "lower",

  mounted() {
    if (process.client) {
      this.loadFormrunScript();
    }
  },
  methods: {
    initFormrun() {
      window.Formrun._reset(); // (2)の処理
      window.Formrun.init(".formrun"); // (3)の処理
    },
    loadFormrunScript() {
      if (window.Formrun) {
        // 一度アクセスしたら、window.Formrunがあるので、(2),(3)の処理を呼んで終わり
        console.log("repeat init");
        this.initFormrun();
        return; // 2回目からはここで終わり
      } // 初回のみ SDKを ロードする
      new Promise((resolve, reject) => {
        // (1). 該当スクリプトを動的にロード
        const script = document.createElement("script");
        script.addEventListener("load", resolve);
        script.addEventListener("error", reject);
        script.src = "https://sdk.form.run/js/v2/formrun.js";
        document.head.appendChild(script);
      })
        .then(() => {
          console.log("init!");
          this.initFormrun(); // (2),(3)の処理を呼ぶ
        })
        .catch(() => {
          console.log("err");
        });
    },
  },
};
</script>
