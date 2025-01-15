import Link from "next/link";
import NavLinks from "@/app/components/nav-links";
import RecoveryLogo from "./recovery-logo";
import { alata } from "@/app/components/fonts";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { EnvelopeOpenIcon } from "@heroicons/react/24/solid";

export default function NavBar() {
  return (
    <div className="shadow-md max-w-[1140px] mx-auto">
      {/* Header */}
      <div
        className={` flex bg-tarawera px-2 py-4 md:px-10 md:py-2 ${alata.className} justify-between md: flex-wrap justify-center mx-auto align-middle`}
      >
        <div className="flex text-white text-sm mx-auto md:ml-0 ">
          <div className="flex px-1">
            <QuestionMarkCircleIcon
              className="text-roman my-auto"
              width={12}
              height={12}
            />
            <p className="my-auto pl-2"> Have any questions?</p>
          </div>
          <div className="flex px-1 border-l border-gray-500 ml-2">
            <EnvelopeOpenIcon
              className="ml-2 text-roman my-auto"
              width={12}
              height={12}
            />
            <p className="my-auto pl-2"> contact@recoveryrehab.co</p>
          </div>
        </div>
        <div className="flex text-customgray text-sm mx-auto pt-2 md:mr-0  md:pt-0 ">
          <Link className="px-2 md:px-5" href="/">
            Contact Us
          </Link>
          <Link className="px-5 md: px-2" href="/">
            About Us
          </Link>
        </div>
      </div>
      {/* Nav Bar Navigation*/}
      <div className="flex flex-row">
        <Link className="flex justify-center items-center" href="/">
          <div className="hidden md:block w-auto h-auto md:h-auto text-white px-1 md:w-auto mx-auto my-auto">
            <RecoveryLogo className="mx-auto my-auto" />
          </div>
        </Link>
        <div className="flex flex-row my-auto">
          <NavLinks />
          <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        </div>
      </div>
    </div>
  );
}
