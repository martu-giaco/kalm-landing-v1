<template>
  <!-- Hero Section -->
  <section class="justify-center bg-no-repeat bg-cover bg-center w-full flex flex-col md:flex-row items-center bg-[url(assets/imgs/header-bg.png)] pt-28 pb-16 md:pt-32 lg:pt-40 md:pb-32 lg:pb-40 bg-gradiente px-4 md:px-8 lg:px-12 xl:px-0 overflow-hidden">
    
    <img 
      src="../assets/imgs/header-img.png" 
      alt="Banner Mockups" 
      class="w-full max-w-[340px] sm:max-w-md md:max-w-none md:w-[50%] lg:w-[50%] xl:w-[55%] mb-8 md:mb-0 relative z-10 flex-shrink-0 object-contain"
    >
    
    <div class="text-center md:text-start ms-0 w-full md:w-[50%] lg:w-[50%] xl:w-[45%] z-20 md:pl-8 lg:pl-14 xl:pl-20 flex flex-col items-center md:items-start">
      <h1 class="text-4xl sm:text-5xl lg:text-6xl text-[#306067] font-bold leading-tight font-tropiline mb-2">
        Kälm
      </h1>
      
      <h2 class="text-xl sm:text-2xl lg:text-3xl text-[#306067] font-bold mb-3 leading-snug">
        Una nueva forma de cuidarte.
      </h2>

      <h4 class="hidden md:block text-lg md:text-xl lg:text-xl xl:text-2xl w-full md:w-80 text-[#37A0AF] mb-6 font-medium">
        Descubrí tu rutina perfecta, sin prueba y error.
      </h4>
      
      <button
        type="button"
        @click="openModal"
        class="text-lg sm:text-xl px-10 sm:px-16 py-3.5 mt-2 md:mt-0 w-full sm:w-auto bg-[#306067] hover:bg-[#254b51] text-white rounded-2xl shadow-md transition-all active:scale-95 cursor-pointer font-medium"
      >
        Hacer el test
      </button>
    </div>
  </section>

  <!-- Modal de descarga (Fake) -->
  <Teleport to="body">
    <Transition name="fade">
      <div 
        v-if="showModal" 
        class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto"
        @click.self="closeModal"
      >
        <div class="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full relative shadow-2xl border border-white/80 text-center animate-scale-in my-auto">
        
          <button 
             @click="closeModal" 
            class="absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 rounded-xl bg-[#F0F5F6] hover:bg-[#E2EDEF] flex items-center justify-center text-[#306067] font-bold transition-colors cursor-pointer"
            title="Cerrar"
          >
            ✕
          </button>

          <img 
            src="../assets/imgs/logo-kalm.svg" 
            alt="Kälm Logo" 
            class="h-12 w-auto mx-auto mb-4 object-contain"
          />

          <h3 class="text-2xl font-bold text-[#306067] mb-2">
            Empezá tu experiencia en <span class="font-tropiline">Kälm</span>
          </h3>
          
          <p class="text-sm sm:text-base text-[#2A4043] mb-6 leading-relaxed">
            Para realizar el test y recibir un análisis personalizado de tu piel y cabello, descargá la aplicación para tu dispositivo:
          </p>

          <!-- Opciones de descarga -->
          <div class="flex flex-col sm:flex-row gap-3 w-full justify-center">
            <a 
              href="https://xn--klm-qla.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              class="flex-1 py-3 px-4 bg-[#306067] hover:bg-[#254b51] text-white rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 active:scale-95 text-sm font-semibold"
            >
              <svg class="w-6 h-6 fill-current shrink-0" viewBox="0 0 24 24">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734c0-.398.236-.75.609-.92zm11.605 11.613l2.844-2.844c.325-.325.325-.852 0-1.177l-2.844-2.844-2.107 2.107 2.107 2.758zm-3.52-3.52L3.89 2.103l11.411 9.804-3.607-2.003zm0 4.186l3.607-2.003L3.89 21.897l7.794-7.804z"/>
              </svg>
              Google Play
            </a>

            <a 
              href="https://xn--klm-qla.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              class="flex-1 py-3 px-4 bg-[#306067] hover:bg-[#254b51] text-white rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 active:scale-95 text-sm font-semibold"
            >
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M18.71,19.5 C17.88,20.74 17,21.95 15.66,21.97 C14.32,22 13.89,21.18 12.37,21.18 C10.84,21.18 10.37,21.95 9.099,22 C7.788,22.05 6.8,20.68 5.96,19.47 C4.25,17 2.94,12.45 4.7,9.39 C5.57,7.87 7.13,6.91 8.82,6.88 C10.1,6.86 11.32,7.75 12.11,7.75 C12.89,7.75 14.37,6.68 15.92,6.84 C16.57,6.87 18.39,7.1 19.56,8.82 C19.47,8.88 17.39,10.1 17.41,12.63 C17.44,15.65 20.06,16.66 20.09,16.67 C20.06,16.74 19.67,18.11 18.71,19.5 Z M13,3.5 C13.73,2.67 14.94,2.04 15.94,2 C16.07,3.17 15.6,4.35 14.9,5.19 C14.21,6.04 13.07,6.7 11.95,6.61 C11.8,5.46 12.36,4.26 13,3.5 Z"/>
              </svg>
              App Store
            </a>
          </div>

        </div>
      </div>
    </Transition>
  </Teleport>

  <!-- Features Section -->
  <section class="my-16 md:my-30 flex flex-col container mx-auto text-center px-4 sm:px-6 lg:px-8">
    <h2 class="text-2xl sm:text-3xl md:text-4xl text-[#306067] font-semibold">Descubrí tu próxima rutina.</h2>
    <p class="text-base sm:text-lg md:text-xl mt-2 text-[#2A4043]">Hacé del autocuidado parte de tu día a día</p>
    
    <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-8 justify-items-center text-start list-none p-0">
      <!-- Card 1 -->
      <li class="flex flex-col items-start px-6 sm:px-7 py-10 lg:py-12 rounded-2xl bg-[url(assets/imgs/header-bg.png)] bg-left shadow-md glass w-full max-w-[320px]">
        <img src="../assets/imgs/self_care_icon.png" alt="Rutinas" class="w-10 h-10 sm:w-12 sm:h-12 mb-4 object-contain">
        <h3 class="font-semibold text-lg sm:text-xl mb-2 text-[#306067]">Creá rutinas personalizadas</h3>
        <p class="text-sm sm:text-base text-start text-[#2A4043]">Armá tus rutinas de skincare y haircare según lo que vos necesitás. Elegí los pasos, productos y frecuencia para que tu autocuidado sea realmente tuyo.</p>
      </li>

      <!-- Card 2 -->
      <li class="flex flex-col items-start px-6 sm:px-7 py-10 lg:py-12 rounded-2xl bg-[url(assets/imgs/header-bg.png)] bg-left shadow-md glass w-full max-w-[320px]">
        <img src="../assets/imgs/alarm_icon.png" alt="Recordatorios" class="w-10 h-10 sm:w-12 sm:h-12 mb-4 object-contain">
        <h3 class="font-semibold text-lg sm:text-xl mb-2 text-[#306067]">Programá recordatorios</h3>
        <p class="text-sm sm:text-base text-start text-[#2A4043]">Configurá alertas diarias, semanales, mensuales o hasta anuales para mantener la constancia y que tu rutina se convierta en un nuevo hábito saludable.</p>
      </li>

      <!-- Card 3 -->
      <li class="flex flex-col items-start px-6 sm:px-7 py-10 lg:py-12 rounded-2xl bg-[url(assets/imgs/header-bg.png)] bg-left shadow-md glass w-full max-w-[320px] md:col-span-2 lg:col-span-1">
        <img src="../assets/imgs/groups_icon.png" alt="Comunidad" class="w-14 h-10 sm:w-16 sm:h-12 mb-4 object-contain">
        <h3 class="font-semibold text-lg sm:text-xl mb-2 text-[#306067]">Interactuá con nuestra comunidad</h3>
        <p class="text-sm sm:text-base text-start text-[#2A4043]">Compartí tus experiencias, descubrí tips y conectá con otras personas en su propio camino de autocuidado.</p>
      </li>
    </ul>
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
    <h2 class="text-2xl sm:text-3xl md:text-4xl text-[#306067] font-semibold mb-8 sm:mb-10">¿ Alguna Pregunta ?</h2>
    
    <div class="max-w-4xl mx-auto text-start relative z-10">
      
      <div class="collapse collapse-arrow rounded-2xl glass border border-base-300 mb-4 bg-[url(assets/imgs/header-bg.png)] bg-left bg-no-repeat bg-cover py-2 sm:py-3">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <h3 class="collapse-title text-lg sm:text-xl md:text-2xl font-semibold text-[#306067] pr-8 sm:pr-10 leading-relaxed">
          ¿ &nbsp;Cómo empiezo a usar <span class="font-tropiline">Kälm</span>&nbsp; ?
        </h3>
        <p class="collapse-content text-sm sm:text-base text-[#2A4043] leading-relaxed pt-2">
          Solo necesitás descargar la app y crear tu perfil. Una vez dentro, completás un test breve sobre tu tipo de piel, cabello y objetivos. A partir de eso, <span class="font-tropiline">Kälm</span> te diseña una rutina personalizada que podés modificar cuando quieras.
        </p>
      </div>
      
      <div class="collapse collapse-arrow rounded-2xl glass border border-base-300 mb-4 bg-[url(assets/imgs/header-bg.png)] bg-left bg-no-repeat bg-cover py-2 sm:py-3">
        <input type="radio" name="my-accordion-2" />
        <h3 class="collapse-title text-lg sm:text-xl md:text-2xl font-semibold text-[#306067] pr-8 sm:pr-10 leading-relaxed">
          ¿ &nbsp;La App es Gratuita&nbsp; ?
        </h3>
        <p class="collapse-content text-sm sm:text-base text-[#2A4043] leading-relaxed pt-2">
          Sí, <span class="font-tropiline">Kälm</span> ofrece todas sus funcionalidades principales de forma gratuita, porque creemos que el bienestar y el autocuidado deben ser accesibles para todos.
        </p>
      </div>
      
      <div class="collapse collapse-arrow rounded-2xl glass border border-base-300 mb-4 bg-[url(assets/imgs/header-bg.png)] bg-left bg-no-repeat bg-cover py-2 sm:py-3">
        <input type="radio" name="my-accordion-2" />
        <h3 class="collapse-title text-lg sm:text-xl md:text-2xl font-semibold text-[#306067] pr-8 sm:pr-10 leading-relaxed">
          ¿ &nbsp;Qué Hacen con mis Datos&nbsp; ?
        </h3>
        <p class="collapse-content text-sm sm:text-base text-[#2A4043] leading-relaxed pt-2">
          Priorizamos la transparencia y el respeto por tu información. Los datos que ingresás se usan solo para mejorar tu experiencia dentro de la app, y nunca se comparten con terceros.
        </p>
      </div>
      
      <div class="collapse collapse-arrow rounded-2xl glass border border-base-300 mb-4 bg-[url(assets/imgs/header-bg.png)] bg-left bg-no-repeat bg-cover py-2 sm:py-3">
        <input type="radio" name="my-accordion-2" />
        <h3 class="collapse-title text-lg sm:text-xl md:text-2xl font-semibold text-[#306067] pr-8 sm:pr-10 leading-relaxed">
          ¿ &nbsp;Qué tipo de recomendaciones ofrece la app&nbsp; ?
        </h3>
        <p class="collapse-content text-sm sm:text-base text-[#2A4043] leading-relaxed pt-2">
          <span class="font-tropiline">Kälm</span> te sugiere productos y hábitos personalizados según tus respuestas en el test y tus objetivos de cuidado. Las recomendaciones son transparentes y sin patrocinios ocultos, porque creemos en la confianza y la autenticidad.
        </p>
      </div>

    </div>
    <img 
      src="../assets/imgs/blob2.png" 
      alt="Imagen deco"
      class="deco2 h-auto hidden lg:block"
    >
  </section>
  
  <!-- CTA Section -->
  <section class="mx-4 sm:mx-8 min-[1294px]:mx-35 mb-20 min-[1294px]:mb-40">
    <div class="bg-[url(assets/imgs/aaa.png)] flex flex-col justify-center bg-no-repeat bg-cover bg-[position:80%_center] min-[1294px]:bg-left w-full text-center items-center min-[1294px]:items-end pt-20 pb-20 min-[1294px]:pt-32 min-[1294px]:pb-32 rounded-2xl px-6 min-[1294px]:px-16 overflow-hidden shadow-lg">
      <h2 class="text-2xl sm:text-3xl min-[1294px]:text-4xl text-[#306067] font-semibold mb-8 max-w-md min-[1294px]:max-w-none text-center min-[1294px]:text-right leading-snug">
        ¿&nbsp;Listo para comenzar tu viaje <br class="hidden sm:block"> de autocuidado&nbsp;?
      </h2>

      <div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center min-[1294px]:justify-end">
        <!-- Google Play -->
        <a 
          href="https://xn--klm-qla.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          class="flex items-center justify-center gap-3 px-6 py-3.5 bg-[#306067] hover:bg-[#254b51] text-white rounded-2xl shadow-md transition-all active:scale-95 text-base font-semibold"
        >
          <svg class="w-6 h-6 fill-current shrink-0" viewBox="0 0 24 24">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734c0-.398.236-.75.609-.92zm11.605 11.613l2.844-2.844c.325-.325.325-.852 0-1.177l-2.844-2.844-2.107 2.107 2.107 2.758zm-3.52-3.52L3.89 2.103l11.411 9.804-3.607-2.003zm0 4.186l3.607-2.003L3.89 21.897l7.794-7.804z"/>
          </svg>
          Google Play
        </a>

        <!-- App Store -->
        <a 
          href="https://xn--klm-qla.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          class="flex items-center justify-center gap-3 px-6 py-3.5 bg-[#306067] hover:bg-[#254b51] text-white rounded-2xl shadow-md transition-all active:scale-95 text-base font-semibold"
        >
          <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M18.71,19.5 C17.88,20.74 17,21.95 15.66,21.97 C14.32,22 13.89,21.18 12.37,21.18 C10.84,21.18 10.37,21.95 9.099,22 C7.788,22.05 6.8,20.68 5.96,19.47 C4.25,17 2.94,12.45 4.7,9.39 C5.57,7.87 7.13,6.91 8.82,6.88 C10.1,6.86 11.32,7.75 12.11,7.75 C12.89,7.75 14.37,6.68 15.92,6.84 C16.57,6.87 18.39,7.1 19.56,8.82 C19.47,8.88 17.39,10.1 17.41,12.63 C17.44,15.65 20.06,16.66 20.09,16.67 C20.06,16.74 19.67,18.11 18.71,19.5 Z M13,3.5 C13.73,2.67 14.94,2.04 15.94,2 C16.07,3.17 15.6,4.35 14.9,5.19 C14.21,6.04 13.07,6.7 11.95,6.61 C11.8,5.46 12.36,4.26 13,3.5 Z"/>
          </svg>
          App Store
        </a>
      </div>
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

watch(showModal, (val) => {
  if (val) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})
</script>

<style scoped>
/* Tipografía Tropiline */
.font-tropiline {
  font-family: 'Tropiline', serif;
  font-weight: 700;
  font-style: italic;
}

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