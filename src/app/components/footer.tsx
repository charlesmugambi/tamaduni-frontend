// components/Footer.tsx
import React from "react";
import Link from "next/link";
import {
  SiFacebook,
  SiGithub,
  SiX,
} from "@icons-pack/react-simple-icons";
import {
    Globe,
  } from "lucide-react";

export default function Footer({ year }: { year?: number }) {
  const now = new Date();
  const displayYear = year ?? now.getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-white/10 flex items-center justify-center">
                <div className="w-2 h-5 bg-white " />
              </div>
              <span className="text-white font-medium text-lg">Tamaduni</span>
            </div>
            <p className="text-sm text-gray-300 max-w-xs">
              Preserving and showcasing cultural heritage across Africa —
              stories, maps and multimedia.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-white">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/teams" className="hover:text-white">
                  Teams
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start gap-4">
            <Link
              href="/contact"
              className="px-6 py-2 bg-yellow-400 text-black rounded-md font-medium shadow text-center"
            >
              Contact Us
            </Link>

            <Link
              href="/get-started"
              className="px-6 py-2 bg-yellow-400 text-black rounded-md font-medium shadow text-center"
            >
              Get started
            </Link>

            <div className="hidden md:block text-sm text-gray-400 mt-2">
              <p>© {displayYear} Tamaduni. All Rights Reserved</p>
            </div>
          </div>

          <div className="flex flex-col items-end gap-4">
            <div className="flex gap-4 items-center">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="p-2 rounded hover:bg-white/5 text-white"
                target="_blank"
                rel="noreferrer"
                title="Facebook"
              >
                <SiFacebook size={18} color="currentColor" />
              </a>

              <a
                href="https://github.com"
                aria-label="GitHub"
                className="p-2 rounded hover:bg-white/5 text-white"
                target="_blank"
                rel="noreferrer"
                title="GitHub"
              >
                <SiGithub size={18} color="currentColor" />
              </a>

              <a
                href="https://twitter.com"
                aria-label="Twitter"
                className="p-2 rounded hover:bg-white/5 text-white"
                target="_blank"
                rel="noreferrer"
                title="Twitter"
              >
                <SiX size={18} color="currentColor" />
              </a>

              <a
                href="/"
                aria-label="LinkedIn"
                className="p-2 rounded hover:bg-white/5 text-white"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
              >
                <Globe size={18} color="currentColor" />
              </a>

              
            </div>

            <div className="md:hidden text-sm text-gray-400 mt-2">
              <p>© {displayYear} Tamaduni. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
