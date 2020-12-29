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
      <CardCollection @select-view="selectView"/>
    </v-main>

    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
    >
      <template v-slot:activator="{ on }">
        <v-fab-transition>
          <v-btn
            dark
            fab
            fixed
            right
            color="#F4AA33"
            class="v-btn--example"
            v-on="on"
            v-if="createButtonHidden"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-fab-transition>
      </template>
      <NewCard @close-dialog="dialog = false"/>
    </v-dialog>

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
  </div>
</template>

<script>
import CardCollection from './CardCollection';
import NewCard from './NewCard';

export default {
  name: 'Home',

  components: {
    CardCollection,
    NewCard
  },

  data: () => ({
    bottomNav: 'recent',
    createButtonHidden: true,
    dialog: false,
  }),
  methods: {
    selectView(event) {
      this.createButtonHidden = ! event;
    }
  }
};
</script>

<style scoped>
.v-btn--example {
  bottom: 52px;
  margin: 0 0 16px 16px;
  z-index: 100;
}
</style>
