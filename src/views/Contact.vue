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
  <section class="justify-center bg-no-repeat bg-cover w-full items-center bg-[url(assets/imgs/header-bg.png)] pt-50 pb-60 bg-gradiente text-center">

    <div class="container flex flex-row justify-center items-center mx-auto">
      <img src="../assets/imgs/contacto-img.png" alt="imagen decorativa" class="w-xl h-auto object-contain me-20">
      <div class="w-full">
        <h1 class="text-5xl text-[#306067]">Contacto</h1>
    <h2 class="text-2xl text-[#37A0AF] mb-10">Escribínos tus dudas o sugerencias</h2>
        <div>
          <div class="flex flex-col w-full">
      <input
        v-model="name"
        type="text"
        placeholder="Nombre"
        class="text-[#37A0AF] h-15 p-5 mt-5 border bg-white/40 backdrop-blur-lg rounded-xl glass focus:outline-none focus:ring-2 focus:ring-[#37A0AF]"
      />
      <input
        v-model="email"
        type="email"
        placeholder="Correo electrónico"
        class="text-[#37A0AF] h-15 p-5 mt-5 border bg-white/40 backdrop-blur-lg rounded-xl glass focus:outline-none focus:ring-2 focus:ring-[#37A0AF]"
      />
      <textarea
        v-model="message"
        rows="5"
        placeholder="Mensaje"
        class="text-[#37A0AF] h-30 p-5 mt-5 border bg-white/40 backdrop-blur-lg rounded-xl glass focus:outline-none focus:ring-2 focus:ring-[#37A0AF]"
      ></textarea>
    </div>

    <div class="mt-6 flex justify-center">
      <a @click="sendMessage" class="text-xl px-20 py-3 pt-4 bg-[#306067] text-white rounded-2xl shadow-md boton-header">Enviar Mensaje</a>
    </div>
        </div>
        <div class="flex items-center justify-between mt-10">
          <div class="text-start">
            <h3 class="text-[#306067]">Email</h3>
            <p>kälm@email.com</p>
          </div>
          <div class="text-start">
            <h3 class="text-[#306067]">Basadas en</h3>
            <p>Buenos Aires, Argentina.</p>
          </div>
          <div class="align-end">
            <ul class="flex gap-3 h-5">
              <li class="contents"><a href="https://www.instagram.com/kalm_oficial/"  target=”_blank” class="bg-[url(assets/imgs/insta.png)] bg-no-repeat bg-contain w-5" style="font-size: 0;">Instagram</a></li>
              <li class="contents"><a href="https://www.instagram.com/kalm_oficial/"  target=”_blank” class="bg-[url(assets/imgs/tiktok.png)] bg-no-repeat bg-contain w-5" style="font-size: 0;">Tik Tok</a></li>
              <li class="contents"><a href="https://www.instagram.com/kalm_oficial/"  target=”_blank” class="bg-[url(assets/imgs/pinterest.png)] bg-no-repeat bg-contain w-5" style="font-size: 0;">Pinterest</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
