<template>
    <nav class=" navbar-style fixed z-50 flex items-center justify-between">
        <!-- LOGO -->
        <div class="hidden min-[1061px]:flex items-center ml-5">
        <img src="../assets/imgs/logo-kalm.svg" alt="Logo Kälm" class="h-7">
        <p class="logo-text text-lg pt-1 ms-1">Kälm</p>
        </div>

        <!-- ÍCONOS DE NAVEGACIÓN -->
        <div class="flex flex-1 items-center space-x-6 justify-between min-[1061px]:justify-center min-[1061px]:space-x-8">
        <!-- Inicio -->
        <RouterLink
            to="/"
            class="flex flex-col md:flex-row items-center font-bold text-[#306067]"
        >
            <span class="hidden min-[1061px]:inline-block text-xs md:text-base">Inicio</span>
        </RouterLink>

        <!-- Tests -->
        <RouterLink
            to="/tests"
            class="flex flex-col md:flex-row items-center font-bold text-[#306067]"
        >
            <span class="hidden min-[1061px]:inline-block text-xs md:text-base">Tests</span>
        </RouterLink>

        <!-- Planes -->
        <RouterLink
            to="/planes"
            class="flex flex-col md:flex-row items-center font-bold text-[#306067]"
        >
            <span class="hidden min-[1061px]:inline-block text-xs md:text-base">Planes</span>
        </RouterLink>

        <!-- Sobre -->
        <RouterLink
            to="/about"
            class="flex flex-col md:flex-row items-center font-bold text-[#306067]"
        >
            <span class="hidden min-[1061px]:inline-block text-xs md:text-base">Sobre</span>
        </RouterLink>

        <!-- Contacto -->
        <RouterLink
            to="/contacto"
            class="flex flex-col md:flex-row items-center font-bold text-[#306067]"
        >
            <span class="hidden min-[1061px]:inline-block text-xs md:text-base">Contacto</span>
        </RouterLink>
    </div>

    <!-- BOTONES DE USUARIO / CUENTA -->
    <div class="hidden min-[1061px]:flex items-center rounded-2xl bg-[#306067] text-white gap-4 mr-5 p-3 justify-end w-auto">
        <a href="">Descargar</a>
    </div>
    </nav>
</template>
