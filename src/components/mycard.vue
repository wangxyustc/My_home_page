<!--
 * @Author: 阡陌
 * @Date: 2021-04-30 15:37:38
 * @LastEditors: 阡陌
 * @LastEditTime: 2021-04-30 16:45:27
 * @FilePath: \个人网站\web\src\components\mycard.vue
-->
<!--  -->
<template>
  <div class="wrap">
    <div class="box-top">
      <div class="image"></div>
    </div>
    <div class="box-bottom">
      <h2>Qian Mo</h2>
      <span>Computer Vision and front end</span>
    </div>
    <div class="box-bottom2">
      <ul>
        <li>Unversity:Uestc</li>
        <li>Major:Cyber Security</li>
        <li>Age:20</li>
        <li>hobby:Code</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
};
</script>
<style scoped>
.wrap {
  position: relative;
  width: 330px;
  height: 260px;
  box-shadow: 0 1.5rem 4rem rgb(0 0 0 / 40%);
  overflow: hidden;
  border-radius: 0 0 30px 30px;
}
/* -------------------------------------------- */
/* 上部分的块 */
/* -------------------------------------------- */
.box-top {
  position: relative;
  width: 330px;
  height: 130px;
  background-color: rgba(255, 255, 255, 0.534);
  display: flex;
  justify-content: center;
  transition: 0.5s;
}
.box-top::after {
  content: "";
  width: 40px;
  height: 40px;
  clip-path: polygon(50% 40%, 0 0, 100% 0);
  background-color: rgb(255, 255, 255, 0.534);
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  bottom: -38px;
  z-index: 999;
}
.image {
  position: absolute;
  top: 20px;
  width: 90px;
  height: 90px;
  background-image: url("../assets/goat.gif");
  background-size: cover;
  border: 5px solid rgb(148, 148, 148);
  transition: 0.5s;
}
/* -------------------------------------------- */
/* 下部分的两个大块 */
/* -------------------------------------------- */
.box-bottom,
.box-bottom2 {
  position: absolute;
  top: 130px;
  width: 330px;
  height: 130px;
  text-align: center;
  transition: 0.5s;
}
.box-bottom h2 {
  display: block;
  margin: 30px 0 10px 0;
  font: 800 28px "Bodoni";
  padding-bottom: 0px;
  color: #000;
  letter-spacing: 0;
}
.box-bottom span {
  font: 400 24px "ge te";
}
.box-bottom h2::after {
  content: "";
  display: block;
  width: 200px;
  height: 2px;
  background-color: #000;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 4px);
}
/* -------------------------------------------- */
/* 下部分的第二个大块 */
/* -------------------------------------------- */
.box-bottom2 {
  top: 300px;
  height: 220px;
}
.box-bottom2 li {
  margin: 25px;
  font: 800 20px "OCR";
  transition: 0.2s;
}
/* -------------------------------------------- */
/* 鼠标移入的效果 */
/* -------------------------------------------- */
.wrap:hover .box-top {
  height: 50px;
}
.wrap:hover .image {
  width: 35px;
  height: 35px;
  border-width: 3px;
  transform: translate(-140px, -15px);
}
.wrap:hover .box-bottom {
  top: 300px;
}
.wrap:hover .box-bottom2 {
  top: 50px;
}
li:hover {
  color: rgb(100, 160, 160);
}
</style>
