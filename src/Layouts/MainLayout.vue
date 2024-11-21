<script setup>
import Modal from "./../components/Modal.vue";
import { ref } from "vue";

const show = ref(false);

function close() {
  show.value = false;
}
</script>

<template>
  <div class="h-auto flex flex-col">
    <header>
      <nav
        class="w-full bg-blue-950 py-2 dark:bg-body-dark z-20 h-[180px] md:h-[100px] fixed shadow-lg"
      >
        <div class="container mx-auto flex justify-between items-center mt-4">
          <div class="flex-shrink-0 ml-10 ma-4 md:ml-0">
            <div class="text-center mt-1"></div>
          </div>

          <div class="flex justify-center ml-3">
            <div class="fill-current text-white mt-2">
              <p class="text-2xl">Daniel Eduardo Fernández Pérez</p>
            </div>
          </div>
          <div
            class="hidden lg:flex flex-grow justify-end mr-[200px] pr-16 mt-4"
          >
            <ul class="flex space-x-8">
              <!--              <li class="">Full Stack developer</li>-->
              <li>
                <!-- <button
                    class="text-black hover:text-blue-400 transition duration-300 text-lg"
                  >
                    Cursos
                  </button> -->
              </li>
            </ul>
          </div>
          <div class="flex lg:justify-end mr-10 mt-2">
            <div class="flex justify-center ml-3">
              <div class="fill-current text-gray-400 mt-1">
                <p
                  class="rounded-md flex items-center p-2 bg-sky-500 text-lg text-white"
                >
                  Junior FullStack Developer
                </p>
              </div>
            </div>

            <!--            <button-->
            <!--              class="rounded-md flex items-center p-2 bg-sky-500"-->

            <!--            >-->
            <!--              <p class="rounded-md flex items-center p-2 bg-sky-500 text-lg text-white">FullStack Developer</p>-->
            <!--&lt;!&ndash;            </button>&ndash;&gt;-->
            <!--            <Modal :show="show" @close="close"> </Modal>-->

            <!--            <button class="rounded-md flex items-center p-4">-->
            <!--              <p class="text-lg hover:text-blue-400"></p>-->
            <!--            </button>-->
          </div>
        </div>
      </nav>
    </header>
    <main class="">
      <slot />
    </main>
  </div>
</template>
