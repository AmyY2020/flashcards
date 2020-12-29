<template>
  <div>
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
    </v-main>
  </div>
</template>

<script>
import CardCollection from './CardCollection';

export default {
  name: 'Home',

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
