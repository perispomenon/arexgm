<template>
  <div id="app">
    <main-header></main-header>
    <flash-message></flash-message>
    <router-view/>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader'
export default {
  name: 'app',
  components: {
    MainHeader
  }
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
</style>
