
export default {
    mounted() {
        this.$adobeFonts(document);
    },
    layout: "lower",

    head() {
        return {
            title: "お問い合わせ｜遠隔接客サービス RURA",
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: "RURAへのお問い合わせページです。",
                },
            ],
        };
    },

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