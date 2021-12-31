<template>
  <div class="ability">
    <h2 id="bottomh2">
      <span>阡陌的</span>
      <span style="color:white">能力汇总</span>
      <div style="font-size:10px">点击下面的进度条有惊喜</div>
    </h2>
    <div class="contain">
      <ul class="skill clear">
        <li v-for="(item,index) in items" :key="index" class="abilityli">
          <p class="abilityp">{{item.name}}</p>
          <div class="progress">
            <div :style="{ width:item.width }"></div>
            <span>{{item.explain}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ability",
  data() {
    return {
      items: [
        {
          name: "HTML5/CSS3",
          width: "75%",
          explain: "构建网站的能力"
        },
        {
          name: "Javascript",
          width: "55%",
          explain: "与用户py的能力"
        },
        {
          name: "Python",
          width: "35%",
          explain: "粘胶水的能力"
        },
        {
          name: "女朋友",
          width: "85%",
          explain: "幸福生活的能力"
        },
        {
          name: "世界",
          width: "25%",
          explain: "开阔视野的能力"
        },
        {
          name: "Linux",
          width: "25%",
          explain: "服务器相关的能力"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style >
.ability h2 {
    padding-bottom: 30px;
    font-size: 26px;
    letter-spacing: 0.2em;
    color: hsla(0, 0%, 100%, 0.5);
}
.table {
  width: 100%;
}
.abilityp {
  display: inline-block;
  width: 26%;
  margin-right: 3%;
  font-size: 12px;
}
.progress {
  display: inline-block;
  width: 70%;
  height: 3px;
  background-color: hsla(0, 0%, 100%, 0.2);
  vertical-align: middle;
}
.progress div {
  background-color: #fff;
  height: 3px;
  position: relative;
}
.progress div:after {
  content: "";
  display: inline-block;
  position: absolute;
  right: -4px;
  top: -8px;
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 3px solid #fff;
}
.progress span {
  font-size: 12px;
  color: hsla(0, 0%, 100%, 0.4);
  opacity: 0;
  position: relative;
  top: -5px;
  letter-spacing: 0.5em;
  transition: all 0.3s;
}
.abilityli {
  list-style: none;
  padding: 10px 0;
  width: 45%;
  margin-right: 5%;
  float: left;
}
.top {
  display: flex;
}
li:hover .progress span {
  opacity: 1;
  top: 0;
}
li .progress div {
  animation: progressin 7s;
  -webkit-animation: progressin 7s;
  -ms-animation: progressin 7s;
  -moz-animation: progressin 7s;
}
@keyframes progressin {
  from {
    width: 0;
  }
}

@-webkit-keyframes progressin {
  from {
    width: 0;
  }
}
@-ms-keyframes progressin {
  from {
    width: 0;
  }
}
@-moz-keyframes progressin {
  from {
    width: 0;
  }
}
.ability {
  position: relative;
  width: 80vw;
  margin: 0 auto;
  padding: 20px 0;
  height: 100%;
  z-index: 99;
}
.contain {
  padding: 0;
  margin: 6vh auto;
  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
  z-index: 99;
}
@media screen and (max-width: 700px) {
  .abilityli {
    width: 100%;
  }
  .skill {
    float: none;
    width: auto;
  }
  .abilityp {
    display: inline-block;
    width: 26%;
    margin-right: 5%;
    font-size: 12px;
  }
}
</style>
