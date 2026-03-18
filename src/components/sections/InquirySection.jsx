import React from "react";

const BOARD_URL = "https://it.yjjob.or.kr/board/bbs/board.php?bo_table=free";

const InquirySection = () => {
  return (
    <section className="bg-gray-40 py-10 px-4" id="inquery">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-2xl font-bold text-gray-700 mb-3">
          영진직업전문학교에 대해
        </h2>
        <h2 className="text-2xl md:text-2xl font-bold text-gray-700 mb-6">
          더 궁금하다면?
        </h2>

        <div>
          <iframe
            title="영진직업전문학교 문의게시판"
            src={BOARD_URL}
            className="w-full h-[400px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            // scrolling="no"
          />
        </div>

        <p className="mt-3 text-sm text-slate-500">
          게시판이 보이지 않으면
          <a
            href={BOARD_URL}
            target="_blank"
            rel="noreferrer"
            className="ml-1 text-blue-600 hover:text-blue-700 underline"
          >
            새 창에서 열기
          </a>
          를 이용해 주세요.
        </p>
      </div>
    </section>
  );
};

export default InquirySection;
