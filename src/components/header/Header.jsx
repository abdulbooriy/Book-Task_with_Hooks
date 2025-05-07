import React, { useState } from "react";
import Popup from "../popup/Popup";

const Header = ({ addBook }) => {
  let [showPopup, setShowPopup] = useState(false);

  return (
    <header className="w-full h-[70px] bg-gray-700">
      <div className="w-full h-full flex justify-between items-center px-5">
        <h1 className="text-white font-[500]">Books Store Management</h1>
        <button
          onClick={() => setShowPopup(true)}
          className="w-[150px] h-[50px] bg-[#2563eb] rounded-[5px] hover:bg-blue-700 text-white font-[500]">
          <a href="#">
            <span>Add Books</span>
          </a>
        </button>
      </div>

      {showPopup && <Popup addBook={addBook} setShowPopup={setShowPopup} />}
    </header>
  );
};

export default Header;
