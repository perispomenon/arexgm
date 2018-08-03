<template>
<div>
  <div id="gb-bg">
    <div id="game-board" class="container">
      <div id="verdict" ref="verdict" :class="[isAnswerCorrect ? 'purple' : 'bluish', 'animated']" v-show="showVerdict">
        {{ (isAnswerCorrect ? 'Correct' : 'Incorrect') + '!' }}
      </div>
      <div class="form-group" v-show="!gameStarted && !gameEnded">
        <label>Round length (minutes)?</label>
        <input type="number" class="form-control" v-model="roundLength">
      </div>
      <button v-show="!gameStarted" class="btn btn-primary" @click="startGame">Start</button>
      <exercise v-show="gameStarted" ref="exercise" @answerChecked="answerChecked"></exercise>
    </div>
    <sticky-footer :progressNow="gameTimeProgress"></sticky-footer>
  </div>
</div>
</template>

<script>
import Exercise from '@/components/Exercise'
import StickyFooter from '@/components/StickyFooter'
import moment from 'moment'

export default {
  name: 'game-board',
  components: {
    Exercise,
    StickyFooter
  },
  data () {
    return {
      exercises: [],
      roundLength: 2, // TODO get from db
      gameStarted: false,
      gameEnded: false,
      gameTimeProgress: 0,
      gameTimeInterval: null,
      isAnswerCorrect: null,
      showVerdict: false
    }
  },
  methods: {
    startGame () {
      this.gameStarted = true
      this.$refs.exercise.generateNext()
      const gameStartTime = moment()
      const gameEndTime = gameStartTime.clone().add(this.roundLength, 'minutes')
      setTimeout(this.endGame, gameEndTime.diff(gameStartTime))
      this.gameTimeInterval = setInterval(() => {
        // TODO devise the alg of time progress
      }, 200)
    },
    answerChecked (isCorrect) {
      this.isAnswerCorrect = isCorrect
      this.showVerdict = true
      // TODO maybe do animation on the verdict
      if (isCorrect) {
        this.exercises.push(this.$refs.exercise.generateNext())
      }
      console.log(this.exercises)
    },
    endGame () {
      this.gameEnded = true
      this.gameTimeProgress = 0
      clearInterval(this.gameTimeInterval)
      // TODO send this exercises to db for statistics
    }
  },
  mounted () {}
}
</script>

<style lang="stylus" scoped>
#verdict
  font-size 1.6em

#game-board
  background #bec3d3
  height 500px
  display flex
  justify-content center
  align-items center
  flex-direction column

.purple
  color #7241db

.bluish
  color #1d80ba
</style>
