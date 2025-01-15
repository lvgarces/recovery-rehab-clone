import React from "react";

export default function About({ data }) {
  const aboutContent = data.content;

  if (!aboutContent) return <p>No content available</p>;

  // Function to replace <a> tags with Next.js Link components
  const replaceLinks = (htmlContent) => {
    return htmlContent.replace(
      /<a\s+href="([^"]+)"[^>]*>(.*?)<\/a>/g,
      (match, url, text) => {
        return `<a href="${url}" class="text-[#007BA7] cursor-pointer hover:underline">${text}</a>`;
      }
    );
  };

  const styledContent = replaceLinks(aboutContent).replace(
    /<img/g,
    '<img class="rounded-lg my-4 max-w-full"'
  );

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
