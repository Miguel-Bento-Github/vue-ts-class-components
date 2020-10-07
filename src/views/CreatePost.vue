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
          v-model="post.body"
          name="description"
          required
        />
      </div>
      <button @click="createPost" class="button">Submit</button>
    </form>

    <div v-else>
      <p class="post-created">Post created!</p>
      <button class="button" @click="newPost">Back to creation</button>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Post } from "../types";
import Fetch from "../services/Fetch";

@Component
export default class CreatePost extends Vue {
  private post: Post = {
    id: -1,
    title: "",
    body: "",
  };

  private showError = false;
  private showForm = true;

  /**
   * Tries to create a post with @type Post.
   *
   * If @property {string} post.title or @property {string} post.body is empty,
   * @returns {undefined}.
   * Uses the API handler @method Fetch.create to create a new post.
   *
   * @returns {undefined}
   */
  async createPost(): Promise<void> {
    const { title, body, id } = this.post;
    if (!title || !body) return;

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

<style scoped>
.post-created {
  padding-left: 1rem;
}
</style>