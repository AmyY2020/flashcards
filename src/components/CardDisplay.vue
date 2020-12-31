<template>
 <v-container>
    <v-row class="d-flex align-center">

        <v-btn class="mr-4" icon @click="clickBack">
           <v-icon class="material-icons">keyboard_arrow_left</v-icon>
        </v-btn>
        
        <div v-if="!editable" @click="editable=true">Deck Name</div>
        <v-text-field
          v-else
          label="Deck Name"
          single-line
          clearable
        ></v-text-field>
        <v-spacer/>
     
      <v-menu offset-x>
        <template v-slot:activator="{ on }">
          <v-btn class="ma-4" icon  v-on="on">
             <v-icon class="material-icons">format_list_bulleted</v-icon>
            </v-btn>
        </template>
        <v-list>
          
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            
          >
          <v-list-item-icon class="mr-4">
              <v-icon color="#344955" v-text="item.icon"></v-icon>
          </v-list-item-icon>
            <v-list-item-title class="mr-4">{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
     
    </v-row>
    
    <div class="flip-container mt-6">
      <div class="flipper" :class="{flip}" @click="clickCard">
        <div class="frontcard">
            <v-card
              class="mx-auto d-flex flex-column flex-grow-1"
              max-width="340"
              height="400"
              outlined
            >
              <div class="text-h4 d-flex justify-center align-center flex-grow-1">
                 Art
                <v-btn icon>
                  <v-icon class="material-icons">volume_up</v-icon>
                </v-btn>
              </div>
            </v-card>
        </div>
        <div class="backcard">
            <v-card
              class="mx-auto d-flex flex-column flex-grow-1"
              max-width="340"
              height="400"
              outlined
            >
              <div>
                <v-btn icon class="px-8 pt-8 mb-0">
                  <v-icon class="material-icons">volume_up</v-icon>
                </v-btn>
              </div>

              <div class="backcard-content d-flex justify-start align-center flex-grow-1 px-6 pt-8 mt-6 scrollbox">
                  I took a course on art in the 20th century
                  the artsThe arts are vitally important to our city.
                  x
                  
              </div>
            </v-card>

        </div>
      </div>
    </div>
    
         
        
               
            
    <v-row class="d-flex justify-end">
       <v-btn class="ma-4" icon @click="sheet = !sheet">
          <v-icon class="material-icons">more_horiz</v-icon>
           
        </v-btn>
        <v-bottom-sheet v-model="sheet" hide-overlay>
        <v-sheet
          class="text-center"
          height="100px"
        >
          <v-btn
            class="mt-6"
            text
            color="green"
            @click="sheet = !sheet"
          >
            Edit
          </v-btn>
          <v-btn
            class="mt-6"
            text
            color="red"
            @click="sheet = !sheet"
          >
            Delete
          </v-btn>
          
        </v-sheet>
      </v-bottom-sheet>
    </v-row>
 </v-container>
</template>

<script>
  export default {
    name: 'CardDisplay',
    props: {
    },
    data: () => ({
      dialog: false,
      deckName: '',
      sheet: false,
      items: [
      { title: 'Share', icon: 'share' },
      { title: 'Listen', icon: 'play_circle'},
      { title: 'Test', icon: 'assignment'},
      ],
      flip: false,
      editable: false,
    }),
    methods: {
      clickCard() {
        this.flip = !this.flip;
      }
    }
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
.flip-container {
  height: 400px;
}
.flip-container .flipper.flip {
  transform: rotateY(180deg);
}
.flipper {
  transition: 0.8s;
  transform-style: preserve-3d;
}
.frontcard, .backcard {
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
.frontcard{
  z-index: 2;
  transform: rotateY(0deg);
}
.backcard {
  transform: rotateY(180deg);
  
}
.scrollbox {
  overflow-y: scroll;
}
.backcard-content{
  font-size: 20px;
  font-family: "Roboto", sans-serif
}
</style>