<template>
    <div class="stars">
        <div class="star" ref="star"  v-for="(item,index) in starsCount" :key="index"></div>
    </div>
</template>
<script>
export default {
    name:"star",
    data(){
        return{
            starsCount: 800,
            distance: 800,
        }
    },
    created(){
        
    },
    mounted(){
        let _this = this;
        // 原生js
        let _starList = document.getElementsByClassName("star") // eslint-disable-line no-unused-vars
        let starArr = Array.prototype.slice.call(_starList) // eslint-disable-line no-unused-vars
        // vue
        let starList = this.$refs.star // eslint-disable-line no-unused-vars
        // 遍历添加样式
        starArr.forEach(item => {
            var s = 0.2 + (Math.random() * 1);
            var thisDistance = _this.distance + (Math.random() * 300);
            item.style.transformOrigin = `0 0 ${thisDistance}px`
            item.style.transform = `translate3d(0,0,-${thisDistance}px) rotateY(${(Math.random() * 360)}deg) rotateX(${(Math.random() * -50)}deg) scale(${s},${s})`
        })
    },
    methods:{

    }
}
</script>
<style lang="less" scoped>
        @keyframes rotate {
            0% {
                transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(0);
            }
            100% {
                transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(-360deg);
            }
        }
        
        .stars {
            transform: perspective(500px);
            transform-style: preserve-3d;
            position: fixed;
            bottom: 0;
            perspective-origin: 50% 100%;
            left: 50%;
            animation: rotate 90s infinite linear;
        }
        
        .star {
            width: 2px;
            height: 2px;
            background: #F7F7B6;
            position: absolute;
            top: 0;
            left: 0;
            backface-visibility: hidden;
        }
</style>