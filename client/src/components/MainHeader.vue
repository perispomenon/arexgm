<template>
<div id="main-header">
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link class="navbar-brand" :to="{ name: 'home' }">AREXGM</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <router-link class="nav-link" :to="{ name: 'home' }">About</router-link>
        </ul>
        <ul class="navbar-nav ml-auto">
          <router-link class="nav-link" :to="{ name: 'register' }">Register</router-link>
        </ul>
      </div>
    </nav>
  </header>
  <login></login>
</div>
</template>

<script>
import Login from '@/components/Login'

export default {
  name: 'main-header',
  components: {
    Login
  }
}
</script>

<style lang="stylus" scoped>
</style>
