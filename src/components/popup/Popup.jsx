import React, { useState } from "react";
import FormInput from "../form/Form";

const Popup = ({ addBook, setShowPopup }) => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    stock: "",
    genre: "",
    price: "",
    url: null,
    desc: "",
  });

  const handleChange = (e) => {
    const { id, value, files, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    addBook(formData);
    setFormData({
      title: "",
      author: "",
      stock: "",
      genre: "",
      price: "",
      url: null,
      desc: "",
    });
  };
  return (
    <>
      <div
        className="w-full h-screen fixed top-0 left-0 bg-black opacity-30"
        onClick={() => setShowPopup(false)}></div>
      <div className="fixed top-1/2 left-1/2 w-[700px] bg-[#1f2937] rounded-[20px] -translate-x-1/2 -translate-y-1/2">
        <div className="w-full flex px-5 py-5 justify-between items-center text-white pb-2.5">
          <h2 className="font-[500] text-[20px] ">Add Book</h2>
          <button
            onClick={() => setShowPopup(false)}
            className="transition 5.s hover:bg-gray-400 w-10 h-10 text-center rounded-[5px] text-[20px] font-bold">
            x
          </button>
        </div>

        <div className="px-3 pb-5">
          <div className="w-full h-[1px] bg-[#4b5563]"></div>
        </div>

        <form className="flex flex-wrap gap-5 px-5" onSubmit={handleSubmit}>
          <div className="w-full flex gap-5">
            <FormInput
              id="title"
              label="Title"
              placeholder="Type Book title here"
              value={formData.title}
              onChange={handleChange}
            />
            <FormInput
              id="author"
              label="Author"
              placeholder="Author"
              value={formData.author}
              onChange={handleChange}
            />
          </div>

          <div className="w-full flex gap-5">
            <FormInput
              id="stock"
              label="Stock"
              type="number"
              placeholder="Stock"
              value={formData.stock}
              onChange={handleChange}
            />
            <FormInput
              id="genre"
              label="Genre"
              placeholder="Genre"
              value={formData.genre}
              onChange={handleChange}
            />
          </div>

          <div className="w-full flex gap-5">
            <FormInput
              id="price"
              label="Price"
              type="number"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
            />
            <FormInput
              id="url"
              label="Choose a Book picture"
              type="file"
              onChange={handleChange}
            />
          </div>

          <div className="w-full flex flex-col">
            <label
              className="text-[18px] font-[400] font-[Inter] text-white"
              htmlFor="desc">
              <span>Description</span>
            </label>
            <textarea
              id="desc"
              name="desc"
              type="text"
              placeholder="write Book description here"
              required
              value={formData.desc}
              onChange={handleChange}
              className="w-full h-[130px] bg-[#374151] rounded-[5px] border-[1px] border-[#4b5563] pl-2.5 pr-2.5 mt-2.5 text-[16px] font-[Inter] focus:outline-2 focus:outline-[dodgerblue] focus:border-none text-white py-2"
            />
          </div>

          <div className="pb-5">
            <button
              type="submit"
              className="w-[200px] h-[50px] bg-[#2563eb] rounded-[5px] hover:bg-blue-700 text-white font-[500] text-center">
              <span>+ Add new book</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Popup;
