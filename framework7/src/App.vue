<template>

  <f7-app :params="f7params">
    <router-view/>
  </f7-app> 
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
import { f7Button } from 'framework7-vue';
import Vue from "vue";
Vue.component("f7-button",f7Button);
export default {
  data(){
    return {
        // Framework7 parameters that we pass to <f7-app> component
        f7params: {
          // Array with app routes
          // App Name
          name: 'My App',
          // App id
          id: 'com.myapp.test',
          // ...
        }
      }
  }
}
</script>
