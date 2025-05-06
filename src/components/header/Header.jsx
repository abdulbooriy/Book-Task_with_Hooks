import React, { useState } from "react";
import Popup from "../popup/Popup";

const Header = () => {
  let [add, setAdd] = useState(false);

  return (
    <header className="w-full bg-gray-700">
      <div className="container mx-auto">
        <nav className="h-[74px] flex items-center">
          <div className="w-full flex justify-between items-center">
            <h1 className="text-white font-[500]">Books</h1>
            <button
              onClick={() => setAdd(true)}
              className="w-[150px] h-[50px] bg-[#2563eb] rounded-[50px] hover:bg-blue-700 text-white font-[500]">
              <a href="#">
                <span>Add Books</span>
              </a>
            </button>
          </div>
        </nav>
      </div>
      {add && <Popup setAdd={setAdd} />}
    </header>
  );
};

export default Header;
