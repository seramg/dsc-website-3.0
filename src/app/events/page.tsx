'use client';

import { Title } from '@/components/type-styles'
import { Input } from '@/components/ui/input';
import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react'

const Events = () => {
    return (
        <div className="z-0 relative grid grid-cols-12 items-center justify-center text-center my-0 bg-backgroundPrimary bg-contain	 bg-no-repeat	gap-16 px-6 py-12 md:py-[84px] !pb-0 min-h-[50vh]">
            <div className=" text-center col-start-3 col-end-12  gap-8 items-center justify-center">
                <div className=" text-center  gap-8 items-center justify-center">
                    <div className="flex flex-col gap-6 items-center">
                        <Title className="w-full md:w-[75%] lg:w-[75%]">
                            Events
                        </Title>
                        <div className="flex gap-2.5 items-center py-3 px-[15px] border-[1.43px] dark border-onBackgroundSecondary rounded-full">
                            <Icon icon="iconamoon:search" className="w-auto h-auto dark text-onBackgroundInverseSecondary	" />
                            <Input className='outline-none p-0 font-normal text-lg leading-[18px] w-full ' type="text" placeholder="Search for Events/Activities" />
                        </div>
                    </div>
                </div>
                ss
            </div>
        </div>
    )
}

export default Events
