<template>
  <div class="w-full min-h-screen bg-blue-50 flex justify-center">
    <service-list-vue />
  </div>
</template>

<script>
import ServiceListVue from "../components/ServiceList.vue";

export default {
  components: {
    ServiceListVue,
  },
};
</script>
