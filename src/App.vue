<script setup>
import { authStore } from './store/store';
const auth = authStore;
</script>

<template>
  <header class="bg-black border-b-light-100 border-b h-20 text-white items-center flex p-5 text-2xl">
    <section class="d-flex">
      <h1>A Wonderful Blog</h1>
      <span>{{ auth.user?.firstName }}</span>
    </section>
    <section class="ml-auto" v-if="auth.isAuthenticated">
      <button @click="auth.logout()" class="bg-blue-500 p-2 rounded text-sm">
        <span>Logout</span>
      </button>
    </section>
  </header>
  <section class="flex">
    <aside class="w-[450px] bg-black ">
      <router-view name="LeftSideBar"></router-view>
    </aside>
    <main class="w-full min-h-screen p-5">
      <router-view></router-view>
    </main>
  </section>
  <footer></footer>
</template>

<style scoped></style>
