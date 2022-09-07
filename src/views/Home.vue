<template>
  <div class="home">
    <HomeComponents />
    <Dialog
      persistent
      icon="mdi-magnify"
      title="Create Username"
      :dialog="dialog"
    />
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    dialog: {
      open: true,
    },
  }),
  components: {
    HomeComponents: () => import("@/components/HomeComponents.vue"),
    Dialog: () => import("@/components/_Dialog"),
  },
};
</script>
