<template>
  <div class="home">
    <HomeComponents />
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    HomeComponents: () => import("@/components/HomeComponents.vue"),
  },
};
</script>
