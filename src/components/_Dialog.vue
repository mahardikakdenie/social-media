<template>
  <v-container>
    <v-dialog width="60%" v-model="dialog.open">
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

          <v-icon @click="dialog.open = false"> mdi-close </v-icon>
        </v-system-bar>
        <div>
          <v-container>
            <v-row>
              <Input elevation="0" title="Comment" />
            </v-row>
            <v-row>
              {{ comments }}
              <v-col>
                <displayComponents />
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
  },
  computed: {
    comments() {
      return this.$store.state.data[this.index].comments;
    },
  },
  components: {
    Input: () => import("@/components/Input"),
    displayComponents: () => import("@/components/_Display"),

    // CardComponents: () => import("@/components/Card"),
  },
};
</script>

<style></style>
