// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css' // add
import 'bootstrap-vue/dist/bootstrap-vue.css' // add
import { Hooper, Slide } from 'hooper'
import 'hooper/dist/hooper.css'
import VueCookies from 'vue-cookies'
import VCalendar from 'v-calendar'
Vue.use(VCalendar)
Vue.use(VueCookies)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App, Hooper, Slide },
  template: '<App/>'
})
