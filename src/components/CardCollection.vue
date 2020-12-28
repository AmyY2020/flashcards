<template>
  <v-container>
    <v-row class="text-center d-flex justify-between">
        <v-col cols="2">
          <v-btn icon>
           <v-icon class="material-icons">keyboard_arrow_left</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="10" class="d-flex justify-end">
          <v-btn text>Select</v-btn>
          <v-btn class="pa-1 mr-3" outlined color="#26A599">All</v-btn>
          <v-btn class="pa-1 mr-3" outlined color="#26A599">Local</v-btn>
          <v-btn class="pa-1" outlined color="#26A599">Cancel</v-btn>
        </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="6" class="d-flex">
        <v-checkbox class="align-center"></v-checkbox>
        <Card deckName="History Story" word="History" height="160" smallFontSize selected/>
      </v-col>
      <v-col cols="6" class="d-flex">
        <v-checkbox class="align-center"></v-checkbox>
        <Card deckName="Art Business" word="Art" height="160" smallFontSize/>
      </v-col>
       <v-col cols="6" class="d-flex">
         <v-checkbox class="align-center"></v-checkbox>
        <Card deckName=" " word="Deliberate" height="160" smallFontSize/>
      </v-col>
       <v-col cols="6" class="d-flex">
         <v-checkbox class="align-center"></v-checkbox>
        <Card deckName=" " word="Deliberate" height="160" smallFontSize/>
      </v-col>
       <v-col cols="6" class="d-flex">
         <v-checkbox class="align-center"></v-checkbox>
        <Card deckName=" " word="Deliberate" height="160" smallFontSize/>
      </v-col>
       <v-col cols="6" class="d-flex">
         <v-checkbox class="align-center"></v-checkbox>
        <Card deckName=" " word="Deliberate" height="160" smallFontSize/>
      </v-col>
    </v-row>
  
    <v-container class="collect-actions d-flex justify-space-around">
      <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
      >
        <template v-slot:activator="{ on }">
          <v-btn depressed dark color="#344955" v-on="on">Read</v-btn>
        </template>
        <NewCard />
      </v-dialog>
      <v-btn depressed dark color="#344955">Listen</v-btn>
      <v-btn depressed dark color="#344955">Test</v-btn>
    </v-container>

  </v-container>
</template>


<script>
  import Card from './Card';
  import NewCard from './NewCard';

  export default {
    name: 'CardCollection',
    components: {
      Card,
      NewCard
    },
    data: () => ({
    }),
  }
</script>

<style scoped>
.collect-actions {
  left: 0;
  bottom: 0;
  position: fixed;
  z-index: 100;
  width:100%;
  background:white;
}
</style>