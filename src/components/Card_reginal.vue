<template>
 
  <v-card
    class="paper mx-auto d-flex flex-column flex-grow-1"
    max-width="250"
    :height="height || 200"
    outlined
    :color="selected ? '#E3F2FD' : ''"
  >
    <v-card-text class="d-flex flex-column flex-grow-1 pb-0 paper-content">
      
      <div>
        {{deckName}}
      </div>
      
      <div class="text--primary d-flex justify-center align-center flex-grow-1" :class="[smallFontSize ? 'cardtext-small' : 'cardtext-large']">
        <div class="d-flex align-center flex-column">
          {{word}}
          <v-checkbox class="mt-0" v-if="selectView" v-model="selected" @click.native.stop></v-checkbox>
        
        </div>
      </div>
        
      <!-- <div> -->
         <v-container>
          <v-row class="d-flex justify-end">
            <v-icon class="material-icons" :class="[smallFontSize ? 'icon-small' : 'icon-large']">share</v-icon>
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
      smallFontSize: Boolean,
      selectView: Boolean,
    },
    data: () => ({
      selected: false,
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
.cardtext-large {
  font-size: 20px;
  
}
.cardtext-small {
  font-size: 16px;
  
}
.icon-large {
  font-size: 14px;
  color: green;
}
.icon-small {
  font-size: 12px;
  color: green;
}
.paper-content {
  z-index: 1;
}
.paper {
  /* Need position to allow stacking of pseudo-elements */
  position: relative;
  z-index: 0;
}

.paper,
.paper::before {
  /* Add shadow to distinguish sheets from one another */
  box-shadow: 1px 1px 1px rgba(0,0,0,0.15);
}

.paper::before{
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  
}

/* Second sheet of paper */
.paper::before {
  left: 7px;
  top: 5px;
  z-index: -1;
}
</style>