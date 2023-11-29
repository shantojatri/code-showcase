<script setup lang="ts">
import { useModal } from "@/composables/useModal";
const modal = useModal();

const closeHandler = () => {
  console.log("asdfasjhdk");
  modal.hideModal();
};
</script>

<template>
  <ClientOnly>
    <Teleport to="body">
      <transition name="fade">
        <div>
          <div class="bg-black opacity-80 fixed inset-0 z-[100]"></div>
          <div
            class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 w-full md:inset-0 h-[calc(100%-1rem)] max-h-full justify-center items-center flex !z-[101]"
          >
            <div class="relative p-4 max-w-2xl max-h-full md:h-auto">
              <div
                class="relative bg-white rounded-lg shadow overflow-hidden mb-5"
              >
                <!-- Modal header  -->
                <div class="modal-header flex items-center justify-between p-4">
                  <h4 class="text-lg font-semibold text-black">
                    Create a Note
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
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique nam tempora, cupiditate consequatur praesentium
                    corrupti facere obcaecati perspiciatis? Aliquid, laudantium
                    aperiam architecto itaque enim cumque optio sit ut!
                    Explicabo corporis omnis id vero veritatis. Error neque
                    veniam beatae, eligendi voluptatum nulla consequuntur sint
                    nesciunt tenetur eum harum sed autem aut!
                  </p>
                </div>

                <!-- Modal footer  -->
                <div class="flex flex-col p-4 gap-y-3">
                  <button
                    @click.once="closeHandler"
                    class="bg-blue-400 px-4 py-2 block w-full"
                  >
                    Create
                  </button>
                  <button
                    @click.once="closeHandler"
                    class="bg-red-400 px-4 py-2 block w-full"
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
  </ClientOnly>
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
