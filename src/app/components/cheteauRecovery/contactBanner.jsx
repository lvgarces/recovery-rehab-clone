export default function ContactBanner({ data }) {
  return (
    <div className="flex flex-wrap justify-between items-center my-4 border-cerulean border-[3px]">
      <div className=" text-cerulean text-[18px] font-medium px-4  w-full sm:w-[75%] flex items-center justify-start">
        For More Information On Drug & Alcohol Rehabilitation Call:
      </div>
      <div className="bg-cerulean text-white text-[18px] font-medium px-4 w-full sm:w-[25%] sm:h-[4.5rem] flex items-center justify-center mt-4 sm:mt-0">
        {data.phone}
      </div>
    </div>
  );
}
