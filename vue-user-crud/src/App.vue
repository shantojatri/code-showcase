<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
</script>

<template> 
  <Navbar/>
  <main class="min-h-[75vh]">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 mt-16"> 
      <RouterView />
    </div>
  </main>

  <Footer/>

</template>