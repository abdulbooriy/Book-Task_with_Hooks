import React from "react";

const products = [
  {
    name: 'Apple iMac 27"',
    category: "PC",
    brand: "Apple",
    description: "What is a product description? A product...",
    price: "$2999",
  },
  {
    name: 'Apple iMac 20"',
    category: "PC",
    brand: "Apple",
    description: "What is a product description? A product...",
    price: "$1499",
  },
  {
    name: "Apple iPhone 14",
    category: "Phone",
    brand: "Apple",
    description: "What is a product description? A product...",
    price: "$999",
  },
  {
    name: "Apple iPad Air",
    category: "Tablet",
    brand: "Apple",
    description: "What is a product description? A product...",
    price: "$1199",
  },
  {
    name: "Xbox Series S",
    category: "Gaming/Console",
    brand: "Microsoft",
    description: "What is a product description? A product...",
    price: "$299",
  },
  {
    name: "PlayStation 5",
    category: "Gaming/Console",
    brand: "Sony",
    description: "What is a product description? A product...",
    price: "$799",
  },
  {
    name: "Xbox Series X",
    category: "Gaming/Console",
    brand: "Microsoft",
    description: "What is a product description? A product...",
    price: "$699",
  },
  {
    name: "Apple Watch SE",
    category: "Watch",
    brand: "Apple",
    description: "What is a product description? A product...",
    price: "$399",
  },
  {
    name: "NIKON D850",
    category: "Photo",
    brand: "Nikon",
    description: "What is a product description? A product...",
    price: "$599",
  },
  {
    name: "Monitor BenQ EX2710Q",
    category: "TV/Monitor",
    brand: "BenQ",
    description: "What is a product description? A product...",
    price: "$499",
  },
];

const Table = () => {
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
            <th className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody className="bg-gray-900 divide-y divide-gray-700 text-white">
          {products.map((product, index) => (
            <tr key={index}>
              <td className="px-6 py-4">{product.name}</td>
              <td className="px-6 py-4">{product.category}</td>
              <td className="px-6 py-4">{product.brand}</td>
              <td className="px-6 py-4">{product.description}</td>
              <td className="px-6 py-4">{product.price}</td>
              <td className="px-6 py-4">{product.price}</td>
              <td className="px-6 py-4">{product.price}</td>
              <button>Edit</button>

              <button>Delete</button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
