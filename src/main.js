/*
 * @Author: 阡陌
 * @Date: 2020-04-19 21:26:16
 * @LastEditors: 阡陌
 * @LastEditTime: 2021-05-02 20:39:22
 * @FilePath: \web\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import echarts from 'echarts'
import VueTypedJs from 'vue-typed-js'
import './common/font/icon/iconfont.css'
import smoothscroll from 'smoothscroll-polyfill';

Vue.use(VueTypedJs)
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
smoothscroll.polyfill();

new Vue({
  render: h => h(App),
}).$mount('#app')
