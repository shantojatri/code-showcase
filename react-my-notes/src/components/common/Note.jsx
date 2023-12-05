import React from "react";

const Note = () => {
  return (
    <div className="p-4 rounded-lg min-h-[280px] flex flex-col justify-between bg-green-200">
      <div>
        <div className="flex items-start justify-between mb-2 gap-x-3">
          <h3 className="text-xl font-bold">Hello Dello</h3>
          <div className="flex gap-x-1">
            <button>
              <i className="ri-edit-box-line ri-lg"></i>
            </button>
            <button>
              <i className="ri-delete-bin-line ri-lg"></i>
            </button>
          </div>
        </div>

        <p className="text-justify text-base font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ab
          ducimus. Harum unde aspernatur ducimus est nesciunt dolores odio
          deserunt.
        </p>
      </div>

      <p className="text-md text-black mt-4">
        Created:
        <span className="font-semibold">22/11/2023</span>
      </p>
    </div>
  );
};

export default Note;
