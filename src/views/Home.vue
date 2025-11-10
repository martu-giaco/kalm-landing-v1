<template>
  <section class="justify-center bg-no-repeat bg-cover w-full flex items-center bg-[url(assets/imgs/header-bg.png)] pt-40 pb-40 bg-gradiente">
    <img src="../assets/imgs/header-img.png" alt="Banner Mockups">
    <div class="text-start ms-[-10vw]">
      <h1 class="text-5xl text-[#306067]">Una nueva forma de cuidarte.</h1>
      <h2 class="text-2xl w-80 text-[#37A0AF] mb-5">Descubrí tu rutina perfecta, sin prueba y error.</h2>
      <a href="" class="text-xl px-20 py-3 pt-4 bg-[#306067] text-white rounded-2xl shadow-md boton-header">Hacer el test</a>
    </div>
  </section>

  <section class="my-30 flex flex-col container mx-auto text-center">
    <h2 class="text-4xl text-[#306067]">Descubrí tu próxima rutina.</h2>
    <p class="text-xl">Hace del autocuidado parte de tu día a día</p>
      <div class="flex flex-wrap sm:flex-column md:flex-column w-full mx-auto items-stretch gap-10 mt-5 justify-center text-start">
        <!-- Card 1 -->
        <div class="flex flex-col items-start px-7 py-15 rounded-xl bg-[url(assets/imgs/header-bg.png)] bg-left shadow-md glass w-80">
          <img src="../assets/imgs/self_care_icon.png" alt="Rutinas" class="w-12 h-12 mb-4 object-contain">
          <h3 class="font-semibold text-xl mb-2 text-[#306067]">Creá rutinas personalizadas</h3>
          <p class="text-md text-start">Armá tus rutings de skincare y haircare según lo que vos necesitás. Elegí los pasos, productos y frecuencia para que tu autocuidado sea realmente tuyo.</p>
        </div>

        <!-- Card 2 -->
        <div class="flex flex-col items-start px-7 py-15 rounded-xl bg-[url(assets/imgs/header-bg.png)] bg-left shadow-md glass w-80">
          <img src="../assets/imgs/alarm_icon.png" alt="Recordatorios" class="w-12 h-12 mb-4 object-contain">
          <h3 class="font-semibold text-xl mb-2 text-[#306067]">Programá recordatorios</h3>
          <p class="text-md text-start">Configurá alertas diarias, semanales, mensuales o hasta anuales para mantener la constancia y que tu rutina se convierta en un nuevo hábito saludable.</p>
        </div>

        <!-- Card 3 -->
        <div class="flex flex-col items-start px-7 py-15 rounded-xl bg-[url(assets/imgs/header-bg.png)] bg-left shadow-md glass w-80">
          <img src="../assets/imgs/groups_icon.png" alt="Comunidad" class="w-16 h-12 mb-4 object-contain">
          <h3 class="font-semibold text-xl mb-2 text-[#306067]">Interactuá con nuestra comunidad</h3>
          <p class="text-md text-start">Compartí tus experiencias, descubrí tips y conectá con otras personas en su propio camino de autocuidado.</p>
        </div>
      </div>
  </section>
  
  <section class="mt-30 container mx-auto text-center">
    <h2 class="text-4xl text-[#306067]">La rutina perfecta para vos <br>en tan solo 4 pasos...</h2>
    <img 
        src="../assets/imgs/pasos3.png" 
        alt="Imagen pasos" 
        class="w-4xl mx-auto object-cover"
      >
      <img 
        src="../assets/imgs/blob1.png" 
        alt="Imagen deco"
        class="deco1 h-auto"
      >
  </section>

  <section class="mb-50 mt-20 container mx-auto text-center">
    <span class="text-[#CCE2E5] mb-2">F.A.Q</span>
    <h2 class="text-4xl text-[#306067] mb-8">¿Alguna Pregunta?</h2>
    <div class="text-start">
        <div class="collapse collapse-arrow rounded-xl glass border border-base-300 mb-3 bg-[url(assets/imgs/header-bg.png)] bg-left bg-no-repeat bg-cover py-2">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <h3 class="collapse-title text-2xl font-semibold text-[#306067]">¿Cómo empiezo a usar <i>Kälm</i>?</h3>
        <p class="collapse-content text-md">Solo necesitás descargar la app y crear tu perfil. Una vez dentro, completás un test breve sobre tu tipo de piel, cabello y objetivos. A partir de eso, <i>Kälm</i> te diseña una rutina personalizada que podés modificar cuando quieras.</p>
      </div>
      <div class="collapse collapse-arrow rounded-xl glass border border-base-300 mb-3 bg-[url(assets/imgs/header-bg.png)] bg-left bg-no-repeat bg-cover py-2">
        <input type="radio" name="my-accordion-2" />
        <h3 class="collapse-title text-2xl font-semibold text-[#306067]">¿La App es Gratuita?</h3>
        <p class="collapse-content text-md">Sí, <i>Kälm</i> ofrece todas sus funcionalidades principales de forma gratuita, porque creemos que el bienestar y el autocuidado deben ser accesibles para todos.</p>
      </div>
      <div class="collapse collapse-arrow rounded-xl glass border border-base-300 mb-3 bg-[url(assets/imgs/header-bg.png)] bg-left bg-no-repeat bg-cover py-2">
        <input type="radio" name="my-accordion-2" />
        <h3 class="collapse-title text-2xl font-semibold text-[#306067]">¿Qué Hacen con mis Datos?</h3>
        <p class="collapse-content text-md">Priorizamos la transparencia y el respeto por tu información. Los datos que ingresás se usan solo para mejorar tu experiencia dentro de la app, y nunca se comparten con terceros.</p>
      </div>
      <div class="collapse collapse-arrow rounded-xl glass border border-base-300 mb-3 bg-[url(assets/imgs/header-bg.png)] bg-left bg-no-repeat bg-cover py-2">
        <input type="radio" name="my-accordion-2" />
        <h3 class="collapse-title text-2xl font-semibold text-[#306067]">¿Qué tipo de recomendaciones ofrece la app?</h3>
        <p class="collapse-content text-md"><i>Kälm</i> te sugiere productos y hábitos personalizados según tus respuestas en el test y tus objetivos de cuidado. Las recomendaciones son transparentes y sin patrocinios ocultos, porque creemos en la confianza y la autenticidad.</p>
      </div>
    </div>
    <img 
        src="../assets/imgs/blob2.png" 
        alt="Imagen deco"
        class="deco2 h-auto"
      >
  </section>

</template>