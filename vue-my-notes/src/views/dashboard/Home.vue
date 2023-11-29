<script setup lang="ts">
import { useModal } from "@/composables/useModal";
import Modal from "@/components/common/Modal.vue";
const modal = useModal();

const bgColorArray = [
  "bg-red-200",
  "bg-green-200",
  "bg-yellow-200",
  "bg-blue-200",
  "bg-gray-200",
  "bg-pink-200",
  "bg-purple-200",
];

const randomIntFromInterval = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const rndInt = randomIntFromInterval(1, 7);

const openHandler = () => {
  modal.showModal();
};
</script>

<template>
  <div class="w-full mt-3">
    <div class="flex items-center justify-between">
      <h2 class="text-lg font-semibold text-gray-700">All Notes</h2>
      <button @click="openHandler">
        <i class="ri-add-circle-line ri-2x"></i>
      </button>
    </div>
  </div>

  <div class="grid grid-cols-4 gap-5 my-5">
    <!-- Single Note item -->
    <div class="bg-red-200 p-4 rounded-lg" :class="bgColorArray[rndInt]">
      <!-- Note header -->
      <div class="flex items-center justify-between mb-2">
        <h3 class="text-xl font-bold">Hello Dello</h3>
        <div class="flex gap-x-1">
          <button><i class="ri-edit-box-line ri-lg"></i></button>
          <button><i class="ri-delete-bin-line ri-lg"></i></button>
        </div>
      </div>

      <!-- Notes content  -->
      <p class="text-justify text-base font-normal">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
        exercitationem dolore vero assumenda repellendus, quia eum totam quaerat
        obcaecati repellat.
      </p>
      <!-- Showing created at  -->
      <p class="text-md text-black mt-4">
        Created: <span class="font-semibold">22/10/2023</span>
      </p>
    </div>

    <!-- Single Note item -->
    <div class="bg-red-200 p-4 rounded-lg" :class="bgColorArray[rndInt + 1]">
      <!-- Note header -->
      <div class="flex items-center justify-between mb-2">
        <h3 class="text-xl font-bold">Hello Dello</h3>
        <div class="flex gap-x-1">
          <button><i class="ri-edit-box-line ri-lg"></i></button>
          <button><i class="ri-delete-bin-line ri-lg"></i></button>
        </div>
      </div>

      <!-- Notes content  -->
      <p class="text-justify text-base font-normal">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
        exercitationem dolore vero assumenda repellendus, quia eum totam quaerat
        obcaecati repellat.
      </p>
      <!-- Showing created at  -->
      <p class="text-md text-black mt-4">
        Created: <span class="font-semibold">22/10/2023</span>
      </p>
    </div>

    <!-- Single Note item -->
    <div class="bg-red-200 p-4 rounded-lg" :class="bgColorArray[rndInt + 2]">
      <!-- Note header -->
      <div class="flex items-center justify-between mb-2">
        <h3 class="text-xl font-bold">Hello Dello</h3>
        <div class="flex gap-x-1">
          <button><i class="ri-edit-box-line ri-lg"></i></button>
          <button><i class="ri-delete-bin-line ri-lg"></i></button>
        </div>
      </div>

      <!-- Notes content  -->
      <p class="text-justify text-base font-normal">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
        exercitationem dolore vero assumenda repellendus, quia eum totam quaerat
        obcaecati repellat.
      </p>
      <!-- Showing created at  -->
      <p class="text-md text-black mt-4">
        Created: <span class="font-semibold">22/10/2023</span>
      </p>
    </div>

    <!-- Single Note item -->
    <div class="bg-red-200 p-4 rounded-lg" :class="bgColorArray[rndInt + 3]">
      <!-- Note header -->
      <div class="flex items-center justify-between mb-2">
        <h3 class="text-xl font-bold">Hello Dello</h3>
        <div class="flex gap-x-1">
          <button><i class="ri-edit-box-line ri-lg"></i></button>
          <button><i class="ri-delete-bin-line ri-lg"></i></button>
        </div>
      </div>

      <!-- Notes content  -->
      <p class="text-justify text-base font-normal">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
        exercitationem dolore vero assumenda repellendus, quia eum totam quaerat
        obcaecati repellat.
      </p>
      <!-- Showing created at  -->
      <p class="text-md text-black mt-4">
        Created: <span class="font-semibold">22/10/2023</span>
      </p>
    </div>
  </div>

  <Modal v-if="modal.isOpen.value" />
</template>
