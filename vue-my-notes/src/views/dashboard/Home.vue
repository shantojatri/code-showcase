<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useModal } from "@/composables/useModal";
import Modal from "@/components/common/Modal.vue";
import { useNoteStore } from "@/stores/notes";
import { type NoteType } from "@/interfaces/notesType";
import moment from "moment";
import toast from "@/utils/Toaster";

const noteStore = useNoteStore();
const modal = useModal();
const updateModal = ref(false);
const noteModal = ref<NoteType>();
const { successToast } = toast();

const openHandler = () => {
  updateModal.value = false;
  modal.showModal();
};

const editHandler = (note: NoteType) => {
  noteModal.value = note;
  updateModal.value = true;
  modal.showModal();
};

const deleteHandler = async (id: string) => {
  await noteStore.deleteNote(id);
  successToast("Delete note successfully.");
};

onMounted(() => {
  noteStore.getAllNotes();
});
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
      v-for="(note, index) in noteStore?.allNotes"
      :key="index"
      class="p-4 rounded-lg min-h-[280px] flex flex-col justify-between"
      :class="note?.colorClass"
    >
      <!-- Note header -->
      <div>
        <div class="flex items-start justify-between mb-2 gap-x-3">
          <h3 class="text-xl font-bold">{{ note.title }}</h3>
          <div class="flex gap-x-1">
            <button @click="editHandler(note)">
              <i class="ri-edit-box-line ri-lg"></i>
            </button>
            <button @click="deleteHandler(note?._id)">
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
        Created:
        <span class="font-semibold">{{
          moment(note.createdAt).format("l")
        }}</span>
      </p>
    </div>
  </div>

  <Modal v-if="modal.isOpen.value" :update="updateModal" :note="noteModal" />
</template>
