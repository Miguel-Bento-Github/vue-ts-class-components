<template>
  <div class="app">
    <nav class="navbar">
      <router-link to="/posts" class="router-link">Posts</router-link>
      <router-link to="/create" class="router-link">Create Post</router-link>
    </nav>
    <div class="app-content">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default class App extends Vue {}
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  width: 100%;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  background: #171738;
  color: #f4f4f4;
  min-height: 100vh;
  padding-bottom: 2rem;
}

.navbar {
  width: 100%;
  z-index: 1;
  position: fixed;
  display: flex;
  background: #222;
  padding: 1rem 25%;
  justify-content: space-evenly;
  filter: drop-shadow(0 4px 4px #090916);
}

.router-link {
  color: #c4f0ff;
  text-decoration: none;
}

.router-link-exact-active {
  position: relative;
}

.router-link-exact-active::after {
  content: "";
  position: absolute;
  height: 1px;
  background: #8de2ff;
  bottom: 0;
  left: 0;
  animation: width 250ms ease forwards;
}

.app-content {
  padding: 5rem 2rem;
}

.input-control {
  display: flex;
  flex-direction: column;
}

input,
button,
textarea {
  font-family: inherit;
}

.button,
.input {
  border: none;

  box-shadow: 3px 3px 6px #090916, -3px -3px 6px #25255a;
  padding: 0.5rem 1rem;
  outline: thin;
}

.input {
  margin: 0.5rem 0;
  border-radius: 1rem;
  background: linear-gradient(145deg, #4d4d9b, #313172);
  color: inherit;
}

.input::placeholder {
  color: #ccc;
}

.input::-webkit-inner-spin-button,
.input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.button {
  border-radius: 2rem;
  background: #313172;
  color: #c4f0ff;
  cursor: pointer;
  margin: 1rem;
}

.button:hover {
  background: #3c3c72;
}

.label {
  padding: 0.5rem;
}

.description {
  resize: none;
  height: 20vh;
}

.post-update {
  width: 45vw;
  margin: 0 auto;
}

@keyframes width {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
</style>
