<template>
  <v-app>
  <v-card>
    <v-row class="d-flex justify-end">
        <v-btn class="mr-6 mt-5" icon>
           <v-icon class="material-icons">clear</v-icon>
        </v-btn>
    </v-row>
          <v-card-text>

          </v-card-text>
        </v-card>
  </v-app>
</template>

<script>
  export default {
    name: 'CardDisplay',
    props: {
    },
    data: () => ({
      dialog: false,
      deckName: '',
      items: [
        'Art Business',
        'History Story',
      ],
    }),
  }
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