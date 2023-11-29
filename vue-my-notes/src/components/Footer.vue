<script setup>
const year = new Date().getFullYear();
</script>

<template>
  <footer class="bg-white shadow">
    <hr class="border-gray-200 sm:mx-auto" />
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <span class="block text-sm text-gray-500 sm:text-center"
        >© {{ year }}
        <RouterLink to="/" class="hover:underline">My Notes</RouterLink>. All
        Rights Reserved.</span
      >
    </div>
  </footer>
</template>
