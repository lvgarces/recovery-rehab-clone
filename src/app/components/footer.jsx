import Link from 'next/link';
import FootLinks from './foot-links';

export default function Footer() {
  return (
    <footer className="w-full min-h-[20rem] bg-customBlack text-customgray2 py-[2rem]">
      <div className="container mx-auto px-4">
        {/* Links Section */}
        <div className="flex flex-wrap justify-center gap-8 pb-8">
          <FootLinks />
        </div>

        {/* Informative Text Section */}
        <div className="px-2 md:px-6 w-full max-w-[80%] mx-auto text-left text-sm pb-[2rem]">
          <p>
            <Link href="/" className="text-cerulean">
              www.recoveryrehab.co
            </Link>{' '}
            aims to provide information about addiction, alcoholism, and the importance of rehabilitation to overcome drug addiction and to manage a sober life for those who are struggling with substance abuse disorders and mental health problems.
          </p>
          <p className="mt-2">
            The information we provide is not intended to be a substitute for professional medical advice. Always seek the advice of your physician or other qualified health providers with any questions you may have regarding a mental health condition.
          </p>
        </div>

        {/* Separator */}
        <div className="border-t border-gray-600 pb-8"></div>

        {/* Footer Credits */}
        <div className="text-center text-sm">
          <p>
            © Copyright 2022 | All Rights Reserved{' '}
            <Link href="/" className="text-cerulean">
              www.recoveryrehab.co
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
