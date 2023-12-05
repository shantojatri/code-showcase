import React, { useEffect, useState } from "react";
import axios from "axios";
import Note from "../../components/common/Note";

const DashboardPage = () => {
  const [notes, setNotes] = useState([]);

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

  return (
    <>
      <div className="w-full mt-8">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-700">All Notes</h2>
          <button>
            <i className="ri-add-circle-line ri-2x"></i>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5">
        {/* {notes.map((note) => {
          <Note key={note._id} />;
        })} */}

        <Note notes={notes} />
      </div>
    </>
  );
};

export default DashboardPage;
