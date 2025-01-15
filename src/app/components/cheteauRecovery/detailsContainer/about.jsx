'use client';

import { useState, useEffect } from 'react';
import { fetchArticles, fetchRehabCenters } from '@/app/lib/data';
import Image from 'next/image';
import Link from 'next/link';

export default function About({ data }) {
  const aboutContent = data.content;

  if (!aboutContent) return <p>No content available</p>;

  // Función para reemplazar las etiquetas <a> por Link de Next.js y eliminar los estilos innecesarios
  const replaceLinks = (htmlContent) => {
    return htmlContent.replace(/<a\s+href="([^"]+)"[^>]*>(.*?)<\/a>/g, (match, url, text) => {
      return `<Link href="${url}" passHref><a class="text-[#007BA7] cursor-pointer hover:underline">${text}</a></Link>`;
    });
  };

  const styledContent = replaceLinks(aboutContent)
    .replace(/<img/g, '<img class="rounded-lg my-4 max-w-full"');  // Estilo para las imágenes

  return (
    <div>
      <h3 className="font-bold uppercase flex items-center py-4">
        About
        <span className="ml-2 flex-1 border-t border-gray-300"></span>
      </h3>
      <div dangerouslySetInnerHTML={{ __html: styledContent }} />
    </div>
  );
}
