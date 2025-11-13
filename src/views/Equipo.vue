<script setup>

const integrantes = [
  {
    id: 1,
    name: 'Álvarez Martina',
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
    <section class="flex flex-col items-center w-full justify-center bg-no-repeat bg-cover bg-[url(assets/imgs/header-bg.png)] pt-50 pb-60 bg-gradiente">
        <h1 class="text-5xl text-[#306067]">Conocé a nuestro equipo</h1>
        <h2 class=" text-center text-2xl text-[#37A0AF] mb-5 ">Las personas que hacen a <i>Kälm</i>, <i>Kälm</i>.</h2>

        <div class="flex flex-wrap gap-10 mt-3 items-center justify-center container mx-auto sm:grid-cols-1 md:grid-cols-3">
            <div v-for="integrante in integrantes" :key="integrante.id" class="glass px-4 py-30 rounded-xl flex flex-col w-100 items-center text-center">
                <img src="../assets/imgs/perfil.png" alt="ilustración perfil" class="h-40">
                <div>
                    <h3 class="text-[#306067] text-2xl mt-3">{{ integrante.name }}</h3>
                    <h4 class="text-[#37A0AF] mb-1 ">{{ integrante.rol }}</h4>
                    <p>{{ integrante.description }}</p>
                </div>
            </div>
        </div>
  </section>
</template>