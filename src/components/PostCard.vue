<template>
  <div class="post-card">
    <article class="post-card-active" v-if="selectedPost">
      <header class="post-card-header">
        <h2 class="post-card-title">{{ selectedPost.title }}</h2>
        <router-link
          class="button router-link"
          :to="`/posts/${selectedPost.id}`"
        >
          Edit
        </router-link>
      </header>
      <span>
        <strong>Description:</strong>
        {{ selectedPost.body }}
      </span>
    </article>
    <p class="inactive-post-card" v-else>Click on a post...</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Post } from "../types";

const PostCardProps = Vue.extend({
  props: {
    selectedPost: Object,
  },
});

@Component
export default class PostCard extends PostCardProps {}
</script>

<style scoped>
.post-card {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

.post-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.post-card-title {
  padding-bottom: 1rem;
}

.router-link {
  width: max-content;
}
</style>
