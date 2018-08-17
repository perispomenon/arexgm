<template>
<div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Log in</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label class="col-form-label">Login:</label>
            <input type="text" class="form-control" v-model="login">
          </div>
          <div class="form-group">
            <label class="col-form-label">Password:</label>
            <input type="password" class="form-control" v-model="password">
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal" ref="close">Close</button>
        <button type="button" class="btn btn-primary" @click="tryLogin">Log in</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'login',
  data () {
    return {
      login: null,
      password: null
    }
  },
  computed: mapState({
    user: state => state.user
  }),
  methods: {
    async tryLogin () {
      await this.$store.dispatch('login', this.$data)
      if (!this.user.login) {
        this.errMsg = this.user.message
      } else {
        this.$refs.close.click()
      }
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
