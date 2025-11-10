<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const message = ref('');

const sendMessage = () => {
  if (!name.value || !email.value || !message.value) {
    alert('Por favor completa todos los campos');
    return;
  }

  alert(`Gracias, ${name.value}. Tu mensaje ha sido enviado.`);
  name.value = '';
  email.value = '';
  message.value = '';
};
</script>

<template>
  <div class="justify-center bg-no-repeat bg-cover w-full flex flex-col items-center bg-[url(assets/imgs/header-bg.png)] pt-60 pb-40 bg-gradiente">
    <h1 class="text-5xl text-[#306067]">Contacto</h1>
    <h2 class="text-2xl text-[#37A0AF]">Escríbenos tus dudas o sugerencias, estaremos encantados de ayudarte.</h2>

    <div class="container justify-center items-center">
      <div class="flex flex-col gap-4 mt-6 w-full px-20">
      <input
        v-model="name"
        type="text"
        placeholder="Nombre"
        class="p-5 border bg-white/40 backdrop-blur-lg rounded-xl glass focus:outline-none focus:ring-2 focus:ring-[#37A0AF]"
      />
      <input
        v-model="email"
        type="email"
        placeholder="Correo electrónico"
        class="p-5 border bg-white/40 backdrop-blur-lg rounded-xl glass focus:outline-none focus:ring-2 focus:ring-[#37A0AF]"
      />
      <textarea
        v-model="message"
        rows="5"
        placeholder="Mensaje"
        class="p-5 border bg-white/40 backdrop-blur-lg rounded-xl glass focus:outline-none focus:ring-2 focus:ring-[#37A0AF]"
      ></textarea>
    </div>

    <div class="mt-6 flex justify-center">
      <a @click="sendMessage" class="text-xl px-20 py-3 pt-4 bg-[#306067] text-white rounded-2xl shadow-md boton-header">Enviar Mensaje</a>
    </div>
    </div>
  </div>
</template>
