<template>
  <div class="containerApp">
    <h2>App.vue</h2>
    <img src="./assets/logo.png">
    <h6>loggedUser</h6>
    <pre>{{loggedUser}}</pre>
    <h6>isLogged</h6>
    <pre>{{isLogged}}</pre>
    <h6>userLogged</h6>
    <pre>{{userLogged}}</pre>
    <h6>errorMessage</h6>
    <pre>{{errorMessage}}</pre>
    <router-view></router-view>
  </div>
</template>

<script>
  import Login from './components/login/Login.vue'
  import { mapGetters, mapActions } from 'vuex'
  export default {
    created: function(){
      if(!this.isLogged){
        this.$router.push('login');
      }
    },
    computed: {
      ...mapGetters({
          loggedUser : 'loggedUser',
          isLogged: 'isLogged',
          errorMessage: 'errorMessage'
        }),
      userLogged : function(){
        console.log("-----------------------------", this.loggedUser);
        if(this.isLogged){
          this.$router.push('home');
        } else {
          this.$router.push('login');
        }
        return this.$store.state.login.loggedUser;
      }

    },
    props: {

    },
    components: {
      Login
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
