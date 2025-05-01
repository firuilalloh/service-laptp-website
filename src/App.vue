<template>
  <div>
    <div
      class="bg-blue-500 text-white p-5 flex justify-between shadow-md items-center fixed w-full top-0 z-50"
    >
      <h1 class="text-xl font-bold md:text-2xl">FixLap</h1>
      <button @click="toggleMenu" class="md:hidden text-white text-2xl">
        ☰
      </button>
      <div
        :class="menuOpen ? 'block' : 'hidden'"
        class="md:flex md:space-x-6 absolute md:static bg-blue-500 text-white text-xl w-full md:w-auto left-0 top-24 md:top-0 text-center md:text-left"
      >
        <router-link to="/" class="block py-3 px-6 hover:text-yellow-300"
          >Beranda</router-link
        >
        <router-link to="/layanan" class="block py-3 px-6 hover:text-yellow-300"
          >Layanan</router-link
        >
        <router-link
          to="/testimoni"
          class="block py-3 px-6 hover:text-yellow-300"
          >Testimoni</router-link
        >
        <router-link to="/contact" class="block py-3 px-6 hover:text-yellow-300"
          >Kontak</router-link
        >
      </div>
    </div>

    <div class="mt-16">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>
