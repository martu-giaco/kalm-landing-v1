<script setup>
</script>

<template>
  <footer
    class="footer-gradient relative z-20 mt-auto text-white w-full rounded-t-[35px] sm:rounded-t-[50px] lg:rounded-t-[60px] pt-10 sm:pt-16 lg:pt-20 pb-8 px-6 sm:px-12 lg:px-20 overflow-hidden shadow-2xl"
  >
    <div class="flex flex-col md:flex-row justify-between items-start md:items-stretch gap-8 sm:gap-12 max-w-7xl mx-auto relative z-10">
      
      <!-- Columna Izquierda: Navegación y Redes -->
      <div class="flex flex-col text-left">
        
        <h3 class="hidden md:block text-lg md:text-xl lg:text-xl xl:text-2xl w-full md:w-80 mb-6 font-medium">
          Navegación
        </h3>

        <ul class="space-y-2 text-sm sm:text-base font-medium">
          <li>
            <RouterLink to="/" class="opacity-90 hover:opacity-100 transition-opacity">
              Inicio
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/planes" class="opacity-90 hover:opacity-100 transition-opacity">
              Planes
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/about" class="opacity-90 hover:opacity-100 transition-opacity">
              Sobre Kälm
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/contact" class="opacity-90 hover:opacity-100 transition-opacity">
              Contacto
            </RouterLink>
          </li>
        </ul>

        <div class="border-t border-white/20 my-3 w-full max-w-[160px]"></div>

        <ul class="text-sm sm:text-base font-medium">
          <li>
            <RouterLink to="/equipo" class="opacity-90 hover:opacity-100 transition-opacity text-white/90">
              Equipo Kälm
            </RouterLink>
          </li>
        </ul>

        <!-- Redes sociales -->
        <div class="mt-6">
          <ul class="flex gap-3 items-center">
            <li>
              <a 
                href="https://www.instagram.com/kalm_oficial/" 
                target="_blank" 
                rel="noopener noreferrer"
                class="block text-white opacity-80 hover:opacity-100 transition-all hover:scale-110 p-2 rounded-xl bg-white/10 hover:bg-white/20"
                title="Instagram"
              >
                <span class="sr-only">Instagram</span>
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 6.865a5.135 5.135 0 1 0 0 10.27 5.135 5.135 0 0 0 0-10.27zm0 8.468a3.333 3.333 0 1 1 0-6.666 3.333 3.333 0 0 1 0 6.666zm5.338-9.87a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z"/>
                </svg>
              </a>
            </li>

            <li>
              <a 
                href="https://www.tiktok.com/@kalm_off" 
                target="_blank" 
                rel="noopener noreferrer"
                class="block text-white opacity-80 hover:opacity-100 transition-all hover:scale-110 p-2 rounded-xl bg-white/10 hover:bg-white/20"
                title="TikTok"
              >
                <span class="sr-only">TikTok</span>
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
            </li>

            <li>
              <a 
                href="https://www.youtube.com/@kalm_oficial" 
                target="_blank" 
                rel="noopener noreferrer"
                class="block text-white opacity-80 hover:opacity-100 transition-all hover:scale-110 p-2 rounded-xl bg-white/10 hover:bg-white/20"
                title="YouTube"
              >
                <span class="sr-only">YouTube</span>
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.017 3.017 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </li>
          </ul>
        </div>

      </div>

      <!-- Columna Derecha: Logo arriba (posicionado absoluto en mobile), Botones abajo -->
      <div class="flex flex-col items-start md:items-end justify-between w-full md:w-auto gap-8 self-stretch">
        
        <!-- Logo en Esquina Superior Derecha -->
        <img 
          src="../assets/imgs/logo-kalm-light.svg" 
          alt="Logo Kälm" 
          class="absolute top-0 right-0 md:static h-12 sm:h-20 lg:h-24 w-auto object-contain shrink-0"
        />

        <!-- Botones de Descarga en Esquina Inferior -->
        <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-start md:justify-end mt-2 md:mt-0">
          <!-- Google Play -->
          <a 
            href="http://www.w3.org/2000/svg" 
            target="_blank" 
            rel="noopener noreferrer"
            class="flex items-center justify-center gap-3 px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/15 text-white rounded-2xl shadow-md transition-all active:scale-95 text-base font-semibold"
          >
            <svg class="w-6 h-6 fill-current shrink-0" viewBox="0 0 24 24">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734c0-.398.236-.75.609-.92zm11.605 11.613l2.844-2.844c.325-.325.325-.852 0-1.177l-2.844-2.844-2.107 2.107 2.107 2.758zm-3.52-3.52L3.89 2.103l11.411 9.804-3.607-2.003zm0 4.186l3.607-2.003L3.89 21.897l7.794-7.804z"/>
            </svg>
            Google Play
          </a>

          <!-- App Store -->
          <a 
            href="http://www.w3.org/2000/svg" 
            target="_blank" 
            rel="noopener noreferrer"
            class="flex items-center justify-center gap-3 px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/15 text-white rounded-2xl shadow-md transition-all active:scale-95 text-base font-semibold"
          >
            <svg class="w-6 h-6 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M18.71,19.5 C17.88,20.74 17,21.95 15.66,21.97 C14.32,22 13.89,21.18 12.37,21.18 C10.84,21.18 10.37,21.95 9.099,22 C7.788,22.05 6.8,20.68 5.96,19.47 C4.25,17 2.94,12.45 4.7,9.39 C5.57,7.87 7.13,6.91 8.82,6.88 C10.1,6.86 11.32,7.75 12.11,7.75 C12.89,7.75 14.37,6.68 15.92,6.84 C16.57,6.87 18.39,7.1 19.56,8.82 C19.47,8.88 17.39,10.1 17.41,12.63 C17.44,15.65 20.06,16.66 20.09,16.67 C20.06,16.74 19.67,18.11 18.71,19.5 Z M13,3.5 C13.73,2.67 14.94,2.04 15.94,2 C16.07,3.17 15.6,4.35 14.9,5.19 C14.21,6.04 13.07,6.7 11.95,6.61 C11.8,5.46 12.36,4.26 13,3.5 Z"/>
            </svg>
            App Store
          </a>
        </div>

      </div>

    </div>

    <!-- Copyright -->
    <div class="border-t border-white/20 mt-8 sm:mt-12 pt-6 max-w-7xl mx-auto relative z-10">
      <p class="text-center text-xs sm:text-sm opacity-80">
        Copyright &copy; 2026 - <span class="font-tropiline">Kälm</span>. Todos los derechos reservados. Buenos Aires, Argentina.
      </p>
    </div>

    <slot />
  </footer>
</template>

<style scoped>
.font-tropiline {
  font-family: 'Tropiline', serif;
  font-weight: 700;
  font-style: italic;
}

.footer-gradient {
  background-color: #306067;
  background-image: 
    radial-gradient(circle at 85% 15%, #379fafb2 0%, transparent 70%),
    radial-gradient(circle at 15% 85%, #379faf0c 0%, transparent 60%),
    linear-gradient(135deg, #306067 0%, #24494f 50%, #1a3539 100%);
}
</style>