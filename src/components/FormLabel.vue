<template>
    <label :for="forId" class="block mt-4 text-gray-700">
      {{ text }}
    </label>
  </template>
  
  <script>
  export default {
    props: {
      text: String,    // Teks label
      forId: String   // ID input yang terkait
    }
  };
  </script>