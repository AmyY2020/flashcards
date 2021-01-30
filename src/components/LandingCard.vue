<template>
 <v-container class="flex-grow-1 background-color">
    <v-row class="text-h4 d-flex justify-center my-16">     
        <div>Welcome</div>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col cols="11"> 
        <v-text-field
                 label="Email"
                 solo
        ></v-text-field>
        <v-text-field
                 label="Password"
                 solo
        ></v-text-field>

        <v-btn 
          dark 
          block 
          color="#344955"
          class="pa-6"
          @click="clickLogin"
        >
          Login
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-space-between align-center">
     
        <v-btn text class="ml-2">
          Forget Password
        </v-btn>
      <v-btn color="#F4AA33" text x-large>
        SING UP
      </v-btn>
        
    
    </v-row>


    <v-row class="d-flex justify-center mt-8">
      Or login with
    </v-row>
    <v-divider class="mb-8"> </v-divider>
    <v-row class="d-flex justify-space-between mx-4">
      <v-btn
        tile
      >
        <v-icon class="mr-2">
          mdi-facebook
        </v-icon>
        Facebook
      </v-btn>
       <v-btn
        tile
      >
        <v-icon class="mr-2">
          mdi-google-plus
        </v-icon>
        Google
      </v-btn>
    </v-row>

 </v-container>
</template>

<script>
  import { mapMutations } from 'vuex';

  export default {
    name: 'LandingCard',
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
      ...mapMutations(['login']),
      clickCard() {
        this.flip = !this.flip;
      },
      clickLogin() {
        this.login();
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
.background-color {
  background-color: rgb(198, 212, 212);
}
</style>