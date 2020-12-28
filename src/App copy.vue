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

    <v-main class="pt-9">
      <CardCollection/>
      <v-fab-transition>
        <v-btn
          dark
          fab
          absolute
          right
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
import CardCollection from './components/CardCollection';

export default {
  name: 'App',

  components: {
    CardCollection,
  },

  data: () => ({
    bottomNav: 'recent',
  }),
};
</script>

<style scoped>
.v-btn--example {
  bottom: 72px;
  position: absolute;
  margin: 0 0 16px 16px;
  z-index: 100;
}
</style>
