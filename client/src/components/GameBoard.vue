<template>
<div id="game-board" class="container">
  <div class="form-group" v-show="!gameStarted">
    <label>Round length (minutes)?</label>
    <input type="number" class="form-control" v-model="roundLength">
  </div>
  <button v-show="!gameStarted" class="btn btn-primary" @click="startGame">Start</button>
  <exercise v-show="gameStarted" ref="exercise" @answerChecked="answerChecked"></exercise>
</div>
</template>

<script>
import Exercise from '@/components/Exercise'

export default {
  name: 'game-board',
  components: {
    Exercise
  },
  data () {
    return {
      exercises: [],
      roundLength: 2, // TODO get from db
      gameStarted: false
    }
  },
  methods: {
    startGame () {
      this.gameStarted = true
      this.$refs.exercise.generateNext()
    },
    answerChecked (isCorrect) {
      if (isCorrect) {
        this.exercises.push(this.$refs.exercise.generateNext())
      } else {
        // do smth
      }
      console.log(this.exercises)
    }
  },
  mounted () {
  }
}
</script>

<style lang="stylus" scoped>
#game-board
  background #d9d9d9
  height 600px
  display flex
  justify-content center
  align-items center
  flex-direction column
</style>
