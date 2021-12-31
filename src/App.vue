<!--
 * @Author: 阡陌
 * @Date: 2020-04-19 21:26:16
 * @LastEditors: 阡陌
 * @LastEditTime: 2021-05-02 20:41:18
 * @FilePath: \web\src\App.vue
-->
<template>
  <div id="app" :class="{ classB: _isMobile(), classA: !_isMobile() }">
    <star />
    <top />
    <middle />
    <newimg />
    <ability />
    <bottomer />
  </div>
</template>

<script>
import ability from "./components/ability.vue";
import top from "./components/top.vue";
import star from "./components/star.vue";
import bottomer from "./components/bottomer.vue";
import middle from "./components/middle.vue";
import newimg from "./components/newimg.vue";
export default {
  name: "App",
  components: {
    ability,
    top,
    star,
    bottomer,
    middle,
    newimg,
  },
  methods: {
    _isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    },
  },
};
</script>

<style lang="less">
@import "./common/font/font.css";
.classA {
  font-family: "plantc", "Source Han Serif", serif;
  overflow-x: hidden;
  background: radial-gradient(200% 100% at bottom center, #dcdcdc, #000000);
  background-attachment: fixed;
  color: #fff;
}
.classB {
  font-family: "plantc", "Source Han Serif", serif;
  overflow-x: hidden;
  background: #808080;
  background-attachment: fixed;
  color: #fff;
}
</style>
