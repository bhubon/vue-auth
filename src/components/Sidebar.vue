<script setup>
import { authStore } from '../store/store';
const auth = authStore;
</script>
<template>
  <section class="mt-[40px] text-white p-5">
    <ul class="flex flex-col space-y-5">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/contact">Contact</router-link>
      </li>
      <li>
        <router-link to="/posts">Posts</router-link>
      </li>
      <li>
        <router-link to="/protected">Protected</router-link>
      </li>

      <li v-if="!auth.isAuthenticated">
        <router-link to="/login">Login</router-link>
      </li>
    </ul>
  </section>
</template>

<style></style>