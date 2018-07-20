<template>
<div id="game-board">
  <label>Длина раунда</label>
  <input type="number">
</div>
</template>

<script>
export default {
  name: 'game-board',
  data () {
    return {
      exercises: []
    }
  },
  create () {
  }
}
</script>

<style lang="stylus" scoped>
#game-board
  background #456789
  width 80%
  margin 0 auto
</style>
