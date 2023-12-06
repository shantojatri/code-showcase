import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { bgColorArray } from "../../data/bgColor";
import axios from "axios";

const Modal = (props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [noteParams, setNoteParams] = useState({
    id: "",
    title: "",
    note: "",
    colorClass: "",
  });

  useImperativeHandle(ref, () => ({
    openModal,
  }));

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  // two way data binding
  const inputHandler = (e) => {
    e.persist();
    setNoteParams({ ...noteParams, [e.target.name]: e.target.value });
  };

  // Create a new note
  const createNoteHandler = async () => {
    const storeData = {
      title: noteParams.title,
      note: noteParams.note,
      colorClass: bgColorArray[Math.floor(Math.random() * bgColorArray.length)],
    };
    try {
      await axios
        .post(`http://localhost:3010/api/v1/notes`, storeData)
        .then((res) => {
          props.getAllNotes();
          setNoteParams({ title: "", note: "" });
          closeModal();
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  // Updated note
  const updateNoteHandler = async (noteId) => {
    const { id, ...newParams } = noteParams;
    try {
      await axios
        .patch(`http://localhost:3010/api/v1/notes/${noteId}`, newParams)
        .then((res) => {
          console.log(res);
          props.getAllNotes();
          closeModal();
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  // Mounted the notes value
  useEffect(() => {
    if (props?.note) {
      setNoteParams({
        id: props?.note?._id,
        title: props?.note?.title,
        note: props?.note?.note,
        colorClass: props?.note?.colorClass,
      });
    }
  }, []);

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
                  onChange={inputHandler}
                  v-model="noteParams.title"
                  type="text"
                  name="title"
                  id="title"
                  value={noteParams.title}
                  className="w-full border border-gray-200 mt-1 py-1 px-2"
                />
              </div>

              <div className="mt-2">
                <label htmlFor="note">Write your note</label>
                <textarea
                  onChange={inputHandler}
                  v-model="noteParams.note"
                  name="note"
                  id="note"
                  rows="6"
                  value={noteParams.note}
                  className="w-full border border-gray-200 mt-1 py-1 px-2"
                ></textarea>
              </div>
            </div>

            {/* Modal footer */}
            <div className="flex flex-col p-4 gap-y-3">
              {props?.note ? (
                <button
                  onClick={() => updateNoteHandler(noteParams.id)}
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
