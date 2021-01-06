import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import CardDisplay from './components/CardDisplay'
import Player from './components/Player'
import Login from './components/Login'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/cards',
    name: 'cards',
    component: CardDisplay
  },
  {
    path: '/player',
    name: 'player',
    component: Player
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
]

export default new VueRouter({
  routes
});