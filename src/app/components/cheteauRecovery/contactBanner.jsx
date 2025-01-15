
export default function ContactBanner({ data }) {
  return (
    <div className="flex flex-wrap justify-between items-center py-4">
      {/* Texto principal */}
      <div
        className="border-cerulean border-[3px] text-cerulean text-[18px] font-medium px-4 py-2 w-full sm:w-[75%] flex items-center justify-start"
      >
        For More Information On Drug & Alcohol Rehabilitation Call:
      </div>

      {/* Teléfono */}
      <div
        className="bg-cerulean border-cerulean border-[3px] text-white text-[18px] font-medium px-4 py-2 w-full sm:w-[25%] flex items-center justify-center mt-4 sm:mt-0"
      >
        {data.phone}
      </div>
    </div>
  );
}
