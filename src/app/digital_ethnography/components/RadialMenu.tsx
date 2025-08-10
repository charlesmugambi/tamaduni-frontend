'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function RadialMenu() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/digital_ethnography/categories');
  };

  return (
    <div className="flex items-center justify-center py-8">
      <div
        className="relative w-full max-w-[700px] cursor-pointer"
        onClick={handleClick}
      >
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