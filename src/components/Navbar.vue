<template>
  <nav
    class="navbar-style z-[60] absolute top-10 left-5 right-5 mx-auto flex items-center justify-between"
  >
    <RouterLink to="/" class="flex items-center ml-2 sm:ml-4">
      <img
        src="../assets/imgs/logo-kalm.svg"
        alt="Logo Kälm"
        class="h-7"
      />
      <p class="logo-text text-lg pt-1 ms-1">Kälm</p>
    </RouterLink>

    <!-- DESKTOP NAV -->
    <div class="hidden lg:flex flex-1 items-center justify-center gap-8 xl:gap-10 px-8">
      <RouterLink to="/" class="flex items-center font-bold text-[#306067] hover:text-[#37A0AF] transition-colors">
        <span class="text-base whitespace-nowrap">Inicio</span>
      </RouterLink>

      <RouterLink to="/planes" class="flex items-center font-bold text-[#306067] hover:text-[#37A0AF] transition-colors">
        <span class="text-base whitespace-nowrap">Premium</span>
      </RouterLink>

      <RouterLink to="/about" class="flex items-center font-bold text-[#306067] hover:text-[#37A0AF] transition-colors">
        <span class="text-base whitespace-nowrap">Sobre Kälm</span>
      </RouterLink>

      <RouterLink to="/contact" class="flex items-center font-bold text-[#306067] hover:text-[#37A0AF] transition-colors">
        <span class="text-base whitespace-nowrap">Contacto</span>
      </RouterLink>
    </div>

    <div class="flex items-center gap-3 navbar-actions">
      <!-- Desktop -->
      <a 
        href="https://www.xn--klm-qla.com/" 
        class="hidden lg:inline-flex items-center rounded-2xl bg-[#306067] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#244a4d]"
      >
        Descargar
      </a>

      <!-- Botón Hamburguesa Mobile -->
      <button 
        v-if="!isMenuOpen" 
        @click="isMenuOpen = true" 
        class="glass lg:hidden flex h-11 w-11 items-center justify-center rounded-full transition duration-300 cursor-pointer"
      >
        <div class="relative flex h-5 w-6 items-center justify-center">
          <span class="absolute h-[2.5px] w-6 -translate-y-2 rounded-full bg-[#306067]"></span>
          <span class="absolute h-[2.5px] w-6 rounded-full bg-[#306067]"></span>
          <span class="absolute h-[2.5px] w-6 translate-y-2 rounded-full bg-[#306067]"></span>
        </div>
      </button>
    </div>
  </nav>

  <Teleport to="body">
    <Transition name="fade">
      <div v-if="isMenuOpen" class="fixed inset-0 z-[9999] lg:hidden">
        
        <div 
          class="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" 
          @click="isMenuOpen = false"
        ></div>

        <Transition name="slide">
          <aside 
            v-if="isMenuOpen" 
            class="absolute right-0 top-0 flex h-full w-[82%] max-w-[320px] flex-col justify-between rounded-l-[32px] bg-white shadow-2xl p-6 overflow-y-auto"
          >
            
            <div>
              <div class="flex items-start justify-between mb-2">
                <span class="inline-block px-3 py-1 rounded-full bg-[#EBF5F6] text-[#37A0AF] text-xs font-bold">
                  Kälm Web
                </span>

                <button 
                  @click="isMenuOpen = false" 
                  class="w-9 h-9 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-gray-500 font-bold transition-colors cursor-pointer">
                  ✕
                </button>
              </div>

              <hr class="border-gray-100 my-4" />

              <div class="flex flex-col space-y-1">
                
                <!-- Inicio -->
                <RouterLink 
                  to="/" 
                  @click="isMenuOpen = false" 
                  class="flex items-center justify-between py-3.5 px-3 rounded-2xl font-semibold text-[#2A4043] hover:bg-[#F4F9FA] transition-colors"
                >
                  <span>Inicio</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#306067]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </RouterLink>

                <!-- Premium -->
                <RouterLink 
                  to="/planes" 
                  @click="isMenuOpen = false" 
                  class="flex items-center justify-between py-3.5 px-3 rounded-2xl font-semibold text-[#2A4043] hover:bg-[#F4F9FA] transition-colors"
                >
                  <span>Premium</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#306067]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </RouterLink>

                <!-- Sobre Kälm -->
                <RouterLink 
                  to="/about" 
                  @click="isMenuOpen = false" 
                  class="flex items-center justify-between py-3.5 px-3 rounded-2xl font-semibold text-[#2A4043] hover:bg-[#F4F9FA] transition-colors"
                >
                  <span>Sobre Kälm</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#306067]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </RouterLink>

                <!-- Contacto -->
                <RouterLink 
                  to="/contact" 
                  @click="isMenuOpen = false" 
                  class="flex items-center justify-between py-3.5 px-3 rounded-2xl font-semibold text-[#2A4043] hover:bg-[#F4F9FA] transition-colors"
                >
                  <span>Contacto</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#306067]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </RouterLink>

              </div>
            </div>

            <!-- (BOTÓN DESCARGAR APP) -->
            <div class="pt-6 border-t border-gray-100">
              <a 
                href="https://www.xn--klm-qla.com/" 
                @click="isMenuOpen = false"
                class="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#306067] py-3.5 px-4 font-bold text-white shadow-md hover:bg-[#254b51] transition-all active:scale-95"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Descargar la App
              </a>
            </div>

          </aside>
        </Transition>

      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, watch } from "vue";

const isMenuOpen = ref(false);

watch(isMenuOpen, (val) => {
  if (val) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});
</script>

<style scoped>
/* Transiciones suaves */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active {
  transition: transform 0.3s ease-out;
}
.slide-leave-active {
  transition: transform 0.25s ease-in;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>