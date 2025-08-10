import Image from "next/image";
import React from "react";
import type { Metadata } from "next";
import {ClockIcon} from "@heroicons/react/24/outline";
import {UserGroupIcon} from "@heroicons/react/24/solid";

export const metadata: Metadata = {
  title: "Maasai Tribe Overview",
};

export default function TribeOverviewPage() {

  return (
    <div className="bg-cream-50 min-h-screen p-4 md:p-8">
      <div className="max-w-md mx-auto bg-cream-50">
        {/* Map Section */}
        <div className="flex justify-center">
          <div className="w-[160px] h-[152px] md:w-[320px] md:h-[304px]">
            <Image
              src="/Africa 1.svg"
              alt="Map of East Africa"
              width={320}
              height={304}
              className="object-contain"
            />
          </div>
        </div>

        {/* Info List */}
        <ul className="mt-6 space-y-4">
          <li className="flex items-center space-x-3">
          <Image
            src="/NativeAmericanIcon.svg"
            alt="Search Icon"
            width={24}
            height={24}
            className="text-gray-800"
          />
            <span className="text-base md:text-lg font-medium text-gray-900">
              Tribe Name and Etymology
            </span>
          </li>
          <li className="flex items-center space-x-3">
            <ClockIcon className="w-6 h-6 text-gray-800" />
            <span className="text-base md:text-lg font-medium text-gray-900">
              History
            </span>
          </li>
          <li className="flex items-center space-x-3">
            <UserGroupIcon className="w-6 h-6 text-gray-800" />
            <span className="text-base md:text-lg font-medium text-gray-900">
              Population Size and Demographics
            </span>
          </li>
        </ul>

        {/* Synopsis */}
        <div className="mt-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            Synopsis
          </h2>
          <p className="mt-3 text-sm md:text-base text-gray-800 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
}