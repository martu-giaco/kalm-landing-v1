<script setup>
</script>

<template>
  <footer
    class="bg-[#306067] text-white w-full rounded-t-[35px] sm:rounded-t-[50px] lg:rounded-t-[60px] pt-10 sm:pt-16 lg:pt-24 pb-8 px-6 sm:px-12 lg:px-20 overflow-hidden">
    <div class="flex flex-row justify-between items-start gap-4 sm:gap-8 max-w-7xl mx-auto">
      
      <div class="flex flex-col">
        
        <div class="flex flex-row text-left gap-8 sm:gap-12 lg:gap-16">
          
          <ul class="space-y-1.5 sm:space-y-2 text-sm sm:text-base font-medium">
            <li><RouterLink to="/" class="hover:underline opacity-90 hover:opacity-100 transition-opacity">Inicio</RouterLink></li>
            <li><RouterLink to="/planes" class="hover:underline opacity-90 hover:opacity-100 transition-opacity">Planes</RouterLink></li>
            <li><RouterLink to="/about" class="hover:underline opacity-90 hover:opacity-100 transition-opacity">Sobre Kälm</RouterLink></li>
            <li><RouterLink to="/contact" class="hover:underline opacity-90 hover:opacity-100 transition-opacity">Contacto</RouterLink></li>
          </ul>
          
          <ul class="space-y-1.5 sm:space-y-2 text-sm sm:text-base font-medium">
            <li><RouterLink to="/equipo" class="hover:underline opacity-90 hover:opacity-100 transition-opacity">Equipo Kälm</RouterLink></li>
          </ul>

        </div>

        <!-- Redes Sociales -->
        <div class="mt-6 sm:mt-8">
          <ul class="flex gap-4 items-center">
            <li>
              <a 
                href="https://www.instagram.com/kalm_oficial/" 
                target="_blank" 
                rel="noopener noreferrer"
                class="block bg-[url(assets/imgs/insta-light.png)] bg-no-repeat bg-contain bg-center w-5 h-5 transition-transform hover:scale-110"
                title="Instagram"
              >
                <span class="sr-only">Instagram</span>
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