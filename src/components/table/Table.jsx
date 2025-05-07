import React from "react";
import Popup from "../popup/Popup";

const Table = ({ books }) => {
  return (
    <div className="overflow-x-auto shadow-md">
      <table className="min-w-full divide-y divide-gray-700">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
              Book Title
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
              Author
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
              Stock
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
              Description
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
              Price
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
              Genre
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
              Url
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-900 divide-y divide-gray-700 text-white">
          {books?.map((book, index) => (
            <tr key={index}>
              <td className="px-6 py-4">{book.title}</td>
              <td className="px-6 py-4">{book.author}</td>
              <td className="px-6 py-4">{book.stock}</td>
              <td className="px-6 py-4">{book.desc}</td>
              <td className="px-6 py-4">{book.price}</td>
              <td className="px-6 py-4">{book.genre}</td>
              <td className="px-6 py-4">
                {book.url instanceof File ? book.url.name : book.url}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
