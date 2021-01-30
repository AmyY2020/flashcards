<template>
 <v-container>
     <v-row class="mt-8">

       <v-btn class="mx-1" depressed dark color="#344955" @click="clickListen">Read</v-btn>
       <v-btn class="mx-1" depressed dark color="#344955">Listen</v-btn>
       <v-spacer/>
       


        <v-menu offset-y>
                            <template v-slot:activator="{ on}">
                              <v-btn
                              
                                v-on="on"
                                outlined
                                class="quiz-select px-2"
                              >
                                Mutiple Choices
                                 <v-icon>
                                keyboard_arrow_down
                                 </v-icon>
                              </v-btn>
                            </template>
                            <v-list>
                              <v-list-item
                                v-for="(item, index) in items"
                                :key="index"
                              >
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                              </v-list-item>
                            </v-list>
                          </v-menu>
      
     </v-row>
     <v-row class="mt-8">
        <v-carousel  
        hide-delimiters 
        v-model="model"
        
        >
             <v-carousel-item
               v-for="(color, i) in colors"
               :key="color"
               
             >
               <v-sheet
                class="px-12 sheet-border"
                 height="100%"
                 color="white"
                 
               >
                    <v-row
                      class="py-8 px-10"

                    >
                      <div class="quiz-text">
                        Question {{ i + 1 }}
                      </div>
                    </v-row>
                    <v-row class="quiz-text mx-16 my-8">
                      it seems to me that they never gave a thought to _________ future problems when the plans
                      were being laid down five years ago. 
                    </v-row>

                    <v-row class="d-flex flex-column">
                        <div>
                          <v-btn 
                          outlined
                          fab
                          color="teal"
                          class="button-size pa-2 my-2 ml-16 mr-4">
                            A
                          </v-btn>
                          <span class="quiz-text">unbelievable</span>
                        </div>
                        <div>
                          <v-btn
                          outlined
                          fab
                          color="teal"
                          class="button-size pa-2 my-2 ml-16 mr-4">
                            B
                          </v-btn>
                          <span class="quiz-text">untrustworthy</span>
                        </div>
                        <div>
                          <v-btn
                          outlined
                          fab
                          color="teal"
                          class="button-size pa-2 my-2 ml-16 mr-4">
                            C
                          </v-btn>
                          <span class="quiz-text">probable</span>
                        </div>
                        <div>
                          <v-btn
                          outlined
                          fab
                          color="teal"
                          class="button-size pa-2 my-2 ml-16 mr-4">
                            D
                          </v-btn>
                          <span class="quiz-text">unreasonable</span>
                        </div>
                      
                    </v-row>
                     <v-row class="d-flex justify-center quiz-text mt-12">
                      1/5
                     </v-row>



               </v-sheet>
             </v-carousel-item>
             
        </v-carousel>
        
     </v-row>
    

 </v-container>
</template>

<script>
  export default {
    name: 'CardDisplay',
    props: {
    },
    data: () => ({
      model: 0,
    colors: [
      'gray',
      'secondary',
      'yellow darken-2',
      'red',
      'orange',
    ],
      dialog: false,
      deckName: '',
      sheet: false,
      items: [
      { title: 'Matching'},
      { title: 'Ture/False'},
      { title: 'Gap-filling'},
      { title: 'Error correction'},
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
.playcard-background {
  background-color: #F4AA33;
}
.textcolor {
  color:white;
}
.iconsize {
  font-size: 48px;
}
.quiz-select {
  text-transform: capitalize;
  font-size: 12px;
}
.quiz-text {
  color: black;
}
.button-size {
  height: 36px;
  width: 36px;
}
.sheet-border {
  border-color: rgb(196, 190, 190) !important;
   border-width: 1px;
  border-style: solid;
}
</style>