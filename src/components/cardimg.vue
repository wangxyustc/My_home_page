<template>
  <div id="chart">
    <section ref="typed">
      <vue-typed-js
        :strings="['点击文字试试', '把两段文字点击一下试试']"
        :loop="true"
        :backSpeed="100"
        :typeSpeed="100"
      >
        <div class="typing"></div>
      </vue-typed-js>
    </section>
    <div
      id="myChart"
      :style="{ width: os.width, height: os.height }"
      @touchstart="touchStart"
      @touchmove="touchMove"
      @touchend="touchEnd"
      ref="mychart"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      option: {
        computer: {
          width: "100vw",
          height: "100vh",
        },
        phone: {
          width: "200vw",
          height: "70vh",
        },
        tablet: {
          width: "100vw",
          height: "75vh",
        },
      },
      os: "",
    };
  },
  mounted() {
    window.addEventListener("scroll", this.opacitytext);
    this.drawLine();
    this.resize();
  },
  created() {
    this.touch = {};
    this.left = 0;
    var os = (function () {
      var ua = navigator.userAgent,
        isWindowsPhone = /(?:Windows Phone)/.test(ua),
        isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
        isAndroid = /(?:Android)/.test(ua),
        isFireFox = /(?:Firefox)/.test(ua),
        isTablet =
          /(?:iPad|PlayBook)/.test(ua) ||
          (isAndroid && !/(?:Mobile)/.test(ua)) ||
          (isFireFox && /(?:Tablet)/.test(ua)),
        isPhone = /(?:iPhone)/.test(ua) && !isTablet,
        isPc = !isPhone && !isAndroid && !isSymbian;
      return {
        isTablet: isTablet,
        isPhone: isPhone,
        isAndroid: isAndroid,
        isPc: isPc,
      };
    })();
    if (os.isAndroid || os.isPhone) {
      this.os = this.option.phone;
    } else if (os.isTablet) {
      this.os = this.option.tablet;
    } else if (os.isPc) {
      this.os = this.option.computer;
    }
  },
  methods: {
    touchStart(e) {
      if (this.os.width != "100vw") {
        const touch = e.touches[0];
        this.touch.startX = touch.pageX;
      }
    },
    touchMove(e) {
      if (this.os.width != "100vw") {
        const touch = e.touches[0];
        const deltaX = touch.pageX - this.touch.startX;
        if (this.left + deltaX > 0) {
          this.$refs.mychart.style.left = 0 + "px";
          return false;
        } else if (this.left + deltaX < -this.autoTableWidth()) {
          this.$refs.mychart.style.left = -this.autoTableWidth() + "px";
        } else {
          this.$refs.mychart.style.left = this.left + deltaX + "px";
        }
      }
    },
    touchEnd() {
      if (this.os.width != "100vw") {
        this.left = this.$refs.mychart.offsetLeft;
        console.log(this.left);
      }
    },
    autoTableHeight() {
      var winHeight = 0;
      if (window.innerHeight) {
        winHeight = window.innerHeight;
      }
      if (document.documentElement && document.documentElement.clientHeight) {
        winHeight = document.documentElement.clientHeight;
      }
      return winHeight;
    },
    autoTableWidth() {
      var winWidth = 0;
      if (window.innerWidth) {
        winWidth = window.innerWidth;
      }
      if (document.documentElement && document.documentElement.clientWidth) {
        winWidth = document.documentElement.clientWidth;
      }
      return winWidth;
    },
    opacitytext() {
      var texttop = this.$refs.typed.getBoundingClientRect().top;
      var height = this.autoTableHeight();
      this.$refs.typed.style.opacity = 1 - (2 * texttop) / height;
    },
    resize() {
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      window.onresize = function () {
        myChart.resize();
      };
    },
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      let firstcomplete = 0;
      let thirdcomplete = 0;
      let database = [
        {
          name: "患得患失的梦",
          category: 0,
          x: myChart.getWidth() / 6,
          y: myChart.getHeight() / 2,
          symbolSize: "100",
          itemStyle: {
            color: "rgba(128, 128, 128, 0)",
          },
          label: {
            normal: {
              show: true,
              position: "inside",
              textStyle: {
                fontSize: 12,
              },
              color: "#ffffff",
              fontFamily: "Source Han Serif",
            },
          },
          id: "0",
        },
        {
          name: "浅尝辄止的书",
          category: 0,
          x: myChart.getWidth() / 2,
          y: (myChart.getHeight() * 2) / 3,
          symbolSize: "100",
          itemStyle: {
            color: "rgba(128, 128, 128, 0)",
          },
          label: {
            normal: {
              show: true,
              position: "inside",
              textStyle: {
                fontSize: 12,
              },
              color: "#ffffff",
              fontFamily: "Source Han Serif",
            },
          },
          id: "1",
        },
        {
          name: "灯火阑珊的街",
          category: 0,
          x: (myChart.getWidth() * 5) / 6,
          y: myChart.getHeight() / 2,
          symbolSize: "100",
          itemStyle: {
            color: "rgba(128, 128, 128, 0)",
          },
          label: {
            normal: {
              show: true,
              position: "inside",
              textStyle: {
                fontSize: 12,
              },
              color: "#ffffff",
              fontFamily: "Source Han Serif",
            },
          },
          id: "2",
        },
      ];
      let linksbase = [];
      let links = [
        {
          source: "0",
          target: "1",
          label: {
            show: true,
            formatter: ["{x|回首往昔}"].join("\n"),
            rich: {
              x: {
                fontSize: 22,
                fontFamily: "Source Han Serif",
                color: "#FFFFFF",
              },
            },
          },
          lineStyle: {
            opacity: 1,
            shadowBlur: 20,
            shadowColor: "rgba(255,255,255, 1)",
            width: 3,
          },
        },
        {
          source: "1",
          target: "2",
          label: {
            show: true,
            formatter: ["{x|来日方长}"].join("\n"),
            rich: {
              x: {
                fontSize: 22,
                fontFamily: "Source Han Serif",
                color: "#FFFFFF",
              },
            },
          },
          lineStyle: {
            opacity: 1,
            shadowBlur: 20,
            shadowColor: "rgba(255,255,255, 1)",
            width: 3,
          },
        },
      ];
      let dataadd = [
        [
          {
            name: "自学",
            category: 0,
            x: myChart.getWidth() / 5,
            y: (myChart.getHeight() * 3) / 7,
            fixed: true,
          },
          {
            name: "培训",
            category: 0,
            x: myChart.getWidth() / 8,
            y: (myChart.getHeight() * 5) / 8,
          },
          {
            name: "有机",
            category: 0,
            id: "A",
            x: (myChart.getWidth() * 7) / 60,
            y: (myChart.getHeight() * 18) / 66,
          },
          {
            name: "无机",
            category: 0,
            id: "B",
            x: (myChart.getWidth() * 20) / 60,
            y: (myChart.getHeight() * 22) / 60,
          },
          {
            name: "分析",
            category: 0,
            id: "C",
            x: (myChart.getWidth() * 13) / 60,
            y: (myChart.getHeight() * 19) / 65,
          },
          {
            name: "物化",
            category: 0,
            id: "D",
            x: (myChart.getWidth() * 17) / 60,
            y: (myChart.getHeight() * 3) / 11,
          },
          {
            name: "上海",
            category: 0,
            x: myChart.getWidth() / 13,
            y: (myChart.getHeight() * 5.5) / 8,
          },
          {
            name: "北京",
            category: 0,
            x: myChart.getWidth() / 6,
            y: (myChart.getHeight() * 6) / 8,
          },
          {
            name: "河北",
            category: 0,
            x: myChart.getWidth() / 8,
            y: (myChart.getHeight() * 5.7) / 8,
          },
          {
            name: "大本(北大有机化学)",
            category: 0,
            id: "a",
            x: (myChart.getWidth() * 9) / 60,
            y: (myChart.getHeight() * 7) / 66,
          },
          {
            name: "裴巨本(北大有机化学)",
            category: 0,
            id: "b",
            x: (myChart.getWidth() * 7) / 60,
            y: (myChart.getHeight() * 9) / 66,
          },
          {
            name: "蓝皮北师大无机化学",
            category: 0,
            id: "c",
            x: (myChart.getWidth() * 20) / 60,
            y: (myChart.getHeight() * 13) / 60,
          },
          {
            name: "黑白砖(武大无机化学)",
            category: 0,
            id: "d",
            x: (myChart.getWidth() * 22) / 60,
            y: (myChart.getHeight() * 14) / 60,
          },
          {
            name: "祖德(中科大无机化学)",
            category: 0,
            id: "e",
            x: (myChart.getWidth() * 24) / 60,
            y: (myChart.getHeight() * 16) / 60,
          },
          {
            name: "格林伍德",
            category: 0,
            id: "f",
            x: (myChart.getWidth() * 25) / 60,
            y: (myChart.getHeight() * 18) / 60,
          },
          {
            name: "普通化学原理",
            category: 0,
            id: "g",
            x: (myChart.getWidth() * 25.5) / 60,
            y: (myChart.getHeight() * 20) / 60,
          },
          {
            name: "中级无机化学",
            category: 0,
            id: "h",
            x: (myChart.getWidth() * 26) / 60,
            y: (myChart.getHeight() * 22) / 60,
          },
          {
            name: "结构化学基础",
            category: 0,
            id: "i",
            x: (myChart.getWidth() * 25.5) / 60,
            y: (myChart.getHeight() * 24) / 60,
          },
          {
            name: "高等无机结构化学(高无结)",
            category: 0,
            id: "j",
            x: (myChart.getWidth() * 25) / 60,
            y: (myChart.getHeight() * 26) / 60,
          },
          {
            name: "有机化学机理中的书写艺术",
            category: 0,
            id: "k",
            x: (myChart.getWidth() * 5) / 60,
            y: (myChart.getHeight() * 11) / 66,
          },
          {
            name: "人名(有机人名反应-原理及应用)",
            category: 0,
            id: "l",
            x: (myChart.getWidth() * 3) / 60,
            y: (myChart.getHeight() * 13) / 66,
          },
          {
            name: "有机化学中的软硬酸碱理论",
            category: 0,
            id: "m",
            x: (myChart.getWidth() * 1) / 60,
            y: (myChart.getHeight() * 15) / 66,
          },
          {
            name: "化学中的多面体",
            category: 0,
            id: "n",
            x: (myChart.getWidth() * 23) / 60,
            y: (myChart.getHeight() * 28) / 60,
          },
          {
            name: "东京大学有机反应机理",
            category: 0,
            id: "o",
            x: (myChart.getWidth() * 1) / 60,
            y: (myChart.getHeight() * 20) / 66,
          },
          {
            name: "前线轨道理论与有机化学反应",
            category: 0,
            id: "p",
            x: (myChart.getWidth() * 3) / 60,
            y: (myChart.getHeight() * 24) / 66,
          },
          {
            name: "有机化学反应中的试剂与应用",
            category: 0,
            id: "q",
            x: (myChart.getWidth() * 5) / 60,
            y: (myChart.getHeight() * 26) / 66,
          },
          {
            name: "武大分析化学",
            category: 0,
            id: "r",
            x: (myChart.getWidth() * 13) / 60,
            y: (myChart.getHeight() * 15) / 65,
          },
          {
            name: "南大物理化学",
            category: 0,
            id: "s",
            x: (myChart.getWidth() * 16) / 60,
            y: (myChart.getHeight() * 2) / 11,
          },
        ],
        [],
        [
          {
            name: "前端",
            category: 0,
            x: (myChart.getWidth() * 4.6) / 6,
            y: myChart.getHeight() / 2.7,
          },
          {
            name: "后端",
            category: 0,
            x: (myChart.getWidth() * 4.7) / 6,
            y: (myChart.getHeight() * 2) / 3,
          },
          {
            name: "操作系统",
            category: 0,
            x: (myChart.getWidth() * 5.2) / 6,
            y: myChart.getHeight() / 2.8,
          },
          {
            name: "树莓派",
            category: 0,
            x: (myChart.getWidth() * 5.3) / 6,
            y: (myChart.getHeight() * 2) / 3,
          },
          {
            name: "electron",
            category: 0,
            x: (myChart.getWidth() * 4) / 6,
            y: myChart.getHeight() / 2.4,
            id: "aa",
          },
          {
            name: "javascript",
            category: 0,
            x: (myChart.getWidth() * 4.4) / 6,
            y: myChart.getHeight() / 4.7,
            id: "bb",
          },
          {
            name: "Vue",
            category: 0,
            x: (myChart.getWidth() * 4.2) / 6,
            y: myChart.getHeight() / 4.2,
            id: "cc",
          },
          {
            name: "uni-app",
            category: 0,
            x: (myChart.getWidth() * 4.05) / 6,
            y: myChart.getHeight() / 2,
            id: "dd",
          },
          {
            name: "flutter",
            category: 0,
            x: (myChart.getWidth() * 4) / 6,
            y: myChart.getHeight() / 3.4,
            id: "ee",
          },
          {
            name: "node.js",
            category: 0,
            x: (myChart.getWidth() * 4.2) / 6,
            y: (myChart.getHeight() * 2.2) / 3,
            id: "ff",
          },
          {
            name: "express.js",
            category: 0,
            x: (myChart.getWidth() * 4) / 6,
            y: (myChart.getHeight() * 2.4) / 3,
            id: "gg",
          },
          {
            name: "Linux",
            category: 0,
            x: (myChart.getWidth() * 5.6) / 6,
            y: myChart.getHeight() / 3.4,
            id: "hh",
          },
          {
            name: "Centos",
            category: 0,
            x: (myChart.getWidth() * 5.7) / 6,
            y: myChart.getHeight() / 5,
            id: "ii",
          },
          {
            name: "Ubuntu",
            category: 0,
            x: (myChart.getWidth() * 5.7) / 6,
            y: myChart.getHeight() / 2.8,
            id: "jj",
          },
        ],
      ];
      let linksadd = [
        [
          {
            source: "自学",
            target: "0",
          },
          {
            source: "培训",
            target: "0",
          },
          {
            source: "培训",
            target: "上海",
          },
          {
            source: "培训",
            target: "北京",
          },
          {
            source: "培训",
            target: "河北",
          },
          {
            source: "自学",
            target: "A",
          },
          {
            source: "自学",
            target: "B",
          },
          {
            source: "自学",
            target: "C",
          },
          {
            source: "自学",
            target: "D",
          },
          {
            source: "A",
            target: "a",
          },
          {
            source: "A",
            target: "b",
          },
          {
            source: "A",
            target: "k",
          },
          {
            source: "A",
            target: "l",
          },
          {
            source: "A",
            target: "m",
          },
          {
            source: "A",
            target: "o",
          },
          {
            source: "A",
            target: "p",
          },
          {
            source: "A",
            target: "q",
          },
          {
            source: "B",
            target: "c",
          },
          {
            source: "B",
            target: "d",
          },
          {
            source: "B",
            target: "e",
          },
          {
            source: "B",
            target: "f",
          },
          {
            source: "B",
            target: "g",
          },
          {
            source: "B",
            target: "h",
          },
          {
            source: "B",
            target: "i",
          },
          {
            source: "B",
            target: "j",
          },
          {
            source: "B",
            target: "n",
          },
          {
            source: "C",
            target: "r",
          },
          {
            source: "D",
            target: "s",
          },
        ],
        [],
        [
          {
            source: "树莓派",
            target: "2",
          },
          {
            source: "操作系统",
            target: "2",
          },
          {
            source: "前端",
            target: "2",
          },
          {
            source: "后端",
            target: "2",
          },
          {
            source: "前端",
            target: "aa",
          },
          {
            source: "前端",
            target: "bb",
          },
          {
            source: "前端",
            target: "cc",
          },
          {
            source: "前端",
            target: "dd",
          },
          {
            source: "前端",
            target: "ee",
          },
          {
            source: "后端",
            target: "ff",
          },
          {
            source: "ff",
            target: "gg",
          },
          {
            source: "操作系统",
            target: "hh",
          },
          {
            source: "hh",
            target: "ii",
          },
          {
            source: "hh",
            target: "jj",
          },
        ],
      ];
      myChart.setOption({
        tooltip: {
          show: false,
        },
        series: [
          {
            type: "graph",
            layout: "none",
            symbolSize: 10,
            roam: false,
            center: [myChart.getWidth() / 2, myChart.getHeight() / 2],
            categories: [
              {
                itemStyle: {
                  color: "#000000",
                },
              },
            ],
            label: {
              normal: {
                show: true,
                position: "right",
                textStyle: {
                  fontSize: 12,
                },
                color: "#ffffff",
                fontFamily: "Source Han Serif",
              },
            },
            data: database,
            links: linksbase,
            lineStyle: {
              color: "#d3d3d3",
              opacity: 0.9,
              width: 1,
              curveness: 0,
            },
          },
        ],
      });
      myChart.on("mouseover", function (params) {
        if (params.name == "患得患失的梦" && firstcomplete == 0) {
          if (thirdcomplete == 1) {
            linksbase.push(...links);
          }
          database.push(...dataadd[0]);
          linksbase.push(...linksadd[0]);
          firstcomplete = 1;
          myChart.setOption({
            tooltip: {
              show: false,
            },
            animationDurationUpdate: 1500,
            series: [
              {
                type: "graph",
                layout: "none",
                symbolSize: 10,
                roam: false,
                center: [myChart.getWidth() / 2, myChart.getHeight() / 2],
                categories: [
                  {
                    itemStyle: {
                      color: "#000000",
                    },
                  },
                ],
                label: {
                  normal: {
                    show: true,
                    position: "right",
                    textStyle: {
                      fontSize: 12,
                    },
                    color: "#ffffff",
                    fontFamily: "Source Han Serif",
                  },
                },
                force: {
                  edgeLength: 20,
                  repulsion: 400,
                },
                data: database,
                links: linksbase,
                lineStyle: {
                  color: "#d3d3d3",
                  opacity: 0.9,
                  width: 1,
                  curveness: 0,
                },
              },
            ],
          });
        }
        if (params.name == "灯火阑珊的街" && thirdcomplete == 0) {
          if (firstcomplete == 1) {
            linksbase.push(...links);
          }
          database.push(...dataadd[2]);
          linksbase.push(...linksadd[2]);
          thirdcomplete = 1;
          myChart.setOption({
            tooltip: {
              show: false,
            },
            animationDurationUpdate: 1500,
            series: [
              {
                type: "graph",
                layout: "none",
                center: [myChart.getWidth() / 2, myChart.getHeight() / 2],
                symbolSize: 10,
                roam: false,
                categories: [
                  {
                    itemStyle: {
                      color: "#000000",
                    },
                  },
                ],
                label: {
                  normal: {
                    show: true,
                    position: "right",
                    textStyle: {
                      fontSize: 12,
                    },
                    color: "#ffffff",
                    fontFamily: "Source Han Serif",
                  },
                },
                force: {
                  edgeLength: 20,
                  repulsion: 400,
                },
                data: database,
                links: linksbase,
                lineStyle: {
                  color: "#d3d3d3",
                  opacity: 0.9,
                  width: 1,
                  curveness: 0,
                },
              },
            ],
          });
        }
      });
    },
  },
};
</script>

<style>
.typed-element {
  font-size: 26px;
  height: 26px;
  width: calc(100vw - (100vw / 6 - 132px));
  margin: 0 auto;
  position: relative;
}
#myChart {
  margin: 0 auto;
}
</style>