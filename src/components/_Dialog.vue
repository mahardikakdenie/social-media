<template>
  <v-container>
    <v-dialog :persistent="persistent" width="50%" v-model="dialog.open">
      <v-card>
        <v-system-bar
          :color="$vuetify.theme.dark ? '#141C31' : '#F0F8FF'"
          window
        >
          <v-toolbar-title
            :class="$vuetify.theme.dark ? 'white--text' : ' black--text'"
            class="font-size-ather-roboto-mono"
          >
            <v-icon :color="$vuetify.theme.dark ? 'white' : 'black'">
              {{ icon }}
            </v-icon>
            {{ title }}
          </v-toolbar-title>

          <v-spacer />

          <v-icon v-if="withClose" @click="dialog.open = false">
            mdi-close
          </v-icon>
        </v-system-bar>
        <div v-if="!isNotice">
          <v-container>
            <v-form>
              <v-container>
                <v-row>
                  <v-col cols="12" v-for="(i, key) in dataUser" :key="key">
                    <v-text-field
                      v-if="key === 'username'"
                      v-model="dataUser[key]"
                      :label="formatTitle(key)"
                      outlined
                    ></v-text-field>
                    <v-textarea
                      v-model="dataUser[key]"
                      v-if="key === 'description'"
                      outlined
                      :label="formatTitle(key)"
                    ></v-textarea>
                  </v-col>
                  <v-col class="d-flex justify-end">
                    <v-btn @click="createUsername" color="primary">
                      <span class="white--text"> Create Username</span>
                      <v-icon small class="ml-2" color="white">mdi-send</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-container>
        </div>
        <div v-else>
          <v-container>
            <v-row>
              <v-col cols="12">
                <h3>Are you sure you want to delete this status</h3>
              </v-col>
              <v-col class="d-flex justify-end">
                <v-btn @click="deleteStatus(index)" color="error">
                  <span class="white--text"> Create Username</span>
                  <v-icon small class="ml-2" color="white">mdi-delete</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  props: {
    dialog: {
      type: Object,
      default: () => {},
    },
    icon: {
      type: String,
      default: () => "",
    },
    title: {
      type: String,
      default: () => "",
    },
    index: {
      type: Number,
      default: () => 0,
    },
    persistent: {
      type: Boolean,
      default: () => false,
    },
    withClose: {
      type: Boolean,
      default: () => false,
    },
    isNotice: {
      type: Boolean,
      default: () => false,
    },
  },
  data: () => ({
    dataUser: {
      username: "",
      description: "",
    },
  }),
  computed: {
    // user() {
    //   return this.$store.state.user;
    // },
    comments() {
      return this.$store.state.data[this.index].comments;
    },
  },
  methods: {
    uppercaseFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    formatTitle(str) {
      return this.uppercaseFirstLetter(str.replace(/([A-Z])/g, " $1").trim())
        .split("Id")
        .join("");
    },
    createUsername() {
      this.$store.commit("SET_USER", this.dataUser);
      this.dialog.open = false;
    },
    deleteStatus(i) {
      console.log(i);
    },
  },
};
</script>

<style></style>
