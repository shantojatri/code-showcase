import React, { forwardRef, useImperativeHandle, useState } from "react";
import { bgColorArray } from "../../data/bgColor";

const Modal = (props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [noteParams, setNoteParams] = useState({
    id: "",
    title: "Hello Dello",
    note: "Hello Dello",
    colorClass: "",
  });

  console.log(props);

  useImperativeHandle(ref, () => ({
    openModal,
  }));

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  // Create a new note
  const createNoteHandler = async () => {
    const newBgColor =
      bgColorArray[Math.floor(Math.random() * bgColorArray.length)];
    // setNoteParams({ title: "blue" });
    console.log(noteParams);
    closeModal();
  };

  if (!isOpen) return null;

  return (
    <div>
      <div className="bg-black opacity-80 fixed inset-0 z-[100]"></div>
      <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 w-full md:inset-0 h-[calc(100%-1rem)] max-h-full justify-center items-center flex !z-[101] backdrop-blur-sm">
        <div className="relative p-4 max-w-2xl max-h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow overflow-hidden mb-5 w-[300px] md:w-[600px]">
            {/* Modal header */}
            <div className="modal-header flex items-center justify-between p-4">
              <h4 className="text-lg font-semibold text-black">
                {props?.note ? "Update" : "Create a"} Note
              </h4>

              <span
                onClick={() => closeModal()}
                className="text-black cursor-pointer hover:bg-gray-400 hover:text-white rounded-full p-1"
              >
                <i className="ri-close-line ri-xl"></i>
              </span>
            </div>
            <hr />

            {/* Modal body */}
            <div className="modal-body p-4 text-black">
              <div>
                <label htmlFor="title">Note title</label>
                <input
                  v-model="noteParams.title"
                  type="text"
                  name="title"
                  id="title"
                  className="w-full border border-gray-200 mt-1 py-1 px-2"
                />
              </div>

              <div className="mt-2">
                <label htmlFor="note">Write your note</label>
                <textarea
                  v-model="noteParams.note"
                  name="note"
                  id="note"
                  rows="6"
                  className="w-full border border-gray-200 mt-1 py-1 px-2"
                ></textarea>
              </div>
            </div>

            {/* Modal footer */}
            <div className="flex flex-col p-4 gap-y-3">
              {props?.note ? (
                <button
                  v-if="update"
                  className="bg-cyan-400 px-4 py-2 block w-full text-white font-semibold"
                >
                  Update
                </button>
              ) : (
                <button
                  onClick={() => createNoteHandler()}
                  className="bg-blue-400 px-4 py-2 block w-full text-white font-semibold"
                >
                  Create
                </button>
              )}

              <button
                onClick={() => closeModal()}
                className="bg-red-400 px-4 py-2 block w-full text-white font-semibold"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(Modal);
