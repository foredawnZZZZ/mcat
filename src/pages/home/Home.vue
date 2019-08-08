<template>
  <div class="home">
    <home-header/>
    <div class="main">
      <router-view/>
    </div>
    <home-footer/>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeFooter from './components/Footer'
export default {
  name: 'Home',
  components: {
    HomeHeader: HomeHeader,
    HomeFooter: HomeFooter
  }
}
</script>

<style scoped lang="less">
  .home {
    width: 100%;
    height: 100%;
    .main {
      padding: 54rem/100 0 60rem/100;
      height: 100%;
    }
  }
</style>
