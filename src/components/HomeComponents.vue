<template>
  <v-container>
    <v-row class="d-flex justify-center">
      <v-col cols="6">
        <v-form @submit.prevent="submit">
          <v-container>
            <v-row>
              <Input title="Buat Status" @submit="submit" />
            </v-row>
            <v-row>
              <Card />
            </v-row>
          </v-container>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import moment from "moment";
export default {
  name: "HelloWorld",
  components: {
    Input: () => import("@/components/Input"),
    Card: () => import("@/components/Card"),
  },

  data: () => ({
    text: "",
  }),

  methods: {
    submit(text) {
      const data = {
        text: text,
        date: this.timeFormat(new Date()),
      };
      this.$store.dispatch("list/setData", data);
    },
    timeFormat(url) {
      return url.toString().split(" ").splice(0, 5).join(" ");
    },
  },
};
</script>
<style lang="scss">
.text--sm {
  font-size: 18px;
  color: gray;
}
.quill-editor {
  .ql-container {
    height: auto;
  }
}
</style>
