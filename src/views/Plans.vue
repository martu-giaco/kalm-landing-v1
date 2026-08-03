<script setup>
import { ref, watch } from 'vue';

const showFreeModal = ref(false);
const showPremiumModal = ref(false);

const openFreeModal = () => {
  showFreeModal.value = true;
};

const openPremiumModal = () => {
  showPremiumModal.value = true;
};

const closeModals = () => {
  showFreeModal.value = false;
  showPremiumModal.value = false;
};

watch([showFreeModal, showPremiumModal], ([free, premium]) => {
  if (free || premium) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});

const plans = [
  {
    id: 1,
    title: 'Kälm Free',
    description: 'Ideal para quienes recién están empezando en el mundo del haircare y skincare.',
    price: 'Gratis',
    features: [
      'Diagnóstico básico de piel y cabello.',
      'Recomendaciones de rutina.',
      'Consejos y artículos sobre self-care.',
      '2 rutinas personalizables.'
    ],
    buttonText: 'Empezar gratis',
    main: false
  },
  {
    id: 2,
    title: 'Kälm Premium',
    description: 'Ideal para quienes ya conocen su piel y buscan subir de nivel, con experiencia personalizada y sin anuncios.',
    price: 'ARS $7,000 /mes',
    features: [
      'Todo lo incluido en Kälm Free.',
      'Self-Pack de bienvenida.',
      'Rutinas activas ilimitadas.',
      '+5 productos por rutina.',
      'Acceso completo a blogs exclusivos.',
      'Reseñas en productos.'
    ],
    buttonText: 'Ver más',
    main: true
  }
];

const premiumFeatures = [
  {
    title: 'Self-Pack de bienvenida',
    desc: 'Productos exclusivos para nuevos suscriptores (solo residentes de Argentina).'
  },
  {
    title: 'Rutinas ilimitadas',
    desc: 'Creá, activá y desactivá tantas rutinas como necesites sin perder tu historial.'
  },
  {
    title: 'Más productos por rutina',
    desc: 'Sumá hasta 5 productos adicionales a tus rutinas de cuidado.'
  },
  {
    title: 'Blogs exclusivos',
    desc: 'Acceso a la biblioteca completa con artículos redactados por expertos.'
  },
  {
    title: 'Reseñas en productos',
    desc: 'Dejá tus opiniones y leé valoraciones de otros usuarios de la comunidad.'
  },
  {
    title: 'Activación inmediata',
    desc: 'Empezás a usar todos los beneficios apenas confirmás el pago.'
  }
];

const comparisonTable = [
  { benefit: 'Self-Pack de bienvenida', free: '—', premium: 'Incluido' },
  { benefit: 'Rutinas activas', free: 'Hasta 2', premium: 'Ilimitadas' },
  { benefit: 'Productos por rutina', free: 'Hasta 5', premium: '+5' },
  { benefit: 'Blogs exclusivos', free: 'Acceso limitado', premium: 'Biblioteca completa' },
  { benefit: 'Reseñas en productos', free: '—', premium: 'Incluido' }
];
</script>

<template>
  <section class="flex flex-col items-center w-full justify-center bg-no-repeat bg-cover bg-center bg-[url(assets/imgs/header-bg.png)] pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-40 lg:pb-36 bg-gradiente px-4 sm:px-6 lg:px-8 overflow-hidden">
    
    <!-- Encabezado -->
    <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#306067] text-center mb-3">
      Premium
    </h1>
    <h2 class="text-center text-lg sm:text-xl lg:text-2xl text-[#37A0AF] mb-8 sm:mb-12 max-w-xl font-semibold">
      Elegí entre las dos posibilidades que más se adapten a tus necesidades.
    </h2>

    <!-- Grid de Planes -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mt-3 items-stretch max-w-[1050px] w-full mx-auto justify-items-center">
      
      <div 
        v-for="plan in plans" 
        :key="plan.id" 
        :class="[
          'p-1.5 rounded-3xl flex w-full max-w-md lg:max-w-none transition-all duration-300',
          plan.main 
            ? 'bg-gradient-to-b from-[#37A0AF] to-[#CCE2E5] shadow-xl' 
            : 'glass border border-white/60 shadow-md'
        ]"
      >
        <div 
          :class="[
            'flex flex-col p-6 sm:p-8 lg:p-6 xl:p-8 rounded-[20px] w-full h-full',
            plan.main ? 'bg-white' : 'bg-white/80'
          ]"
        >
          <h3 class="text-3xl sm:text-4xl font-bold text-[#306067] mb-3 text-center">
            {{ plan.title }}
          </h3>
          
          <p class="text-sm sm:text-base text-[#2A4043] mb-6 text-center sm:text-start leading-relaxed min-h-[48px]">
            {{ plan.description }}
          </p>
          
          <div class="my-2 text-center overflow-x-auto">
            <span class="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-extrabold text-[#37A0AF] tracking-tight whitespace-nowrap">
              {{ plan.price }}
            </span>
          </div>

          <p class="text-[#306067] text-base sm:text-lg font-bold text-start mt-6 mb-3">
            ¿Qué incluye?
          </p>
          
          <ul class="flex flex-col gap-3 text-[#2A4043] text-start mb-8">
            <li v-for="(feature, i) in plan.features" :key="i" class="flex items-start gap-2.5 text-sm sm:text-base">
              <span class="text-[#37A0AF] font-bold text-base mt-0.5 flex-shrink-0">✔</span>
              <span>{{ feature }}</span>
            </li>
          </ul>

          <div class="mt-auto flex justify-center w-full">
            <button 
              v-if="plan.main" 
              @click="openPremiumModal"
              type="button"
              class="w-full text-center px-6 py-3.5 !bg-[#306067] hover:!bg-[#254b51] text-white font-semibold rounded-2xl shadow-md transition-all active:scale-95 ![background-image:none] cursor-pointer"
            >
              {{ plan.buttonText }}
            </button>
            <button 
              v-else 
              @click="openFreeModal"
              type="button"
              class="w-full text-center px-6 py-3.5 !bg-[#CCE2E5] hover:!bg-[#b8d7dc] text-[#2A4043] font-semibold rounded-2xl shadow-md transition-all active:scale-95 ![background-image:none] cursor-pointer"
            >
              {{ plan.buttonText }}
            </button>
          </div>

        </div>
      </div>

    </div>

    <Teleport to="body">
      
      <!-- MODAL 1: KÄLM FREE -->
      <Transition name="fade">
        <div v-if="showFreeModal" class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto" @click.self="closeModals">
          <div class="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full relative shadow-2xl border border-white/80 text-center animate-scale-in my-auto">
            
            <!-- Botón Cerrar -->
            <button @click="closeModals" class="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 flex items-center justify-center font-bold text-lg transition-colors cursor-pointer">
              ✕
            </button>

            <img src="../assets/imgs/logo-kalm.svg" alt="Kälm Logo" class="h-12 w-auto mx-auto mb-4 object-contain"/>

            <h3 class="text-2xl font-bold text-[#306067] mb-2">
              ¡Empezá gratis hoy!
            </h3>
            
            <p class="text-sm sm:text-base text-[#2A4043] mb-6 leading-relaxed">
              Para disfrutar de la experiencia completa de <strong>Kälm Free</strong> y llevar el seguimiento de tus rutinas, descargá nuestra app oficial en tu celular.
            </p>

            <!-- Botón de Descarga -->
            <div class="flex flex-col gap-3 w-full">
              <a href="#" class="w-full py-3.5 px-6 bg-[#306067] hover:bg-[#254b51] text-white font-semibold rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 active:scale-95">
                Descargar la App
              </a>
            </div>

          </div>
        </div>
      </Transition>

      <!-- MODAL 2: KÄLM PREMIUM -->
      <Transition name="fade">
        <div 
          v-if="showPremiumModal" 
          class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-3 sm:p-6 overflow-y-auto"
          @click.self="closeModals"
        >
          <div class="bg-[#F4F9FA] rounded-[32px] max-w-lg w-full max-h-[90vh] overflow-y-auto relative shadow-2xl border border-white/80 p-4 sm:p-6 animate-scale-in my-auto">
            
            <div class="flex items-center justify-between bg-white/70 backdrop-blur-md px-4 py-2.5 rounded-full border border-white shadow-sm mb-6 sticky top-0 z-10">
              <div class="flex items-center gap-2">
                <span class="logo-text text-xl font-bold text-[#306067]">Kälm</span>
              </div>
              <button 
                @click="closeModals" 
                class="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-[#306067] font-bold flex items-center justify-center text-sm transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div class="text-center mb-6">
              <span class="text-xs uppercase tracking-widest text-[#37A0AF] font-bold">
                PLAN PREMIUM
              </span>
              <h2 class="text-3xl sm:text-4xl font-serif font-extrabold text-[#306067] mt-1 mb-2">
                Tu cuidado sin límites
              </h2>
              <p class="text-sm text-[#2A4043]/80 leading-relaxed max-w-xs mx-auto font-medium">
                Rutinas ilimitadas, diagnósticos más precisos y el respaldo de expertos.
              </p>
            </div>

            <div class="bg-white rounded-3xl p-5 sm:p-6 shadow-sm border border-[#E2EFEB] mb-6">
              
              <h3 class="text-xl sm:text-2xl font-serif font-bold text-[#306067] mb-0.5">
                Kälm Premium
              </h3>
              <p class="text-xs sm:text-sm text-gray-500 mb-3">
                Un solo plan. Todos los beneficios.
              </p>

              <div class="flex items-baseline gap-1 mb-5">
                <span class="text-3xl sm:text-4xl font-extrabold text-[#2A4043]">
                  ARS $7,000
                </span>
                <span class="text-gray-500 font-medium text-sm">/mes</span>
              </div>

              <hr class="border-gray-100 my-4" />

              <span class="text-xs font-bold uppercase tracking-wider text-[#37A0AF] block mb-4">
                QUÉ INCLUYE
              </span>

              <div class="space-y-4">
                <div v-for="(item, idx) in premiumFeatures" :key="idx" class="flex items-start gap-3">
                  <div class="w-6 h-6 rounded-md bg-[#EBF5F6] text-[#37A0AF] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h4 class="text-sm font-bold text-[#2A4043]">
                      {{ item.title }}
                    </h4>
                    <p class="text-xs text-gray-500 leading-relaxed mt-0.5">
                      {{ item.desc }}
                    </p>
                  </div>
                </div>
              </div>

              <div class="mt-8 pt-4 border-t border-gray-100">
                <span class="text-xs font-bold uppercase tracking-wider text-[#37A0AF] block mb-3">
                  FREE VS. PREMIUM
                </span>

                <div class="rounded-2xl border border-gray-100 overflow-hidden bg-[#F8FCFC]">
                  <table class="w-full text-xs text-left">
                    <thead class="bg-[#F0F7F7] text-[#306067] font-bold">
                      <tr>
                        <th class="p-3">BENEFICIO</th>
                        <th class="p-3 text-center text-gray-500">FREE</th>
                        <th class="p-3 text-center text-[#37A0AF]">PREMIUM</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-100 text-[#2A4043]">
                      <tr v-for="(row, rIdx) in comparisonTable" :key="rIdx">
                        <td class="p-3 font-medium">{{ row.benefit }}</td>
                        <td class="p-3 text-center text-gray-400 font-normal">{{ row.free }}</td>
                        <td class="p-3 text-center font-bold text-[#37A0AF]">{{ row.premium }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </div>

            <div class="flex flex-col items-center gap-3">
              <div class="flex items-center justify-center gap-2 text-[11px] text-gray-500 font-medium">
                <span>🔒 Pago seguro</span>
                <span>•</span>
                <span>⚡ Activación inmediata</span>
                <span>•</span>
                <span>Cancelás cuando quieras</span>
              </div>
            </div>

          </div>
        </div>
      </Transition>

    </Teleport>

  </section>
</template>

<style scoped>
/* Transición suave para los modales */
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