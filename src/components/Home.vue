<template>
  <CardCollection @select-view="selectView" v-if="logined" />
  <LandingCard v-else />
</template>

<script>
import CardCollection from './CardCollection';
import LandingCard from  './LandingCard';
import { mapState } from 'vuex';
// import NewCard from './NewCard';

export default {
  name: 'Home',

  components: {
    CardCollection,
    LandingCard
    // NewCard
  },

  data: () => ({
    bottomNav: 'recent',
    createButtonHidden: true,
    dialog: false,
    drawer: false,
  }),
  computed: {
    ...mapState(['logined'])
  },
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
