<template>
  <section class="post-update">
    <h2>Edit Post</h2>
    <div class="input-control">
      <label for="title">Title</label>
      <input type="text" class="input title" id="title" v-model="currentPost.title" />
    </div>
    <div class="input-control">
      <label for="description">Description</label>
      <textarea type="text" class="input description" id="description" v-model="currentPost.body" />
    </div>

    <button type="submit" class="button" @click="updatePost">Update</button>
    <button class="button delete" @click="deletePost">Delete</button>

    <transition name="fade">
      <p class="updated" v-if="isUpdated">Updated successfully</p>
    </transition>
  </section>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Fetch from '../services/Fetch';
  import { Post } from '../types';

  @Component
  export default class EditPost extends Vue {
    private currentPost: Post = {
      id: -1,
      title: '',
      body: '',
    };
    private isUpdated = false;

    async getPost(id: number) {
      try {
        const { data } = await Fetch.get(id);
        this.currentPost = data;
      } catch (error) {
        throw new Error(error);
      }
    }

    /**
     * Updates Post using its id and current content
     */
    async updatePost() {
      try {
        await Fetch.update(this.currentPost.id, this.currentPost);
        this.isUpdated = true;
      } catch (error) {
        throw new Error(error);
      } finally {
        setTimeout(() => {
          this.isUpdated = false;
          this.$router.push('/');
        }, 3000);
      }
    }

    /**
     * Deletes current active post and navigates to /posts
     */
    async deletePost() {
      try {
        await Fetch.delete(this.currentPost.id);
        this.isUpdated = true;
        this.$router.push({ name: 'posts' });
      } catch (error) {
        throw new Error(error);
      }
    }

    mounted() {
      this.isUpdated = false;
      this.getPost(+this.$route.params.id);
    }
  }
</script>

<style scoped>
  .updated {
    padding: 1rem 0;
  }

  .delete {
    background: #b23535;
    transition: background 250ms;
  }

  .delete:hover {
    background: #df6464;
  }

  .fade-enter-active {
    transition: opacity 250ms;
  }
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>
