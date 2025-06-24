// components/RadialMenu.jsx
'use client';

import Image from 'next/image';

export default function RadialMenu() {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="relative w-full max-w-[700px]">
        <Image
          src="/radial menu(placeholder).svg"
          alt="Radial Menu"
          width={700}
          height={700}
          className="w-full h-auto"
          priority
        />
      </div>
    </div>
  );
}
