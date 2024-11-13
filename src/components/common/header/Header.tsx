  import React from 'react'
  import { SearchBar } from '@/components/ui/search-bar';

// Header.tsx
export const Header = () => {
  return (
    <header className="w-full h-20 flex items-center p-6 gap-6 bg-slate-800 fixed top-0">
          <div className="w-1/2 flex items-center justify-start gap-6">
            {/* 로고 영역 */}
            <div className="h-full flex items-center justify-center gap-2">
              {/* 아이콘 영역 */}
              <img src="" alt="logo" className="h-10" />
              {/* 폰트 로고 영역 */}
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight color">
                Weather.io
              </h3>
            </div>
            
              {/* 검색창 영역 */}
              <SearchBar placeholder='검색할 지역 이름을 영어로 입력하세요.' className='flex-1 w-full'/>
            
          </div>
        </header>
  );
};
