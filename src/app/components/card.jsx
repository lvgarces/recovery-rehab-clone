'use client';

import { useState, useEffect } from 'react';
import { fetchArticles, fetchRehabCenters } from '@/app/lib/data';
import Image from 'next/image';
import Link from 'next/link';

export default function CardWrapper({ dataType }) {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Función para cargar los datos
    const loadData = async () => {
      let loadedData;
      if (dataType === 'articles') {
        loadedData = await fetchArticles();
      } else if (dataType === 'rehabCenters') {
        loadedData = await fetchRehabCenters();
      }
      setData(loadedData);
    };

    loadData();
  }, [dataType]); // Dependencia para recargar si cambia el tipo de datos

  const itemsPerPage = 9;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className='flex flex-wrap justify-center'>
        {currentItems && currentItems.length > 0 ? (
          currentItems.map((item) => {
            const link = item.id === "9" 
              ? '/luxury-rehab-centers/chateaurecovery' 
              : `/luxury-rehab-centers`;

            return (
              <Link key={item.id} href={link}>
                <Card
                  title={item.title || item.name}
                  description={item.description || null}
                  date={item.date}
                  image={item.image || '/notImage.webp'}
                  alt={item.alt || 'No description available'}
                  isRehabCenter={dataType === 'rehabCenters'}
                />
              </Link>
            );
          })
        ) : (
          <p>No articles available.</p>
        )}
      </div>

      {/* Paginación */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-1 bg-gray-300 text-black rounded-md"
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => paginate(pageNumber)}
            className={`px-4 py-2 mx-1 rounded-md ${currentPage === pageNumber ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
          >
            {pageNumber}
          </button>
        ))}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 mx-1 bg-gray-300 text-black rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export function Card({ title, description, date, image, alt, isRehabCenter }) {
  return (
    <div className={`flex flex-col ${isRehabCenter ? 'w-80' : 'w-80'} rounded-md overflow-hidden shadow-lg mx-2 my-2 h-auto transform transition-transform duration-300 hover:scale-105 hover:cursor-pointer`}>
      {isRehabCenter ? (
        <div className={`relative w-full h-44 overflow-hidden`}>
          <Image
            src={image ? image : '/notImage.webp'}
            alt={alt}
            layout="fill"
            objectFit="cover"
          />
        </div>
      ) : (
        <Image src={image ? image : '/notImage.webp'} alt={alt} width={500} height={500} />
      )}

      <div className={`flex flex-col  ${isRehabCenter ? 'justify-start' : 'justify-between'}  px-6 pt-2 ${isRehabCenter ? '' : 'h-full'}`}>
        <div className='pb-4'>
          <h2 className="font-bold mb-2 text-base">{title}</h2>
          {isRehabCenter ? null : <p className="overflow-hidden text-ellipsis line-clamp-3">{description}</p>}
        </div>

        <div className="border-t border-customgray py-2">
          <span className="inline-block text-sm text-cerulean mb-2">{date}</span>
        </div>
      </div>
    </div>
  );
}
