<script setup></script>
<template>
  <div
    class="p-[50px] lg:p-[100px] flex justify-center mt-[100px] top-0 left-0 py-4"
  >
    <section class="max-w-[700px] mt-0 mx-auto mb-[48px]">
      <h2
        class="underline decoration-double decoration-pink-500 text-xl text-gray-700 mb-2 font-bold text-[1.3rem] leading-6"
      >
        Proyectos
      </h2>
      <ul class="grid grid-cols-[repeat(auto-fit, minmax(200px,1fr))] gap-4">
        <li>
          <div class="flex jusitfy-center">
            <div
              class="max-w-md mx-auto bg-white rounded-xl shadow-xl overflow-hidden md:max-w-2xl hover:scale-105 transition duration-500"
            >
              <div class="md:flex">
                <div class="p-8">
                  <div
                    class="uppercase tracking-wide text-lg text-indigo-500 font-semibold"
                  >
                    Plataforma de diplomados
                  </div>
                  <div class="flex justify-start">
                    <div class="grid grid-cols-2 gap-4">
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
                        <v-tooltip text="React.js" location="top">
                          <template v-slot:activator="{ props }">
                            <img
                              src="./../assets/react.png"
                              class="rounded-xl w-[40px]"
                              v-bind="props"
                            />
                          </template>
                        </v-tooltip>
                      </div>
                    </div>
                  </div>
                  <p class="mt-2 text-slate-500">
                    Una plataforma de diplomados tiene la finalidad de ofrecer
                    un espacio dinámico y accesible para la formación docente y
                    el desarrollo profesional. Con un enfoque ramificado,
                    permite a los usuarios explorar diversas áreas de
                    conocimiento, desde la educación hasta el desarrollo de
                    habilidades técnicas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="flex jusitfy-center">
            <div
              class="max-w-md mx-auto bg-white rounded-xl shadow-xl overflow-hidden md:max-w-2xl hover:scale-105 transition duration-500"
            >
              <div class="md:flex">
                <div class="p-8">
                  <div
                    class="uppercase tracking-wide text-lg text-indigo-500 font-semibold"
                  >
                    Plataforma de Evaluación Educativa
                  </div>
                  <div class="flex justify-start">
                    <div class="grid grid-cols-2 gap-4">
                      <div class="flex justify-end">
                        <v-tooltip
                          text="Django Python Web Framework"
                          location="top"
                        >
                          <template v-slot:activator="{ props }">
                            <img
                              src="./../assets/django.png"
                              class="rounded-xl w-[40px] h-[50px]"
                              v-bind="props"
                            />
                          </template>
                        </v-tooltip>
                      </div>
                      <div class="flex justify-start">
                        <v-tooltip text="Vue.js" location="top">
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
                  <p class="mt-2 text-slate-500">
                    Plataforma para la enseñanza y evaluación en línea, diseñada
                    específicamente para educadores y estudiantes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li></li>
      </ul>
    </section>
  </div>
</template>
