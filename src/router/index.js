import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Login from '@/components/Login'
import Createaccount from '@/components/Createaccount'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)
Vue.use(VueAxios, axios)

export default new Router({
  routes: [{
    path: '/',
    name: 'Login',
    component: Login,
    props: true
  }, {
    path: '/main',
    name: 'Main',
    component: Main,
    props: true
  }, {
    path: '/createaccount',
    name: 'Createaccount',
    component: Createaccount,
    props: true
  }]
})
