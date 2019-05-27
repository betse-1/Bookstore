<template>
  <v-container>
   <Navbar/>

<v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card flat>
        <v-list three-line>
          <template v-for="(item, index) in items">
            <v-subheader
              v-if="item.header"
              :key="item.header"
            >
              {{ item.header }}
            </v-subheader>

            <v-divider
              v-else-if="item.divider"
              :key="index"
              :inset="item.inset"
            ></v-divider>

            <v-list-tile
              v-else
              :key="item.title"
              avatar
             @click.stop="showModal(item)"
            >
             <v-list-tile-avatar>
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>



      <v-dialog
      v-model="dialog"
      max-width="600"
    >
          <!-- <div class="text-lg-right">
            <v-btn fab dark small  @click="dialog = false" color="cyan">
                  <v-icon dark>close</v-icon>
                </v-btn>
          </div> -->
            <v-card>
              <v-card-action class="text-lg-right">
                <v-layout>
                 <v-spacer></v-spacer>
                 <v-btn fab dark small  @click="dialog = false" color="cyan">
                  <v-icon dark>close</v-icon>
                </v-btn>
                </v-layout>
              </v-card-action>
              <v-layout>

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
                      <div class="headline">{{item.title}}</div>
                      <div class="subheading">{{item.subtitle}}</div>
                      <div class="my-4"></div>
                      <div class="subheading">  Novel</div> 
                      <div class="subheading"> ISBN:34565</div>
                      <div class="subheading"> (2014)</div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                <v-spacer></v-spacer>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
              </v-card-actions>
            </v-card>
    </v-dialog>
    </v-flex>
  </v-layout>

  </v-container>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
  export default {
  name: 'App',
  components: {Navbar},
    data () {
      return {
        dialog: false,
        item: {},
        items: [
          {
            title: 'Absolution Gap by Alastair Reynolds',
            subtitle: "Ali Connors &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
          },
          { divider: true, inset: true },
          {
          
            title: 'Accelerando by Charles Stross ',
            subtitle: "Wish I could come, but I'm out of town this weekend."
          },
          { divider: true, inset: true },
          {
           
            title: 'Acidity by Nadeem F. Paracha',
            subtitle: "Do you have Paris recommendations? Have you ever been?"
          },
          { divider: true, inset: true },
          {
          
            title: 'Adulthood Rites, Book Two of Xenogenesis Series by Octavia Butler',
            subtitle: "Have any ideas about what we should get Heidi for her birthday?"
          },
          { divider: true, inset: true },
          {
   
            title: 'Against the Fall of Night, by Arthur C. Clarke',
            subtitle: " We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
          },
           { divider: true, inset: true },
          {
           
            title: 'An Age by Brian Aldiss',
            subtitle: " I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
          }
        ]
      }
    },
    methods: {
      showModal(item) {
        this.item = item;
        this.dialog = true;
      }
    }
  }
</script>