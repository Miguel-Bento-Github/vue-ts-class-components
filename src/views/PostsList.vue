<template>
  <div class="posts">
    <div class="search">
      <input
        type="number"
        class="input"
        placeholder="search id here..."
        v-model="searchId"
      />
      <button class="button" type="button" @click="searchById">Search</button>
    </div>
    <p v-if="isLoading">Loading...</p>
    <main class="post-container">
      <div class="post-list">
        <h3 class="title">Post List</h3>
        <div class="post-list-container">
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

      <PostCard :selectedPost="selectedPost" />
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Fetch from "@/services/Fetch";
import { Post } from "@/types";
import PostCard from "../components/PostCard.vue";

@Component({
  components: {
    PostCard,
  },
})
export default class PostList extends Vue {
  posts: Post[] = [
    {
      id: 0,
      title: "",
      body: "",
    },
  ];
  selectedPost: Post | null = null;
  currentIndex = -1;
  searchId = "";
  isLoading = false;

  async fetchPosts() {
    this.isLoading = true;
    try {
      const { data } = await Fetch.getAll();
      this.posts = data;
    } catch (error) {
      throw new Error(error);
    } finally {
      this.isLoading = false;
    }
  }

  async searchById() {
    try {
      const { data } = await Fetch.findById(this.searchId);
      this.posts = data;
    } catch (error) {
      throw new Error(error);
    }
  }

  setActivePost(post: Post, index: number) {
    this.selectedPost = post;
    this.currentIndex = index;
  }

  mounted() {
    this.fetchPosts();
  }
}
</script>

<style scoped>
.search .button {
  margin-left: 1rem;
}

.post-container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 0 1rem;
}

.post-list,
.post-card {
  box-shadow: 7px 7px 14px #090916, -7px -7px 14px #25255a;
  border-radius: 0.5rem;
}

.post-list {
  padding-bottom: 3rem;
}

.title {
  padding: 0 1rem;
}

.post {
  width: 32vw;
  margin: 2px;
  padding: 0.25rem 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
  transition: all 1s ease;
  border-radius: 0.25rem;
}

.post:nth-child(odd) {
  background: #25255a;
}

.post:hover {
  box-shadow: 0 0 2px #d0d0ff;
  cursor: pointer;
  transition-duration: 50ms;
}
</style>
