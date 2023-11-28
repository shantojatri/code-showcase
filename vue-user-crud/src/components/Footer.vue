<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-white shadow dark:bg-gray-900">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <RouterLink to="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
            >User Crud</span
          >
        </RouterLink>
        <ul
          class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400"
        >
          <li>
            <RouterLink to="/" class="hover:underline me-4 md:me-6">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/about" class="hover:underline me-4 md:me-6">About</RouterLink>
          </li>
          <li>
            <RouterLink to="/contact" class="hover:underline">Contact</RouterLink>
          </li>
        </ul>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"
        >© {{ year }} <RouterLink to="/" class="hover:underline">Vue User Crud</RouterLink>. All
        Rights Reserved.</span
      >
    </div>
  </footer>
</template>
