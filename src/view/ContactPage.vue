<template>
  <div class="max-w-4xl mx-auto py-12 text-center">
    <h2 class="text-3xl font-bold text-blue-500">Hubungi FixLap</h2>
    <p class="text-gray-700 mt-4">
      Punya pertanyaan? Konsultasikan langsung dengan kami!
    </p>

    <div class="mt-8 bg-white p-6 rounded-lg shadow-md text-left">
      <h3 class="text-xl font-bold text-blue-500">Kirim Pertanyaan</h3>
      <form @submit.prevent="sendMessage">
        <FormLabel text="Nama" forId="nama" />
        <input
          id="nama"
          type="text"
          v-model="name"
          class="w-full p-2 border rounded-md"
          placeholder="Nama Anda..."
          required
        />

        <FormLabel text="Email" forId="email" />
        <input
          id="email"
          type="email"
          v-model="email"
          class="w-full p-2 border rounded-md"
          placeholder="Email Anda..."
          required
        />

        <FormLabel text="Pesan" forId="pesan" />
        <textarea
          id="pesan"
          v-model="message"
          class="w-full p-2 border rounded-md"
          placeholder="Tulis pertanyaan Anda..."
          required
        ></textarea>

        <button
          type="submit"
          class="mt-4 bg-yellow-400 px-6 py-3 rounded-md text-black font-bold hover:bg-yellow-300 w-full"
        >
          Kirim Pertanyaan
        </button>
      </form>
    </div>

    <div class="mt-8">
      <a
        href="https://wa.me/628XXXXXX"
        target="_blank"
        class="bg-green-500 text-white px-6 py-3 rounded-md font-bold hover:bg-green-400"
      >
        Chat di WhatsApp
      </a>
    </div>
  </div>
</template>

<script>
import FormLabel from "../components/FormLabel.vue";

export default {
  components: { FormLabel },
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    sendMessage() {
      alert(`Pesan terkirim dari ${this.name}: ${this.message}`);
    },
  },
};
</script>
