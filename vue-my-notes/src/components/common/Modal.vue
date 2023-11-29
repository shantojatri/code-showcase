<script setup lang="ts">
import { onMounted, reactive } from "vue";
import { useModal } from "@/composables/useModal";
const modal = useModal();

const props = defineProps(["update", "note"]);

const noteParams = reactive({
  title: '',
  note: '',
})

const closeHandler = () => {
  modal.hideModal();
};


onMounted(() => {
  if (props.update) {
    noteParams.title = props?.note?.title
    noteParams.note = props?.note?.note
    console.log("Please update the note");
  }
});
</script>

<template>
  <Teleport to="body">
    <transition name="fade">
      <div>
        <div class="bg-black opacity-80 fixed inset-0 z-[100]"></div>
        <div
          class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 w-full md:inset-0 h-[calc(100%-1rem)] max-h-full justify-center items-center flex !z-[101]"
        >
          <div class="relative p-4 max-w-2xl max-h-full md:h-auto">
            <div
              class="relative bg-white rounded-lg shadow overflow-hidden mb-5 w-[300px] md:w-[600px]"
            >
              <!-- Modal header  -->
              <div class="modal-header flex items-center justify-between p-4">
                <h4 class="text-lg font-semibold text-black">
                  {{ update === true ? "Update" : "Create a" }} Note
                </h4>

                <span
                  @click="closeHandler"
                  class="text-black cursor-pointer hover:bg-gray-400 hover:text-white rounded-full p-1"
                >
                  <i class="ri-close-line ri-xl"></i>
                </span>
              </div>
              <hr />

              <!-- Modal body  -->
              <div class="modal-body p-4 text-black">
                <!-- {{ note }} -->
                <div>
                  <label for="title">Note title</label>
                  <input
                    v-model="noteParams.title"
                    type="text"
                    name="title"
                    id="title"
                    class="w-full border border-gray-200 mt-1 py-1 px-2"
                  />
                </div>

                <div class="mt-2">
                  <label for="note">Write your note</label>
                  <textarea
                  v-model="noteParams.note"
                    name="note"
                    id="note"
                    rows="6"
                    class="w-full border border-gray-200 mt-1 py-1 px-2"
                  ></textarea>
                </div>
              </div>

              <!-- Modal footer  -->
              <div class="flex flex-col p-4 gap-y-3">
                <button
                  v-if="update"
                  @click.once="closeHandler"
                  class="bg-cyan-400 px-4 py-2 block w-full text-white font-semibold"
                >
                  Update
                </button>
                <button
                  v-else
                  @click.once="closeHandler"
                  class="bg-blue-400 px-4 py-2 block w-full text-white font-semibold"
                >
                  Create
                </button>
                <button
                  @click.once="closeHandler"
                  class="bg-red-400 px-4 py-2 block w-full text-white font-semibold"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<style scoped>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 500ms ease-out;
}
</style>
