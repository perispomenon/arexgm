<template>
<div class="container">
  <h3 class="text-center">Register</h3>
  <form>
    <div class="form-group">
      <label>Login</label>
      <input v-model="login" type="text" class="form-control" placeholder="Enter login">
      <small class="form-text text-muted" v-show="loginValidationMsg">{{ loginValidationMsg }}</small>
    </div>
    <div class="form-group">
      <label>Email</label>
      <input v-model="email" type="text" class="form-control" placeholder="Enter email">
      <small class="form-text text-muted" v-show="emailValidationMsg">{{ emailValidationMsg }}</small>
    </div>
    <div class="form-group">
      <label>Password</label>
      <input v-model="password" type="password" class="form-control" placeholder="Password">
      <small class="form-text text-muted" v-show="passwordValidationMsg">{{ passwordValidationMsg }}</small>
    </div>
    <div class="form-group">
      <label>Confirm password</label>
      <input v-model="confirmPassword" type="password" class="form-control" placeholder="Confirm password">
      <small class="form-text text-muted" v-show="confirmPasswordValidationMsg">{{ confirmPasswordValidationMsg }}</small>
    </div>
    <button type="submit" class="btn btn-primary" @click="register">Submit</button>
  </form>
</div>
</template>

<script>
import validator from 'validator'

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
  computed: {
    loginValidationMsg () {
      if (!this.login) {
        return 'Login field can not be empty'
      } else if (!validator.isAlphanumeric(this.login)) {
        return 'Login can only contain English letters and numbers'
      }
      return false
    },
    emailValidationMsg () {
      if (!this.email) {
        return 'Email field can not be empty'
      } else if (!validator.isEmail(this.email)) {
        return 'Wrong email format'
      }
      return false
    },
    passwordValidationMsg () {
      if (!this.password) {
        return 'Password field can not be empty'
      } else if (this.password.length < 4) {
        return 'Minimum password length is 4 characters'
      }
      return false
    },
    confirmPasswordValidationMsg () {
      if (!this.confirmPassword) {
        return 'You have to confirm your password'
      } else if (!this.confirmPassword === this.password) {
        return 'Passwords should be equal'
      }
      return false
    }
  },
  methods: {
    async register () {
      if (!this.validate()) {
        // TODO signal that it's trash
        return
      }
      const rsp = await this.$store.dispatch('register', {
        login: this.login,
        email: this.email,
        password: this.password
      })
      console.log(rsp)
    },
    validate () {
      return [this.loginValidationMsg, this.emailValidationMsg, this.passwordValidationMsg, this.confirmPasswordValidationMsg].every(x => !x)
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
