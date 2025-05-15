<template>
  <div class="w-full px-4 py-12">
    <h2 class="text-4xl font-bold text-blue-500 text-center">Layanan FixLap</h2>
    <p class="text-gray-700 mt-4 text-center">
      Pilih layanan yang Anda butuhkan dan lihat detailnya.
    </p>

    <div class="flex flex-col gap-6 mt-6">
      <div
        v-for="(service, index) in services"
        :key="index"
        class="bg-white p-3 md:p-6 rounded-lg shadow-md transition-all duration-500 w-full cursor-pointer hover:shadow-lg"
        @click="toggleService(index)"
      >
        <!-- Nama layanan + harga di kiri, tombol di kanan atas -->
        <div class="flex justify-between items-center">
          <p class="text-sm font-bold md:text-2xl text-blue-500">
            {{ service.name }}
          </p>
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
        <p class=" font-bold text-2xl text-blue-500 ">{{ service.price }}</p>
          <p v-if="service.parts" class="font-bold text-blue-500">
            ( {{ service.parts }} )
          </p>
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
          price: "Rp 50.000",
          parts:
            "RAM & SSD tergantung dari pilihan customer / bisa di diskusikan",
          description:
            "Meningkatkan performa laptop dengan RAM dan SSD baru untuk kecepatan maksimal.",
          whatsappLink:
            "https://wa.me/62895411252300?text=Halo,%20saya%20tertarik%20dengan%20upgrade%20RAM%20%26%20SSD",
        },
        {
          name: "Perbaikan Keyboard & Touchpad",
          price: "Rp 50.000",
          parts:
            "Keyboard & Touchpad tergantung dari pilihan customer / bisa di diskusikan",
          description:
            "Mengatasi masalah keyboard atau touchpad yang tidak responsif atau rusak.",
          whatsappLink:
            "https://wa.me/62895411252300?text=Halo,%20saya%20butuh%20perbaikan%20keyboard%20%26%20touchpad",
        },
        {
          name: "Instalasi OS ( Operating System )",
          price: "Rp 50.000",
          parts: "Operating System tergantung dari pilihan customer",
          description:
            "Pemasangan Operating System baru untuk laptop Anda windows 10, Windows 11 dan linux.",
          whatsappLink:
            "https://wa.me/62895411252300?text=Halo,%20saya%20ingin%20instalasi%20software%20%26%20OS",
        },
        {
          name: "Inner cleaning laptop",
          price: "Rp 20.000",
          description:
            "Membersihkan debu dan kotoran dari laptop untuk menjaga performa dan suhu.",
          whatsappLink:
            "https://wa.me/62895411252300?text=Halo,%20saya%20ingin%20membersihkan%20laptop",
        },
        {
          name: "Replace thermal paste",
          price: "Rp 50.000",
          parts:
            "Thermal paste tergantung dari pilihan customer / bisa di diskusikan",
          description:
            "Mengganti thermal paste untuk mendinginkan laptop dan meningkatkan kinerja.",
          whatsappLink:
            "https://wa.me/62895411252300?text=Halo,%20saya%20ingin%20repaste%20thermal%20paste",
        },
        {
          name: "Driver Installation",
          price: "Rp 5.000 / driver",
          description:
            "Instalasi driver untuk perangkat keras laptop agar berfungsi dengan baik.",
          whatsappLink:
            "https://wa.me/62895411252300?text=Halo,%20saya%20ingin%20instalasi%20driver",
        },
        {
          name: "Software Installation",
          price: "Rp 10.000 / software",
          description:
            "Instalasi software untuk meningkatkan fungsionalitas laptop Anda.",
          whatsappLink:
            "https://wa.me/62895411252300?text=Halo,%20saya%20ingin%20instalasi%20software",
        },
        {
          name: "Instalasi OS & Software Bawaan",
          price: "Rp 70.000",
          parts:
            "Windows/Linux + Microsoft Office, PDF Reader, Browser, Media Player, dll   .",
          description:
            "Pemasangan Operating System baru (Windows/Linux) lengkap dengan software bawaan seperti Microsoft Office, PDF Reader, Browser, Media Player, dan aplikasi penting lainnya.",
          whatsappLink:
            "https://wa.me/62895411252300?text=Halo,%20saya%20ingin%20instalasi%20OS%20dan%20software%20bawaan",
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
