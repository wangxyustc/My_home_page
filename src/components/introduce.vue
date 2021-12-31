<template>
  <div class="alertcontain">
    <div class="about-me">
      <div class="about-me__side about-me__side--front">
        <div class="about-me__cont">
          <span class="blue">alert</span>
          <span>
            (
            <span class="green">'Hello!'</span>)
          </span>
        </div>
      </div>
      <div class="about-me__side about-me__side--back">
        <!-- Back Content -->
        <div class="about-me__cta">
          <p>
            <span class="purple">const</span> aboutMe
            <span class="cyan">=</span> {
            <br />
            <span class="space red">name</span>
            <span class="cyan">:</span>
            <span class="green">'Qian Mo'</span>,
            <br />
            <span class="space red">university</span>
            <span class="cyan">:</span>
            <span class="green">'Uestc'</span>
            <br />};
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {}
};
</script>

<style >
.about-me__side--front {
  z-index: 1;
}
.about-me__side {
  height: 15rem;
  -webkit-transition: all 0.8s ease;
  transition: all 800ms ease 0ms;
  position: absolute;
  top: 40;
  left: 0;
  margin: auto;
  width: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 3px;
  overflow: hidden;
  -webkit-box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.4);
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.4);
}
.about-me__side--back {
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
  z-index: 0;
}
.about-me {
  width: 100%;
  position: relative;
  height: 15rem;
  -webkit-perspective: 150rem;
  perspective: 150rem;
  cursor: auto;
  -webkit-box-flex: initial;
  -ms-flex: initial;
  flex: initial;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  margin: 0 auto;
}
.about-me__cont {
  height: 15rem;
  color: #fff;
  font-family: Consolas, Lucida Console, monospace;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.blue {
  color: #29b6f6;
}
.green {
  color: #9ccc65;
}
.about-me__cta {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 90%;
  color: #fff;
  margin: 0;
  font-family: Consolas, Lucida Console, monospace;
}
.purple {
  color: #ba68c8;
}
.cyan {
  color: #4dd0e1;
}
.space {
  margin-left: 2rem;
}
.red {
  color: #ef5350;
}
.about-me:hover .about-me__side--front {
  -webkit-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
  z-index: 0;
}
.about-me:hover .about-me__side--back {
  -webkit-transform: rotateY(0deg);
  transform: rotateY(0deg);
  z-index: 1;
}
@media screen and (max-width: 700px) {
  .about-me {
    width: 100%;
  }
}
.alertcontain {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
