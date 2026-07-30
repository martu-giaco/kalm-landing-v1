<script setup>
const integrantes = [
  {
    id: 1,
    name: 'Alvarez Martina',
    rol: 'Co-fundadora',
    description: 'Directora del Departamento de Marketing'
  },
  {
    id: 2,
    name: 'Barrientos Abril',
    rol: 'Co-fundadora',
    description: 'Directora del Departamento de Tecnología'
  },
  {
    id: 3,
    name: 'Giacomini Martina',
    rol: 'Co-fundadora',
    description: 'Directora del Departamento de Diseño'
  }
];
</script>

<template>
  <section class="flex flex-col items-center w-full justify-center bg-no-repeat bg-cover bg-center bg-[url(assets/imgs/header-bg.png)] pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-40 lg:pb-36 bg-gradiente px-4 sm:px-6 lg:px-8 overflow-hidden">
    
    <!-- Encabezado -->
    <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#306067] text-center mb-3">
      Conocé a nuestro equipo
    </h1>
    <h2 class="text-center text-lg sm:text-xl lg:text-2xl text-[#37A0AF] mb-10 sm:mb-14 max-w-xl font-semibold">
      Las personas que hacen a <i class="logo-text">Kälm</i>, <i class="logo-text">Kälm</i>.
    </h2>

    <!-- Grid de Tarjetas -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8 xl:gap-10 max-w-7xl w-full mx-auto justify-items-center items-stretch">
      
      <div 
        v-for="integrante in integrantes" 
        :key="integrante.id" 
        class="glass border border-white/60 bg-white/40 backdrop-blur-md p-8 sm:p-10 lg:p-8 xl:p-12 rounded-3xl flex flex-col items-center text-center w-full max-w-lg lg:max-w-none shadow-lg hover:shadow-xl transition-all duration-300 justify-center min-h-[280px] sm:min-h-[320px]"
      >
        <h3 class="text-2xl sm:text-3xl lg:text-2xl xl:text-3xl font-bold text-[#306067] mb-3 whitespace-nowrap tracking-tight">
          {{ integrante.name }}
        </h3>
        
        <span class="inline-block px-5 py-1.5 rounded-full bg-[#37A0AF]/15 text-[#37A0AF] font-bold text-sm sm:text-base mb-5">
          {{ integrante.rol }}
        </span>
        
        <p class="text-base sm:text-lg lg:text-lg xl:text-xl text-[#2A4043] leading-relaxed max-w-xs sm:max-w-sm">
          {{ integrante.description }}
        </p>
      </div>

    </div>
  </section>
</template>