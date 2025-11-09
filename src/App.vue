<script setup>
  import Navbar from './components/Navbar.vue'
  import Footer from './components/Footer.vue'
  import { RouterView } from 'vue-router'
</script>

<template>
  <div class="flex flex-col min-h-screen items-center">
    <Navbar />
    <main class="flex grow w-full flex-col overflow-x-hidden">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

