<script setup>
  import Navbar from './components/Navbar.vue'
  import Footer from './components/Footer.vue'
  import { RouterView } from 'vue-router'
</script>

<template>
  <div class="flex flex-col min-h-screen items-center">
    <Navbar />
    <main class="flex grow w-full text-center justify-center flex-col">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

