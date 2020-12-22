<template>
  <v-app>
    <v-app-bar
      app
      color="#344955"
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Cards</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <HelloWorld/>
      <v-fab-transition>
        <v-btn
          dark
          fab
          bottom
          color="#F4AA33"
          class="v-btn--example"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-fab-transition>
    </v-main>

    <v-bottom-navigation
      fixed
      grow
      v-model="bottomNav"
    >
      <v-btn value="recent">
        <span>Cards</span>
        <v-icon class="material-icons-outlined">credit_card</v-icon>
      </v-btn>

      <v-btn value="favorites">
        <span>Community</span>
        <v-icon class="material-icons-outlined">people_alt</v-icon>
      </v-btn>

    </v-bottom-navigation>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    bottomNav: 'recent',
  }),
};
</script>

<style scoped>
.v-btn--example {
  bottom: 0;
  position: absolute;
  margin: 0 0 16px 16px;
  left: '50%';
  transform: 'translateX(-50%)';
  z-index: 100;
}
</style>
