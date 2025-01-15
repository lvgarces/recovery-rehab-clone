'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Gallery({ data }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setSelectedImage(data.gallery[index].link);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.gallery.length);
    setSelectedImage(data.gallery[(currentIndex + 1) % data.gallery.length].link);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.gallery.length - 1 : prevIndex - 1
    );
    setSelectedImage(data.gallery[(currentIndex === 0 ? data.gallery.length - 1 : currentIndex - 1)].link);
  };

  return (
    <div className="relative">
      <div className="flex flex-col gap-4 absolute left-0 top-0  ml-4 z-10">
        {data.gallery.map((item, index) => (
          <div
            key={index}
            className="relative group cursor-pointer"
            onClick={() => openModal(index)}
            style={{ width: '200px', height: '130px' }}
          >
            {/* Contenedor de la imagen */}
            <div className="relative w-full h-full overflow-hidden rounded-lg">
              <div className="relative w-full h-full group-hover:overflow-visible">
                <Image
                  src={item.link}
                  alt={item.name}
                  layout="fill" // Hace que la imagen ocupe todo el espacio disponible
                  className="rounded-lg object-cover transition-all duration-300 transform group-hover:translate-x-[-20%]" // Mueve la imagen más a la izquierda en el hover
                  loading="lazy" // Lazy loading de las miniaturas
                />
              </div>
            </div>

            {/* Efecto hover */}
            <div className="absolute inset-0 bg-black bg-opacity-10 rounded-lg group-hover:bg-opacity-30 transition-all duration-300 group-hover:rounded-lg" />
            <div className="absolute inset-0 flex items-center justify-center rounded-lg group-hover:translate-x-[-10%] transition-all duration-300 group-hover:rounded-lg">
              <span className="text-white font-normal opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px]">
                Chateau Recovery
              </span>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
           <button
              className="absolute top-3 right-10 text-2xl  text-white opacity-70 hover:opacity-100"
              onClick={closeModal}
            >
              x
            </button>
          <div className="relative p-4 max-w-2xl">
            {/* Botón de cierre en la esquina superior derecha con opacidad */}
           
            <div className="relative flex items-center justify-center">
              {/* Flecha izquierda fuera de la imagen y con opacidad */}
              <button
                onClick={prevImage}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-4xl  opacity-70 hover:opacity-100"
              >
                ‹
              </button>

              {/* Imagen */}
              <div className="relative p-4 max-w-2xl">
              <Image
                src={selectedImage}
                alt="Selected"
                width={800}
                height={600}
                className="max-w-full max-h-[80vh]"
                priority
              />
              </div>

              {/* Flecha derecha fuera de la imagen y con opacidad */}
              <button
                onClick={nextImage}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-4xl opacity-70 hover:opacity-100"
              >
                ›
              </button>
            </div>

            {/* Nombre de Chateau Recovery fuera de la imagen en la parte inferior central */}
            
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm font-normal opacity-70 hover:opacity-100">
              Chateau Recovery
            </div>
        </div>
      )}
    </div>
  );
}
