<template>
<div>
  <div id="gb-bg">
    <div id="game-board" class="container">
      <div id="verdict" ref="verdict" :class="[isAnswerCorrect ? 'purple' : 'bluish', 'animated']" v-show="showVerdict && gameStarted">
        {{ (isAnswerCorrect ? 'Correct' : 'Incorrect') + '!' }}
      </div>
      <div class="form-group" v-show="!gameStarted">
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
      gameTimeProgress: 0,
      gameTimeInterval: null,
      isAnswerCorrect: null,
      showVerdict: false,
      gameStartTime: null
    }
  },
  methods: {
    startGame () {
      this.gameStarted = true
      this.$refs.exercise.generateNext()
      this.gameStartTime = moment()
      const gameEndTime = this.gameStartTime.clone().add(this.roundLength, 'minutes')
      setTimeout(this.endGame, gameEndTime.diff(this.gameStartTime))
      this.gameTimeInterval = setInterval(() => {
        // TODO devise the alg of time progress
      }, 200)
    },
    answerChecked (obj) {
      this.isAnswerCorrect = obj.isCorrect
      this.showVerdict = true
      if (obj.isCorrect) {
        this.exercises.push({ content: this.$refs.exercise.generateNext(), solvingTime: obj.timeTaken })
      }
      console.log(this.exercises)
    },
    async endGame () {
      this.gameStarted = false
      this.showVerdict = false
      this.gameTimeProgress = 0
      clearInterval(this.gameTimeInterval)
      const data = {
        time: this.gameStartTime ? this.gameStartTime.format('YYYY-MM-DD HH:mm:ss') : null,
        exercises: this.exercises
      }
      const rsp = await this.$store.dispatch('storeStats', data)
      console.log(rsp)
      this.exercises = []
    }
  },
  mounted () {}
}
</script>

<style lang="stylus" scoped>
#verdict
  font-size 40px

#game-board
  background #c4b6a4
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
