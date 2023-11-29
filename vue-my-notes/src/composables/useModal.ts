import { ref } from "vue"; 
const isOpen = ref(false);

export const useModal = () => {
  return {
    isOpen,
    showModal: () => (isOpen.value = true),
    hideModal: () => (isOpen.value = false),
  };
};
