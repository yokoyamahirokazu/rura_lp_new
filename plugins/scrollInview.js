import Vue from 'vue'

// v-scroll-inviewを定義する
Vue.directive('scroll-inview', {
    bind(el, binding) {
        if (!binding.arg) return

        // Moduleを動的に読み込む(今回はbinding.argにfadeInが渡ってきます。)
        const Mudule = require(`~/assets/js/anime/${binding.arg}`).default
        // bindingにインスタンスをぶら下げておく
        binding.customAnime = new Mudule(el, binding.value)
    },
    inserted: function (el, binding) {
        const f = function () {
            const top = el.getBoundingClientRect().top
            const wh = window.innerHeight

            // ウインドウの3/4スクロールされた時点でアニメーションを実行。
            if (wh / 4 * 3.8 > top) {
                // アニメーションを実行
                if (binding?.customAnime) binding.customAnime.anime()
                // スクロールイベント解除
                window.removeEventListener('scroll', f)
            }
        }
        window.addEventListener('scroll', f)
    }
})