<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import mainImage from "./../assets/main.png";
import loginImage from "./../assets/login.png";
import docentes from "./../assets/docentes.png";
import cursos from "./../assets/cursos.png";
import estadisticas from "./../assets/estadisticas.png";

const props = defineProps({
  opacity: {
    type: Number,
  },
});
const images = ref([mainImage, loginImage, docentes, cursos, estadisticas]);
const emit = defineEmits(["opacidad:event"]);

function handleScroll() {
  const scrollY = window.scrollY;
  const maxScroll = 50;
  emit("opacidad:event", Math.min(scrollY / maxScroll, 1));
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div
    class="p-[50px] lg:p-[100px] flex justify-center mt-[100px] py-4 transition-opacity duration-500"
    :style="{ opacity: props.opacity }"
  >
    <section class="max-w-[700px] mx-auto">
      <h2
        class="underline decoration-red-500 text-xl text-gray-700 mb-2 font-bold text-[1.3rem] font-serif leading-6"
      >
        Proyecto destacado
      </h2>
      <ul
        class="grid grid-cols-1 md:grid-cols-[repeat(auto-fit, minmax(150px,1fr))]"
      >
        <li>
          <p class="text-xl text-gray-700 pt-2 font-serif">
            FODAP es una plataforma integral diseñada para automatizar el
            proceso de formación docente y actualización profesional de manera
            eficiente.
          </p>
        </li>
        <li class="h-auto mt-4">
          <v-carousel hide-delimiters height="300">
            <v-carousel-item v-for="(image, i) in images" :key="i" :src="image">
            </v-carousel-item>
          </v-carousel>
        </li>
        <li>
          <div class="flex justify-center">
            <p class="text-gray-700 p-2">Made with:</p>
          </div>
          <div class="flex flex-col justify-center w-full">
            <div class="flex flex-row justify-center gap-5 p-2">
              <div class="flex items-center">
                <v-tooltip text="Laravel" location="top">
                  <template v-slot:activator="{ props }">
                    <img
                      src="./../assets/laravel.png"
                      class="rounded-xl w-[40px] h-[50px]"
                      v-bind="props"
                    />
                  </template>
                </v-tooltip>
              </div>
              <div class="flex items-center">
                <v-tooltip text="Vue.js" location="top">
                  <template v-slot:activator="{ props }">
                    <img
                      src="./../assets/vue-js.png"
                      class="rounded-xl w-[50px]"
                      v-bind="props"
                    />
                  </template>
                </v-tooltip>
              </div>
            </div>
            <div class="flex items-center justify-center mt-10">
              <a
                class="p-2 rounded-lg bg-white border-2 border-black"
                href="http://fodap.tuxtla.tecnm.mx/"
                >Visitar</a
              >
            </div>
          </div>
        </li>
      </ul>
    </section>
    <!-- <div class="grid grid rows-1">
      <div class="flex justify-center">
        <p
          class="underline decoration-double decoration-pink-500 text-xl text-gray-700"
        >
          Proyecto destacado
        </p>
      </div>
      <div class="flex justify-start">
        <p class="text-xl text-gray-700 pt-2">
          FODAP es una plataforma integral diseñada para automatizar el proceso
          de formación docente y actualización profesional de manera eficiente.
        </p>
      </div>
      <div class="flex justify-start">
        <v-carousel hide-delimiters>
          <v-carousel-item v-for="(image, i) in images" :key="i" :src="image">
          </v-carousel-item>
        </v-carousel>
      </div>
      <div class="flex justify-center items-center">
        <div class="grid grid-rows-1">
          <div class="flex justify-center">
            <p class="text-gray-700 p-2">Made with:</p>
          </div>
          <div class="grid grid-cols-2 gap-4 w-[300px]">
            <div class="flex justify-end">
              <v-tooltip text="Laravel" location="top">
                <template v-slot:activator="{ props }">
                  <img
                    src="./../assets/laravel.png"
                    class="rounded-xl w-[40px] h-[50px]"
                    v-bind="props"
                  />
                </template>
              </v-tooltip>
            </div>
            <div class="flex justify-start">
              <v-tooltip text="Vue" location="top">
                <template v-slot:activator="{ props }">
                  <img
                    src="./../assets/vue-js.png"
                    class="rounded-xl w-[40px]"
                    v-bind="props"
                  />
                </template>
              </v-tooltip>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<style scoped></style>
