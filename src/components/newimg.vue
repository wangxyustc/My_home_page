<!--
 * @Author: 阡陌
 * @Date: 2021-04-30 18:45:31
 * @LastEditors: 阡陌
 * @LastEditTime: 2021-05-02 21:06:22
 * @FilePath: \web\src\components\newimg.vue
-->
<!--  -->
<template>
  <div class="new-content" ref="new">
    <div class="corner-button" ref="index" style="left: 0" v-show="!_isMobile()">
      <div class="index" @click="rotate(-1, 1)"></div>
    </div>
    <div class="corner-button" ref="computer" style="right: 0" v-show="!_isMobile()">
      <div class="computer" @click="rotate(0, 1)"></div>
    </div>
    <div class="corner-button" ref="love" style="bottom: 0; left: 0" v-show="!_isMobile()">
      <div class="love" @click="rotate(1, 1)"></div>
    </div>
    <div class="corner-button" ref="me" style="bottom: 0; right: 0" v-show="!_isMobile()">
      <div class="me" @click="rotate(2, 1)"></div>
    </div>
    <div class="newimg">
      <div class="content-main" ref="maincontent">
        <div
          class="index-content"
          style="opacity: 1"
          ref="front"
          @click="rotate(0, 0)"
          id="front"
        >
          <div class="descr-icon" style="background-image: none">
            <svg
              t="1619933412521"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="7648"
              width="75"
              height="75"
            >
              <path
                d="M662.0333 119.359888a79.999925 79.999925 0 0 0-113.279894 0l-45.119958 45.439958a79.999925 79.999925 0 0 0-11.519989 98.559907L57.553866 437.43959a95.99991 95.99991 0 0 0-29.119972 156.159854l407.359618 402.239622a95.99991 95.99991 0 0 0 63.99994 28.159974h2.559997a95.99991 95.99991 0 0 0 19.519982-1.919998 95.99991 95.99991 0 0 0 69.759935-58.559945l170.879839-428.159599a79.999925 79.999925 0 0 0 101.759905-10.23999L909.073068 479.99955a79.999925 79.999925 0 0 0 0-113.279894z m-127.99988 820.159231a31.99997 31.99997 0 0 1-23.359978 19.519982h-7.359994a31.99997 31.99997 0 0 1-21.759979-9.279991L73.553851 547.839486a31.99997 31.99997 0 0 1 9.919991-51.839951L282.513655 415.99961c134.079874 44.479958 268.159749 1.599999 402.239623 144.639864zM864.27311 434.559593L818.833153 479.99955a15.999985 15.999985 0 0 1-22.719979 0l-56.639947-56.639947-45.759957 114.879892 3.839996-9.599991c-95.99991-95.99991-194.239818-108.159899-282.559735-119.039888-28.479973-3.519997-55.999948-7.039993-82.879922-13.119988L603.793354 287.99973l-54.719948-55.359948a15.999985 15.999985 0 0 1 0-22.719979l45.119957-45.119957a15.999985 15.999985 0 0 1 22.719979 0L864.27311 411.839614a15.999985 15.999985 0 0 1 0 22.719979z"
                fill="#ffffff"
                p-id="7649"
              ></path>
              <path
                d="M528.273425 671.99937a79.999925 79.999925 0 1 0-79.999925-79.999925 79.999925 79.999925 0 0 0 79.999925 79.999925z m0-127.99988a47.999955 47.999955 0 1 1-47.999955 47.999955 47.999955 47.999955 0 0 1 47.999955-47.999955zM944.273035 0A79.999925 79.999925 0 1 0 1024.27296 79.999925 79.999925 79.999925 0 0 0 944.273035 0z m0 127.99988A47.999955 47.999955 0 1 1 992.27299 79.999925 47.999955 47.999955 0 0 1 944.273035 127.99988zM256.27368 543.99949a63.99994 63.99994 0 1 0 63.99994-63.99994 63.99994 63.99994 0 0 0-63.99994 63.99994z m63.99994-31.99997a31.99997 31.99997 0 1 1-31.99997 31.99997 31.99997 31.99997 0 0 1 31.99997-31.99997z"
                fill="#ffffff"
                p-id="7650"
              ></path>
              <path
                d="M416.27353 735.99931m-31.99997 0a31.99997 31.99997 0 1 0 63.99994 0 31.99997 31.99997 0 1 0-63.99994 0Z"
                fill="#ffffff"
                p-id="7651"
              ></path>
              <path
                d="M928.27305 255.99976m-31.99997 0a31.99997 31.99997 0 1 0 63.99994 0 31.99997 31.99997 0 1 0-63.99994 0Z"
                fill="#ffffff"
                p-id="7652"
              ></path>
            </svg>
          </div>
          <div class="box">
            <div class="title">患得患失的梦</div>
            <div class="text">Chemistry competition student</div>
            <div class="text">Provincial first prize</div>
            <div class="text">有机/无机/分析/物化</div>
          </div>
        </div>
        <div
          class="index-content"
          style="opacity: 0"
          ref="right"
          @click="rotate(1, 0)"
          id="right"
        >
          <div class="descr-icon" style="background-image: none">
            <svg
              t="1619937894503"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3622"
              width="75"
              height="75"
            >
              <path
                d="M230.8 152.3h562.4c43.3 0 78.5 35.1 78.5 78.5v562.4c0 43.3-35.1 78.5-78.5 78.5H230.8c-43.3 0-78.5-35.1-78.5-78.5V230.8c0-43.4 35.1-78.5 78.5-78.5z m0 52.3c-14.4 0-26.2 11.7-26.2 26.2v562.4c0 14.4 11.7 26.2 26.2 26.2h562.4c14.4 0 26.2-11.7 26.2-26.2V230.8c0-14.4-11.7-26.2-26.2-26.2H230.8z"
                p-id="3623"
                fill="#ffffff"
              ></path>
              <path
                d="M556.1 355c-6.9-6.4-16.8-8.6-25.8-5.7-9 2.9-15.7 10.4-17.6 19.7l-52.3 235.4c-2.2 9.2 0.7 18.9 7.6 25.3 6.9 6.4 16.8 8.6 25.8 5.7 9-2.9 15.7-10.4 17.6-19.7l52.3-235.4c2.2-9.2-0.7-18.8-7.6-25.3zM768.4 489.8l-78.5-104.6c-8.7-11.6-25.1-13.9-36.6-5.2-11.6 8.7-13.9 25.1-5.2 36.6l66.7 88.9-66.8 88.9c-8.7 11.6-6.3 28 5.2 36.6 11.6 8.7 28 6.3 36.6-5.2l78.5-104.6c7.1-9.3 7.1-22.1 0.1-31.4zM370.7 379.9c-11.6-8.7-28-6.3-36.6 5.2l-78.5 104.6c-7 9.3-7 22.1 0 31.4l78.5 104.6c8.7 11.6 25.1 13.9 36.6 5.2 11.6-8.7 13.9-25.1 5.2-36.6l-66.7-88.9 66.7-88.9c8.7-11.5 6.4-27.9-5.2-36.6z"
                fill="#ffffff"
                p-id="3624"
              ></path>
            </svg>
          </div>
          <div class="box">
            <div class="text">前端切图师/机器学习调参侠</div>
            <div class="text">
              精通编程语言和<ruby>编程技巧<rt>ctrl+c/ctrl+v</rt></ruby>
            </div>
            <div class="text">
              熟练掌握<ruby>pytorch,tensorflow<rt>import torch as tf</rt></ruby
              >等深度学习框架
            </div>
          </div>
        </div>
        <div
          class="index-content"
          style="opacity: 0"
          ref="back"
          @click="rotate(2, 0)"
          id="back"
        >
          <div class="descr-icon" style="background-image: none">
            <svg
              t="1619940090140"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="20092"
              width="75"
              height="75"
            >
              <path
                d="M492.544 663.7568c-6.7584 0-13.7216-2.6624-18.8416-7.7824l-113.0496-113.0496c-5.9392-4.9152-9.6256-12.0832-9.6256-20.2752 0-14.7456 11.6736-26.624 26.4192-26.624h0.6144c6.9632 0 13.9264 2.8672 18.8416 7.7824l114.4832 114.4832a26.58304 26.58304 0 0 1-18.8416 45.4656z"
                fill="#ffffff"
                p-id="20093"
              ></path>
              <path
                d="M312.7296 909.312c-9.4208 0-18.8416-3.072-26.8288-9.0112-13.5168-9.8304-20.2752-27.2384-16.9984-44.032l37.888-221.5936-161.3824-157.696c-11.8784-11.4688-16.384-29.4912-11.264-45.4656 5.12-15.9744 19.2512-27.8528 35.84-30.3104l222.8224-31.9488 100.5568-202.3424c7.3728-14.9504 22.528-24.576 39.3216-24.7808h0.2048c16.7936 0 32.5632 9.6256 39.936 24.7808l99.7376 202.3424 223.232 32.3584c15.9744 1.4336 30.9248 13.1072 36.4544 29.9008 5.12 16.5888 0.8192 33.5872-10.8544 45.056l-121.856 118.5792c-12.0832 11.8784-31.5392 11.6736-43.4176-0.6144a30.72 30.72 0 0 1 0.6144-43.4176l96.4608-93.7984-205.2096-29.696c-10.0352-1.4336-18.6368-7.7824-23.1424-16.7936L533.0944 225.28l-92.3648 185.9584c-4.5056 9.0112-13.1072 15.36-23.1424 16.7936l-204.3904 29.2864 148.0704 144.7936c7.168 6.9632 10.4448 17.2032 8.8064 27.2384l-35.0208 204.8 183.7056-96.6656c9.0112-4.7104 19.6608-4.7104 28.672 0l181.0432 95.0272-69.4272-283.8528c-4.096-16.384 6.144-33.1776 22.528-37.0688 16.5888-4.096 33.1776 6.144 37.0688 22.528l78.4384 320.3072c3.2768 13.312 0.2048 27.648-8.6016 38.5024-8.6016 10.6496-21.7088 17.2032-35.6352 16.384-6.144-0.2048-13.1072-1.6384-19.456-4.9152l-200.0896-105.0624-199.68 105.0624c-6.5536 3.2768-13.7216 4.9152-20.8896 4.9152zM737.28 868.7616c0 0.2048 0 0.2048 0 0z m-407.7568-2.048l-0.2048 0.6144c0.2048-0.2048 0.2048-0.4096 0.2048-0.6144z m-24.576-16.9984c-0.2048 0-0.2048 0.2048-0.4096 0.2048l0.4096-0.2048z m582.0416-387.2768c0.6144 0.2048 1.2288 0.2048 1.8432 0.2048l-1.8432-0.2048zM188.416 432.7424c0 0.2048 0 0.2048 0 0zM548.4544 194.1504z m-30.72 0z"
                fill="#ffffff"
                p-id="20094"
              ></path>
              <path
                d="M676.0448 258.6624c-7.7824 0-15.7696-3.072-21.7088-9.0112a30.5152 30.5152 0 0 1 0-43.4176l82.5344-82.5344c12.0832-12.0832 31.5392-12.0832 43.4176 0s12.0832 31.5392 0 43.4176l-82.5344 82.5344c-5.9392 6.144-13.7216 9.0112-21.7088 9.0112zM120.2176 796.0576c-7.7824 0-15.7696-3.072-21.7088-9.0112a30.5152 30.5152 0 0 1 0-43.4176l121.0368-121.0368c12.0832-12.0832 31.5392-12.0832 43.4176 0s12.0832 31.5392 0 43.4176l-121.0368 121.0368c-5.9392 5.9392-13.9264 9.0112-21.7088 9.0112zM709.2224 356.1472c-7.7824 0-15.7696-3.072-21.7088-9.0112a30.5152 30.5152 0 0 1 0-43.4176l73.728-74.1376a30.5152 30.5152 0 0 1 43.4176 0c12.0832 11.8784 12.0832 31.3344 0 43.4176l-73.728 74.1376c-5.9392 6.144-13.7216 9.0112-21.7088 9.0112z"
                fill="#ffffff"
                p-id="20095"
              ></path>
            </svg>
          </div>
          <div class="box">
            <div class="title">奇怪的爱情观</div>
            <div class="text">大山荒草/海鸥沙滩/暴雨热浪/风与海</div>
            <div class="text">从须臾到不朽，从一叶到知秋</div>
            <div class="text">出卖一九九四年夏末心动</div>
            <div class="text">愿喜欢和合适撞个满怀</div>
          </div>
        </div>
        <div
          class="index-content"
          style="opacity: 0"
          ref="left"
          @click="rotate(3, 0)"
          id="left"
        >
          <div class="descr-icon" style="background-image: none">
            <span class="mdi mdi-star"></span>
          </div>
          <div class="box">
            <div class="title">生人勿进/生人勿近</div>
            <div class="text">像白开水里撒了一点点盐。</div>
            <div class="text">风起微凉，消遣夏日盛阳。</div>
            <div class="text">多是清尘浊水，后会无期。</div>
            <div class="text">冰山终化成海洋。</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      number: 0,
      targetdeg: 0,
      finish: 1,
      top: 0,
      flag: 0,
    };
  },
  methods: {
    _isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    },
    rotate(i, e) {
      if (this.finish == 0) {
        return false;
      }
      if (e == 1) {
        let top = this.$refs.index.getBoundingClientRect().top;
        if (top != 0) {
          this.$refs.new.scrollIntoView({ behavior: "smooth" });
        }
      }
      this.finish = 0;
      let item = ["front", "right", "back", "left"];
      i = i + 1;
      item.forEach((e, index) => {
        if (index == i % 4) {
          document.querySelector("#" + e).style.opacity = 1;
        } else {
          document.querySelector("#" + e).style.opacity = 0;
        }
      });
      let list = [this.number - i, this.number - i + 4, this.number - i - 4];
      let abslist = list.map((x) => Math.abs(x));
      let minelement = list[0];
      let min = Math.min(...abslist);
      for (let index = 0; index < list.length; index++) {
        if (abslist[index] == min) {
          minelement = list[index];
          break;
        }
      }
      this.targetdeg += 90 * minelement;
      this.$refs.maincontent.style.transform =
        "rotateY(" + this.targetdeg + "deg)";
      this.number = i % 4;
      setTimeout(() => {
        this.finish = 1;
      }, 750);
    },
    imgScroll() {
      let top = this.$refs.index.getBoundingClientRect().top;
      if (top >= 0) {
        this.$refs.index.style.opacity =
          top <= this.top
            ? Math.pow(1 - top / this.top, 2) > 0.9
              ? 1
              : Math.pow(1 - top / this.top, 2)
            : 0;
        this.$refs.computer.style.opacity =
          top <= this.top
            ? Math.pow(1 - top / this.top, 2) > 0.9
              ? 1
              : Math.pow(1 - top / this.top, 2)
            : 0;
        this.$refs.love.style.opacity =
          top <= this.top
            ? Math.pow(1 - top / this.top, 2) > 0.9
              ? 1
              : Math.pow(1 - top / this.top, 2)
            : 0;
        this.$refs.me.style.opacity =
          top <= this.top
            ? Math.pow(1 - top / this.top, 2) > 0.9
              ? 1
              : Math.pow(1 - top / this.top, 2)
            : 0;
      } else {
        let abstop = Math.abs(top);
        this.$refs.index.style.opacity = 1 - abstop / 600;
        this.$refs.me.style.opacity = 1 - abstop / 600;
        this.$refs.computer.style.opacity = 1 - abstop / 600;
        this.$refs.love.style.opacity = 1 - abstop / 600;
      }
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.flag = this.$refs.index.getBoundingClientRect().top;
    this.top = this.$refs.me.offsetTop;
    window.addEventListener("scroll", this.imgScroll);
    if (this._isMobile()) {
      let that=this
      let i = 3;
      setInterval(function () {
        i++;
        that.rotate(i%4, 0)
      }, 2000);
    }
  },
};
</script>
<style scoped>
.newimg {
  perspective: 1600px;
  perspective-origin: 50% 50%;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content-main {
  position: relative;
  width: 100vw;
  transform-style: preserve-3d;
  transition: all 0.75s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  justify-content: center;
  align-items: center;
}
.index-content {
  position: absolute;
  transition: all 0.75s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#back {
  transform: translateZ(-250px) rotateY(180deg);
}
#left {
  transform: rotateY(270deg) translateX(-250px);
  transform-origin: center left;
}
#front {
  transform: translateZ(250px);
}
#right {
  transform: rotateY(-270deg) translateX(250px);
  transform-origin: top right;
}
.box {
  background-color: rgba(0, 0, 0, 0.6);
  color: #eee;
  margin-top: -60px;
  display: flex;
  height: 250px;
  width: 500px;
  flex-direction: column;
  justify-content: center;
  z-index: -1;
  text-align: center;
  box-shadow: 1px 1px 70px rgba(0, 0, 0, 0.16);
  padding: 40px 0 40px;
}
.descr-icon {
  background-color: #2f2f2f;
  box-shadow: 1px 1px 35px rgba(0, 0, 0, 0.16);
  height: 120px;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: all 0.75s;
}
.desrc-img {
  height: 75px;
  width: 75px;
}
.box .title {
  font-size: 1.5rem;
  margin-bottom: 12px;
}

.box .text {
  color: #ccc;
  line-height: 2.3;
  font-size: 1rem;
}
.box .text ruby {
  color: #eee;
}
.corner-button {
  z-index: 10;
  filter: drop-shadow(0 0 15px rgba(60, 60, 60, 0.3));
  position: absolute;
  transition: all 0.5s;
}

.corner-button:hover {
  filter: drop-shadow(0 0 25px rgba(0, 0, 0, 0.5));
}
.index {
  height: 100px;
  width: 100px;
  left: 0;
  position: absolute;
  top: 0;
  background-color: rgba(90, 90, 90, 0.7);
  cursor: pointer;
  clip-path: ellipse(100% 100% at 0 0);
  -webkit-clip-path: ellipse(100% 100% at 0 0);
  transition: all 0.5s;
}

.index:before {
  margin: 22%;
  font-family: "iconfont";
  content: "\e60b";
  font-size: 35px;
  color: #ddd;
  display: inline-block;
  text-rendering: auto;
  line-height: inherit;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: all 0.5s;
}

.index:hover {
  background-color: rgba(90, 90, 90, 0.9);
}

.index:active {
  height: 120px;
  width: 120px;
}

.index:active:before {
  transform: scale(1.2);
}

.computer {
  z-index: 10;
  height: 100px;
  width: 100px;
  right: 0;
  position: absolute;
  top: 0;
  background-color: rgba(90, 90, 90, 0.7);
  cursor: pointer;
  clip-path: ellipse(100% 100% at 100% 0);
  -webkit-clip-path: ellipse(100% 100% at 100% 0);
  transition: all 0.5s;
}

.computer:before {
  margin: 20% 45%;
  font-family: "iconfont";
  content: "\e613";
  font-size: 38px;
  color: #ddd;
  display: inline-block;
  text-rendering: auto;
  line-height: inherit;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: all 0.5s;
}

.computer:hover {
  background-color: rgba(90, 90, 90, 0.9);
}

.computer:active {
  height: 120px;
  width: 120px;
}

.computer:active:before {
  transform: scale(1.2);
}

.love {
  z-index: 10;
  height: 100px;
  width: 100px;
  left: 0;
  position: absolute;
  bottom: 0;
  background-color: rgba(90, 90, 90, 0.7);
  cursor: pointer;
  clip-path: ellipse(100% 100% at 0 100%);
  -webkit-clip-path: ellipse(100% 100% at 0 100%);
  transition: all 0.5s;
}

.love:before {
  margin: 40% 20%;
  font-family: "iconfont";
  content: "\e612";
  font-size: 35px;
  color: #ddd;
  display: inline-block;
  text-rendering: auto;
  line-height: inherit;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: all 0.5s;
}

.love:hover {
  background-color: rgba(90, 90, 90, 0.9);
}

.love:active {
  height: 120px;
  width: 120px;
}

.love:active:before {
  transform: scale(1.2);
}

.me {
  z-index: 10;
  height: 100px;
  width: 100px;
  right: 0;
  position: absolute;
  bottom: 0;
  background-color: rgba(90, 90, 90, 0.7);
  cursor: pointer;
  clip-path: ellipse(100% 100% at 100% 100%);
  -webkit-clip-path: ellipse(100% 100% at 100% 100%);
  transition: all 0.5s;
}

.me:before {
  margin: 45%;
  font-size: 35px;
  color: #ddd;
  display: inline-block;
  text-rendering: auto;
  line-height: inherit;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: all 0.5s;
}

.me:hover {
  background-color: rgba(90, 90, 90, 0.9);
}

.me:active {
  height: 120px;
  width: 120px;
}

.me:active:before {
  transform: scale(1.2);
}
.new-content {
  position: relative;
  margin-bottom: 200px;
}
</style>