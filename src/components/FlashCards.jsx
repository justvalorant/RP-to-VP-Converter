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
  const [hoveredCard, setHoveredCard] = useState(null);
  const [loadedImages, setLoadedImages] = useState(new Set());

  const handleImageLoad = (productId) => {
    setLoadedImages((prev) => new Set([...prev, productId]));
  };

  return (
    <div className="relative py-20 px-4">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent pointer-events-none"></div>

      {/* Floating background orbs */}
      <div className="absolute top-10 left-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-1/4 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Header Section */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-8 leading-relaxed p-2">
          Gaming Arsenal ⚡
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          Discover the gear that powers epic gaming sessions. From pro
          peripherals to stylish desk mats.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto relative z-10">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="group relative"
            onMouseEnter={() => setHoveredCard(product.id)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            {/* Card */}
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-white/10 hover:border-purple-500/30 hover:shadow-purple-500/25 overflow-hidden">
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl"></div>

              {/* Image container */}
              <div className="relative mb-6 overflow-hidden rounded-2xl bg-white/5">
                <div className="aspect-square relative">
                  {!loadedImages.has(product.id) && (
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-700 animate-pulse rounded-2xl flex items-center justify-center">
                      <div className="w-8 h-8 border-2 border-purple-400/30 border-t-purple-400 rounded-full animate-spin"></div>
                    </div>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    onLoad={() => handleImageLoad(product.id)}
                    className={`w-full h-full object-cover rounded-2xl transition-all duration-500 group-hover:scale-110 ${
                      loadedImages.has(product.id) ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  {/* Image overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 text-center space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 group-hover:bg-clip-text transition-all duration-300">
                  {product.name}
                </h3>

                {/* Buy button */}
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full py-3 px-6 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-orange-500/50 transform hover:scale-105 transition-all duration-300 group/btn overflow-hidden relative"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 3c0 .55.45 1 1 1h1l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0020 4H5.21l-.67-1.43a.999.999 0 00-.9-.57H2c-.55 0-1 .45-1 1zm16 15c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                    </svg>
                    Buy on Amazon
                  </span>

                  {/* Button shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                </a>
              </div>

              {/* Floating particles on hover */}
              {hoveredCard === product.id && (
                <>
                  <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-pink-400 rounded-full animate-ping delay-300"></div>
                  <div className="absolute top-1/2 left-6 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping delay-500"></div>
                </>
              )}
            </div>

            {/* Card number badge */}
            <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg z-20 group-hover:scale-110 transition-transform duration-300">
              {index + 1}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom decoration */}
      <div className="text-center mt-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-white/70">
          <svg
            className="w-5 h-5 text-purple-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
          </svg>
          <span>Handpicked gaming essentials</span>
          <svg
            className="w-5 h-5 text-pink-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
