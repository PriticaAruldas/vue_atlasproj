// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Va from 'vue-atlas'
import 'vue-atlas/dist/vue-atlas.css'

Vue.use(Va, 'en') // or 'es', 'fr', 'ru'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  Va,
  components: { App },
  template: '<App/>'
})
