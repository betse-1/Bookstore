<template>
  <v-container class="my-5">
    <v-layout text-xs-center wrap>
      <v-flex xs12>
        <v-img :src="require('../assets/book.png')" class="my-5" contain height="200"></v-img>
      </v-flex>

      <v-flex xs3></v-flex>
      <v-flex xs6 mb-5>
        <v-text-field
          append-icon="mic"
          class="mx-2"
          label="Search"
          solo
          prepend-inner-icon="search"
          solo-inverted
        ></v-text-field>
      </v-flex>
      <v-flex xs3></v-flex>
    </v-layout>
    <v-layout text-xs-center>
      <v-flex xs5></v-flex>
      <v-flex xs1>
        <v-btn color="grey lighten-1" fab large dark @click="dialog = !dialog">
          <v-icon>add</v-icon>
        </v-btn>
        <v-dialog v-model="dialog" max-width="330px">
          <v-container class="pt-5">
            <v-layout text-xs-center wrap white--text>
              <v-flex xs6>
                <div class="mt-5">
                <div class="title font-weight-light ">Shelf</div>
                <v-btn fab dark large color="cyan">
                  <v-icon dark>add</v-icon>
                </v-btn>
                </div>
              </v-flex>
              <v-flex xs6>
                <div class="mt-5">
                <div class="title font-weight-light">Book</div>
                <v-btn fab dark large color="purple" to="/About">
                  <v-icon dark>book</v-icon>
                </v-btn>
                </div>
              </v-flex>
            </v-layout>
          </v-container>
        </v-dialog>
      </v-flex>
      <v-flex xs1>
        <div>
          <v-btn color="grey lighten-1" fab large dark to="/SearchHistory">
            <v-icon>search</v-icon>
          </v-btn>
        </div>
      </v-flex>
      <v-flex xs5></v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    };
  }
};
</script>