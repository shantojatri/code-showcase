<script setup lang="ts"></script>

<template>
  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 shadow-md sm:rounded-lg">
    <caption
      class="py-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"
    >
      <div class="flex justify-between">
        All Users
        <Button class="bg-blue-500 text-white px-3 py-1">Create</Button>
      </div>
    </caption>
    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="px-6 py-3">User name</th>
        <th scope="col" class="px-6 py-3">Phone</th>
        <th scope="col" class="px-6 py-3">email</th>
        <th scope="col" class="px-6 py-3">gender</th>
        <th scope="col" class="px-6 py-3">Age</th>
        <th scope="col" class="px-6 py-3 text-right">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th
          scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          Saiem Hasan
        </th>
        <td class="px-6 py-4">01777220331</td>
        <td class="px-6 py-4">saiem@demo.com</td>
        <td class="px-6 py-4">Male</td>
        <td class="px-6 py-4">32</td>
        <td class="px-6 py-4 text-right">
          <a href="#" class="font-medium text-gray-600"
            ><i class="ri-edit-box-line ri-lg mr-1"></i
          ></a>
          <a href="#" class="font-medium text-gray-600"><i class="ri-delete-bin-line ri-lg"></i></a>
        </td>
      </tr>
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th
          scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          Saiem Hasan
        </th>
        <td class="px-6 py-4">01777220331</td>
        <td class="px-6 py-4">saiem@demo.com</td>
        <td class="px-6 py-4">Male</td>
        <td class="px-6 py-4">32</td>
        <td class="px-6 py-4 text-right">
          <a href="#" class="font-medium text-gray-600"
            ><i class="ri-edit-box-line ri-lg mr-1"></i
          ></a>
          <a href="#" class="font-medium text-gray-600"><i class="ri-delete-bin-line ri-lg"></i></a>
        </td>
      </tr>
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th
          scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          Saiem Hasan
        </th>
        <td class="px-6 py-4">01777220331</td>
        <td class="px-6 py-4">saiem@demo.com</td>
        <td class="px-6 py-4">Male</td>
        <td class="px-6 py-4">32</td>
        <td class="px-6 py-4 text-right">
          <a href="#" class="font-medium text-gray-600"
            ><i class="ri-edit-box-line ri-lg mr-1"></i
          ></a>
          <a href="#" class="font-medium text-gray-600"><i class="ri-delete-bin-line ri-lg"></i></a>
        </td>
      </tr>
    </tbody>
  </table>
</template>
