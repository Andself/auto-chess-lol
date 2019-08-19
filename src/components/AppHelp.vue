<template>
  <van-popup
    :value="visible"
    :style="popupStyle"
    @input="$emit('update:visible', $event)"
  >
    <div class="app-help">
      <div class="title">关于</div>
      <p class="avatar">
        <img src="https://avatars3.githubusercontent.com/u/12107374?s=460&v=4" alt="Andself.Chen">
      </p>
      <p class="author">
        <a href="https://github.com/Andself">Andself.Chen</a>
        <br>
        <span>🇨🇳</span>
      </p>
      <div class="flex-1"></div>
      <div class="message">
        <i>“Purii 大吉大利，今晚吃鸡🎉”</i>
      </div>
      <div class="footer">
        <span class="flex-1 version">v0.2.0</span>
        <span class="flex-1 address"><a href="https://github.com/Andself/auto-chess-lol">GitHub</a></span>
      </div>
    </div>
  </van-popup>
</template>

<script>
const popupStyle = {
  width: '220px',
  height: '300px',
  borderRadius: '4px',
  padding: '12px',
  top: '40%'
}

export default {
  name: 'app-help',
  props: ['visible'],
  data () {
    return {
      popupStyle
    }
  }
}
</script>

<style lang="scss">
.app-help {
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  a {
    color: #BA68C8;
  }
  .title {
    font-size: 17px;
    line-height: 20px;
    padding-bottom: 12px;
    border-bottom: 1px solid #f4f4f4;
  }
  .avatar {
    margin: 24px 0;
    img {
      width: 72px;
      height: 72px;
      border-radius: 100%;
      border: 1px solid #90CAF9;
      padding: 1px;
    }
  }
  .message {
    font-size: 10px;
    color: #ccc;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 300;
    margin-bottom: 6px;
  }
  .version {
    font-size: 13px;
    color: #aaa;
  }
  .address {
    font-size: 13px;
  }
  .footer {
    display: flex;
    width: 100%;
    border-top: 1px solid #f4f4f4;
    padding-top: 8px;
  }
}
</style>
