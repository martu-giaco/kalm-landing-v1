<template>
    <nav class="navbar-style z-50 absolute top-10 left-5 right-5 mx-auto flex items-center justify-between">
        <!-- LOGO -->
        <RouterLink to="/" class="flex items-center ml-2 sm:ml-4">
            <img src="../assets/imgs/logo-kalm.svg" alt="Logo Kälm" class="h-7">
            <p class="logo-text text-lg pt-1 ms-1">Kälm</p>
        </RouterLink>

        <!-- DESKTOP NAV LINKS -->
        <div class="hidden lg:flex flex-1 min-w-0 items-center justify-center gap-5 px-4">
            <RouterLink to="/" class="flex flex-col items-center font-bold text-[#306067] min-w-0">
                <span class="inline-block text-xs md:text-base">Inicio</span>
            </RouterLink>
            <RouterLink to="/planes" class="flex flex-col items-center font-bold text-[#306067] min-w-0">
                <span class="inline-block text-xs md:text-base">Premium</span>
            </RouterLink>
            <RouterLink to="/about" class="flex flex-col items-center font-bold text-[#306067] min-w-0">
                <span class="inline-block text-xs md:text-base whitespace-nowrap">Sobre <i>Kälm</i></span>
            </RouterLink>
            <RouterLink to="/contact" class="flex flex-col items-center font-bold text-[#306067] min-w-0">
                <span class="inline-block text-xs md:text-base">Contacto</span>
            </RouterLink>
        </div>

        <!-- ACTION BUTTON + MOBILE TOGGLE -->
        <div class="flex items-center gap-3 navbar-actions flex-shrink-0">
            <a href="" class="inline-flex flex-shrink-0 items-center rounded-2xl bg-[#306067] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#244a4d]">
                Descargar
            </a>

            <button
                @click="isMenuOpen = !isMenuOpen"
                type="button"
                aria-label="Abrir menú"
                class="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-[#306067] shadow-sm transition hover:bg-slate-50"
            >
                <span v-if="!isMenuOpen" class="text-2xl leading-none">☰</span>
                <span v-else class="text-2xl leading-none">×</span>
            </button>
        </div>

        <!-- MOBILE MENU PANEL -->
        <div
            v-if="isMenuOpen"
            class="lg:hidden absolute left-4 right-4 top-full z-40 mt-3 rounded-3xl border border-slate-200 bg-white/95 p-4 shadow-xl backdrop-blur-xl"
        >
            <RouterLink
                to="/"
                class="block rounded-2xl px-4 py-3 text-[#306067] font-semibold hover:bg-slate-100"
                @click="isMenuOpen = false"
            >
                Inicio
            </RouterLink>
            <RouterLink
                to="/planes"
                class="mt-2 block rounded-2xl px-4 py-3 text-[#306067] font-semibold hover:bg-slate-100"
                @click="isMenuOpen = false"
            >
                Premium
            </RouterLink>
            <RouterLink
                to="/about"
                class="mt-2 block rounded-2xl px-4 py-3 text-[#306067] font-semibold hover:bg-slate-100"
                @click="isMenuOpen = false"
            >
                Sobre <i>Kälm</i>
            </RouterLink>
            <RouterLink
                to="/contact"
                class="mt-2 block rounded-2xl px-4 py-3 text-[#306067] font-semibold hover:bg-slate-100"
                @click="isMenuOpen = false"
            >
                Contacto
            </RouterLink>
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);
</script>
