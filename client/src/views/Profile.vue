<template>
<div class="container">
  <div class="row">
    <div class="col-7">
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
            <input v-model="password" type="password" class="form-control">
          </div>
          <div class="form-group">
            <label>Confirm password</label>
            <input v-model="confirmPassword" type="password" class="form-control">
          </div>
        </template>
        <button class="btn btn-default" @click="showPasswordChange = true">Change password</button>
        <button type="submit" class="btn btn-primary" @click.prevent="save">Save</button>
      </form>
    </div>
    <div class="col-4">
      <h3 class="text-center">Your Stats</h3>
      <div id="accordion">
        <div class="card" v-for="(stat, index) in stats" :key="index">
          <div class="card-header" :id="`heading${index}`">
            <h5 class="mb-0">
              <button class="btn btn-link" data-toggle="collapse" :data-target="`#collapse${index}`" aria-expanded="false" :aria-controls="`#collapse${index}`">
                {{ stat.time }}
              </button>
            </h5>
          </div>
          <div :id="`collapse${index}`" class="collapse" :aria-labelledby="`heading${index}`">
            <div class="card-body">
              <ul class="list-group">
                <li class="list-group-item" v-for="(exercise, otherIndex) in stat.exercises" :key="otherIndex">
                  {{ exercise.exercise }} | {{ exercise.time }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
      user: state => state.user,
      stats: state => state.stats
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
