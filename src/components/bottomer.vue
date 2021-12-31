<template>
  <div class="footercontain">
    <div class="bottomer">
      <h2 id="bottomh2">
        <span>阡陌的</span>
        <span style="color:white">杂碎生活</span>
      </h2>
      <div class="bottomercontain">
        <div id="social-media" class="item">
          <h2 style="color:white">社交网络</h2>
          <div class="item-content">
            <a
              class="tag"
              target="_blank"
              rel="external"
              href="http://wpa.qq.com/msgrd?v=3&amp;uin=2874978737&amp;site=qq&amp;menu=yes"
              v-if="!_isMobile()"
            >QQ 坠欢莫拾</a>
            <a
              class="tag"
              target="_blank"
              rel="external"
              href="https://github.com/QianMo-wangxiaoyu"
            >Github QianMo</a>

            <a
              class="tag"
              target="_blank"
              rel="external"
              href="mailto:2874978737@qq.com"
            >Email 2874978737@qq.com</a>

            <a
              class="tag"
              target="_blank"
              rel="external"
              href="https://www.zhihu.com/people/d879c0a54e55c5049f6c8b3cf80a3391"
            >知乎 百浪未息</a>
          </div>
        </div>
        <div id="talk" class="item">
          <h2 style="color:white">关于我自己</h2>
          <div class="item-content">
            <mycard />
          </div>
        </div>
        <div id="game" class="item">
          <h2 style="color:white">游戏爱好</h2>
          <div class="item-content">
            <div>
              <img src="../assets/game.jpg" />
              <p style="margin-top:20px">哈兰市永不消逝的光</p>
            </div>
          </div>
        </div>
      </div>
      <h2 id="bottomh2">
        <span>有什么话</span>
        <span style="color:white">想对阡陌说</span>
      </h2>
      <div class="blog">
        <h3 class="blogintroduce" v-show="!_isMobile()">有什么想对我说的可以移步到我的博客留言板</h3>
        <h5 class="blogintroduce" v-show="_isMobile()">有什么想对我说的可以移步到我的博客留言板</h5>
        <div class="webclick">
          <a target="_blank" rel="external" href="https://www.weiaini.xyz">
            <span>阡陌的小窝</span>
            <img class="clickimg" src="../assets/clickweb.png" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import mycard from "./mycard.vue"
export default {
  components: {
    mycard
  },
  name: "bottomer",
  methods: {
    _isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    }
  }
};
</script>

<style>
#game img {
  width: 200px;
}
#game .item-content div:first-child {
  margin-bottom: 2em;
}
#bottomh2:after {
  content: "";
  display: block;
  width: 10%;
  height: 5px;
  background-color: hsla(0, 0%, 100%, 0.5);
  margin-top: 30px;
}
@media (min-width: 1200px) {
  .bottomercontain .item + .item {
    border-left: 1px solid #ddd;
  }
}
#social-media .tag {
  display: block;
  padding: 1em 0;
  transition: 0.2s ease-out;
}
#social-media .tag + .tag {
  border-top: 1px solid #ddd;
}
#social-media .tag:hover {
  padding-left: 1em;
  box-shadow: 0 16px 60px 0 rgba(0, 0, 0, 0.08), 0 6px 12px 0 rgba(0, 0, 0, 0.1);
}
#social-media .tag + .tag:hover {
  border-top: 1px solid #fff;
}
.bottomercontain .item {
  flex-basis: 320px;
  padding: 0 1.75em;
  margin-top: 3.75em;
  box-sizing: border-box;
}
.bottomercontain {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 6vh auto;
}
.footercontain {
  width: 100%;
  padding: 80px 0;
  margin: 10vh auto;
}
.bottomer {
  position: relative;
  width: 80vw;
  margin: 0 auto;
  height: 100%;
  padding: 20px 0;
}
.bottomer h2 {
  padding-bottom: 30px;
  font-size: 26px;
  letter-spacing: 0.2em;
  color: hsla(0, 0%, 100%, 0.5);
}
.blog {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.webclick {
  display: flex;
  align-items: center;
}
.webclick a {
  margin-top: 20px;
}
.clickimg {
  position: absolute;
  height: 24px;
  width: 24px;
}
@media (max-width: 700px) {
  .footercontain {
    width: 100%;
    padding: 80px 0;
    margin: 45vh auto 10vh auto;
  }
}
</style>