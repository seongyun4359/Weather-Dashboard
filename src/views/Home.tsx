
import React from 'react';
import { ForecastDay, ForecastTideDay, Weather } from "@/types";
import {CardContent, CardDescription, Header, Card, Separator} from "@/components";
import import { Separator } from '@radix-ui/react-separator';
import  from './components/index';


function Home() {
  return (  
    <div className="page bg-stone-900">
        <Header/>
      <div className="page__container mt-20 w-full h-full flex">
        {/*상단 3개의 위젯 */}
        <div className='w-full flex items-center gap-6 justify-start'>
          <card>
            <cardHeader>
              <CardTitle>Today</CardTitle>
              <CardDescription>오늘 현재 날짜를 조회하고 있습니다.</CardDescription>
            </cardHeader>
            <CardContent>
              <div className="w-full flex items-center gap-6">
                <div className='w-full h-full flex flex-col'>
                  <div className='flex items-center gap-4'>
                    <img src='' alt='weather-icon'></img>
                    <div className='w-full flex items-start gap-1'>
                      <span className='poppins-bold scroll-m-20 text-6xl font-extrabold tracking-tight '>
                        20
                      </span>
                      <span className='text-4xl font-extrabold'>&#8451</span>
                    </div>
                  </div>
                  <Separator className='mt-20 mb-3' />
                <div className='w-full flex-col'>
                  {/*캘린더 날짜 표시 영역*/}
                  <div className='flex items-center justify-start gap-2'>
                    <CalenderDays className="w-4 h-4" />
                    <p className='leading-6'>2024-11-13</p>
                  </div>
                  {/*위치표시영역*/}
                  <div className='flex items-center justify-start gap-2'></div>
                  <p className='leading-6'>Seoul South Korea</p> 
                </div>
                </div>

              </div>
            </CardContent>
          </card>
        </div>
        {/*하단 2개의 위젯 */}
        <div className='w-full flex items-center gap-6'></div>
      </div>
    </div>
  );
}

export default Home;
