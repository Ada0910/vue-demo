<template>
  <div class="Header">
    <router-link>
      <img src="../assets/logo.png"/>
    </router-link>
    <span><a href="#">关于</a></span>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    data () {
      return {
      }
    }
  }
</script>

<style scoped>
  .Header {
    background: rgb(68, 137, 252);
    height: 50px;
  }
  a {
    text-decoration: none;
    color: rgba(245, 252, 248, 0.9);
  }
  img {
    max-width: 50px;
    margin-left: 50px;
    margin-top: 0px;
  }
  span {
    float: right;
    margin-right: 50px;
    margin-top: 10px;
  }
</style>

