import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import { f7App, f7Navbar,f7Card,f7Tabs,f7Tab,f7Block,f7Link ,f7Toolbar,f7Page} from 'framework7-vue';


import Framework7 from 'framework7/framework7.esm.bundle.js'

// Import F7-Vue Plugin Bundle (with all F7 components registered)
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js'

// Init F7-Vue Plugin
Framework7.use(Framework7Vue);
Vue.component('f7-app', f7App);
Vue.component('f7-navbar', f7Navbar);
Vue.component('f7-card', f7Card);
Vue.component('f7-tabs', f7Tabs);
Vue.component('f7-tab', f7Tab);
Vue.component('f7-block', f7Block);
Vue.component('f7-link', f7Link);
Vue.component('f7-toolbar', f7Toolbar);
Vue.component('f7-page', f7Page);
new Vue({
  router,
  store,
  data(){
    return {
      f7params:{
        name:'My App'
      }
    }
    
  },
  render: h => h(App)
}).$mount('#app')
