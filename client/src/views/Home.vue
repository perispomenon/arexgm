<template>
<div class="home">
  <game-board></game-board>
</div>
</template>

<script>
import MainHeader from '@/components/MainHeader'
import GameBoard from '@/components/GameBoard'

export default {
  name: 'home',
  components: {
    MainHeader,
    GameBoard
  }
}
</script>
