"use client";

import { useState, useEffect } from "react";
import { fetchArticles, fetchRehabCenters } from "@/app/lib/data";
import Image from "next/image";
import Link from "next/link";
import About from "./about";
import GeneralInfo from "./generalInfo";
import Resources from "./resources";
import BulletpointsList from "./bulletpointsList";

export default function DetailsContainer({ data }) {
  console.log("Dataaaaaaa: ", data.name);
  const aboutContent = data.about.content;

  if (!aboutContent) return <p>No content available</p>;
  return (
    <div className="flex flex-wrap justify-between shadow-md py-6 px-8 rounded mt-10 w-full">
      <div className="w-full border-0 pr-2 md:w-[70%] md:border-r  border-gray-200 md:pr-10">
        <GeneralInfo data={data.generalInfo} />
        <BulletpointsList type={"Highlights"} data={data.highlights} />
        <BulletpointsList type={"Treatment programs and services"} data={data.treatmentPrograms} />
        <BulletpointsList type={"What we treat"} data={data.whatWeTreat} />
        <About data={data.about} />
        <Resources data={data.resources} />
        <BulletpointsList type={"Insurance"} data={data.insurance} />
      </div>
      <div className="w-[25%] ml-4">
        <div className="hidden md:block justify-center mx-auto h-32">
          <iframe
            loading="lazy"
            title="375 Rainbow Lane Midway, Utah 84049"
            aria-label="375 Rainbow Lane Midway, Utah 84049"
            className="w-full h-full rounded-lg shadow-lg"
            src="https://maps.google.com/maps?q=375%20Rainbow%20Lane%20%20Midway%2C%20Utah%2084049&t=m&z=6&output=embed&iwloc=near"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export function headerBlog({
  title,
  description,
  date,
  image,
  alt,
  isRehabCenter,
}) {
  return <div></div>;
}
