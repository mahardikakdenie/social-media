<template>
  <v-card elevation="6">
    <v-card-title>
      <v-avatar color="orange" size="40" class="mr-2">
        <span class="white--text text-h5">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"
        /></span>
      </v-avatar>
      <span class="primary--text cursor-pointer"> {{ user.username }}</span>
      <v-spacer></v-spacer>
      <span class="text--sm"> {{ date }} </span>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text v-html="text" />
    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn color="primary" text>
        <v-icon color="error">mdi-delete</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    isComments: {
      type: Boolean,
      default: () => false,
    },
    text: {
      type: String,
      default: () => "",
    },
    date: {
      type: String,
      default: () => "",
    },
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    openComments() {
      this.$emit("openComments");
    },
  },
};
</script>

<style lang="scss">
.cursor-pointer {
  cursor: pointer;
}
</style>
