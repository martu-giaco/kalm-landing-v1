<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const message = ref('');

// Estado de errores por campo individual para estilizado
const errors = ref({
  name: false,
  email: false,
  message: false
});

const isSubmitting = ref(false);
const feedbackMessage = ref('');
const errorList = ref([]);
const isError = ref(false);

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xeeywjra';

// Función para validar formato de email
const validateEmail = (emailStr) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(emailStr).toLowerCase());
};

// Función de validación personalizada de campos
const validateForm = () => {
  errorList.value = [];
  errors.value = { name: false, email: false, message: false };

  if (!name.value.trim()) {
    errors.value.name = true;
    errorList.value.push('El campo "Nombre" es obligatorio.');
  }

  if (!email.value.trim()) {
    errors.value.email = true;
    errorList.value.push('El campo "Correo electrónico" es obligatorio.');
  } else if (!validateEmail(email.value.trim())) {
    errors.value.email = true;
    errorList.value.push('El correo electrónico no tiene un formato válido (ejemplo@dominio.com).');
  }

  if (!message.value.trim()) {
    errors.value.message = true;
    errorList.value.push('El campo "Mensaje" es obligatorio.');
  }

  return errorList.value.length === 0;
};

const sendMessage = async () => {
  feedbackMessage.value = '';

  // Ejecutamos la validación
  if (!validateForm()) {
    isError.value = true;
    return;
  }

  isSubmitting.value = true;
  isError.value = false;

  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: name.value.trim(),
        email: email.value.trim(),
        message: message.value.trim(),
        _replyto: email.value.trim(),
        _subject: `Nueva consulta de ${name.value.trim()} desde Kälm Web`
      })
    });

    if (response.ok) {
      isError.value = false;
      feedbackMessage.value = `¡Gracias, ${name.value.trim()}! Tu mensaje ha sido enviado correctamente a Kälm.`;
      errorList.value = [];
      name.value = '';
      email.value = '';
      message.value = '';
      errors.value = { name: false, email: false, message: false };
    } else {
      throw new Error('Error en el envío');
    }
  } catch (err) {
    isError.value = true;
    errorList.value = ['Hubo un problema al enviar tu mensaje. Por favor reintentá nuevamente.'];
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <section class="flex flex-col items-center justify-center bg-no-repeat bg-cover bg-center bg-[url(assets/imgs/header-bg.png)] pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-40 lg:pb-36 bg-gradiente px-4 sm:px-6 lg:px-8 overflow-hidden">
    
    <div class="container mx-auto flex flex-col lg:flex-row items-center justify-center max-w-6xl">
      
      <!-- Imagen con bordes redondeados (rectángulo redondeado) -->
      <img 
        src="../assets/imgs/contacto-img.png" 
        alt="Imagen decorativa de contacto Kälm" 
        class="w-full max-w-md sm:max-w-lg lg:w-1/2 lg:max-w-[460px] xl:max-w-[500px] h-auto object-contain mb-10 lg:mb-0 lg:me-12 xl:me-16 flex-shrink-0 rounded-3xl shadow-sm"
      >

      <div class="w-full max-w-xl lg:max-w-none mx-auto lg:mx-0 text-center lg:text-start flex flex-col justify-center">
        
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#306067] mb-2">
          Contacto
        </h1>
        <h2 class="text-lg sm:text-xl lg:text-2xl text-[#37A0AF] mb-6 sm:mb-8 font-semibold">
          Escribínos tus dudas o sugerencias
        </h2>

        <!-- Formulario con validación -->
        <form 
          action="https://formspree.io/f/xeeywjra" 
          method="POST" 
          @submit.prevent="sendMessage" 
          class="flex flex-col w-full gap-4"
          novalidate
        >
          <!-- Campo Nombre -->
          <div class="flex flex-col gap-1 text-start">
            <label for="contact-name" class="sr-only">Nombre</label>
            <input
              id="contact-name"
              v-model="name"
              name="name"
              aria-label="Nombre"
              type="text"
              placeholder="Nombre completo *"
              class="text-[#306067] h-14 px-5 border backdrop-blur-lg rounded-2xl glass focus:outline-none placeholder-[#37A0AF]/70 font-medium transition-all"
              :class="[
                errors.name 
                  ? 'border-red-400 bg-red-50/60 focus:ring-2 focus:ring-red-400' 
                  : 'border-white/60 bg-white/50 focus:ring-2 focus:ring-[#37A0AF]'
              ]"
            />
          </div>
          
          <!-- Campo Correo Electrónico -->
          <div class="flex flex-col gap-1 text-start">
            <label for="contact-email" class="sr-only">Correo electrónico</label>
            <input
              id="contact-email"
              v-model="email"
              name="email"
              aria-label="Correo electrónico"
              type="email"
              placeholder="Correo electrónico *"
              class="text-[#306067] h-14 px-5 border backdrop-blur-lg rounded-2xl glass focus:outline-none placeholder-[#37A0AF]/70 font-medium transition-all"
              :class="[
                errors.email 
                  ? 'border-red-400 bg-red-50/60 focus:ring-2 focus:ring-red-400' 
                  : 'border-white/60 bg-white/50 focus:ring-2 focus:ring-[#37A0AF]'
              ]"
            />
          </div>
          
          <!-- Campo Mensaje -->
          <div class="flex flex-col gap-1 text-start">
            <label for="contact-message" class="sr-only">Mensaje</label>
            <textarea
              id="contact-message"
              v-model="message"
              name="message"
              aria-label="Mensaje"
              rows="4"
              placeholder="Mensaje *"
              class="text-[#306067] p-5 border backdrop-blur-lg rounded-2xl glass focus:outline-none placeholder-[#37A0AF]/70 font-medium transition-all resize-none"
              :class="[
                errors.message 
                  ? 'border-red-400 bg-red-50/60 focus:ring-2 focus:ring-red-400' 
                  : 'border-white/60 bg-white/50 focus:ring-2 focus:ring-[#37A0AF]'
              ]"
            ></textarea>
          </div>

          <!-- Mensaje de Feedback Éxito (Contenedor rectangular redondeado) -->
          <div 
            v-if="feedbackMessage" 
            class="p-4 rounded-2xl text-sm font-semibold transition-all bg-emerald-100/90 text-emerald-800 border border-emerald-300 shadow-sm text-start flex items-center gap-2"
          >
            <span>✓</span>
            <span>{{ feedbackMessage }}</span>
          </div>

          <!-- Mensajes de Feedback Errores (Lista de validación) -->
          <div 
            v-if="isError && errorList.length > 0" 
            class="p-4 rounded-2xl text-sm font-semibold transition-all bg-red-100/90 text-red-800 border border-red-300 shadow-sm text-start"
          >
            <p class="font-bold mb-1.5">Por favor, corregí los siguientes campos antes de enviar:</p>
            <ul class="list-disc list-inside space-y-1">
              <li v-for="(err, idx) in errorList" :key="idx">
                {{ err }}
              </li>
            </ul>
          </div>

          <!-- Botón de Envío -->
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

        <!-- Canales de contacto representados como conjunto en una lista (UL) de tarjetas rectangulares redondeadas -->
        <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 pt-6 border-t border-[#306067]/20 w-full text-start">
          
          <li class="bg-white/40 backdrop-blur-md p-4 rounded-2xl border border-white/60 shadow-sm flex flex-col justify-center">
            <h3 class="text-[#306067] font-bold text-xs uppercase tracking-wider mb-1">Email directo</h3>
            <a href="mailto:kalmskinhair@gmail.com" class="text-[#2A4043] font-semibold hover:text-[#37A0AF] transition-colors break-all">
              kalmskinhair@gmail.com
            </a>
          </li>

          <li class="bg-white/40 backdrop-blur-md p-4 rounded-2xl border border-white/60 shadow-sm flex flex-col justify-center">
            <h3 class="text-[#306067] font-bold text-xs uppercase tracking-wider mb-2">Nuestras Redes</h3>
            <ul class="flex gap-2 items-center">
              
              <li>
                <a 
                  href="https://www.instagram.com/kalm_oficial/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="flex items-center justify-center p-2 rounded-xl bg-white/60 text-[#306067] hover:text-[#37A0AF] hover:bg-white transition-all shadow-sm"
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
                  class="flex items-center justify-center p-2 rounded-xl bg-white/60 text-[#306067] hover:text-[#37A0AF] hover:bg-white transition-all shadow-sm"
                  title="TikTok"
                >
                  <span class="sr-only">TikTok</span>
                  <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>
              </li>

              <li>
                <a 
                  href="https://www.youtube.com/@kalm_oficial" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="flex items-center justify-center p-2 rounded-xl bg-white/60 text-[#306067] hover:text-[#37A0AF] hover:bg-white transition-all shadow-sm"
                  title="YouTube"
                >
                  <span class="sr-only">YouTube</span>
                  <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.017 3.017 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </li>

            </ul>
          </li>

        </ul>

      </div>

    </div>
  </section>
</template>