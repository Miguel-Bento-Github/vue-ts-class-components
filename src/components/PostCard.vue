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
      <div class="post-card-content">
        <strong>Description:</strong>
        {{ selectedPost.body }}
      </div>
    </article>
    <p class="inactive-post-card" v-else>Click on a post...</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Post } from "../types";

const PostCardProps = Vue.extend({
  props: {
    selectedPost: Object as () => Post,
  },
});

@Component
export default class PostCard extends PostCardProps {}
</script>

<style scoped>
.post-card {
  padding: 1rem 4rem;
}

@media screen and (min-width: 500px) {
  .post-card-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
}

.button {
  margin: 0;
}

.post-card-title {
  padding-bottom: 1rem;
  font-size: 2rem;
}

.router-link {
  width: max-content;
}

.post-card-content {
  padding: 2rem 0;
}
</style>
