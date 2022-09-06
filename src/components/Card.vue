<template>
  <v-col cols="12">
    <displayComponents isComments @openComments="openDialog" />
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
      open: true,
    },
  }),
  methods: {
    openDialog() {
      this.dialog.open = !this.dialog.open;
    },
  },
};
</script>
