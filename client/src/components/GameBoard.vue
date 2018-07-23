<template>
<div id="game-board" class="container">
  <div class="form-group">
    <label>Длина раунда</label>
    <input type="number" class="form-control">
  </div>
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
  background #d9d9d9
</style>
