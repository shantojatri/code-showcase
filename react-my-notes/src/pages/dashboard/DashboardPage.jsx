import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Note from "../../components/common/Note";
import Modal from "../../components/common/Modal";
import { toast } from "react-toastify";

const DashboardPage = () => {
  const [notes, setNotes] = useState([]);

  const ChildRef = useRef();

  async function getAllNotes() {
    try {
      await axios
        .get(`http://localhost:3010/api/v1/notes`)
        .then((res) => {
          setNotes(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  }

  // Calling the API
  useEffect(() => {
    getAllNotes();
  }, []);

  async function deleteNote(noteId) {
    try {
      await axios
        .delete(`http://localhost:3010/api/v1/notes/${noteId}`)
        .then(() => {
          toast.success("Note Deleted Successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          getAllNotes();
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="w-full mt-8">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-700">All Notes</h2>
          <button onClick={() => ChildRef.current.openModal()}>
            <i className="ri-add-circle-line ri-2x"></i>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5">
        {notes &&
          notes.map((note) => {
            return (
              <Note
                key={note._id}
                note={note}
                deleteNote={deleteNote}
                getAllNotes={getAllNotes}
              />
            );
          })}
      </div>

      <Modal ref={ChildRef} getAllNotes={getAllNotes} />
    </>
  );
};

export default DashboardPage;
