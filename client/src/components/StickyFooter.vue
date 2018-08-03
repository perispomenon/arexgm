<template>
<footer class="footer">
  <div class="container progress">
    <div class="progress-bar" role="progressbar" :aria-valuenow="progressNow" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
</footer>
</template>

<script>
export default {
  name: 'sticky-footer',
  props: ['progressNow'],
  data () {
    return {}
  }
}
</script>

<style lang="stylus">
html
  position relative
  min-height 100%

body
  margin-bottom: 50px

.footer
  position: absolute
  bottom 0
  width 100%
  height 60px
  line-height 60px
  background-color #f5f5f5
  display flex

  .progress
    height 50px
    margin auto
</style>
