<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useModal } from "@/composables/useModal";
import Modal from "@/components/common/Modal.vue";
import { useCounterStore } from "@/stores/notes";
import { type NoteType } from "@/interfaces/notesType";

const { allNotes } = useCounterStore();
const modal = useModal();
const updateModal = ref(false);
const noteModal = ref<NoteType>();

const bgColorArray = [
  "bg-red-200",
  "bg-green-200",
  "bg-yellow-200",
  "bg-blue-200",
  "bg-cyan-200",
  "bg-gray-200",
  "bg-pink-200",
  "bg-purple-200",
];

const randomIntFromInterval = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const rndInt = randomIntFromInterval(1, 7);

const openHandler = () => {
  updateModal.value = false;
  modal.showModal();
};

const editHandler = (note: NoteType) => {
  noteModal.value = note;
  updateModal.value = true;
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

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5">
    <!-- Single Note item -->
    <div
      v-for="(note, index) in allNotes"
      :key="index"
      class="p-4 rounded-lg min-h-[280px] flex flex-col justify-between"
      :class="note.color"
    >
      <!-- Note header -->
      <div>
        <div class="flex items-start justify-between mb-2 gap-x-3">
          <h3 class="text-xl font-bold">{{ note.title }}</h3>
          <div class="flex gap-x-1">
            <button @click="editHandler(note)">
              <i class="ri-edit-box-line ri-lg"></i>
            </button>
            <button>
              <i class="ri-delete-bin-line ri-lg"></i>
            </button>
          </div>
        </div>

        <!-- Notes content  -->
        <p class="text-justify text-base font-normal">
          {{ note.note }}
        </p>
      </div>
      <!-- Showing created at  -->
      <p class="text-md text-black mt-4">
        Created: <span class="font-semibold">{{ note.createdAt }}</span>
      </p>
    </div>
  </div>

  <Modal v-if="modal.isOpen.value" :update="updateModal" :note="noteModal" />
</template>
