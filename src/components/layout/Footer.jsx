import React from "react";
import { ChevronRight } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "Facebook",
      url: "https://facebook.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      url: "https://instagram.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      url: "https://youtube.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* 학교소개 */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-4">
              영진직업전문학교
            </h3>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center text-white hover:from-orange-500 hover:to-orange-600 transition-all duration-300 hover:scale-110 shadow-md"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* 고객지원 */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">고객 지원</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {["공지 사항", "자주하는 질문", "이용약관", "기업 문의"].map(
                (item, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="hover:text-orange-500 transition-colors hover:translate-x-1 inline-block"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* 서비스 */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">서비스</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {["교직원 확인하기", "채용팀 가이드라인", "채용"].map(
                (item, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="hover:text-orange-500 transition-colors flex items-center group"
                    >
                      {item}
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* 파트너 */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">협력체</h4>
            <div className="flex flex-wrap gap-3">
              {["A", "B", "C"].map((partner, idx) => (
                <div
                  key={idx}
                  className="bg-white px-3 py-2 rounded-lg shadow-sm text-xs font-medium text-gray-700 hover:shadow-md transition-shadow"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 하단정보 */}
        <div className="border-t border-gray-300 pt-8 text-xs text-gray-500">
          <p className="mb-2">
            <span className="font-semibold text-gray-700">대표자:</span> 곽승호,
            차영숙 |{" "}
            <span className="font-semibold text-gray-700">사업자등록번호:</span>{" "}
            502-95-07029
          </p>
          <p className="mb-2">
            <span className="font-semibold text-gray-700">주소:</span> 41166
            대구 동구 화랑로 525 (용계동) |
            <span className="font-semibold text-gray-700"> 전화:</span>{" "}
            053-983-8877 |
            <span className="font-semibold text-gray-700"> Fax:</span>{" "}
            053-722-2423
          </p>
          <p className="mb-2">
            <span className="font-semibold text-gray-700">통신판매업신고:</span>{" "}
            제2022-서울강남-1234호
          </p>
          <p className="mb-4 text-gray-400">
            Copyright © 영진직업전문학교-대구직업전문학교 | 대구국비교육. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
