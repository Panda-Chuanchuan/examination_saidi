<template>
  <div id="app">
    <div class="container-fluid header">
      <img src="./assets/header_logo.svg" alt="">
      <router-link to="/index">首页</router-link>
      <router-link to="/list">列表页</router-link>
    </div>
    <!-- 对应的组件内容渲染到router-view中 -->
    <transition name="swtichPage">
      <router-view></router-view> 
    </transition>
    
  </div>
</template>

<script>
// import List from './components/List.vue'

export default {
  name: 'app',
  data() {
    return {}
  }
}
</script>

<style>
  html,body {
    height: 100%;
  }
  #app {
    min-height: 100%;
    background: url("./assets/index-background.jpg") center center repeat-y;
    background-size: cover;
  }
  a:hover {
    text-decoration: none;
  }
  .header {
    background-color: transparent;
    height: 60px;
    line-height: 60px;
    position: absolute;
  }
  .header img {
    width: 72px;
    height: 72px;
  }
  .header a {
    color: #eee;
    display: inline-block;
    width: 64px;
    height: 32px;
    line-height: 32px;
    text-align: center;
  }

  a.router-link-exact-active {
    color: #00c9db
  }
  .swtichPage-enter-active{
    transition: all 1s ease;
  }
  .swtichPage-enter {
    opacity: 0;
  }
</style>
