import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import CardDisplay from './components/CardDisplay'

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
  }
]

export default new VueRouter({
  routes
});