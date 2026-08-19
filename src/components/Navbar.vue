<template>
  <nav
    class="navbar-style rounded-2xl sm:rounded-3xl z-[60] absolute top-10 left-5 right-5 mx-auto flex items-center justify-between"
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
        <span class="text-base whitespace-nowrap">Planes</span>
      </RouterLink>

      <RouterLink to="/about" class="flex items-center font-bold text-[#306067] hover:text-[#37A0AF] transition-colors">
        <span class="text-base whitespace-nowrap">Sobre Kälm</span>
      </RouterLink>

      <RouterLink to="/contact" class="flex items-center font-bold text-[#306067] hover:text-[#37A0AF] transition-colors">
        <span class="text-base whitespace-nowrap">Contacto</span>
      </RouterLink>
    </div>

    <div class="flex items-center gap-3 navbar-actions">
      <!-- Desktop Button -->
      <button 
        @click="isDownloadModalOpen = true" 
        class="hidden lg:inline-flex items-center rounded-2xl bg-[#306067] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#244a4d] cursor-pointer"
      >
        Descargar
      </button>

      <!-- Botón Hamburguesa Mobile -->
      <button 
        v-if="!isMenuOpen" 
        @click="isMenuOpen = true" 
        class="glass lg:hidden flex h-11 w-11 items-center justify-center rounded-xl transition duration-300 cursor-pointer"
      >
        <div class="relative flex h-5 w-6 items-center justify-center">
          <span class="absolute h-[2.5px] w-6 -translate-y-2 rounded-sm bg-[#306067]"></span>
          <span class="absolute h-[2.5px] w-6 rounded-sm bg-[#306067]"></span>
          <span class="absolute h-[2.5px] w-6 translate-y-2 rounded-sm bg-[#306067]"></span>
        </div>
      </button>
    </div>
  </nav>

  <!-- MODAL MENÚ MOBILE -->
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
            class="absolute right-0 top-0 flex h-full w-[82%] max-w-[320px] flex-col justify-between rounded-l-2xl sm:rounded-l-3xl bg-white shadow-2xl p-6 overflow-y-auto"
          >
            
            <div>
              <div class="flex items-start justify-between mb-2">
                <span class="inline-block px-3 py-1 rounded-lg bg-[#EBF5F6] text-[#37A0AF] text-xs font-bold">
                  Kälm Web
                </span>

                <button 
                  @click="isMenuOpen = false" 
                  class="w-9 h-9 rounded-xl bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-gray-500 font-bold transition-colors cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <hr class="border-gray-100 my-4" />

              <div class="flex flex-col space-y-1">
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

                <RouterLink 
                  to="/planes" 
                  @click="isMenuOpen = false" 
                  class="flex items-center justify-between py-3.5 px-3 rounded-2xl font-semibold text-[#2A4043] hover:bg-[#F4F9FA] transition-colors"
                >
                  <span>Planes</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#306067]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </RouterLink>

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

            <!-- BOTÓN DESCARGAR APP -->
            <div class="pt-6 border-t border-gray-100">
              <button 
                @click="openDownloadModal"
                class="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#306067] py-3.5 px-4 font-bold text-white shadow-md hover:bg-[#254b51] transition-all active:scale-95 cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Descargar la App
              </button>
            </div>

          </aside>
        </Transition>

      </div>
    </Transition>
  </Teleport>

  <!-- modal descargar -->
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="isDownloadModalOpen" class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
        
        <!-- Backdrop -->
        <div 
          @click="isDownloadModalOpen = false"
        ></div>

        <div class="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full relative shadow-2xl border border-white/80 text-center animate-scale-in my-auto">
          
          <button 
            @click="isDownloadModalOpen = false" 
            class="absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 rounded-xl bg-[#F0F5F6] hover:bg-[#E2EDEF] flex items-center justify-center text-[#306067] font-bold transition-colors cursor-pointer"
            title="Cerrar"
          >
            ✕
          </button>

          <div class="flex justify-center mb-4 pt-2 sm:pt-0">
            <img 
              src="../assets/imgs/logo-kalm.svg" 
              alt="Logo Kälm" 
              class="h-12 sm:h-14 w-auto object-contain"
            />
          </div>

          <h3 class="text-xl sm:text-2xl font-bold text-[#24525A] mb-3">
            Empezá tu experiencia en <span class="font-tropiline text-[#24525A]">Kälm</span>
          </h3>

          <p class="text-sm sm:text-base text-[#2A4043] mb-6 leading-relaxed">
            Descargá la aplicación para tu dispositivo:
          </p>

          <!-- Botones de Descarga (Layout Responsive) -->
          <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            
            <!-- Google Play Store -->
            <a 
              href="https://xn--klm-qla.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              class="flex items-center justify-center gap-2.5 px-6 py-3.5 w-full sm:w-auto min-w-[160px] rounded-2xl bg-[#24525A] text-white font-semibold hover:bg-[#1A3D43] transition-all hover:scale-[1.02] active:scale-95 shadow-md"
            >
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a1.53 1.53 0 0 1-.61-.318 1.492 1.492 0 0 1-.453-1.077V3.209c0-.41.16-.788.453-1.077a1.53 1.53 0 0 1 .609-.318zm11.6 11.601L17.72 16l-12.98 7.373 10.469-9.958zm2.464-1.415l3.226 1.826c.725.41.725 1.59 0 2l-3.226 1.826L15.21 12l2.463-2zm-2.464-1.415L4.74.627 17.72 8 15.209 10.585z"/>
              </svg>
              <span>Google Play</span>
            </a>

            <!-- Apple App Store -->
            <a 
              href="https://xn--klm-qla.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              class="flex items-center justify-center gap-2.5 px-6 py-3.5 w-full sm:w-auto min-w-[160px] rounded-2xl bg-[#24525A] text-white font-semibold hover:bg-[#1A3D43] transition-all hover:scale-[1.02] active:scale-95 shadow-md"
            >
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.32c.67-.82 1.12-1.96.99-3.1-.97.04-2.14.65-2.83 1.45-.62.72-1.16 1.88-1.01 3 .01 0 .03 0 .04 0 1.08 0 2.14-.53 2.81-1.35z"/>
              </svg>
              <span>App Store</span>
            </a>

          </div>

        </div>

      </div>
    </Transition>
  </Teleport>

</template>

<script setup>
import { ref, watch } from "vue";

const isMenuOpen = ref(false);
const isDownloadModalOpen = ref(false);

const openDownloadModal = () => {
  isMenuOpen.value = false;
  isDownloadModalOpen.value = true;
};

watch([isMenuOpen, isDownloadModalOpen], ([menuOpen, downloadOpen]) => {
  if (menuOpen || downloadOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});
</script>

<style scoped>
.font-tropiline {
  font-family: 'Tropiline', serif;
  font-weight: 700;
  font-style: italic;
}

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