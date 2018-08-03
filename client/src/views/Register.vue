<template>
<div class="container">
  <h3 class="text-center">Register</h3>
  <form>
    <div class="form-group">
      <label>Login</label>
      <input v-model="login" type="text" class="form-control" placeholder="Enter login">
      <small class="form-text text-muted">Validation here</small>
    </div>
    <div class="form-group">
      <label>Email</label>
      <input v-model="email" type="email" class="form-control" placeholder="Enter email">
      <small class="form-text text-muted">Validation here</small>
    </div>
    <div class="form-group">
      <label>Password</label>
      <input v-model="password" type="password" class="form-control" placeholder="Password">
    </div>
    <div class="form-group">
      <label>Confirm password</label>
      <input v-model="confirmPassword" type="password" class="form-control" placeholder="Confirm password">
    </div>
    <button type="submit" class="btn btn-primary" @click="register">Submit</button>
  </form>
</div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      login: null,
      email: null,
      password: null,
      confirmPassword: null
    }
  },
  methods: {
    async register () {
      const rsp = await this.$store.dispatch('registerUser', this.$data)
      console.log(rsp)
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
