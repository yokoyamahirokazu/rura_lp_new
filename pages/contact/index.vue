<template>
  <div>
    <section>
      <div class="contents contact_form">
        <div class="headline">
          <h2>
            <span class="main">お問い合わせ</span
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
                    required
                    v-model="$v.form.contacnt_type.$model"
                  />
                  RURAの資料ダウンロード
                </label>

                <label class="check_box">
                  <input
                    required
                    type="radio"
                    name="お問い合わせの種類"
                    value="RURAに関する詳細な説明がほしい"
                    v-model="$v.form.contacnt_type.$model"
                  />
                  RURAに関する詳細な説明がほしい
                </label>
                <label class="check_box">
                  <input
                    required
                    type="radio"
                    name="お問い合わせの種類"
                    value="RURAを自社に導入することを検討している"
                    v-model="$v.form.contacnt_type.$model"
                  />
                  RURAを自社に導入することを検討している
                </label>
                <label class="check_box">
                  <input
                    required
                    type="radio"
                    name="お問い合わせの種類"
                    value="RURAを代理店として扱いたい／自社サービスと組み合わせて扱いたい"
                    v-model="$v.form.contacnt_type.$model"
                  />
                  RURAを代理店として扱いたい／自社サービスと組み合わせて扱いたい
                </label>
              </div>
              <div class="text_danger" v-if="$v.form.contacnt_type.$error">
                お問い合わせの種類を選択してください
              </div>
            </div>

            <div class="contact_form_box">
              <span class="form_title"
                >お問い合わせ内容詳細<span class="form_title_small required"
                  >必須</span
                ></span
              >
              <textarea
                required
                name="お問い合わせ内容詳細"
                v-model="$v.form.body.$model"
              ></textarea>
              <div class="text_danger" v-if="$v.form.body.$error">
                お問い合わせ内容を入力しください
              </div>
            </div>

            <!-- ↓自由に要素を追加・編集することができます -->
            <div class="contact_form_box">
              <span class="form_title"
                >お名前<span class="form_title_small required">必須</span></span
              >
              <input　required
                name="お名前"
                type="text"
                v-model="$v.form.name.$model"
              />
              <div class="text_danger" v-if="$v.form.name.$error">
                お名前を入力しください
              </div>
            </div>

            <div class="contact_form_box">
              <span class="form_title"
                >メールアドレス<span class="form_title_small required"
                  >必須</span
                ></span
              >
              <input
                required
                name="メールアドレス"
                type="text"
                data-formrun-type="email"
                v-model="$v.form.mail.$model"
              />
              <div class="text_danger" v-if="$v.form.mail.$error">
                メールアドレスを入力しください
              </div>
            </div>
            <div class="contact_form_box">
              <span class="form_title"
                >電話番号<span class="form_title_small required"
                  >必須</span
                ></span
              >
              <input
                required
                type="text"
                name="電話番号"
                data-formrun-type="tel"
                v-model="$v.form.tel.$model"
              />
              <div class="text_danger" v-if="$v.form.tel.$error">
                電話番号を入力しください
              </div>
            </div>

            <div class="contact_form_box">
              <span class="form_title"
                >会社名<span class="form_title_small required">必須</span></span
              >
              <input
                required
                name="会社名"
                type="text"
                v-model="$v.form.company.$model"
              />
              <div class="text_danger" v-if="$v.form.company.$error">
                会社名を入力しください
              </div>
            </div>
            <div class="contact_form_box">
              <span class="form_title"
                >役職<span class="form_title_small">任意</span></span
              >
              <input name="役職" type="text" v-model="$v.form.officer.$model" />
            </div>
            <div class="contact_form_box">
              <span class="form_title"
                >部署<span class="form_title_small">任意</span></span
              >
              <input
                name="部署"
                type="text"
                v-model="$v.form.department.$model"
              />
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
              <button class="button" type="submit">送信する</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import { required, maxLength, minLength } from "vuelidate/lib/validators";

export default {
  layout: "lower",
  data() {
    return {
      form: {
        contacnt_type: "", //お問い合わせの種類
        body: "", //お問い合わせ内容詳細
        name: "", //お名前
        mail: "", //メールアドレス
        tel: "", //電話番号
        company: "", //会社名
        officer: null, //役職
        department: null, //部署
        which: null, // RURAをどちらでお知りになりましたか？
      },
    };
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        console.log("バリデーションエラー");
      } else {
        this.$emit("submit", this.$v);
      }
    },
  },
  validations: {
    form: {
      contacnt_type: { required }, //お問い合わせの種類
      body: { required }, //お問い合わせ内容詳細
      name: { required }, //お名前
      mail: { required }, //メールアドレス
      tel: { required }, //電話番号
      company: { required }, //会社名
      officer: {}, //役職
      department: {}, //部署
      which: {}, // RURAをどちらでお知りになりましたか？
    },
  },
};
</script>
