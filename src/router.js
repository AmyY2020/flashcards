import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import CardDisplay from './components/CardDisplay'
import Player from './components/Player'
import Quiz from './components/Quiz'
import Login from './components/Login'
import Signup from './components/Signup'

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
    path: '/quiz',
    name: 'quiz',
    component: Quiz
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
]

export default new VueRouter({
  routes
});