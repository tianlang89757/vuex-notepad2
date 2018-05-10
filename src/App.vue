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

<style>
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  ul,li{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  #app{
    width: 100%;
    height: 100%;
    margin: 0 auto;
    font-family: 'Microsoft YaHei';
    background-color: #fbfbfb;
    font-size: 0.7rem;
  }
</style>
