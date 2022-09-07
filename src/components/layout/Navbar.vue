<template>
  <v-app-bar app color="primary" dark>
    <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->

    <v-spacer></v-spacer>

    <v-btn target="_blank" text>
      <span class="mr-2">{{ user.username }}</span>
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style></style>
