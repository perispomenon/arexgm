<template>
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Login</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label class="col-form-label">Recipient:</label>
            <input type="text" class="form-control">
          </div>
          <div class="form-group">
            <label class="col-form-label">Message:</label>
            <textarea class="form-control"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Log in</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {}
  }
}
</script>

<style lang="stylus" scoped>

</style>
