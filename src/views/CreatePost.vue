<template>
  <section class="post-update">
    <h2>Create a post</h2>
    <form v-if="showForm" @submit.prevent>
      <div class="input-control">
        <label class="label" for="title">Title</label>
        <input
          type="text"
          class="input"
          id="title"
          v-model="post.title"
          name="title"
          required
        />
      </div>
      <div class="input-control">
        <label class="label" for="description">Description</label>
        <textarea
          class="input description"
          id="description"
          v-model="post.description"
          name="description"
          required
        />
      </div>
      <button @click="createPost" class="button">Submit</button>
    </form>

    <div class="post-created" v-else>
      <p>Post created!</p>
      <button class="button" @click="newPost">Back to creation</button>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import Fetch from "@/services/Fetch";
import { Post } from "../types";

@Component
export default class CreatePost extends Vue {
  private post: Post = {
    id: -1,
    title: "",
    body: "",
  };

  private showError = false;
  private showForm = true;

  async createPost(): Promise<void> {
    const { title, body, id } = this.post;

    const newData: Post = {
      id,
      title,
      body,
    };

    try {
      const { data } = await Fetch.create(newData);
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

<style>
.post-update {
  width: 100vh;
  margin: 0 auto;
}

.input {
  margin: 0.5rem 1rem;
}

.description {
  height: 20vh;
}

.input-control {
  display: flex;
  flex-direction: column;
}

.button {
  margin: 1rem;
}

.post-created {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
