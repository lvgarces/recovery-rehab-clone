
import { MapPinIcon, StarIcon, UserIcon } from "@heroicons/react/24/solid";

export default function GeneralInfo({ data }) {
  return (
    <div>
      <h3 className="font-bold uppercase flex items-center pb-4">
        General Information
        <span className="ml-2 flex-1 border-t border-gray-300"></span>
      </h3>

      <div className="flex mb-3">
        <MapPinIcon
          className="text-cerulean mt-[1px] mr-1"
          width={14}
          height={14}
        />
        <p> {data.address}</p>
      </div>
      <div className="flex mb-3">
        <StarIcon
          className="text-cerulean mt-[1px] mr-1"
          width={14}
          height={14}
        />
        <p>Accreditation: {data.accreditation}</p>
      </div>
      <div className="flex mb-3">
        <UserIcon
          className="text-cerulean mt-[1px] mr-1"
          width={14}
          height={14}
        />
        <p>Services For: {data.servicesFor}</p>
      </div>
    </div>
  );
}
