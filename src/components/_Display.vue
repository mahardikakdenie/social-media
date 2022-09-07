<template>
  <v-card elevation="6">
    <v-card-title>
      <v-avatar color="orange" size="40" class="mr-2">
        <span class="white--text text-h5">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"
        /></span>
      </v-avatar>
      <span class="primary--text"> User</span>
      <v-spacer></v-spacer>
      <span class="text--sm"> 22 maret 2002 - 21:09 </span>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text v-html="text" />
    <v-card-actions>
      <v-btn text color="">
        <v-icon color="primary">mdi-thumb-up</v-icon>
      </v-btn>
      <v-btn text color="error">
        <v-icon color="error">mdi-thumb-down</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn v-if="isComments" @click="openComments" color="primary" text>
        <span style="font-size: 21px" class="mr-2">6</span>
        <v-icon color="primary">mdi-comment-multiple-outline</v-icon>
      </v-btn>
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
  },
  methods: {
    openComments() {
      this.$emit("openComments");
    },
  },
};
</script>

<style></style>
