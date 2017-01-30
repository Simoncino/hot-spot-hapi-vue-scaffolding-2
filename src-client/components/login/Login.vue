<template>
  <div class="containerLogin">
    <table cellspacing="2" cellpadding="2">
      <tr>
        <td><label for="idUsername">Username:</label></td>
        <td>
          <input id="idUsername" type="text" placeholder="username" v-model.trim="username">
        </td>
      </tr>
      <tr>
        <td><label for="idPassword">Password:</label></td>
        <td>
          <input id="idPassword" type="password" placeholder="password" v-model.trim="password">
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <button class="btnLogin" v-on:click="loginClick">Login</button>
        </td>
      </tr>
      <tr>
        <td colspan="2" class="errorCss">
          {{error}}        
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    components: {
    },
    data: function() {
      return {
        username : "",
        password : ""
      }
    },
    methods: {
      loginClick: function(){
        

      }
    }
  }
</script>

<style lang="scss">
  body {
    font-family: Open Sans, sans-serif;
  }

  .containerLogin{
    width: 60%;
    padding: 1em;
    border: 1px solid slategray;
    margin: 0 auto;
    
    table {
      margin: 0 auto;

      tr {
        text-align: center;
      }
    }

    label {
      font-weight: bold;      
      margin: 1em;
      display: block;
    }

    .btnLogin{
      padding: 0.6em;
      background-color: transparent;
      margin: 0.4em;
      font-weight: bold;
      font-size:1em;
    }

  }
  
  .errorCss{color: red; text-align:center; font-size: 1.5em;}

</style>
