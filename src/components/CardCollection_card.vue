<template>
  <v-container class="container-width">
    <v-row class="text-center d-flex justify-between mt-6" v-if="!newCard">
        <v-col cols="6" class="d-flex justify-start">
          <v-menu offset-y>
              <template v-slot:activator="{ on,}">
                <v-btn
                  outlined
                  v-on="on"
                >
                  Select
                  <v-icon>
                  keyboard_arrow_down
                  </v-icon>
                </v-btn>
              </template>
             <v-list>
               <v-list-item
                 v-for="(item, index) in items"
                 :key="index"
                 @click="selectView=!selectView"
               >
                 <v-list-item-title>{{ item.title }}</v-list-item-title>
               </v-list-item>
             </v-list>
        </v-menu>
        <div v-if="selectView || selected.length > 0" class="d-flex justify-space-around ml-2">
           <v-btn class="mx-1" depressed dark color="#344955" v-on="on">Read</v-btn>
           <v-btn class="mx-1" depressed dark color="#344955">Listen</v-btn>
           <v-btn class="mx-1" depressed dark color="#344955">Test</v-btn>
           <v-btn class="mx-1" depressed light>Delete</v-btn>
            
        </div>
      </v-col>
      
    
      <v-col cols="6" class="d-flex justify-end">
        <v-btn class="mx-4"
          color="#F4AA33"
          dark
          @click="newCard=true"
        >
          <v-icon>add</v-icon>
        
        </v-btn>
        <v-btn icon class="ml-4" @click="listView=false">
          <v-icon>view_module</v-icon>
        </v-btn>
        <v-btn icon @click="listView=true">
          <v-icon>view_headline</v-icon>
        </v-btn>

      </v-col>
    </v-row>

    <div v-if="!newCard && !listView">

          <v-row>
              <v-col cols="3" class="mt-8">
      
                <Card 
                  deckName="History Story" 
                  word="History"
                  @click.native="clickCard"
                  :selectView="selectView"
                />
                
              </v-col>
              <v-col cols="3" class="d-flex mt-8">
                
                <Card deckName="Art Business" word="Art" @click.native="clickCard" :selectView="selectView"/>
              </v-col>
               <v-col cols="3" class="d-flex mt-8">
                 
                <Card deckName="General " word="Deliberate" @click.native="clickCard" :selectView="selectView"/>
              </v-col>
               <v-col cols="3" class="d-flex mt-8">
                 
                <Card deckName="Test 1" word="Deliberate" @click.native="clickCard" :selectView="selectView"/>
              </v-col> 
             <v-col cols="3" class="d-flex">
                 
                <Card deckName="Test 2" word="Deliberate" @click.native="clickCard" :selectView="selectView"/>
              </v-col>
               <v-col cols="3" class="d-flex">
                 
                <Card deckName="Test 3 " word="Deliberate" @click.native="clickCard" :selectView="selectView"/>
              </v-col>
          </v-row>
    
    </div>
    <div v-else-if="!newCard && listView">
      <v-data-table
        v-model="selected"
        :headers="headers"
        :items="cardList"
        item-key="name"
        show-select
        class="elevation-1"
      >
        <template v-slot:item.name="{ item }">
          <div class="d-flex">
            
            <div class="text-subtitle-1 font-weight-bold">
              {{ item.name }}
              <br/>
              <span class="font-italic text-subtitle-2 font-weight-light">2012/02/12</span>
            </div>
          </div>
        </template>

        <template v-slot:item.share="{ item }">
          <v-icon style="font-size: 16px;" class="mr-4">
            share
          </v-icon>
         
          <v-icon style="font-size: 16px;">
            cloud_download
          </v-icon>
          {{ item.share}}
          
         
        </template>

        <template v-slot:item.actions="{ item }">
            <v-icon
              small
              class="mr-2"
               @click="editItem(item)"
            >
              mdi-pencil
            </v-icon>
            <v-icon
              small
               @click="deleteItem(item)"
            >
              mdi-delete
            </v-icon>
        </template>
      </v-data-table>

    </div>
    <NewCard class="mt-4" @close-dialog="newCard = false" v-else/>

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
      items: [
        { title: 'Mutiple' },
        { title: 'Local' },
        { title: 'All' },
        { title: 'None' },
      ],
      newCard: false,
      listView: false,
      selected: [],
       headers: [
        {
          text: 'Deck',
          align: 'start',
          sortable: false,
          value: 'name',
        
          
        },
        
        { text: 'Created by', value: 'createdBy', sortable: false },
        { text: 'Number of words', value: 'numberWords', sortable: false },
        { text: '', value: 'share', sortable: false, align:'end' },
        { text: '', value: 'actions', sortable: false, align:'end' },
        
       
      ],
      cardList: [
        {
          name: 'Art Business',
          createdBy: 'me',
          numberWords: 24,
          share: '',
          cloud: '1%',
        },
        {
          name: 'History',
          dackName: '',
          createdBy: 'me',
          numberWords: 5,
          share: '',
          cloud: '1%',
        }
      ]
    }),
    methods: {
      clickSelect() {
        this.selectView = true;
        this.$emit('select-view', true);
      },
      clickBack() {
        this.selectView = false;
        this.$emit('select-view', false);
      },
      clickCard() {
        this.$router.push('cards');
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
.container-width {
  max-width: 1200px;
}
</style>