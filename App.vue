
<template>
<div id="app">
    <!-- 引入头部 -->
    <hero-header></hero-header>
  <div class="container-fluid">
      <!-- 引入左边部分 -->
      <hero-sidebor></hero-sidebor>
      <!-- 引入中间部分 -->
      <router-view></router-view>
  </div>
</div>
</template>

<script>
//要点击显示不同的页面    需要设置路由规则   在侧边栏中设置router-link   需要引入vue-router  在入口文件中引入   
//因为一进入就加载


// 引入HeroHeader
import HeroHeader from './components/HeroHeader.vue'
// 引入HeroSidebor
import HeroSidebor from './components/HeroSidebor.vue'

    export default{
        components:{
            HeroHeader,
            HeroSidebor,
        }
    }
</script>

