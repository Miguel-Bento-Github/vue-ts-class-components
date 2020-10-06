<template>
  <div class="form" v-if="showForm">
    <label class="label" for="title">Title</label>
    <input
      type="text"
      class="input"
      id="title"
      v-model="post.title"
      name="title"
      required
    />
    <label class="label" for="description">Description</label>
    <textarea
      class="input description"
      id="description"
      v-model="post.description"
      name="description"
      required
    />
    <button @click="savePost" class="button">Submit</button>
  </div>

  <div class="form" v-else>
    <h4>Form submitted</h4>
    <button class="button" @click="newPost">Back to form</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Api from "../services/Api";
import { Post } from "./types";

@Component
export default class CreatePost extends Vue {
  private post: Post = {
    id: -1,
    title: "",
    body: "",
  };

  private showForm = true;

  async savePost(): Promise<void> {
    const newData = {
      title: this.post.title,
      body: this.post.body,
    };

    try {
      const { data } = await Api.create(newData);
      this.post.id = data.id;
      this.showForm = false;
    } catch (error) {
      throw new Error(error);
    }
  }

  newPost(): void {
    this.post = defaultPost;
    this.showForm = true;
  }
}

const defaultPost = {
  id: 0,
  title: "",
  body: "",
};
</script>

<style scoped>
.form {
  display: flex;
  align-items: center;
  flex-flow: column wrap;
}

.description {
  overflow: hidden;
  resize: none;
}

.button {
  margin-top: 1rem;
}
</style>
