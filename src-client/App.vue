<template>
  <div class="containerApp">
    <h2>App.vue</h2>
    <hr>
    <Cartina></Cartina>
  </div>
</template>

<script>
  import Login from './components/login/Login.vue'
  import Cartina from './components/cartina/Cartina.vue'
  import { mapGetters, mapActions } from 'vuex'
  export default {
    created: function(){
      if(!this.isLogged){
        this.$router.push('login');
      }
    },
    computed: {
      ...mapGetters([
          'loggedUser',
          'isLogged',
          'errorMessage'
        ])
    },
    props: {

    },
    components: {
      Login,
      Cartina
    },
    data: function() {
      return {
        loggedUser2 : {},
        isLogged2 : false
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
