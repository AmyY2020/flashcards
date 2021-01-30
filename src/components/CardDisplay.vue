<template>
 <v-container>
    <v-row class="d-flex align-center mt-8">

       <v-btn class="mx-1" depressed dark color="#344955" @click="clickListen">Listen</v-btn>
       <v-btn class="mx-1" depressed dark color="#344955" @click="clickQuiz">Quiz</v-btn>
        <v-spacer/>
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
       <v-btn icon>
         <v-icon>share</v-icon>
       </v-btn>
    </v-row>

    <div class="book d-flex justify-center" v-if="!listView">
      <div class="page mt-6">
        <v-card
          class="mx-auto d-flex flex-column flex-grow-1"
          max-width="340"
          height="400"
          outlined
        >
            <v-row class="text-h5 d-flex justify-center align-center flex-grow-1">
                <div>
                  Art Business
                </div>
                
               
            </v-row>
      
          
        </v-card>
      </div>

      <div class="page">
        
          <div class="flip-container mt-6">
            <div class="flipper" :class="{flip}" @click="clickCard">
              <div class="frontcard">
                  <v-card
                    class="mx-auto d-flex flex-column flex-grow-1"
                    max-width="340"
                    height="400"
                    outlined
                  >
                      <div class="d-flex justify-space-between">
                          <div class="ml-4 mt-5">
                            Art Business
                          </div>
                           <v-menu offset-y>
                            <template v-slot:activator="{ on, attrs }">
                              <v-btn icon class="mr-4 mt-3"
                                v-bind="attrs"
                                v-on="on"
                              >
                                <v-icon>more_horiz</v-icon>
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
                      </div>
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
                    <div class="d-flex justify-space-between">
                          <div class="ml-4 mt-5">
                            Art Business
                          </div>
                          <v-btn icon class="mr-4 mt-3">
                            <v-icon>more_horiz</v-icon>
                          </v-btn>
                    </div>
                    <div>
                      <v-btn icon class="px-8 pt-8 mb-0">
                        <v-icon class="material-icons">volume_up</v-icon>
                      </v-btn>
                    </div>

                    <div class="backcard-content d-flex justify-start flex-grow-1 px-6 pt-8 mt-6 scrollbox">
                        I took a course on art in the 20th century
                        the artsThe arts are vitally important to our city.
                    </div>
                  </v-card>

              </div>
            </div>
          </div>
      </div>
    </div>

    <div v-else-if="!newCard && listView">
      <v-data-table
        id="cards-table"
        v-model="selected"
        :headers="headers"
        :items="cardList"
        item-key="name"
        show-select
        class="elevation-1 mt-8"
      > 
     
      <template v-slot:item.name="{ item }">
              <div class="d-flex">

                <div class="text-subtitle-1 font-weight-bold">
                   <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                         <span
                          v-bind="attrs"
                          v-on="on"
                         >
                         {{ item.name }}
                         </span>
                      </template>
                      <span>deck name</span>
                    </v-tooltip>
                  <br/>
                  <span class="font-italic text-subtitle-2 font-weight-light">2012/02/12</span>
                </div>
              </div>
      </template>

      <template v-slot:item.explanation="props">
          <v-edit-dialog
            :return-value.sync="props.item.explanation"
          >
            {{ props.item.explanation }}
            <template v-slot:input>
              <v-textarea
                v-model="props.item.explanation"
                :rules="[max255chars]"
                label="Edit"
                rows="3"
                counter
              ></v-textarea>
            </template>
          </v-edit-dialog>
        </template>

        <template v-slot:item.examples="props">
          <v-edit-dialog
            :return-value.sync="props.item.examples"
          >
            {{ props.item.examples }}
            <template v-slot:input>
              <v-textarea
                v-model="props.item.examples"
                :rules="[max255chars]"
                label="Edit"
                rows="3"
                counter
              ></v-textarea>
            </template>
          </v-edit-dialog>
        </template>

        <template v-slot:item.share="{ item }">
          <v-icon style="font-size: 12px;" class="mr-4">
            share
          </v-icon>
         
          <v-icon style="font-size: 12px;">
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
      max255chars: v => v.length <= 255 || 'Input too long!',
      items: [
      { title: 'Edit', icon: 'share' },
      { title: 'Delete', icon: 'play_circle', router: 'player'},
      
      ],
      flip: false,
      editable: false,
      listView: false,
      headers: [
        {
          text: 'Card',
          align: 'start',
          sortable: false,
          value: 'name',
        
          
        },
        
        
        { text: 'Explanation', value: 'explanation', sortable: false },
        { text: 'Examples', value: 'examples', sortable: false },
        { text: 'Created by', value: 'createdBy', sortable: false },
        { text: '', value: 'share', sortable: false, align:'end' },
        { text: '', value: 'actions', sortable: false, align:'end' },
        
       
      ],
      cardList: [
        {
          name: 'Art',
          createdBy: 'me',
          explanation: 'Art Business',
          examples: 'I love art.',
          share: '',
          cloud: '1%',
        },
        {
          name: 'History',
          createdBy: 'me',
          explanation: '',
          examples: '',
          share: '',
          cloud: '1%',
        }],
    }),
    methods: {
      clickCard() {
        this.flip = !this.flip;
      },
      clickDeckItem(router) {
        this.$router.push(router);
      },
      clickListen() {
        this.$router.push('player');
      },
      clickQuiz() {
        this.$router.push('quiz');
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
  
  transform: translateX(0) rotateY(-180deg);
}
.flipper {
  transform-origin: center left;
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
.page {
  width: 23vw;
}

#cards-table /deep/ table th:nth-child(1) {
  width: 5%;
}
#cards-table /deep/ table th:nth-child(2) {
  width: 15%;
}
#cards-table /deep/ table th:nth-child(3) {
  width: 25%;
}
#cards-table /deep/ table th:nth-child(4) {
  width: 25%;
}
#cards-table /deep/ table th:nth-child(5) {
  width: 10%;
}
#cards-table /deep/ table th:nth-child(6) {
  width: 10%;
}
#cards-table /deep/ table th:nth-child(7) {
  width: 10%;
}


</style>