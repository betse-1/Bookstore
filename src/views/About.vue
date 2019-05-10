<template>
 <v-container class="my-5">
   <Navbar/>
  <v-layout justify-center>
    <v-flex xs12 sm10 md8 lg6>
      <v-card ref="form">
        <v-card-text>
          <v-text-field
            ref="auther"
            v-model="auther"
            :rules="[() => !!auther || 'This field is required']"
            :error-messages="errorMessages"
            label="Auther"
            placeholder=""
            required
          ></v-text-field>
          <v-text-field
            ref="name"
            v-model="name"
            :rules="[() => !!name || 'This field is required']"
            :error-messages="errorMessages"
            label="Title"
            placeholder=""
            required
          ></v-text-field>
          <v-text-field
            ref="name"
            v-model="name"
            :rules="[() => !!name || 'This field is required']"
            :error-messages="errorMessages"
            label="ISBN"
            placeholder=""
            required
          ></v-text-field>
          <v-text-field
            ref="name"
            v-model="name"
            :rules="[() => !!name || 'This field is required']"
            :error-messages="errorMessages"
            label="Gener"
            placeholder=""
            required
          ></v-text-field>
          <v-text-field
            ref="name"
            v-model="name"
            :rules="[() => !!name || 'This field is required']"
            :error-messages="errorMessages"
            label="Published Date"
            placeholder=""
            required
          ></v-text-field>
          <!-- <v-text-field
            ref="name"
            v-model="name"
            :rules="[() => !!name || 'This field is required']"
            :error-messages="errorMessages"
            label="Publisher"
            placeholder=""
            required
          ></v-text-field> -->
        </v-card-text>
        <v-divider class="mt-5"></v-divider>
        <v-card-actions>
          <v-btn flat to="/Home">Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-slide-x-reverse-transition>
            <v-tooltip
              v-if="formHasErrors"
              left
            >
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  class="my-0"
                  @click="resetForm"
                  v-on="on"
                >
                  <v-icon>refresh</v-icon>
                </v-btn>
              </template>
              <span>Refresh form</span>
            </v-tooltip>
          </v-slide-x-reverse-transition>
          <v-btn color="primary" flat @click="submit">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
 </v-container>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

  export default {
     name: 'App',
  components: {Navbar},

    data: () => ({
     errorMessages: '',
      name: null,
      auther: null,
      formHasErrors: false
    }),

    computed: {
      form () {
        return {
          name: this.name,
        }
      }
    },

    watch: {
      name () {
        this.errorMessages = ''
      }
    },

    methods: {
      resetForm () {
        this.errorMessages = []
        this.formHasErrors = false

        Object.keys(this.form).forEach(f => {
          this.$refs[f].reset()
        })
      },
      submit () {
        this.formHasErrors = false

        Object.keys(this.form).forEach(f => {
          if (!this.form[f]) this.formHasErrors = true

          this.$refs[f].validate(true)
        })
      }
    }
  }
</script>