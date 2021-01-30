<template>
  <v-app>
    <template v-if="logined">
    <v-navigation-drawer
      app
      permanent
      expand-on-hover
      clipped
    >
      <v-list nav>
        <v-list-item link>
          <v-list-item-icon>
              <v-icon>credit_card</v-icon>
            </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Cards</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Community</v-list-item-title>
          </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      color="#344955"
      dark
      clipped-left
    >
      <v-btn class="logo-design"
        text
        x-large
      >
       Flashcards
      </v-btn>
      
      <v-text-field
        light
        dense
        prepend-inner-icon="search"
        solo
        clearable
        class="mt-6 ml-12"       
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-width="200"
        offset-x
      >
        <template v-slot:activator="{ on }">
          <v-btn
            v-on="on"
            fab
            class="btn-background"
          ></v-btn>
        </template>
        <v-card>
          <v-list>
            <v-list-item>
              <v-list-item-avatar>
                <img
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  alt="John"
                >
              </v-list-item-avatar>
  
              <v-list-item-content>
                <v-list-item-title>John Leider</v-list-item-title>
                <v-list-item-subtitle>Founder of Vuetify</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
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
              <v-btn text block x-large @click="clickLogout">
                Logout
              </v-btn>
            </div>
          </div>
        </v-card>
      </v-menu>
    </v-app-bar>
    </template>

    <v-main :class="{'pt-9': logined}">
      <router-view></router-view>
    </v-main >
  </v-app>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'App',

  components: {
  },
  data: () => ({
  }),
  computed: {
    ...mapState(['logined'])
  },
  methods: {
    ...mapMutations(['logout']),
    clickLogout() {
      this.logout();
    }
  }
};
</script>

<style scoped>
.v-btn--example {
  bottom: 72px;
  position: absolute;
  margin: 0 0 16px 16px;
  z-index: 100;
}
.logo-design {
  font-family: Open Sans, sans-serif;
  text-transform: capitalize;
  font-size: 24px;
}
.btn-background {
  background-image: url('https://cdn.vuetifyjs.com/images/john.jpg');
  background-size: 50px 50px;
}
</style>
