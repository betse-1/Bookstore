<template>
  <div
    id="e3"
    style="max-width: 900px; max-height: 900px; margin: auto;"
    class="my-5"
  >
<Navbar />
      <v-container>
        <v-layout>
          <v-flex xs12>
            <v-card class="mt-5">
              <v-layout class="my-2">
                <v-flex xs5>
                  <v-img
                    src="https://images-na.ssl-images-amazon.com/images/I/51Iw1UPnjwL._SX324_BO1,204,203,200_.jpg"
                    height="300px"
                    contain
                    class="my-3"
                  ></v-img>
                </v-flex>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline"> EMMA IN THE NIGHT</div>
                      <div class="subheading">By Wendy Walker</div>
                      <div class="my-5"></div>
                      <div class="subheading">  Novel</div>
                      <div class="subheading"> SHELF 5</div>
                      <div class="subheading"> ISBN:34565</div>
                      <div class="subheading"> (2014)</div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                   <v-btn flat to="/user">Home</v-btn>
                <v-spacer></v-spacer>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import { Script } from 'vm';

  export default {
     name: 'App',
  components: {Navbar}
  }
</script>