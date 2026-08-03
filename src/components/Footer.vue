<script setup>
</script>

<template>
  <footer
    class="relative z-20 mt-auto bg-[#306067] text-white w-full rounded-t-[35px] sm:rounded-t-[50px] lg:rounded-t-[60px] pt-10 sm:pt-16 lg:pt-24 pb-8 px-6 sm:px-12 lg:px-20 overflow-hidden shadow-2xl">
    <div class="flex flex-row justify-between items-start gap-4 sm:gap-8 max-w-7xl mx-auto">
      
      <div class="flex flex-col">
        
        <div class="flex flex-row text-left gap-8 sm:gap-12 lg:gap-16">
          <ul class="space-y-1.5 sm:space-y-2 text-sm sm:text-base font-medium">
            <li>
              <RouterLink to="/" class="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                Inicio
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/planes" class="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                Planes
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/about" class="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                Sobre Kälm
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/contact" class="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                Contacto
              </RouterLink>
            </li>
          </ul>
          
          <ul class="space-y-1.5 sm:space-y-2 text-sm sm:text-base font-medium">
            <li>
              <RouterLink to="/equipo" class="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                Equipo Kälm
              </RouterLink>
            </li>
          </ul>
        </div>

        <div class="mt-6 sm:mt-8">
          <ul class="flex gap-4 items-center">
            
            <li>
              <a 
                href="https://www.instagram.com/kalm_oficial/" 
                target="_blank" 
                rel="noopener noreferrer"
                class="block text-white opacity-80 hover:opacity-100 transition-all hover:scale-110 p-1"
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
                class="block text-white opacity-80 hover:opacity-100 transition-all hover:scale-110 p-1"
                title="TikTok"
              >
                <span class="sr-only">TikTok</span>
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 11-5.2-1.74 2.89 2.89 0 012.31-2.83V7.52a6.34 6.34 0 00-1 .08 6.34 6.34 0 106.34 6.34V8.69a8.18 8.18 0 004.77 1.52A8.1 8.1 0 0020 10V6.57a4.8 4.8 0 01-.41.12z"/>
                </svg>
              </a>
            </li>

            <li>
              <a 
                href="https://www.youtube.com/@kalm_oficial" 
                target="_blank" 
                rel="noopener noreferrer"
                class="block text-white opacity-80 hover:opacity-100 transition-all hover:scale-110 p-1"
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

      <img 
        src="../assets/imgs/logo-kalm-light.svg" 
        alt="Logo Kälm" 
        class="h-14 sm:h-24 lg:h-28 w-auto object-contain shrink-0"
      >
    </div>

    <div class="border-t border-white/20 mt-8 sm:mt-12 pt-6 max-w-7xl mx-auto">
      <p class="text-center text-xs sm:text-sm opacity-80">
        Copyright &copy; 2025 - Kälm. Todos los derechos reservados. Buenos Aires, Argentina.
      </p>
    </div>

    <slot />
  </footer>
</template>