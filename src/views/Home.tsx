import React from 'react'

function Home() {
  return (  
    <div className='page'>
        <div className='page__container'>
            <header className='w-full h-20 flex items-center p-6 gap-6 bg-slate-800'>
            <div className='w-1/2 flex items-center justify-start gap-6'>
            {/*로고영역 */}
            <div className='h-full flex items-center justify-center gap-2'>
              {/*아이콘영역 */}
              <img src='' alt='logo' className='h-10'></img>
              {/*폰트 로고 영역 */}
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  The Joke Tax
                </h3>
            </div>
            <div>
              {/*검색창영역 */}
              </div>
            </div>
            </header>
        </div>
      
    </div>
  )
}

export default Home
