<template>
 <v-container>
    <v-row class="d-flex align-center">

        <v-btn class="mr-4" icon @click="clickBack">
           <v-icon class="material-icons">keyboard_arrow_left</v-icon>
        </v-btn>
        
        <div>Deck Name</div>
    </v-row>
            <v-card

              class="mx-auto d-flex flex-column flex-grow-1 ma-8"
              max-width="340"
              height="500"
              outlined
            >
              <row class="d-flex justify-center playcard-background textcolor" >
                  <div class="text-h5 align-center ma-8">
                    Art
                  </div>
              </row>
                  <v-divider></v-divider>
                
              <div class="backcard-content d-flex justify-start align-center flex-grow-1 px-6 pt-8 mt-6 scrollbox">
                  I took a course on art in the 20th century
                  the artsThe arts are vitally important to our city.
                  
                  
              </div>
            </v-card>
                 
            
    <v-row>
      <v-progress-linear 
      value="10" background-color="#C3C7C9"
      color="#009688" class="mx-4">
      </v-progress-linear>       
    </v-row>
    <v-row class="d-flex justify-space-around mt-8">
      <v-btn icon>
        <v-icon class="material-icons">replay</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon class="material-icons" x-large>skip_previous</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon class="material-icons" x-large>play_arrow</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon class="material-icons" x-large>skip_previous</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon class="material-icons">cloud_download</v-icon>
      </v-btn>

  

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
.playcard-background {
  background-color: #F4AA33;
}
.textcolor {
  color:white;
}
.iconsize {
  font-size: 48px;
}
</style>