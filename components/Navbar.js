"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href) => {
    return pathname === href;
  };

  return (
    <nav className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-black sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-indigo-900 dark:text-indigo-400">
          Fanta Asta 26/27
        </Link>

        <ul className="flex gap-8">
          <li>
            <Link
              href="/"
              className={`font-medium transition-colors ${
                isActive("/")
                  ? "text-indigo-900 dark:text-indigo-400"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/portieri"
              className={`font-medium transition-colors ${
                isActive("/portieri")
                  ? "text-indigo-900 dark:text-indigo-400"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
              }`}
            >
              Portieri
            </Link>
          </li>
          <li>
            <Link
              href="/difensori"
              className={`font-medium transition-colors ${
                isActive("/difensori")
                  ? "text-indigo-900 dark:text-indigo-400"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
              }`}
            >
              Difensori
            </Link>
          </li>
          <li>
            <Link
              href="/centrocampisti"
              className={`font-medium transition-colors ${
                isActive("/centrocampisti")
                  ? "text-indigo-900 dark:text-indigo-400"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
              }`}
            >
              Centrocampisti
            </Link>
          </li>
          <li>
            <Link
              href="/attaccanti"
              className={`font-medium transition-colors ${
                isActive("/attaccanti")
                  ? "text-indigo-900 dark:text-indigo-400"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
              }`}
            >
              Attaccanti
            </Link>
          </li>
          <li>
            <div className="relative group">
              <button
                className={`font-medium transition-colors ${
                  isActive("/strategie/portieri") || isActive("/strategie/difensori") || isActive("/strategie/centrocampisti") || isActive("/strategie/attaccanti")
                    ? "text-indigo-900 dark:text-indigo-400"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                }`}
              >
                Strategie ▼
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link
                  href="/strategie/portieri"
                  className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 first:rounded-t-lg"
                >
                  Strategie Portieri
                </Link>
                <Link
                  href="/strategie/difensori"
                  className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Strategie Difensori
                </Link>
                <Link
                  href="/strategie/centrocampisti"
                  className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Strategie Centrocampisti
                </Link>
                <Link
                  href="/strategie/attaccanti"
                  className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 last:rounded-b-lg"
                >
                  Strategie Attaccanti
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
