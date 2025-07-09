import '../globals.css';
import { ReactNode } from 'react';
import Image from 'next/image';
import RadialMenu from './components/RadialMenu';
export const metadata = {
    title: 'Digital Ethnography',
}

export default function DigitalEthnographyLayout({ children }: { children: ReactNode }) {
    return (
        
          <div className=" flex flex-col">
            <div className="px-4 sm:px-8 lg:px-16 mt-4">
              <RadialMenu />
              <main className="flex-grow mt-8">{children}</main>
            </div>
          </div>
        
      );
}