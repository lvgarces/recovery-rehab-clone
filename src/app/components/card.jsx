"use client";

import { useState, useEffect, Suspense } from "react";
import { fetchArticles, fetchRehabCenters } from "@/app/lib/data";
import Image from "next/image";
import Link from "next/link";
import Loading from "../loading";

export default function CardWrapper({ dataType }) {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      let loadedData;
      if (dataType === "articles") {
        loadedData = await fetchArticles();
      } else if (dataType === "rehabCenters") {
        loadedData = await fetchRehabCenters();
      }
      setData(loadedData);
      setLoading(false);
    };

    loadData();
  }, [dataType]); // Dependency to reload if data type changes

  const itemsPerPage = 9;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Suspense fallback={<Loading />}>
      {/* Show loading while the data is being loaded */}
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="flex flex-wrap justify-center">
            {currentItems && currentItems.length > 0
              ? currentItems.map((item) => {
                  const link =
                    item.id === "9"
                      ? "/luxury-rehab-centers/chateaurecovery"
                      : `/luxury-rehab-centers`;

                  return (
                    <Link key={item.id} href={link}>
                      <Card
                        title={item.title || item.name}
                        description={item.description || null}
                        date={item.date}
                        image={item.image}
                        alt={item.alt || "No description available"}
                        isRehabCenter={dataType === "rehabCenters"}
                      />
                    </Link>
                  );
                })
              : null}
          </div>

          {/* Pagination*/}
          {dataType === "rehabCenters" && (
            <div className="flex justify-center mt-6">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 mx-1 bg-white text-cerulean rounded-md hover:bg-cerulean hover:text-white disabled:bg-gray-300 disabled:text-gray"
              >
                « Previous
              </button>
              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (pageNumber) => (
                  <button
                    key={pageNumber}
                    onClick={() => paginate(pageNumber)}
                    className={`px-4 py-2 mx-1 rounded-md 
                ${
                  currentPage === pageNumber
                    ? "bg-cerulean text-white"
                    : "bg-white text-cerulean hover:bg-cerulean hover:text-white"
                }
              `}
                  >
                    {pageNumber}
                  </button>
                )
              )}
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 mx-1 bg-white text-cerulean rounded-md hover:bg-cerulean hover:text-white disabled:bg-gray-300 disabled:text-gray-500"
              >
                Next »
              </button>
            </div>
          )}
        </>
      )}
    </Suspense>
  );
}

export function Card({ title, description, date, image, alt, isRehabCenter }) {
  return (
    <div
      className={`flex flex-col ${
        isRehabCenter ? "w-80" : "w-80"
      } rounded-md overflow-hidden shadow-lg mx-2 my-2 h-auto transform transition-transform duration-300 hover:scale-105 hover:cursor-pointer`}
    >
      {isRehabCenter ? (
        <div className={`relative w-full h-44 overflow-hidden`}>
          <Image
            src={image ? image : "/notImage.webp"}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover", opacity: image ? 1 : 0.3 }}
            priority
          />
        </div>
      ) : (
        <Image
          src={image ? image : "/notImage.webp"}
          alt={alt}
          width={500}
          height={500}
          style={{width: "100%", height: "auto"}}
          priority
        />
      )}

      <div
        className={`flex flex-col  ${
          isRehabCenter ? "justify-start" : "justify-between"
        }  px-6 pt-2 ${isRehabCenter ? "" : "h-full"}`}
      >
        <div className="pb-4">
          <h2 className="font-bold mb-2 text-base">{title}</h2>
          {isRehabCenter ? null : (
            <p className="overflow-hidden text-ellipsis line-clamp-3">
              {description}
            </p>
          )}
        </div>

        <div className="border-t border-customgray py-2">
          <span className="inline-block text-sm text-cerulean mb-2">
            {date}
          </span>
        </div>
      </div>
    </div>
  );
}
