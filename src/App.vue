<template>
  <div class="app">
    <nav class="navbar">
      <router-link to="/posts" class="router-link">Posts</router-link>
      <router-link to="/create" class="router-link">Create Post</router-link>
    </nav>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default class App extends Vue {}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  width: 100%;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

input,
button,
textarea {
  font-family: inherit;
}

.container {
  padding: 0 2rem;
}

.navbar {
  display: flex;
  background: #be9770;
  padding: 1rem 25%;
  justify-content: space-evenly;
  filter: drop-shadow(2px 2px 4px #e2cbb5);
  margin-bottom: 2rem;
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

.button,
.input {
  border: none;
  box-shadow: 1px 1px 2px #be9770;
  padding: 0.5rem 1rem;
  outline: thin;
}

.input {
  border-radius: 0.5rem;
  background: none;
  color: #be9770;
}

.input::-webkit-inner-spin-button,
.input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.button {
  border-radius: 2rem;
  background: #be9770;
  color: #c4f0ff;
  cursor: pointer;
}

.button:hover {
  background: #bc8e61;
}

.label {
  padding: 0.5rem 1rem;
}

.description {
  resize: none;
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
