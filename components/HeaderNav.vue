<template>
  <div>
    <nav>
      <ul>
        <li><nuxt-link to="/news">導入事例</nuxt-link></li>
        <li><nuxt-link to="/news">サービス</nuxt-link></li>
        <li><nuxt-link to="/news">シーン</nuxt-link></li>
        <li><nuxt-link to="/news">デザイン</nuxt-link></li>
        <li><nuxt-link to="/news">機能</nuxt-link></li>
        <li><nuxt-link to="/news">FAQ</nuxt-link></li>
      </ul>
      <div class="nav_contact">
        <p class="small">無料デモ<br />資料ダウンロード</p>
        <nuxt-link to="/contact" class="button yellow">
          <img src="~/assets/icon/icon_contact.svg" />お問い合わせ
        </nuxt-link>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  components: {},
};
</script>
