<script setup>
import MainLayout from "./Layouts/MainLayout.vue";
import { ref } from "vue";
import Destacado from "./components/Destacado.vue";
import Experiencia from "./components/Experiencia.vue";
import Projects from "./components/Projects.vue";
import Skills from "./components/Skills.vue";

const opacity = ref(0);

function handleEvent(e) {
  // console.log(e);
  opacity.value = e;
}
</script>

<template>
  <MainLayout>
    <div class="md:flex flex-row items-center justify-center mt-[100px]">
      <div class="flex justify-center p-10">
        <img
          src="./assets/miFoto.jpg"
          alt="imagen"
          class="rounded-full w-[150px]"
        />
      </div>
      <div class="flex flex-col items-center justify-center md:mt-10">
        <div class="flex justify-center items-center">
          <p
            class="text-xl text-gray-700 sm:w-[700px] m-4 md:m-2 p-4 md:p-2 font-serif font-medium"
          >
            Soy un desarrollador junior con 1 año de experiencia, en constante
            aprendizaje y en proceso de formación para ser un desarrollador Full
            Stack completo. Tengo un fuerte deseo de seguir creciendo
            profesionalmente y contribuir en proyectos que me permitan expandir
            mis habilidades y conocimientos
          </p>
        </div>
        <div class="flex justify-center items-center">
          <div class="grid grid-cols-4 gap-4 w-[200px]">
            <div class="flex justify-center">
              <a href="https://github.com/DisisuPeft">
                <img
                  src="./assets/github-sign.png"
                  class="rounded-xl w-[40px]"
                />
              </a>
            </div>
            <div class="flex justify-center">
              <a href="mailto:defp_99@hotmail.com">
                <img src="./assets/email.png" class="rounded-xl w-[50px]" />
              </a>
            </div>
            <div class="flex justify-center">
              <a href="tel:+52 961427622">
                <img
                  src="./assets/phone-call.png"
                  class="rounded-xl w-[40px]"
                />
              </a>
            </div>
            <div class="flex justify-center">
              <a
                href="https://www.linkedin.com/in/daniel-fern%C3%A1ndez-046a40244/"
              >
                <img
                  src="./assets/linkedin-logo.png"
                  class="rounded-md w-[40px]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Destacado :opacity="opacity" @opacidad:event="handleEvent" />
    <Experiencia />
    <Projects />
    <Skills />
  </MainLayout>

  <!--     <div class="mt-[280px] md:mt-[350px]">
      <div class="grid grid-cols-1">
        <div class="flex justify-center">
          <p
            class="underline decoration-double decoration-pink-500 text-xl text-white"
          >
            Proyecto destacado
          </p>
        </div>
        <div class="flex justify-start">
          <p class="text-xl text-white">
            FODAP es una plataforma de gestión para la formación docente y
            actualización profesional
          </p>
        </div>
      </div>
      <div class="flex justify-center">
        <v-carousel hide-delimiters>
          <v-carousel-item v-for="(image, i) in images" :key="i" :src="image">
          </v-carousel-item>
        </v-carousel>
      </div>
    </div> -->
</template>

<style scoped>
body {
  height: 200vh;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.carrusel {
  width: 200px;
  height: 100px;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.carruselvisible {
  opacity: 1;
  transform: translateY(0);
}
</style>
