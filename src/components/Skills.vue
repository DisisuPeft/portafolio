<script setup></script>
<template>
  <div
    class="p-[50px] lg:p-[100px] flex justify-center mt-[100px] top-0 left-0 py-4 transition-opacity duration-500"
  >
    <section class="max-w-[700px] mt-0 mx-auto mb-[48px]">
      <h2
        class="underline decoration-double decoration-pink-500 text-xl text-gray-700 mb-2 font-bold text-[1.3rem] leading-6"
      >
        Habilidades
      </h2>
      <ul class="grid grid-cols-[repeat(auto-fit, minmax(200px,1fr))] gap-4">
        <li>
          <div class="flex justify-center">
            <div class="grid grid-cols-5 gap-4 w-[300px]">
              <div class="flex justify-end">
                <v-tooltip text="Laravel" location="top">
                  <template v-slot:activator="{ props }">
                    <img
                      src="./../assets/laravel.png"
                      class="rounded-xl w-[50px]"
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
                      class="rounded-xl w-[50px]"
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
                      class="rounded-xl w-[50px]"
                      v-bind="props"
                    />
                  </template>
                </v-tooltip>
              </div>
              <div class="flex justify-start">
                <v-tooltip text="JavaScript" location="top">
                  <template v-slot:activator="{ props }">
                    <img
                      src="./../assets/javascript.png"
                      class="rounded-xl w-[50px]"
                      v-bind="props"
                    />
                  </template>
                </v-tooltip>
              </div>
              <div class="flex justify-start">
                <v-tooltip text="Python" location="top">
                  <template v-slot:activator="{ props }">
                    <img
                      src="./../assets/python.png"
                      class="rounded-xl w-[50px]"
                      v-bind="props"
                    />
                  </template>
                </v-tooltip>
              </div>
              <div class="flex justify-start">
                <v-tooltip text="Java" location="top">
                  <template v-slot:activator="{ props }">
                    <img
                      src="./../assets/java.png"
                      class="rounded-xl w-[50px]"
                      v-bind="props"
                    />
                  </template>
                </v-tooltip>
              </div>
              <div class="flex justify-start">
                <v-tooltip text="PHP" location="top">
                  <template v-slot:activator="{ props }">
                    <img
                      src="./../assets/php8.png"
                      class="rounded-xl w-[50px]"
                      v-bind="props"
                    />
                  </template>
                </v-tooltip>
              </div>
              <div class="flex justify-start">
                <v-tooltip text="SQL" location="top">
                  <template v-slot:activator="{ props }">
                    <img
                      src="./../assets/sql.png"
                      class="rounded-xl w-[50px]"
                      v-bind="props"
                    />
                  </template>
                </v-tooltip>
              </div>
              <div class="flex justify-start">
                <v-tooltip text="HTML" location="top">
                  <template v-slot:activator="{ props }">
                    <img
                      src="./../assets/html5.png"
                      class="rounded-xl w-[50px]"
                      v-bind="props"
                    />
                  </template>
                </v-tooltip>
              </div>
              <div class="flex justify-start">
                <v-tooltip text="CSS" location="top">
                  <template v-slot:activator="{ props }">
                    <img
                      src="./../assets/css.png"
                      class="rounded-xl w-[50px]"
                      v-bind="props"
                    />
                  </template>
                </v-tooltip>
              </div>
              <div class="flex justify-start">
                <v-tooltip text="TailwindCSS" location="top">
                  <template v-slot:activator="{ props }">
                    <img
                      src="./../assets/tailwindcss.png"
                      class="rounded-xl w-[50px]"
                      v-bind="props"
                    />
                  </template>
                </v-tooltip>
              </div>
              <div class="flex justify-start">
                <v-tooltip text="Django Framework" location="top">
                  <template v-slot:activator="{ props }">
                    <img
                      src="./../assets/django.png"
                      class="rounded-xl w-[50px]"
                      v-bind="props"
                    />
                  </template>
                </v-tooltip>
              </div>
              <div class="flex justify-start">
                <v-tooltip text="Linux Basics" location="top">
                  <template v-slot:activator="{ props }">
                    <img
                      src="./../assets/linux.png"
                      class="rounded-xl w-[50px]"
                      v-bind="props"
                    />
                  </template>
                </v-tooltip>
              </div>
              <div class="flex justify-start">
                <v-tooltip text="Git/Github" location="top">
                  <template v-slot:activator="{ props }">
                    <img
                      src="./../assets/git.png"
                      class="rounded-xl w-[50px]"
                      v-bind="props"
                    />
                  </template>
                </v-tooltip>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>
