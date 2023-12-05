import React, { useRef } from "react";
import Modal from "./Modal";

const Note = ({ note, deleteNote }) => {
  const ChildRef = useRef();

  return (
    <>
      <div
        className={`p-4 rounded-lg min-h-[280px] flex flex-col justify-between bg-green-200 ${note.colorClass}`}
      >
        <div>
          <div className="flex items-start justify-between mb-2 gap-x-3">
            <h3 className="text-xl font-bold">{note.title}</h3>
            <div className="flex gap-x-1">
              <button onClick={() => ChildRef.current.openModal()}>
                <i className="ri-edit-box-line ri-lg"></i>
              </button>
              <button onClick={() => deleteNote(note._id)}>
                <i className="ri-delete-bin-line ri-lg"></i>
              </button>
            </div>
          </div>

          <p className="text-justify text-base font-normal">{note.note}</p>
        </div>

        <p className="text-md text-black mt-4">
          Created:
          <span className="font-semibold">{note.createdAt}</span>
        </p>
      </div>

      <Modal ref={ChildRef} note={note} />
    </>
  );
};

export default Note;
