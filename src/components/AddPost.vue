<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="post.title"
          name="title"
        />
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <input
          class="form-control"
          id="description"
          required
          v-model="post.description"
          name="description"
        />
      </div>

      <button @click="savePost" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newPost">Add</button>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import PostDataService from '../services/PostDataService';

  @Component
  export default class AddTutorial extends Vue {
    private post: Post = {
      id: 0,
      title: '',
      body: '',
    };

    private submitted = false;

    async savePost(): Promise<void> {
      const newData = {
        title: this.post.title,
        body: this.post.body,
      };

      try {
        const { data } = await PostDataService.create(newData);
        this.post.id = data.id;
        this.submitted = true;
      } catch (error) {
        throw new Error(error);
      } finally {
        this.post = defaultPost;
      }
    }

    newPost(): void {
      this.submitted = false;
    }
  }

  const submitted = 'as';

  const defaultPost = {
    id: 0,
    title: '',
    body: '',
  };

  type Post = {
    id: number;
    title: string;
    body: string;
  };
</script>

<style scoped>
  .submit-form {
    max-width: 300px;
    margin: auto;
  }
</style>
