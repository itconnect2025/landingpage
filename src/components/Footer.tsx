import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#020b35] text-white py-12">
      <div className="w-full px-4">
        <div className="max-w-4xl mx-auto">
          {/* Company Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-left">비크리에이터</h3>
            
            <div className="space-y-3 text-sm text-gray-300 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p><span className="font-medium text-white">회사명:</span> 아이티커넥트(주)</p>
                  <p><span className="font-medium text-white">대표:</span> 최원재</p>
                  <p><span className="font-medium text-white">사업자번호:</span> 715-87-02794</p>
                  <p><span className="font-medium text-white">통신판매업신고번호:</span> 제2025-경기과천-0177호</p>
                </div>
                <div className="space-y-2">
                  <p><span className="font-medium text-white">주소 :</span> 경기도 과천시 과천대로 7길, 65, B동 202호</p>
                  <p><span className="font-medium text-white">이메일:</span> contact@itconnect.dev</p>
                  {/* 연락처(전화번호) 항목 제거 */}
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="pt-6 border-t border-gray-700">
              <p className="text-sm text-gray-400 text-left">
                Copyright© 2025 ITCONNECT co., ltd All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 