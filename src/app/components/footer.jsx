import Link from 'next/link'
import FootLinks from './foot-links'


export default function Footer() {
  return (
    <footer className="w-full bg-[#03181b] text-[#FFFFFF8A] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          <FootLinks />
        </div>

        <div className="px-2 md:px-6 w-[80%] mx-auto text-left text-sm mb-8">
          <p>
            <Link href="/" className='text-cerulean'>www.recoveryrehab.co</Link> aims to provide information about addiction, alcoholism, and the importance of rehabilitation to overcome drug addiction and to manage a sober life for those who are struggling with substance abuse disorders and mental health problems.
          </p>
          <p className="mt-2">
            The information we provide is not intended to be a substitute for professional medical advice. Always seek the advice of your physician or other qualified health providers with any questions you may have regarding a mental health condition.
          </p>
        </div>

        <div className="border-t border-gray-600 mb-8"></div>

        <div className="text-center text-sm">
          <p>© Copyright 2022 | All Rights Reserved <Link href="/" className='text-cerulean'>www.recoveryrehab.co</Link></p>
        </div>
      </div>
    </footer>
  )
}
