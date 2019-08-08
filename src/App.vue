<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
  #app {
    position: relative;
    max-width: 750px;
    min-height: 320px;
    margin: 0 auto;
    height: 100%;
  }
</style>
