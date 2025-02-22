"use client";

export default function HeroSection({ data }) {
  return (
    <div className="relative h-[161px]  flex items-center justify-start overflow-hidden">
      <div
        className="absolute inset-0 bg-cover"
        style={{
          backgroundImage: `url(${data.image})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center 100%",
          backgroundSize: "cover",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(70deg, #0A454D 100%, #01D6A300 100%)",
          opacity: 0.85,
        }}
      />

      <div className="relative z-10 text-white py-6 sm:py-12 flex flex-col items-start text-left px-6 sm:px-12">
        <h1 className="text-[22px] font-semibold mb-1">{data.name}</h1>
        <p className="text-[12px] mb-1">{data.description}</p>

        <hr className="border-t-1 border-customgray w-full sm:w-[150%] mb-1" />

        <p className="text-[10px]" style={{ color: "#FFC0C0E8" }}>
          {`Last updated: ${data.lastUpdated}`}
        </p>
      </div>
    </div>
  );
}
