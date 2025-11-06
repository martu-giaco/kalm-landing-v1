<script setup>
  import Navbar from './components/Navbar.vue'
  import Footer from './components/Footer.vue'
  import { RouterView } from 'vue-router'
</script>

<template>
  <div class="flex flex-col min-h-screen header-bg pt-5">
    <Navbar />
    <main class="flex grow container mx-auto px-4 py-22 text-center justify-center">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

