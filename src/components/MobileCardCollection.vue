<template>
  <v-container>
    <v-row class="text-center d-flex justify-between">
        <v-col cols="2" v-if="selectView">
          <v-btn icon @click="clickBack">
           <v-icon class="material-icons">keyboard_arrow_left</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="10" class="d-flex justify-end" v-if="selectView">
          <v-btn class="pa-1 mr-3" outlined color="#26A599">All</v-btn>
          <v-btn class="pa-1 mr-3" outlined color="#26A599">Local</v-btn>
          <v-btn class="pa-1" outlined color="#26A599">Cancel</v-btn>
        </v-col>
        <v-col cols="12" class="d-flex justify-end" v-else>
          <v-btn text @click="clickSelect">Select</v-btn>
        </v-col>
    </v-row>
    <v-row dense class="mb-14">
      <v-col cols="6" class="d-flex">
        <v-checkbox class="align-center" v-if="selectView"></v-checkbox>
        <Card deckName="History Story" word="History" :height="selectView ? 160 : 200" :smallFontSize="selectView" selected/>
      </v-col>
      <v-col cols="6" class="d-flex">
        <v-checkbox class="align-center" v-if="selectView"></v-checkbox>
        <Card deckName="Art Business" word="Art" :height="selectView ? 160 : 200" :smallFontSize="selectView"/>
      </v-col>
       <v-col cols="6" class="d-flex">
         <v-checkbox class="align-center" v-if="selectView"></v-checkbox>
        <Card deckName=" " word="Deliberate" :height="selectView ? 160 : 200" :smallFontSize="selectView"/>
      </v-col>
       <v-col cols="6" class="d-flex">
         <v-checkbox class="align-center" v-if="selectView"></v-checkbox>
        <Card deckName=" " word="Deliberate" :height="selectView ? 160 : 200" :smallFontSize="selectView"/>
      </v-col>
       <v-col cols="6" class="d-flex">
         <v-checkbox class="align-center" v-if="selectView"></v-checkbox>
        <Card deckName=" " word="Deliberate" :height="selectView ? 160 : 200" :smallFontSize="selectView"/>
      </v-col>
       <v-col cols="6" class="d-flex">
         <v-checkbox class="align-center" v-if="selectView"></v-checkbox>
        <Card deckName=" " word="Deliberate" :height="selectView ? 160 : 200" :smallFontSize="selectView"/>
      </v-col>
    </v-row>

    <v-container class="collect-actions d-flex justify-space-around" v-if="selectView">
      <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
      >
        <template v-slot:activator="{ on }">
          <v-btn depressed dark color="#344955" v-on="on">Read</v-btn>
        </template>
        <NewCard @close-dialog="dialog = false"/>
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
      dialog: false,
      selectView: false,
    }),
    methods: {
      clickSelect() {
        this.selectView = true;
        this.$emit('select-view', true);
      },
      clickBack() {
        this.selectView = false;
        this.$emit('select-view', false);
      }
    }
  }
</script>

<style scoped>
.collect-actions {
  left: 0;
  bottom: 0;
  position: fixed;
  z-index: 5;
  width:100%;
  background:white;
}
</style>