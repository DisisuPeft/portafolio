<script setup>
import { ref, onMounted } from "vue";
import {
  Github as GithubIcon,
  Mail as MailIcon,
  Phone as PhoneIcon,
  Linkedin as LinkedinIcon,
  ExternalLink as ExternalLinkIcon,
  CheckCircle as CheckCircleIcon,
  Layout as LayoutIcon,
  Server as ServerIcon,
  BookOpen as BookOpenIcon,
  Globe as GlobeIcon,
  User as UserIcon,
  Folder as FolderIcon,
  Code as CodeIcon,
  GraduationCap as GraduationCapIcon,
  Sun as SunIcon,
  Moon as MoonIcon,
  FolderCode as FolderCodeIcon,
  Hammer as HammerIcon,
} from "lucide-vue-next";

const isDarkMode = ref(false);
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;

  if (isDarkMode.value) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  // Guardar preferencia en localStorage
  localStorage.setItem("darkMode", isDarkMode.value);
};
onMounted(() => {
  const savedMode = localStorage.getItem("darkMode");

  if (savedMode !== null) {
    isDarkMode.value = savedMode === "true";
  } else {
    isDarkMode.value = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
  }

  if (isDarkMode.value) {
    document.documentElement.classList.add("dark");
  }

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (localStorage.getItem("darkMode") === null) {
        isDarkMode.value = e.matches;
        if (isDarkMode.value) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    });
});
</script>
<template>
  <div
    class="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
  >
    <button
      @click="toggleDarkMode"
      class="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 z-50"
      aria-label="Cambiar tema"
    >
      <sun-icon v-if="isDarkMode" class="h-5 w-5" />
      <moon-icon v-else class="h-5 w-5" />
    </button>

    <!-- Header -->
    <header
      class="py-16 px-6 md:px-12 lg:px-24 flex flex-col items-center text-center"
    >
      <h1 class="text-4xl md:text-5xl font-bold mb-2">
        Hola, soy Daniel Eduardo Fernández Pérez.
      </h1>
      <h2
        class="text-2xl md:text-3xl font-semibold text-emerald-600 dark:text-emerald-400 mb-2"
      >
        Full Stack Developer
      </h2>

      <div class="flex flex-wrap justify-center gap-4">
        <a
          href="https://github.com/DisisuPeft"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          <github-icon class="h-5 w-5" />
          <span>GitHub</span>
        </a>
        <a
          href="mailto:dev.danielfernandez@gmail.com"
          class="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          <mail-icon class="h-5 w-5" />
          <span>Email</span>
        </a>
        <a
          href="tel:+529614276822"
          class="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          <phone-icon class="h-5 w-5" />
          <span>Teléfono</span>
        </a>
        <a
          href="https://www.linkedin.com/in/daniel-fern%C3%A1ndez-046a40244/"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          <linkedin-icon class="h-5 w-5" />
          <span>LinkedIn</span>
        </a>
      </div>
    </header>
    <main class="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pb-24">
      <ul class="text-lg md:text-xl max-w-2xl mb-8 space-y-4 list-none">
        <li>🧱 No me interesa programar por programar.</li>
        <li>✍️ Desarrollo software útil, con visión y alma.</li>
        <li>
          🌍 Este sitio es una muestra de lo que construyo desde el sur, con
          intención real.
        </li>
      </ul>
      <section id="about" class="mb-20">
        <h2
          class="text-3xl font-bold mb-8 border-b-2 border-emerald-500 dark:border-emerald-400 pb-2 inline-block"
        >
          Sobre mí
        </h2>
        <p class="text-lg leading-relaxed max-w-4xl">
          No me interesa programar por programar. Desarrollar software, para mí,
          es una forma de darle estructura a lo que importa: educación,
          claridad, procesos útiles. Vengo de Tuxtla, donde aprendí que
          construir algo valioso no es solo usar la última tecnología, sino
          entender el problema real.
        </p>
        <p class="text-lg leading-relaxed max-w-4xl">
          Por eso he dedicado mi tiempo a crear plataformas educativas, CRMs
          funcionales y sistemas con visión a largo plazo. En este sitio
          comparto lo que estoy desarrollando, lo que ya he construido y lo que
          quiero seguir creando. Si resuena contigo, bienvenido.
        </p>
      </section>

      <section id="projects" class="mb-20">
        <h2
          class="text-3xl font-bold mb-8 border-b-2 border-emerald-500 dark:border-emerald-400 pb-2 inline-block"
        >
          Proyectos destacados
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Proyecto 1 -->
          <div
            class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">FODAP</h3>
              <p class="text-gray-600 dark:text-gray-800 mb-4">
                Plataforma integral de formación docente. Automatiza programas
                educativos y asignaciones.
              </p>
              <div class="mb-4">
                <h4 class="font-semibold mb-1">Stack:</h4>
                <p class="text-gray-600 dark:text-gray-800">
                  Laravel, Inertia, Vue, MySQL
                </p>
              </div>
              <div class="flex gap-3">
                <a
                  href="https://fodap.tuxtla.tecnm.mx/"
                  class="text-emerald-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                >
                  <external-link-icon class="h-4 w-4" />
                  <span>Visitar</span>
                </a>
                <a
                  href="https://github.com/DisisuPeft/FODAP"
                  class="text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
                >
                  <github-icon class="h-4 w-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Proyecto 2 -->
          <div
            class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">ERP Educativo con CRM</h3>
              <p class="text-gray-600 dark:text-gray-800 mb-4">
                ERP modular para instituciones privadas, control escolar y
                seguimiento de leads (En desarrollo).
              </p>
              <div class="mb-4">
                <h4 class="font-semibold mb-1">Stack:</h4>
                <p class="text-gray-600 dark:text-gray-800">
                  Django, Next.js, RTK Query
                </p>
              </div>
              <div class="flex gap-3">
                <!-- <p
                  class="text-emerald-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                >
                  <folder-code-icon class="h-4 w-4" />
                  <span>En Desarrollo</span>
                </p> -->
                <a
                  href="https://github.com/DisisuPeft/cea-api"
                  class="text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
                >
                  <github-icon class="h-4 w-4" />
                  <span>GitHub del backend</span>
                </a>
                <a
                  href="https://github.com/DisisuPeft/cea-frontend"
                  class="text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
                >
                  <github-icon class="h-4 w-4" />
                  <span>GitHub del frontend</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Proyecto 3 -->
          <div
            class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Landing Mitsubishi Xpander</h3>
              <p class="text-gray-600 dark:text-gray-800 mb-4">
                Página responsiva para campaña de agencia automotriz.
              </p>
              <div class="mb-4">
                <h4 class="font-semibold mb-1">Stack:</h4>
                <p class="text-gray-600 dark:text-gray-800">
                  HTML, Tailwind, Vue
                </p>
              </div>
              <div class="flex gap-3">
                <a
                  href="https://www.grupofarrera.mx/mitsubishi-xpander"
                  class="text-emerald-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                >
                  <external-link-icon class="h-4 w-4" />
                  <span>Visitar</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Proyecto 4 -->
          <div
            class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Landing Mundialito Farrera</h3>
              <p class="text-gray-600 dark:text-gray-800 mb-4">
                Sitio promocional para evento deportivo.
              </p>
              <div class="mb-4">
                <h4 class="font-semibold mb-1">Stack:</h4>
                <p class="text-gray-600 dark:text-gray-800">HTML, CSS</p>
              </div>
              <div class="flex gap-3">
                <a
                  href="https://www.grupofarrera.mx/mundialito-2025.html"
                  class="text-emerald-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                >
                  <external-link-icon class="h-4 w-4" />
                  <span>Visitar</span>
                </a>
              </div>
            </div>
          </div>
          <!-- Proyecto 5 -->
          <div
            class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">
                Landing de la Universidad Nacional Salvador Zubirán Anchondo
              </h3>
              <p class="text-gray-600 dark:text-gray-800 mb-4">
                Sitio para una universidad en crecimiento.
              </p>
              <div class="mb-4">
                <h4 class="font-semibold mb-1">Stack:</h4>
                <p class="text-gray-600 dark:text-gray-800">
                  Next.js, Tailwind
                </p>
              </div>
              <div class="flex gap-3">
                <a
                  href="https://www.unsza.com/"
                  class="text-emerald-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                >
                  <external-link-icon class="h-4 w-4" />
                  <span>Visitar</span>
                </a>
              </div>
            </div>
          </div>
          <!-- Proyecto 6 -->
          <div
            class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">invitaPro</h3>
              <p class="text-gray-600 dark:text-gray-800 mb-4">
                Sitio para una empresa de invitaciones digitales.
              </p>
              <div class="mb-4">
                <h4 class="font-semibold mb-1">Stack:</h4>
                <p class="text-gray-600 dark:text-gray-800">
                  Next.js, Tailwind
                </p>
              </div>
              <div class="flex gap-3">
                <a
                  href="https://www.invitapro.lat/"
                  class="text-emerald-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                >
                  <external-link-icon class="h-4 w-4" />
                  <span>Visitar</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="skills" class="mb-20">
        <h2
          class="text-3xl font-bold mb-8 border-b-2 border-emerald-500 dark:border-emerald-400 pb-2 inline-block"
        >
          Habilidades
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Frontend -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
              <layout-icon
                class="h-5 w-5 text-emerald-600 dark:text-emerald-400"
              />
              Frontend
            </h3>
            <ul class="space-y-2">
              <li class="flex items-center gap-2">
                <check-circle-icon
                  class="h-4 w-4 text-emerald-600 dark:text-emerald-400"
                />
                Vue 3
              </li>
              <li class="flex items-center gap-2">
                <check-circle-icon
                  class="h-4 w-4 text-emerald-600 dark:text-emerald-400"
                />
                React
              </li>
              <li class="flex items-center gap-2">
                <check-circle-icon
                  class="h-4 w-4 text-emerald-600 dark:text-emerald-400"
                />
                Next.js
              </li>
              <li class="flex items-center gap-2">
                <check-circle-icon
                  class="h-4 w-4 text-emerald-600 dark:text-emerald-400"
                />
                TailwindCSS
              </li>
              <li class="flex items-center gap-2">
                <check-circle-icon
                  class="h-4 w-4 text-emerald-600 dark:text-emerald-400"
                />
                Redux
              </li>
            </ul>
          </div>

          <!-- Backend -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
              <server-icon
                class="h-5 w-5 text-emerald-600 dark:text-emerald-400"
              />
              Backend
            </h3>
            <ul class="space-y-2">
              <li class="flex items-center gap-2">
                <check-circle-icon
                  class="h-4 w-4 text-emerald-600 dark:text-emerald-400"
                />
                Django
              </li>
              <li class="flex items-center gap-2">
                <check-circle-icon
                  class="h-4 w-4 text-emerald-600 dark:text-emerald-400"
                />
                DRF
              </li>
              <li class="flex items-center gap-2">
                <check-circle-icon
                  class="h-4 w-4 text-emerald-600 dark:text-emerald-400"
                />
                Laravel
              </li>
              <li class="flex items-center gap-2">
                <check-circle-icon
                  class="h-4 w-4 text-emerald-600 dark:text-emerald-400"
                />
                Node.js
              </li>
            </ul>
          </div>

          <!-- Herramientas -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
              <hammer-icon
                class="h-5 w-5 text-emerald-600 dark:text-emerald-400"
              />
              Herramientas
            </h3>
            <ul class="space-y-2">
              <li class="flex items-center gap-2">
                <check-circle-icon
                  class="h-4 w-4 text-emerald-600 dark:text-emerald-400"
                />
                Git
              </li>
              <li class="flex items-center gap-2">
                <check-circle-icon
                  class="h-4 w-4 text-emerald-600 dark:text-emerald-400"
                />
                GitHub
              </li>
              <li class="flex items-center gap-2">
                <check-circle-icon
                  class="h-4 w-4 text-emerald-600 dark:text-emerald-400"
                />
                Linux
              </li>
              <!-- <li class="flex items-center gap-2">
                <check-circle-icon
                  class="h-4 w-4 text-emerald-600 dark:text-emerald-400"
                />
                Vercel
              </li> -->
              <li class="flex items-center gap-2">
                <check-circle-icon
                  class="h-4 w-4 text-emerald-600 dark:text-emerald-400"
                />
                Netlify
              </li>
              <li class="flex items-center gap-2">
                <check-circle-icon
                  class="h-4 w-4 text-emerald-600 dark:text-emerald-400"
                />
                MySQL
              </li>
              <li class="flex items-center gap-2">
                <check-circle-icon
                  class="h-4 w-4 text-emerald-600 dark:text-emerald-400"
                />
                SQLite
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="education" class="mb-20">
        <h2
          class="text-3xl font-bold mb-8 border-b-2 border-emerald-500 dark:border-emerald-400 pb-2 inline-block"
        >
          Educación
        </h2>

        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-6">
          <h3 class="text-xl font-bold mb-2">
            Tecnológico Nacional de México - Tuxtla Gutiérrez (2017–2023)
          </h3>
          <p class="text-gray-600 dark:text-gray-800 mb-4">
            Ingeniería en Sistemas Computacionales
          </p>
        </div>

        <h3 class="text-xl font-bold mb-4">Cursos</h3>
        <div class="space-y-4">
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <h4 class="font-semibold mb-1 flex items-center gap-2">
              <book-open-icon
                class="h-4 w-4 text-emerald-600 dark:text-emerald-400"
              />
              Mastermind Node.js
            </h4>
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <h4 class="font-semibold mb-1 flex items-center gap-2">
              <book-open-icon
                class="h-4 w-4 text-emerald-600 dark:text-emerald-400"
              />
              LoopGk (Backend Python y APIs)
            </h4>
          </div>
        </div>
      </section>
      <section id="languages">
        <h2
          class="text-3xl font-bold mb-8 border-b-2 border-emerald-500 dark:border-emerald-400 pb-2 inline-block"
        >
          Idiomas
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <h3 class="text-xl font-bold mb-2 flex items-center gap-2">
              <globe-icon
                class="h-5 w-5 text-emerald-600 dark:text-emerald-400"
              />
              Español
            </h3>
            <div class="flex items-center gap-2">
              <div
                class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5"
              >
                <div
                  class="bg-emerald-600 dark:bg-emerald-400 h-2.5 rounded-full"
                  style="width: 100%"
                ></div>
              </div>
              <span class="text-sm">Nativo</span>
            </div>
          </div>

          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <h3 class="text-xl font-bold mb-2 flex items-center gap-2">
              <globe-icon
                class="h-5 w-5 text-emerald-600 dark:text-emerald-400"
              />
              Inglés
            </h3>
            <div class="space-y-2">
              <div class="flex items-center gap-2">
                <span class="text-sm w-24">Lectura técnica:</span>
                <div
                  class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5"
                >
                  <div
                    class="bg-emerald-600 dark:bg-emerald-400 h-2.5 rounded-full"
                    style="width: 90%"
                  ></div>
                </div>
                <span class="text-sm">Avanzada</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-sm w-24">Conversación:</span>
                <div
                  class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5"
                >
                  <div
                    class="bg-emerald-600 dark:bg-emerald-400 h-2.5 rounded-full"
                    style="width: 30%"
                  ></div>
                </div>
                <span class="text-sm">Media</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer class="bg-gray-200 dark:bg-gray-800 py-8 px-6 text-center">
      <p>
        © {{ new Date().getFullYear() }} Daniel Eduardo Fernández Pérez. Todos
        los derechos reservados.
      </p>
      <div class="flex justify-center gap-4 mt-4">
        <a
          href="#"
          class="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400"
        >
          <github-icon class="h-5 w-5" />
        </a>
        <a
          href="#"
          class="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400"
        >
          <mail-icon class="h-5 w-5" />
        </a>
        <a
          href="#"
          class="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400"
        >
          <linkedin-icon class="h-5 w-5" />
        </a>
      </div>
    </footer>
    <nav
      class="md:hidden fixed bottom-0 left-0 right-0 bg-gray-800 shadow-lg z-50"
    >
      <ul class="flex justify-around py-3">
        <li>
          <a
            href="#about"
            class="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400"
          >
            <user-icon class="h-5 w-5" />
            <span class="text-xs">Sobre mí</span>
          </a>
        </li>
        <li>
          <a
            href="#projects"
            class="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400"
          >
            <folder-icon class="h-5 w-5" />
            <span class="text-xs">Proyectos</span>
          </a>
        </li>
        <li>
          <a
            href="#skills"
            class="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400"
          >
            <code-icon class="h-5 w-5" />
            <span class="text-xs">Habilidades</span>
          </a>
        </li>
        <li>
          <a
            href="#education"
            class="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400"
          >
            <graduation-cap-icon class="h-5 w-5" />
            <span class="text-xs">Educación</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<style>
html {
  scroll-behavior: smooth;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #10b981;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #059669;
}

.dark ::-webkit-scrollbar-track {
  background: #1f2937;
}

.dark ::-webkit-scrollbar-thumb {
  background: #10b981;
}

.dark ::-webkit-scrollbar-thumb:hover {
  background: #34d399;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

section {
  animation: fadeIn 0.5s ease-in-out;
}
</style>
