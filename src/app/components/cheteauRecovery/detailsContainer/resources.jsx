"use client";

import React from "react";
import Link from "next/link";

export default function Resources({ data }) {
  return (
    <div>
       <h3 className="font-bold flex items-center py-2">
        Resources:
      </h3>
      <div className="space-y-2 px-2 py-2">
        {data && data.length > 0 ? (
          <ul className="list-inside">
            {data.map((resource, index) => (
              <li key={index} className="flex items-center text-gray-700">
                {/* Ícono para los items */}
                <i
                  className="mr-2 fas fa-caret-right text-cerulean text-sm"
                  aria-hidden="true"
                ></i>
                <Link
                  href={resource.link}
                  className="text-roman font-bold hover:underline"
                  target="_blank"
                >
                  {resource.name}
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
