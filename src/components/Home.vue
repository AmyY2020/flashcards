<template>
  <div class="overflow-hidden">
    <v-app-bar
      app
      color="#344955"
      dark
    >
      <v-btn icon @click.stop="drawer = !drawer">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </v-btn>
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
            v-show="createButtonHidden && !drawer"
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

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      dark
      hide-overlay
      color="rgb(52, 73, 85, 0.9)"
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-cog-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            
            <v-list-item-title>Setting</v-list-item-title>
            <!-- <v-divider class="mt-3"></v-divider> -->
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-forum</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            
            <v-list-item-title>About</v-list-item-title>
            <!-- <v-divider class="mt-3"></v-divider> -->
          </v-list-item-content>
          </v-list-item> 
      </v-list>
        <div>
          
          <div class="pa-2 mt-10">
            
            <v-btn text block x-large>
              Logout
            </v-btn>
          </div>
        </div>
    </v-navigation-drawer>
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
    drawer: false,
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
