<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const message = ref('');

const isSubmitting = ref(false);
const feedbackMessage = ref('');
const isError = ref(false);

// Endpoint oficial de tu cuenta en Formspree
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xeeywjra';

const sendMessage = async () => {
  if (!name.value || !email.value || !message.value) {
    isError.value = true;
    feedbackMessage.value = 'Por favor completa todos los campos.';
    return;
  }

  isSubmitting.value = true;
  feedbackMessage.value = '';
  isError.value = false;

  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        message: message.value,
        _replyto: email.value,
        _subject: `Nueva consulta de ${name.value} desde Kälm Web`
      })
    });

    if (response.ok) {
      isError.value = false;
      feedbackMessage.value = `¡Gracias, ${name.value}! Tu mensaje ha sido enviado a Kälm.`;
      name.value = '';
      email.value = '';
      message.value = '';
    } else {
      throw new Error('Error en el envío');
    }
  } catch (err) {
    isError.value = true;
    feedbackMessage.value = 'Hubo un problema al enviar tu mensaje. Por favor reintentá nuevamente.';
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <section class="flex flex-col items-center justify-center bg-no-repeat bg-cover bg-center bg-[url(assets/imgs/header-bg.png)] pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-40 lg:pb-36 bg-gradiente px-4 sm:px-6 lg:px-8 overflow-hidden">
    
    <div class="container mx-auto flex flex-col lg:flex-row items-center justify-center max-w-6xl">
      
      <!-- Imagen decorativa: Arriba en Mobile/Tablet, Costado en Desktop -->
      <img 
        src="../assets/imgs/contacto-img.png" 
        alt="Imagen decorativa" 
        class="w-full max-w-md sm:max-w-lg lg:w-1/2 lg:max-w-[460px] xl:max-w-[500px] h-auto object-contain mb-10 lg:mb-0 lg:me-12 xl:me-16 flex-shrink-0"
      >

      <!-- Bloque de Formulario -->
      <div class="w-full max-w-xl lg:max-w-none mx-auto lg:mx-0 text-center lg:text-start flex flex-col justify-center">
        
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#306067] mb-2">
          Contacto
        </h1>
        <h2 class="text-lg sm:text-xl lg:text-2xl text-[#37A0AF] mb-6 sm:mb-8 font-semibold">
          Escribínos tus dudas o sugerencias
        </h2>

        <!-- Formulario configurado con Formspree -->
        <form 
          action="https://formspree.io/f/xeeywjra" 
          method="POST" 
          @submit.prevent="sendMessage" 
          class="flex flex-col w-full gap-4"
        >
          <input
            v-model="name"
            name="name"
            aria-label="Nombre"
            type="text"
            placeholder="Nombre"
            required
            class="text-[#306067] h-14 px-5 border border-white/60 bg-white/50 backdrop-blur-lg rounded-xl glass focus:outline-none focus:ring-2 focus:ring-[#37A0AF] placeholder-[#37A0AF]/70 font-medium transition-all"
          />
          
          <input
            v-model="email"
            name="email"
            aria-label="Correo electrónico"
            type="email"
            placeholder="Correo electrónico"
            required
            class="text-[#306067] h-14 px-5 border border-white/60 bg-white/50 backdrop-blur-lg rounded-xl glass focus:outline-none focus:ring-2 focus:ring-[#37A0AF] placeholder-[#37A0AF]/70 font-medium transition-all"
          />
          
          <textarea
            v-model="message"
            name="message"
            aria-label="Mensaje"
            rows="4"
            placeholder="Mensaje"
            required
            class="text-[#306067] p-5 border border-white/60 bg-white/50 backdrop-blur-lg rounded-xl glass focus:outline-none focus:ring-2 focus:ring-[#37A0AF] placeholder-[#37A0AF]/70 font-medium transition-all resize-none"
          ></textarea>

          <!-- Mensaje de Feedback -->
          <div 
            v-if="feedbackMessage" 
            :class="[
              'p-3 rounded-xl text-sm font-semibold transition-all',
              isError ? 'bg-red-100 text-red-700' : 'bg-emerald-100 text-emerald-800'
            ]"
          >
            {{ feedbackMessage }}
          </div>

          <!-- Botón de Envío -->
          <div class="mt-2 flex justify-center lg:justify-start">
            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full sm:w-auto text-lg sm:text-xl px-12 sm:px-16 py-3.5 bg-[#306067] hover:bg-[#254b51] text-white font-semibold rounded-2xl shadow-md transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ isSubmitting ? 'Enviando...' : 'Enviar Mensaje' }}
            </button>
          </div>
        </form>

        <!-- Pie de Formulario (Mail & Redes Sociales) -->
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4 mt-10 pt-6 border-t border-[#306067]/20">
          <div class="text-center sm:text-start">
            <h3 class="text-[#306067] font-bold text-sm uppercase tracking-wider">Email</h3>
            <a href="mailto:kalmskinhair@gmail.com" class="text-[#2A4043] font-medium hover:underline">
              kalmskinhair@gmail.com
            </a>
          </div>

          <div class="flex items-center">
            <ul class="flex gap-4">
              <li>
                <a 
                  href="https://www.instagram.com/kalm_oficial/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="block bg-[url(assets/imgs/insta.png)] bg-no-repeat bg-contain bg-center w-6 h-6 transition-transform hover:scale-110"
                  title="Instagram"
                >
                  <span class="sr-only">Instagram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>