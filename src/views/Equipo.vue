<script setup>

const integrantes = [
  {
    id: 1,
    name: 'Álvarez Martina',
    rol: 'Co-fundadora',
    description: 'Directora del Departamento de Marketing',
    foto: '/*aca ponemos un dibujito??*/'
  },
  {
    id: 2,
    name: 'Barrientos Abril',
    rol: 'Co-fundadora',
    description: 'Directora del Departamento de Tecnología',
    foto: '/*aca ponemos un dibujito??*/'
  },
  {
    id: 3,
    name: 'Giacomini Martina',
    rol: 'Co-fundadora',
    descripcion: 'Directora del Departamento de Diseño',
    foto: '/*aca ponemos un dibujito??*/'
  }
];
</script>

<template>
    <section class="flex flex-col items-center w-full justify-center bg-no-repeat bg-cover bg-[url(assets/imgs/header-bg.png)] pt-50 pb-60 bg-gradiente">
        <h1 class="text-5xl text-[#306067]">Conocé a nuestro equipo</h1>
        <h2 class=" text-center text-2xl text-[#37A0AF] mb-5 ">Las personas que hacen a <i>Kälm</i>, <i>Kälm</i>.</h2>

        <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6 mt-3 items-stretch container mx-auto">
            <div v-for="integrante in integrantes" :key="integrante.id" class="glass">
                <img src="{{ integrante.foto }}" alt="ilustración integrante">
                <div>
                    <h3>{{ integrante.name }}</h3>
                    <h4 class="text-text-[#37A0AF]">{{ integrante.rol }}</h4>
                    <p>{{ integrante.descripcion }}</p>
                </div>
            </div>
        </div>
  </section>
</template>