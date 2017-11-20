<template>
  <div id="app">
    <tab></tab>
    <router-view/>
  </div>
</template>

<script>
  import Tab from 'components/tab/tab'

  export default {
    name: 'app',
    components:{
      Tab
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  #app{
    background:#c9242a 
  }
</style>
