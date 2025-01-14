'use client';

import { useState } from "react";
import { useDebounce } from "use-debounce";
import CardWrapper from "@/app/components/card";

export default function Page() {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery] = useDebounce(searchQuery, 1000); // Se espera 1 segundo antes de actualizar el valor

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="py-10">
      <div className="flex justify-end items-center my-8">
        <input
          type="text"
          id="search"
          placeholder="Buscar centro de rehabilitación..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-80 py-2 px-4 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
        />
      </div>
      <CardWrapper dataType="rehabCenters" query={debouncedQuery} />
    </div>
  );
}