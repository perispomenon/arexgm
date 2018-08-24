<template>
<div class="exercise">
  <div class="exercise-itself" ref="exerciseItself">
    {{ firstOperand + ' ' + operation + ' ' + secondOperand }}
  </div>
  <form class="its-answer form-group" @submit.prevent> <!-- form, cuz div with single input is @submitunpreventable -->
    <input type="number" class="form-control" autofocus v-model="userAnswer" @keyup.enter.native="checkAnswer">
    <!-- idk, without @click on this button @keyup above doesn't work. let it just stay hidden -->
    <button v-show="false" class="btn btn-primary" @click="checkAnswer">Check</button>
  </form>
</div>
</template>

<script>
import randoms from '@/mixins/randoms'
import moment from 'moment'

export default {
  name: 'exercise',
  mixins: [randoms],
  data () {
    return {
      operation: null,
      firstOperand: null,
      secondOperand: null,
      answer: null,
      userAnswer: null,
      timeTaken: null
    }
  },
  methods: {
    generateNext () {
      const prevEx = this.firstOperand + ' ' + this.operation + ' ' + this.secondOperand + ' = ' + this.answer

      this.operation = this.getNextOperation()
      this.firstOperand = this.getNextInt()
      this.secondOperand = this.getNextInt()
      switch (this.operation) {
        case '+':
          this.answer = this.firstOperand + this.secondOperand
          break
        case '-':
          this.firstOperand = this.firstOperand > this.secondOperand ? this.firstOperand : this.secondOperand
          this.answer = this.firstOperand - this.secondOperand
          break
        case '/':
          this.answer = this.firstOperand
          this.firstOperand = this.firstOperand * this.secondOperand
          break
        case '*':
          this.answer = this.firstOperand * this.secondOperand
          break
      }

      this.timeTaken = moment()
      return prevEx
    },
    checkAnswer () {
      if (!this.userAnswer && this.userAnswer !== 0) {
        return
      }
      const isCorrect = Number(this.userAnswer) === this.answer
      let time = null
      if (isCorrect) {
        time = moment().diff(this.timeTaken, 'seconds')
        this.timeTaken = null
      }
      this.$emit('answerChecked', { isCorrect, timeTaken: time })
      this.userAnswer = null
    }
  },
  mounted () {
  }
}
</script>

<style lang="stylus" scoped>
.exercise
  display flex
  flex-direction column
  justify-content space-between
  align-items center

  .exercise-itself
    margin auto
    font-size 50px

  .its-answer
    margin 0 auto 0
    display flex

    input
      height 60px
      width 200px
      font-size 30px
</style>
