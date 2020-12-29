<template>
  <v-card>
    <v-row class="d-flex justify-end">
        <v-btn class="mr-6 mt-5" icon @click="$emit('close-dialog')">
           <v-icon class="material-icons">clear</v-icon>
        </v-btn>
    </v-row>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-combobox
                    v-model="deckName"
                    :items="items"
                    label="Deck Name"
                    clearable
                    outlined
                    dense
                  ></v-combobox>
                </v-col>

                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    label="New Word*"
                    placeholder=""
                    clearable
                    outlined
                    dense
                    required
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-textarea
                    label="Explanation"
                    name="Explanation"
                    clearable
                    outlined
                    dense
                    rows="4"
                  >
                  </v-textarea>
                </v-col>

                <v-col cols="12">
                  <v-textarea
                    label="Example Sentences"
                    name="Example"
                    clearable
                    outlined
                    dense
                    rows="4"
                  >
                  </v-textarea>
                </v-col>
              </v-row>
              <v-row class="d-flex justify-center">
              <!-- <v-card-actions> -->
                <!-- <v-spacer></v-spacer> -->
                  <v-btn class="mb-8"
                    color="#F4AA33"
                    dark
                    @click="createCard"
                  >
                    Create
                  </v-btn>


              <!-- </v-card-actions> -->
              </v-row>
            </v-container>

          </v-card-text>
        </v-card>
</template>

<script>
  export default {
    name: 'Card',
    props: {
    },
    data: () => ({
      dialog: false,
      deckName: '',
      items: [
        'Art Business',
        'History Story',
      ],
    }),
    methods: {
      createCard() {
        this.$router.push('cards');
        this.$emit('close-dialog');
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
</style>