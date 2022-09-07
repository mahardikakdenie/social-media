<template>
  <v-col cols="12">
    <displayComponents
      v-for="(item, i) in data"
      :key="i"
      :text="item.text"
      class="mt-4"
      isComments
      @openComments="openDialog"
    />
    <dialogComponents
      :dialog="dialog"
      title="Comments"
      icon="mdi-comment-multiple-outline"
    />
  </v-col>
</template>

<script>
export default {
  components: {
    dialogComponents: () => import("@/components/_Dialog"),
    displayComponents: () => import("@/components/_Display"),
  },
  data: () => ({
    dialog: {
      open: false,
    },
  }),
  computed: {
    data() {
      return this.$store.state.data;
    },
  },
  methods: {
    openDialog() {
      this.dialog.open = !this.dialog.open;
    },
  },
};
</script>
