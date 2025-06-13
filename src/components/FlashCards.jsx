import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Desk Mat (Valorant 🎮)",
    image:
      "https://m.media-amazon.com/images/W/MEDIAX_1215821-T2/images/I/71aNzCq6xmL._SY450_.jpg",
    link: "https://amzn.to/4e1Q57O",
  },
  {
    id: 2,
    name: "Valo Stickers 📜",
    image:
      "https://m.media-amazon.com/images/W/MEDIAX_1215821-T2/images/I/71kCqwNQjBL._SX569_.jpg",
    link: "https://amzn.to/4dXuUDM",
  },
  {
    id: 3,
    name: "Desk Mat (Cypher 📸)",
    image:
      "https://m.media-amazon.com/images/W/MEDIAX_1215821-T2/images/I/61QceZe77lL._SY450_.jpg",
    link: "https://amzn.to/4n0k4kp",
  },
  {
    id: 4,
    name: "Desk Mat (Cyberpunk)",
    image:
      "https://m.media-amazon.com/images/W/MEDIAX_1215821-T2/images/I/71sT0OXXDgL._SL1500_.jpg",
    link: "https://amzn.to/4kFZ29q",
  },
  {
    id: 5,
    name: "Desk Mat (GTA VI 🚗)",
    image:
      "https://m.media-amazon.com/images/W/MEDIAX_1215821-T2/images/I/71Ekqe9pwfL._SY450_.jpg",
    link: "https://amzn.to/3FY9Dx5",
  },
  {
    id: 6,
    name: "Mouse I use",
    image:
      "https://m.media-amazon.com/images/W/MEDIAX_1215821-T2/images/I/61UxKvJhh2L._SY450_.jpg",
    link: "https://amzn.to/4lassfL",
  },
  {
    id: 7,
    name: "Keyboard I use",
    image:
      "https://m.media-amazon.com/images/W/MEDIAX_1215821-T2/images/I/81F6UVCPmTL._SL1500_.jpg",
    link: "https://amzn.to/3HCTKgh",
  },
  {
    id: 8,
    name: "CPU + GPU I use",
    image:
      "https://m.media-amazon.com/images/W/MEDIAX_1215821-T2/images/I/71oShIFXgbL._SX569_.jpg",
    link: "https://i.pinimg.com/736x/3e/84/09/3e8409dcdd012b4bcda84a710f2d1052.jpg",
  },
];

export default function FlashCards() {
  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Gaming Gear</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg overflow-hidden shadow hover:shadow-md transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
              >
                Buy on Amazon
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

