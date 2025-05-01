<template>
  <div class="w-full px-6 py-12">
    <h2 class="text-4xl font-bold text-blue-500 text-center">Layanan FixLap</h2>
    <p class="text-gray-700 mt-4 text-center">
      Pilih layanan yang Anda butuhkan dan lihat detailnya.
    </p>

    <div class="flex flex-col gap-6 mt-6">
      <div
        v-for="(service, index) in services"
        :key="index"
        class="bg-white p-8 rounded-lg shadow-md transition-all duration-500 w-full cursor-pointer hover:shadow-lg"
        @click="toggleService(index)"
      >
        <!-- Nama layanan + harga di kiri, tombol di kanan atas -->
        <div class="flex justify-between items-center">
          <p class="text-xl font-bold text-blue-500">{{ service.name }}</p>
          <button
            v-if="activeService !== index"
            @click="orderService(service.whatsappLink)"
            class="bg-yellow-400 px-5 py-2 rounded-md text-black font-bold hover:bg-yellow-300"
          >
            Pesan
          </button>
        </div>

        <!-- Deskripsi muncul saat diklik, tombol pindah ke kanan bawah -->
        <div
          v-if="activeService === index"
          class="mt-6 text-gray-700 transition-all duration-500"
        >
          <p>{{ service.description }}</p>
          <button
            @click="orderService(service.whatsappLink)"
            class="mt-4 bg-yellow-400 px-6 py-3 rounded-md text-black font-bold hover:bg-yellow-300 float-right"
          >
            Pesan Sekarang
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeService: null,
      services: [
        {
          name: "Upgrade RAM & SSD",
          price: "Rp 500.000",
          description:
            "Meningkatkan performa laptop dengan RAM dan SSD baru untuk kecepatan maksimal.",
          whatsappLink:
            "https://wa.me/62895411252300?text=Halo,%20saya%20tertarik%20dengan%20upgrade%20RAM%20%26%20SSD",
        },
        {
          name: "Perbaikan Keyboard & Touchpad",
          price: "Rp 200.000",
          description:
            "Mengatasi masalah keyboard atau touchpad yang tidak responsif atau rusak.",
          whatsappLink:
            "https://wa.me/62895411252300?text=Halo,%20saya%20butuh%20perbaikan%20keyboard%20%26%20touchpad",
        },
        {
          name: "Instalasi Software & OS",
          price: "Rp 150.000",
          description:
            "Pemasangan sistem operasi, aplikasi produktivitas, dan software lainnya.",
          whatsappLink:
            "https://wa.me/62895411252300?text=Halo,%20saya%20ingin%20instalasi%20software%20%26%20OS",
        },
      ],
    };
  },
  methods: {
    toggleService(index) {
      this.activeService = this.activeService === index ? null : index;
    },
    orderService(link) {
      window.open(link, "_blank");
    },
  },
};
</script>
