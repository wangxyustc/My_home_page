<template>
  <div id="topintro">
    <div id="top" ref="topintro">
      <h1 id="heading" style="z-index: 1; transform: translate3d(0px, 0px, 1px);">
        你好，
        <br />我是阡陌，
        <br />一个普通人。
      </h1>
      <h2 id="subheading" style="z-index: 1;">爱好游戏、美感、风景和编程。</h2>
      <div id="slice-left" class="slice left"></div>
      <div id="slice-right" class="slice right"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "top",
  data() {
    return {
      long: ""
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      var long = this.$refs.topintro.offsetHeight;
      this.$refs.topintro.style.opacity = 1 - (scrollTop * 1.2) / long;
    }
  }
};
</script>

<style>
.slice {
  width: 100%;
  height: 100%;
  background-image: url(../assets/back.jpg);
  background-size: cover;
  box-shadow: 0 20px 90px 0 rgba(0, 0, 0, 0.08), 0 9px 30px 0 rgba(0, 0, 0, 0.1);
}
.slice.right {
  grid-area: rs;
  background-position: right;
}
.slice.left {
  grid-area: ls;
  background-position: left;
}
#top h2 {
  grid-area: h2;
  line-height: calc(var(--size-h2) + 10px);
  font-size: var(--size-h2);
  opacity: 0.8;
}
#top h1 {
  grid-area: h1;
  line-height: calc(var(--size-h1) * 1.382);
  font-size: var(--size-h1);
  align-self: center;
  transform: translateZ(0);
}
#top {
  display: grid;
  grid-template-columns: minmax(20%, 330px) 75px minmax(max-content, 1fr) 75px minmax(
      20%,
      300px
    );
  grid-template-rows: 176px 55px minmax(max-content, 1fr) 35px 175px;
  grid-template-areas:
    ". . . . rs"
    "ls . . . rs"
    "ls . h1 . rs"
    "ls . h2 . rs"
    "ls . h2 . .";
  transform: translateY(-88px);
}
@media (min-width: 600px) {
  #topintro {
    display: flex;
    width: 100vw;
    justify-content: center;
    align-items: center;
  }
}
#topintro {
  --view-minmax: calc((100vw - 500px) / (1920 - 500));
  --size-h1: calc(42px + (88 - 42) * var(--view-minmax));
  --size-h2: calc(20px + (28 - 20) * var(--view-minmax));
  min-height: 110vh;
  font-family: "plantc", "Source Han Serif", serif;
}
@media (max-width: 900px) {
  #top {
    grid-template-columns: 50px 110px 1fr 150px;
    grid-template-rows: 190px 16px 100px 180px 120px;
    grid-template-areas:
      ". h1 h1 h1"
      ". . . rs"
      ". h2 h2 rs"
      "ls ls . rs"
      "ls ls . .";
    transform: translateY(10vh);
  }
  #topintro h2 {
    grid-column-end: rs;
  }
}
</style>