<template>
  <v-card
    class="mx-auto d-flex flex-column"
    max-width="344"
    :height="height || 200"
    outlined
    :color="selected ? '#E3F2FD' : ''"
  >
    <v-card-text class="d-flex flex-column flex-grow-1 pb-0">
      <div>{{deckName}}</div>
      <div class="text--primary d-flex justify-center align-center flex-grow-1" :class="[smallFontSize ? 'text-h6' : 'text-h5']">
        {{word}}
      </div>
      <!-- <div> -->
         <v-container class="py-0">
          <v-row class="text-center">
           <v-col cols="12" class="d-flex justify-end ml-5 pa-0">
            <v-icon class="material-icons pa-2">share</v-icon>
            <v-icon class="material-icons pa-2">cloud_download</v-icon>
          </v-col>
          </v-row>
        </v-container>
      <!-- </div> -->
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    name: 'Card',
    props: {
      deckName: String,
      word: String,
      height: Number,
      selected: Boolean,
      smallFontSize: Boolean
    },
    data: () => ({
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