<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12" class="d-flex justify-end">

        <v-btn text>Select</v-btn>

      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="6">
        <Card deckName="History Story" word="History"/>
      </v-col>
      <v-col cols="6">
        <Card deckName="Art Business" word="Art"/>
      </v-col>
       <v-col cols="6">
        <Card deckName=" " word="Deliberate"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import Card from './Card';

  export default {
    name: 'CardCollection',
    components: {
      Card,
    },
    data: () => ({
    }),
  }
</script>

<style scoped>

</style>