import React from "react";

// Objek Hobi
const hobbies = [
  {
    id: 1,
    name: "Bermain Game",
    image:
      "https://cdnpro.eraspace.com/media/mageplaza/blog/post/1/7/1768560363.jpeg",
  },
  {
    id: 2,
    name: "Sepak Bola",
    image:
      "https://www.yesdok.com/visual/slideshow/manfaat%20bermain%20sepak%20bola-article-1669593186.jpg?w=1200",
  },
  {
    id: 3,
    name: "Membaca Komik",
    image:
      "https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/ayojakarta/images/post/articles/2020/03/06/13012/aplikasi-webtoon.jpg",
  },
  {
    id: 4,
    name: "Ngoding",
    image:
      "https://badoystudio.com/wp-content/uploads/2018/07/film-pemrograman.jpg",
  },
];

export default function MyGallery() {
  return (
    <div className="container mx-auto p-6 text-center pt-20">
      <h2 className="text-yellow-800 text-3xl font-extrabold mb-8">My Hobby</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {hobbies.map((hobby) => (
          <div
            key={hobby.id}
            className="relative border-2 border-transparent rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <img
              src={hobby.image}
              alt={hobby.name}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <h3 className="text-white text-xl font-semibold">{hobby.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}