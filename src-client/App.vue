<template>
  <div class="containerApp">
    <h2>App.vue</h2>
    <img src="./assets/logo.png">
    <template v-else>
      <router-view></router-view>
    </template>
  </div>
</template>

<script>
  export default {
    created: function(){
    },
    computed: {

    },
    props: {
    },
    components: {
    },
    data: function() {
      return {
      }
    },
    methods: {
   }
 }
</script>

<style lang="scss">
  body {
    font-family: Open Sans, sans-serif;
  }

  .containerApp{
    text-align: center;
  }
</style>
