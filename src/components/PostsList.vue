<template>
  <div class="posts">
    <div class="search">
      <input
        type="number"
        class="input"
        placeholder="Search by id"
        v-model="searchId"
      />
      <button class="button" type="button" @click="searchById">Search</button>
    </div>

    <div class="posts-list">
      <h3>Post List</h3>
      <div class="post-container">
        <div
          class="post"
          :class="{ active: index == currentIndex }"
          v-for="(post, index) in posts"
          :key="post.id"
          @click="setActivePost(post, index)"
        >
          {{ post.title || post.name }}
        </div>
      </div>
    </div>

    <div class="post-card">
      <div class="active-post-card" v-if="currentPost">
        <h3>Post</h3>
        <span> <strong>Title:</strong> {{ currentPost.title }} </span>
        <span>
          <strong>Description:</strong>
          {{ currentPost.body }}
        </span>
        <span>
          <strong>Status:</strong>
          {{ currentPost.published ? "Published" : "Unpublished" }}
        </span>
        <router-link
          class="badge badge-warning"
          :to="`/posts/${currentPost.id}`"
        >
          Edit
        </router-link>
      </div>
      <p class="inactive-post-card" v-else>Click on a post...</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Api from "../services/Api";
import { Post } from "./types";

@Component
export default class PostList extends Vue {
  private posts: Post[] = [
    {
      id: 0,
      body: "",
    },
  ];
  private currentPost: Post | null = null;
  private currentIndex = -1;
  private searchId = "";

  async fetchPosts() {
    try {
      const { data } = await Api.getAll();
      this.posts = data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async searchById() {
    try {
      const { data } = await Api.findById(this.searchId);
      this.posts = data;
    } catch (error) {
      throw new Error(error);
    }
  }

  setActivePost(post: Post, index: number) {
    this.currentPost = post;
    this.currentIndex = index;
  }

  mounted() {
    this.fetchPosts();
  }
}
</script>

<style scoped>
.posts-list {
  margin-top: 1rem;
}

.post-container {
  height: 60vh;
  overflow: auto;
  display: flex;
  flex-flow: column wrap;
  padding: 4px 8px;
}

.post {
  margin: 1px;
  width: 20vw;
  padding: 4px 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
  transition: all 1s ease;
}

.post:nth-child(even) {
  background: #f4f4f4;
}

.post:hover {
  box-shadow: 0 0 4px #333;
  cursor: pointer;
  transition: all 50ms ease;
}

.post-card {
  margin-top: 1rem;
}

.active-post-card {
  display: flex;
  flex-direction: column;
}
</style>