<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="dark-mode">
    <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.png" width="auto" height="125" />
      <h2 class="title">CL Wallet</h2>
      <div class="wrapper">
        <nav class="nav">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </header>

    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.dark-mode {
  background: linear-gradient(145deg, #262829, #3a3e40);
  color: #ffffff; /* Dark mode text color */
  font-family: 'Abel', sans-serif;
}

.title {
  color: rgb(185, 124, 124);
  text-align: center;
  font-family: 'Rubik Mono One', monospace;
}
.logo {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

main {
  padding: 1rem;
  margin: 1em;
}

.nav {
  display: flex;
  justify-content: center;
}
</style>

