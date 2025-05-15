<template>
  <div>
    <div
      class="bg-blue-500 text-white p-5 flex justify-between shadow-md items-center fixed w-full top-0 z-50"
    >
      <span class="font-bold text-3xl sm:text-4xl md:text-5xl">FixLap</span>
      <button
        ref="button"
        @click="toggleMenu"
        class="md:hidden text-white text-2xl"
        aria-label="Toggle menu"
      >
        ☰
      </button>
      <div
        ref="menu"
        :class="menuOpen ? 'block' : 'hidden'"
        class="md:flex md:space-x-6 absolute md:static bg-blue-500 text-white text-xl w-full md:w-auto left-0 top-18 md:top-0 text-center md:text-left"
      >
        <router-link
          to="/"
          class="block py-3 px-6 hover:text-yellow-300"
          @click="closeMenu"
          >Beranda</router-link
        >
        <router-link
          to="/layanan"
          class="block py-3 px-6 hover:text-yellow-300"
          @click="closeMenu"
          >Layanan</router-link
        >
        <router-link
          to="/testimoni"
          class="block py-3 px-6 hover:text-yellow-300"
          @click="closeMenu"
          >Testimoni</router-link
        >
        <router-link
          to="/contact"
          class="block py-3 px-6 hover:text-yellow-300"
          @click="closeMenu"
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
    closeMenu() {
      this.menuOpen = false;
    },
    handleClickOutside(event) {
      const menu = this.$refs.menu;
      const button = this.$refs.button;

      // Jika menu terbuka dan klik bukan di menu atau tombol hamburger, tutup menu
      if (
        this.menuOpen &&
        menu &&
        !menu.contains(event.target) &&
        button &&
        !button.contains(event.target)
      ) {
        this.closeMenu();
      }
    },
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
  },
};
</script>
