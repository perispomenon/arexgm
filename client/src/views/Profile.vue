<template>
<div class="container">
  <h3 class="text-center">Your Profile</h3>
  <form>
    <div class="form-group">
      <label>Login</label>
      <input v-model="login" type="text" class="form-control">
    </div>
    <div class="form-group">
      <label>Email</label>
      <input v-model="email" type="text" class="form-control">
    </div>
    <div class="form-group">
      <label>City</label>
      <input v-model="city" type="text" class="form-control">
    </div>
    <template v-if="showPasswordChange">
      <div class="form-group">
        <label>Password</label>
        <input v-model="password" type="password" class="form-control" placeholder="Password">
      </div>
      <div class="form-group">
        <label>Confirm password</label>
        <input v-model="confirmPassword" type="password" class="form-control" placeholder="Confirm password">
      </div>
    </template>
    <button class="btn btn-default" @click="showPasswordChange = true">Change password</button>
    <button type="submit" class="btn btn-primary" @click.prevent="save">Save</button>
  </form>
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'profile',
  data () {
    return {
      login: null,
      email: null,
      city: null,
      password: null,
      confirmPassword: null,
      showPasswordChange: false
    }
  },
  computed: {
    ...mapState({
      profile: state => state.profile,
      user: state => state.user
    })
  },
  methods: {
    async save () {
      if (this.password !== this.confirmPassword) {
        return
      }
      const data = {
        id: this.user.id,
        data: {
          login: this.login,
          email: this.email,
          city: this.city
        }
      }
      if (this.showPasswordChange) {
        data.data.password = this.password // that's the right way to define object's properties!
      }
      await this.$store.dispatch('saveUserProfile', data)
    }
  },
  async mounted () {
    await this.$store.dispatch('getUserProfile', this.user.id)
    this.login = this.profile.login
    this.city = this.profile.city
    this.email = this.profile.email
  }
}
</script>

<style>

</style>
