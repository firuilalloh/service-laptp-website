<template>
  <div class="max-w-4xl mx-auto py-12 text-center">
    <h2 class="text-3xl font-bold text-blue-500">Apa Kata Pelanggan?</h2>

    <div
      v-if="testimonials.length === 0"
      class="mt-6 bg-white p-6 rounded-lg shadow-md"
    >
      <p class="text-gray-700 text-lg">Belum ada testimoni untuk saat ini.</p>
      <p class="text-gray-600">
        Jadilah pelanggan pertama yang memberikan ulasan untuk FixLap!
      </p>
    </div>

    <div v-else class="flex flex-wrap justify-center gap-6 mt-6">
      <div
        v-for="(testimonial, index) in testimonials"
        :key="index"
        class="bg-white p-6 rounded-lg shadow-md w-64"
      >
        <p class="text-gray-600 italic">"{{ testimonial.feedback }}"</p>
        <h3 class="text-lg font-bold text-blue-500 mt-2">
          - {{ testimonial.name }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testimonials: [], // Awalnya kosong, nanti bisa ditambahkan dari pelanggan asli.
    };
  },
};
</script>
