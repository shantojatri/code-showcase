import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";

export default function toast() {
  const errorToast = (error: string) => {
    createToast(
      {
        title: "Error",
        description: error,
      },
      {
        type: "danger",
        timeout: 3000,
        position: "top-right",
        showIcon: true,
      }
    );
  };
  const successToast = (success: string) => {
    createToast(
      {
        title: "Success",
        description: success,
      },
      {
        type: "success",
        timeout: 3000,
        position: "top-right",
        showIcon: true,
      }
    );
  };

  return {
    errorToast,
    successToast,
  };
}
