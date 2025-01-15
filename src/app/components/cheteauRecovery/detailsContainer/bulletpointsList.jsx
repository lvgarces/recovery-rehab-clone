"use client";

import React from "react";

export default function BulletpointsList({ type, data }) {
  const isHighlight = type === "Highlights";

  return (
    <div>
      <h3 className="pt-3 font-bold uppercase flex items-center">
        {type} <span className="ml-2 flex-1 border-t border-gray-300"></span>
      </h3>
      <div className="space-y-2 px-2 py-2">
        {data && data.length > 0 ? (
          <ul
            className={`list-inside ${
              isHighlight ? "" : "grid grid-cols-1 md:grid-cols-2 gap-1"
            }`}
          >
            {data.map((item, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <i
                  className={`mr-2 ${
                    isHighlight
                      ? "fas fa-square text-[5px]"
                      : "fas fa-caret-right text-[10px]"
                  } text-cerulean `}
                  aria-hidden="true"
                ></i>
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p>No data available.</p>
        )}
      </div>
    </div>
  );
}
