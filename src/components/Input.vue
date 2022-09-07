<template>
  <v-col cols="12">
    <v-card :elevation="elevation">
      <v-card-title>
        <v-avatar color="orange" size="40" class="mr-2">
          <span class="white--text text-h5">
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"
          /></span>
        </v-avatar>
        <span class="primary--text"> {{ title }}</span>
      </v-card-title>
      <quillEditor v-model="text" class="text--status" />
    </v-card>
    <v-card-actions class="d-flex justify-end">
      <v-btn @click="clear" color="error">
        <span class="white--text"> Clear</span>
        <v-icon small class="ml-2" color="white">mdi-close</v-icon>
      </v-btn>
      <v-btn @click="send" color="primary">
        <span class="white--text"> Send</span>
        <v-icon small class="ml-2" color="white">mdi-send</v-icon>
      </v-btn>
    </v-card-actions>
  </v-col>
</template>

<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

import { quillEditor } from "vue-quill-editor";
export default {
  components: {
    quillEditor,
  },
  props: {
    elevation: {
      type: [Number, String],
      default: () => "4",
    },
    title: {
      type: String,
      default: () => "",
    },
  },
  data: () => ({
    text: "",
  }),

  methods: {
    send() {
      this.$emit("submit", this.text);
      this.text = "";
    },
    clear() {
      this.text = "";
    },
  },
};
</script>

<style></style>
