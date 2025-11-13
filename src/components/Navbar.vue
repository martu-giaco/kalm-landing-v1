<template>
    <nav class="navbar-style z-50 flex items-center justify-between ">
        <!-- LOGO -->
        <RouterLink to="/" class="flex items-center ml-5">
        <img src="../assets/imgs/logo-kalm.svg" alt="Logo Kälm" class="h-7">
        <p class="logo-text text-lg pt-1 ms-1">Kälm</p>
        </RouterLink>

        <!-- ÍCONOS DE NAVEGACIÓN -->
        <div class="flex flex-1 items-center space-x-6 justify-between">
        <!-- Inicio -->
        <RouterLink
            to="/"
            class="flex flex-col items-center font-bold text-[#306067]"
        >
            <span class="inline-block text-xs md:text-base">Inicio</span>
        </RouterLink>

        <!-- Planes -->
        <RouterLink
            to="/planes"
            class="flex flex-col items-center font-bold text-[#306067]"
        >
            <span class="inline-block text-xs md:text-base">Planes</span>
        </RouterLink>

        <!-- Sobre -->
        <RouterLink
            to="/about"
            class="flex flex-col items-center font-bold text-[#306067]"
        >
            <span class="inline-block text-xs md:text-base">Sobre <i>Kälm</i></span>
        </RouterLink>

        <!-- Contacto -->
        <RouterLink
            to="/contact"
            class="flex flex-col items-center font-bold text-[#306067]"
        >
            <span class="inline-block text-xs md:text-base">Contacto</span>
        </RouterLink>
    </div>

    <!-- BOTONES DE USUARIO / CUENTA -->
    <div class="flex items-center rounded-2xl bg-[#306067] text-white gap-4 mr-5 p-3 justify-end w-auto">
        <a href="">Descargar</a>
    </div>
    </nav>
</template>
