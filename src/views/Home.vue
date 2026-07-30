<template>
  <!-- Hero Section -->
  <section class="justify-center bg-no-repeat bg-cover bg-center w-full flex flex-col md:flex-row items-center bg-[url(assets/imgs/header-bg.png)] pt-28 pb-16 md:pt-32 lg:pt-40 md:pb-32 lg:pb-40 bg-gradiente px-4 md:px-8 lg:px-12 xl:px-0 overflow-hidden">
    
    <img 
      src="../assets/imgs/header-img.png" 
      alt="Banner Mockups" 
      class="w-full max-w-[340px] sm:max-w-md md:max-w-none md:w-[50%] lg:w-[50%] xl:w-[55%] mb-8 md:mb-0 relative z-10 flex-shrink-0 object-contain"
    >
    
    <div class="text-center md:text-start ms-0 w-full md:w-[50%] lg:w-[50%] xl:w-[45%] z-20 md:pl-8 lg:pl-14 xl:pl-20 flex flex-col items-center md:items-start">
      <h1 class="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl text-[#306067] leading-tight font-bold">Una nueva forma de cuidarte.</h1>
      
      <!-- H2 Oculto en Mobile, visible desde md (Tablet) -->
      <h2 class="hidden md:block text-lg md:text-xl lg:text-xl xl:text-2xl w-full md:w-80 text-[#37A0AF] mb-5 md:mt-3 mx-auto md:mx-0 font-semibold">
        Descubrí tu rutina perfecta, sin prueba y error.
      </h2>
      
      <button
        type="button"
        @click="openModal"
        class="text-lg sm:text-xl px-10 sm:px-20 py-3 pt-4 mt-6 md:mt-0 w-full sm:w-auto bg-[#306067] text-white rounded-2xl shadow-md boton-header transition-transform active:scale-95 cursor-pointer"
      >
        Hacer el test
      </button>
    </div>
  </section>

  <!-- Modal Teleportado -->
  <Teleport to="body">
    <Transition name="fade">
      <div 
        v-if="showModal" 
        class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto"
        @click.self="closeModal"
      >
        <div class="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full relative shadow-2xl border border-white/80 text-center animate-scale-in my-auto">
          
          <!-- Botón Cerrar -->
          <button 
            @click="closeModal"
            class="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 flex items-center justify-center font-bold text-lg transition-colors cursor-pointer"
          >
            ✕
          </button>

          <!-- Logo SVG de Kälm -->
          <img 
            src="../assets/imgs/logo-kalm.svg" 
            alt="Kälm Logo" 
            class="h-12 w-auto mx-auto mb-4 object-contain"
          />

          <h3 class="text-2xl font-bold text-[#306067] mb-2">
            Empezá tu experiencia en Kälm
          </h3>
          
          <p class="text-sm sm:text-base text-[#2A4043] mb-6 leading-relaxed">
            Para realizar el test y recibir un análisis personalizado de tu piel y cabello, descargá la aplicación y comenzá tu camino hacia una rutina hecha para vos.
          </p>

          <!-- Botones de Acción -->
          <div class="flex flex-col gap-3 w-full">
            <a href="#" class="w-full py-3.5 px-6 bg-[#306067] hover:bg-[#254b51] text-white font-semibold rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 active:scale-95">
              <span></span> Descargar la App
            </a>
            
          </div>

        </div>
      </div>
    </Transition>
  </Teleport>

  <!-- Features Section -->
  <section class="my-16 md:my-30 flex flex-col container mx-auto text-center px-4 sm:px-6 lg:px-8">
    <h2 class="text-2xl sm:text-3xl md:text-4xl text-[#306067] font-semibold">Descubrí tu próxima rutina.</h2>
    <p class="text-base sm:text-lg md:text-xl mt-2 text-[#2A4043]">Hace del autocuidado parte de tu día a día</p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-8 justify-items-center text-start">
      <!-- Card 1 -->
      <div class="flex flex-col items-start px-6 sm:px-7 py-10 lg:py-15 rounded-xl bg-[url(assets/imgs/header-bg.png)] bg-left shadow-md glass w-full max-w-[320px]">
        <img src="../assets/imgs/self_care_icon.png" alt="Rutinas" class="w-10 h-10 sm:w-12 sm:h-12 mb-4 object-contain">
        <h3 class="font-semibold text-lg sm:text-xl mb-2 text-[#306067]">Creá rutinas personalizadas</h3>
        <p class="text-sm sm:text-md text-start text-[#2A4043]">Armá tus rutinas de skincare y haircare según lo que vos necesitás. Elegí los pasos, productos y frecuencia para que tu autocuidado sea realmente tuyo.</p>
      </div>

      <!-- Card 2 -->
      <div class="flex flex-col items-start px-6 sm:px-7 py-10 lg:py-15 rounded-xl bg-[url(assets/imgs/header-bg.png)] bg-left shadow-md glass w-full max-w-[320px]">
        <img src="../assets/imgs/alarm_icon.png" alt="Recordatorios" class="w-10 h-10 sm:w-12 sm:h-12 mb-4 object-contain">
        <h3 class="font-semibold text-lg sm:text-xl mb-2 text-[#306067]">Programá recordatorios</h3>
        <p class="text-sm sm:text-md text-start text-[#2A4043]">Configurá alertas diarias, semanales, mensuales o hasta anuales para mantener la constancia y que tu rutina se convierta en un nuevo hábito saludable.</p>
      </div>

      <!-- Card 3 -->
      <div class="flex flex-col items-start px-6 sm:px-7 py-10 lg:py-15 rounded-xl bg-[url(assets/imgs/header-bg.png)] bg-left shadow-md glass w-full max-w-[320px] md:col-span-2 lg:col-span-1">
        <img src="../assets/imgs/groups_icon.png" alt="Comunidad" class="w-14 h-10 sm:w-16 sm:h-12 mb-4 object-contain">
        <h3 class="font-semibold text-lg sm:text-xl mb-2 text-[#306067]">Interactuá con nuestra comunidad</h3>
        <p class="text-sm sm:text-md text-start text-[#2A4043]">Compartí tus experiencias, descubrí tips y conectá con otras personas en su propio camino de autocuidado.</p>
      </div>
    </div>
  </section>
  
  <!-- Steps Section -->
  <section class="relative overflow-hidden mt-12 sm:mt-16 lg:mt-20 container mx-auto text-center px-4 sm:px-6">
    <h2 class="text-2xl sm:text-3xl md:text-4xl text-[#306067] font-semibold mb-6 sm:mb-8 leading-tight">
      La rutina perfecta para vos <br class="hidden sm:block">en tan solo 4 pasos...
    </h2>
    <img 
      src="../assets/imgs/pasos3.png" 
      alt="Imagen pasos" 
      class="w-full max-w-4xl mx-auto object-contain relative z-10"
    >
    <img 
      src="../assets/imgs/blob1.png" 
      alt="Imagen deco"
      class="deco1 h-auto hidden lg:block"
    >
  </section>

  <!-- FAQ Section -->
  <section class="relative overflow-hidden mb-20 sm:mb-24 lg:mb-28 mt-12 sm:mt-16 lg:mt-20 container mx-auto text-center px-4 sm:px-6 lg:px-8">
    <span class="text-[#CCE2E5] mb-2 block font-bold tracking-wider text-sm sm:text-base uppercase">F.A.Q</span>
    <h2 class="text-2xl sm:text-3xl md:text-4xl text-[#306067] font-semibold mb-8 sm:mb-10">¿Alguna Pregunta?</h2>
    <div class="max-w-4xl mx-auto text-start relative z-10">
      
      <div class="collapse collapse-arrow rounded-xl glass border border-base-300 mb-3 bg-[url(assets/imgs/header-bg.png)] bg-left bg-no-repeat bg-cover py-1 sm:py-2">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <h3 class="collapse-title text-lg sm:text-xl md:text-2xl font-semibold text-[#306067] pr-8 sm:pr-10 leading-tight">¿Cómo empiezo a usar <i>Kälm</i>?</h3>
        <p class="collapse-content text-sm sm:text-base text-[#2A4043] leading-relaxed">Solo necesitás descargar la app y crear tu perfil. Una vez dentro, completás un test breve sobre tu tipo de piel, cabello y objetivos. A partir de eso, <i>Kälm</i> te diseña una rutina personalizada que podés modificar cuando quieras.</p>
      </div>
      
      <div class="collapse collapse-arrow rounded-xl glass border border-base-300 mb-3 bg-[url(assets/imgs/header-bg.png)] bg-left bg-no-repeat bg-cover py-1 sm:py-2">
        <input type="radio" name="my-accordion-2" />
        <h3 class="collapse-title text-lg sm:text-xl md:text-2xl font-semibold text-[#306067] pr-8 sm:pr-10 leading-tight">¿La App es Gratuita?</h3>
        <p class="collapse-content text-sm sm:text-base text-[#2A4043] leading-relaxed">Sí, <i>Kälm</i> ofrece todas sus funcionalidades principales de forma gratuita, porque creemos que el bienestar y el autocuidado deben ser accesibles para todos.</p>
      </div>
      
      <div class="collapse collapse-arrow rounded-xl glass border border-base-300 mb-3 bg-[url(assets/imgs/header-bg.png)] bg-left bg-no-repeat bg-cover py-1 sm:py-2">
        <input type="radio" name="my-accordion-2" />
        <h3 class="collapse-title text-lg sm:text-xl md:text-2xl font-semibold text-[#306067] pr-8 sm:pr-10 leading-tight">¿Qué Hacen con mis Datos?</h3>
        <p class="collapse-content text-sm sm:text-base text-[#2A4043] leading-relaxed">Priorizamos la transparencia y el respeto por tu información. Los datos que ingresás se usan solo para mejorar tu experiencia dentro de la app, y nunca se comparten con terceros.</p>
      </div>
      
      <div class="collapse collapse-arrow rounded-xl glass border border-base-300 mb-3 bg-[url(assets/imgs/header-bg.png)] bg-left bg-no-repeat bg-cover py-1 sm:py-2">
        <input type="radio" name="my-accordion-2" />
        <h3 class="collapse-title text-lg sm:text-xl md:text-2xl font-semibold text-[#306067] pr-8 sm:pr-10 leading-tight">¿Qué tipo de recomendaciones ofrece la app?</h3>
        <p class="collapse-content text-sm sm:text-base text-[#2A4043] leading-relaxed"><i>Kälm</i> te sugiere productos y hábitos personalizados según tus respuestas en el test y tus objetivos de cuidado. Las recomendaciones son transparentes y sin patrocinios ocultos, porque creemos en la confianza y la autenticidad.</p>
      </div>

    </div>
    <img 
      src="../assets/imgs/blob2.png" 
      alt="Imagen deco"
      class="deco2 h-auto hidden lg:block"
    >
  </section>
  
  <!-- CTA Section -->
  <section class="mx-4 sm:mx-8 lg:mx-35 mb-20 lg:mb-40">
    <div class="bg-[url(assets/imgs/aaa.png)] flex flex-col justify-center bg-no-repeat bg-cover bg-[position:80%_center] lg:bg-center w-full text-center items-center lg:items-end pt-24 pb-24 lg:pt-40 lg:pb-40 rounded-2xl px-6 lg:px-16 overflow-hidden">
      <h2 class="text-2xl sm:text-3xl lg:text-4xl text-[#306067] font-semibold mb-6 max-w-md lg:max-w-none text-center lg:text-right">
        ¿Listo para comenzar tu viaje <br class="hidden sm:block"> de autocuidado?
      </h2>
      <a 
        href="#" 
        class="text-lg sm:text-xl px-10 sm:px-20 py-3 pt-4 bg-[#306067] text-white rounded-2xl shadow-md boton-header w-full sm:w-auto text-center inline-block transition-transform active:scale-95"
      >
        Descargá la app
      </a>
    </div>
  </section>
</template>

<script setup>
import { ref, watch } from 'vue'

const showModal = ref(false)

function openModal() {
  showModal.value = true
}

function closeModal() {
  showModal.value = false
}

// Deshabilita el scroll del body cuando el modal está activo
watch(showModal, (val) => {
  if (val) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-scale-in {
  animation: scaleIn 0.25s ease-out forwards;
}
</style>