"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image 
            src="/favicon.ico" 
            alt="WellnessCreate Logo" 
            width={40} 
            height={40} 
            className="mr-2" 
          />
          <span className="text-2xl font-bold text-green-600">
            WellnessCreate
          </span>
        </Link>

        {/* デスクトップナビゲーション */}
        <nav className="hidden md:flex space-x-8">
          <Link
            href="/"
            className="text-gray-700 hover:text-green-600 transition duration-300"
          >
            ホーム
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-green-600 transition duration-300"
          >
            会社概要
          </Link>
          <Link
            href="/business"
            className="text-gray-700 hover:text-green-600 transition duration-300"
          >
            事業内容
          </Link>
          <Link
            href="/news"
            className="text-gray-700 hover:text-green-600 transition duration-300"
          >
            ニュース
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-green-600 transition duration-300"
          >
            お問い合わせ
          </Link>
        </nav>

        {/* 検索ボタン */}
        <div className="hidden md:flex items-center ml-4">

        </div>

        {/* モバイルメニューボタン */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="メニュー"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* モバイルメニュー */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-2">
            <nav className="flex flex-col space-y-4 py-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-green-600 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                ホーム
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-green-600 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                会社概要
              </Link>
              <Link
                href="/business"
                className="text-gray-700 hover:text-green-600 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                事業内容
              </Link>
              <Link
                href="/news"
                className="text-gray-700 hover:text-green-600 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                ニュース
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-green-600 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                お問い合わせ
              </Link>
              <div className="pt-2 mt-2 border-t border-gray-200">
                <div className="relative">

                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
