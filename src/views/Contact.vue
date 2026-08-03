<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const message = ref('');

const isSubmitting = ref(false);
const feedbackMessage = ref('');
const isError = ref(false);

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
      
      <img 
        src="../assets/imgs/contacto-img.png" 
        alt="Imagen decorativa" 
        class="w-full max-w-md sm:max-w-lg lg:w-1/2 lg:max-w-[460px] xl:max-w-[500px] h-auto object-contain mb-10 lg:mb-0 lg:me-12 xl:me-16 flex-shrink-0"
      >

      <div class="w-full max-w-xl lg:max-w-none mx-auto lg:mx-0 text-center lg:text-start flex flex-col justify-center">
        
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#306067] mb-2">
          Contacto
        </h1>
        <h2 class="text-lg sm:text-xl lg:text-2xl text-[#37A0AF] mb-6 sm:mb-8 font-semibold">
          Escribínos tus dudas o sugerencias
        </h2>

        <!-- Formulario con Formspree -->
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

          <div 
            v-if="feedbackMessage" 
            :class="[
              'p-3 rounded-xl text-sm font-semibold transition-all',
              isError ? 'bg-red-100 text-red-700' : 'bg-emerald-100 text-emerald-800'
            ]"
          >
            {{ feedbackMessage }}
          </div>

          <div class="mt-2 flex justify-center lg:justify-start">
            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full sm:w-auto text-lg sm:text-xl px-12 sm:px-16 py-3.5 bg-[#306067] hover:bg-[#254b51] text-white font-semibold rounded-2xl shadow-md transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {{ isSubmitting ? 'Enviando...' : 'Enviar Mensaje' }}
            </button>
          </div>
        </form>

        <div class="flex flex-col sm:flex-row items-center justify-between gap-4 mt-10 pt-6 border-t border-[#306067]/20">
          <div class="text-center sm:text-start">
            <h3 class="text-[#306067] font-bold text-sm uppercase tracking-wider">Email</h3>
            <a href="mailto:kalmskinhair@gmail.com" class="text-[#2A4043] font-medium hover:underline">
              kalmskinhair@gmail.com
            </a>
          </div>

          <div class="flex items-center">
            <ul class="flex gap-3 items-center">
              
              <li>
                <a 
                  href="https://www.instagram.com/kalm_oficial/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="block text-[#306067] hover:text-[#37A0AF] transition-all hover:scale-110 p-1"
                  title="Instagram"
                >
                  <span class="sr-only">Instagram</span>
                  <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 6.865a5.135 5.135 0 1 0 0 10.27 5.135 5.135 0 0 0 0-10.27zm0 8.468a3.333 3.333 0 1 1 0-6.666 3.333 3.333 0 0 1 0 6.666zm5.338-9.87a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z"/>
                  </svg>
                </a>
              </li>

              <li>
                <a 
                  href="https://www.tiktok.com/@kalm_off" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="block text-[#306067] hover:text-[#37A0AF] transition-all hover:scale-110 p-1"
                  title="TikTok"
                >
                  <span class="sr-only">TikTok</span>
                  <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 11-5.2-1.74 2.89 2.89 0 012.31-2.83V7.52a6.34 6.34 0 00-1 .08 6.34 6.34 0 106.34 6.34V8.69a8.18 8.18 0 004.77 1.52A8.1 8.1 0 0020 10V6.57a4.8 4.8 0 01-.41.12z"/>
                  </svg>
                </a>
              </li>

              <li>
                <a 
                  href="https://www.youtube.com/@kalm_oficial" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="block text-[#306067] hover:text-[#37A0AF] transition-all hover:scale-110 p-1"
                  title="YouTube"
                >
                  <span class="sr-only">YouTube</span>
                  <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.017 3.017 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </li>

            </ul>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>