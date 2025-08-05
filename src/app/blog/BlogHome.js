import React from 'react'
import { MdLocationOn } from 'react-icons/md';



const Home = () => {
    return (
        <div>
            <div className='relative'>
                <div className='flex justify-around pl-[8%] pr-[8%] mt-[3%]'>

                    <div className="relative mt-[3%]">
                        <div className=" h-[280px] w-[230px]  rounded-[50px] overflow-hidden" >
                            <img className="w-full h-full object-cover" src="/bloghome1.png" alt="carth" />
                        </div>
                        <div className='absolute top-[62%] left-1/2 -translate-x-1/2 w-[200px] h-[60px] flex items-center justify-center px-4 bg-white rounded-[50px] backdrop-blur-md border border-[#E6E8EC] shadow-lg z-20'>
                            <div className='flex items-center gap-3'>
                                <div className=''>
                                    <MdLocationOn className="text-green-500 w-10 h-7" />
                                </div>
                                <div className=''>
                                    <h3 className="text-lg font-semibold text-[#1C1C1E]">Pet</h3>
                                    <p className="text-xs text-gray-500">125 insurance</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-[5%] pl-[100px]'>
                        <div className='w-[220px] h-[80px] flex items-center justify-center px-4 bg-white rounded-[50px] backdrop-blur-md border border-[#E6E8EC] shadow-lg z-20'>
                            <div className='flex items-center gap-3'>
                                <div className=''>
                                    <MdLocationOn className="text-green-500 w-10 h-7" />
                                </div>
                                <div className=''>
                                    <h3 className="text-lg font-semibold text-[#1C1C1E]">Pet</h3>
                                    <p className="text-xs text-gray-500">125 insurance</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=''>
                        <div className="relative">
                            <div className=" h-[350px] w-[270px]  rounded-[50px] overflow-hidden" >
                                <img className="w-full h-full object-cover" src="/bloghome2.jpg" alt="carth" />
                            </div>
                            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-[90%] h-[90%] px-6 py-6 bg-white rounded-[30px] backdrop-blur-md border border-[#E6E8EC] shadow-md flex flex-col gap-2">
                                <div className="flex items-center gap-3 mb-2">
                                    <MdLocationOn className="text-green-500 w-6 h-6" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-[#1C1C1E] capitalize">home</h3>
                                        <p className="text-sm text-gray-500 -mt-1">insurance</p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-500 mt-2 mb-2">
                                    <span>Best time</span>&nbsp;
                                    <b className="text-[#23262F]">Fall</b>
                                </p>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    <span>Activities</span>&nbsp;
                                    <b className="text-black">
                                        Camp - Sailing -<br />
                                        <span className="pl-17 block">Ride a horse</span>
                                    </b>
                                </p>
                                <p className="text-gray-500 text-sm mt-2">
                                    Reference site about. Ipsum, giving information on its origins.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='flex items-center justify-center gap-[10%]'>
                    <div className='w-[220px] h-[80px] flex items-center justify-center px-4 bg-white rounded-[50px] backdrop-blur-md border border-[#E6E8EC] shadow-lg z-20'>
                        <div className='flex items-center gap-3'>
                            <div className=''>
                                <MdLocationOn className="text-green-500 w-10 h-7" />
                            </div>
                            <div className=''>
                                <h3 className="text-lg font-semibold text-[#1C1C1E]">Pet</h3>
                                <p className="text-xs text-gray-500">125 insurance</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative mt-[3%]">
                        <div className=" h-[250px] w-[230px]  rounded-[50px] overflow-hidden" >
                            <img className="w-full h-full object-cover" src="/bloghome1.png" alt="carth" />
                        </div>
                        <div className='absolute top-[70%] left-1/2 -translate-x-1/2 w-[200px] h-[60px] flex items-center justify-center px-4 bg-white rounded-[50px] backdrop-blur-md border border-[#E6E8EC] shadow-lg z-20'>
                            <div className='flex items-center gap-3'>
                                <div className=''>
                                    <MdLocationOn className="text-green-500 w-10 h-7" />
                                </div>
                                <div className=''>
                                    <h3 className="text-lg font-semibold text-[#1C1C1E]">Pet</h3>
                                    <p className="text-xs text-gray-500">125 insurance</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[55%]'>
            <h1 className="text-center text-[65px] font-bold text-[#1C1C1E] leading-tight">
                    your true
                    <br />
                    insurance guide
                  </h1>
                  <p className="text-center text-[14px] text-base text-gray-500 max-w-md mx-auto">
                    Virtual tour is a powerful tool to help you explore and better understand the services our website offers
                  </p>
            </div>
        </div>
    )
}

export default Home;