<template>
  <div id="middlecard" ref="middlecard">
    <section id="fontsplit">
      <div class="text">
        何为我的人生态度
        <img class="middleimg" src="../assets/click.png" />
      </div>
      <div class="inner-text">浪子三唱,不唱悲歌</div>
      <div class="text">
        何为我的人生态度
        <img class="middleimg" src="../assets/click.png" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  mounted(){
    if(this._isMobile())
    {
      this.$refs.middlecard.style.height=50+"vh"
    }
    else{
      this.$refs.middlecard.style.height=100+"vh"
    }
  },
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
#middlecard{
  height: 100vh;
  display: flex;
  align-items: center;
}
#fontsplit {
  width: 100%;
  height: 5vw;
  font-family: "plantc", "Source Han Serif", serif;
  text-align: center;
  position: relative;
  transition: 0.5s;
}
#fontsplit .text {
  font-size: 5vw;
  line-height: 5vw;
  height: 5vw;
  text-transform: uppercase;
  position: absolute;
  top: 0;
  text-align: center;
  width: 100%;
}

#fontsplit .text:nth-child(1) {
  clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
}

#fontsplit .text:nth-child(3) {
  clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%);
  transition: 0.5s;
}

#fontsplit .inner-text {
  height: 0px;
  overflow: hidden;
  transform: scale(1, 0);

  position: absolute;
  top: 2.5vw;
  width: 100%;
  font-size: 2.5vw;
  line-height: 3.75vw;
  transition: 0.5s;
  text-align: center;
}

#fontsplit:hover {
  height: 10vw;
}

#fontsplit:hover .inner-text {
  height: 4vw;
  transform: scale(1, 1);
}

#fontsplit:hover .text:nth-child(3) {
  top: 3.75vw;
}
.middleimg{
  width: 5vw;
  height: 5vw;
}
</style>