<template>
  <div>
    <nav class="navbar navbar-default">
      <div class="container">
        <div class="collapse navbar-collapse" id="navbar">
          <h2 class="text-bold text-center h2">Welcome to the NumPicker example!</h2>
        </div>
      </div>
    </nav>

    <div class="container">
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <!-- Content will be placed here -->
          <slot></slot>
        </div>
      </div>
    </div>

  </div>
</template>

<style>
  .h2 {
    margin: 20px 0;
  }
</style>


<script>
  /* ============
   * Default Layout
   * ============
   *
   * Used for the home and account pages.
   *
   * Layouts are used to store a lot of shared code.
   * This way the app stays clean.
   */

  import authService from '@/services/auth';

  export default {
    methods: {
      logout() {
        authService.logout();
      },
    },
  };

</script>
