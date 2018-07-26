<template>
<div class="container">
  <h3 class="text-center">Register</h3>
  <form>
    <div class="form-group">
      <label>Login</label>
      <input type="text" class="form-control" aria-describedby="loginHelp" placeholder="Enter login">
      <small class="form-text text-muted">Validation here</small>
    </div>
    <div class="form-group">
      <label>Email</label>
      <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email">
      <small class="form-text text-muted">Validation here</small>
    </div>
    <div class="form-group">
      <label>Password</label>
      <input type="password" class="form-control" placeholder="Password">
    </div>
    <div class="form-group">
      <label>Confirm password</label>
      <input type="password" class="form-control" placeholder="Confirm password">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>
</template>

<script>
export default {
  name: 'register'
}
</script>

<style lang="stylus" scoped>

</style>
