<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {
  },

  data: () => ({
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
