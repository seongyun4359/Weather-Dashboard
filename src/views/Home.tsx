
import React from 'react';
import { ForecastDay, ForecastTideDay, Weather } from "@/types";
import {Header} from "@/components";

function Home() {
  return (  
    <div className="page">
        <Header/>
      <div className="page__container mt-20 w-full h-full flex">
        {/*상단 3개의 위젯 */}
        <div className='w-full flex items-center gap-6'></div>
        {/*하단 2개의 위젯 */}
        <div className='w-full flex items-center gap-6'></div>
      </div>
    </div>
  );
}

export default Home;
