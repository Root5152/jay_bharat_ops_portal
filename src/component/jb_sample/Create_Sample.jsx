import React from 'react'
import { FaAngleLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';

import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button';


const Create_Sample = () => {
    return (
        <>
            <div className='mt-[4.5rem] ml-[5rem]  '>

                <div className='flex items-center'>
                    <Link to='/jb_admin/sample'  >  <FaAngleLeft className='text-[1rem] border-2  w-[2rem] h-[2rem] rounded-full' /></Link>
                    <p className=' font-bold text-[1.4rem] px-4'>Sampling </p>
                    <MdOutlineKeyboardArrowRight className=' text-[2.3rem]' />
                    <p className='font-bold text-[1.4rem] px-2'>Create Sample</p>
                </div>

                <div className='flex gap-5 mt-20'>
                    <div className=' w-[20rem] border py-10 px-7 rounded-lg h-[60rem] '>
                        <p>Upload the sample image</p>
                        <img className='rounded-lg py-5 w-[20rem] ' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI-4UrNveMngjY3HyNG5922XI7nzIudTijew&usqp=CAU' alt='...' />
                        <div className="border-2 border-black  rounded-lg border-dotted w-[16.5rem] h-[8rem] flex items-center justify-center">
                            Upload sample image
                        </div>
                        <div className='mt-5'>
                            <p className=''>Sample Number</p>
                            <Input className="w-[16.5rem] my-3 " placeholder=" Enter sample no" />
                            <p className=''>Client Code</p>
                            <Input className="w-[16.5rem] my-3 " placeholder="Eg:SW_CL_001" />
                            <p className=''>Start date of Sampling</p>
                            <Input className="w-[16.5rem] my-3 " placeholder="Eg:2024-12-23" />
                            <p className=''>End date of Sampling</p>
                            <Input className="w-[16.5rem] my-3 " placeholder="Eg:2023-12-23" />
                            <p className=''>Date of Dispatch</p>
                            <Input className="w-[16.5rem] my-3 " placeholder="Eg:2024-12-30" />
                        </div>

                    </div>
                    <div >
                        <div className='border-2 w-[60rem]  pt-16  pl-14 rounded-lg py-8'>

                       
                        <div className='flex items-center'>
                            <p className=' font-medium w-[7rem]  '>Cost of the Sample</p>
                            <Input className="w-[14rem] my-3 mx-7 " placeholder="Enter in Rs." />
                        </div>


                        <h1 className='underline font-semibold text-[1.2rem] my-4 '>Fabrics</h1>
                        <div className='grid grid-cols-2'>
                            <div className='flex items-center'>
                                <p className='font-medium w-[7rem]'>Select Fabric quality</p>
                                <Input className="w-[18rem] my-3 mx-7 " placeholder="Add value" />
                            </div>
                            <div className='flex items-center'>
                                <p className='font-medium  w-[7rem] '>Cost of Fabrics</p>
                                <Input className="w-[14rem] my-3 mx-7 " placeholder="Add value" />
                            </div>
                        </div>
                        <Button className="bg-black w-[15rem] mt-6 ">Add Fabric</Button>




                        <h1 className='underline font-semibold text-[1.2rem] my-4 mt-20 '>Embroidery</h1>
                        <div className='grid grid-cols-2'>
                            <div className='flex items-center'>
                                <p className='font-medium  w-[6rem] '>Embroidery No.</p>
                                <Input className="w-[18rem] my-3 mx-7 " placeholder="Add value" />
                            </div>
                            <div className='flex items-center'>
                                <p className='font-medium w-[6rem]'>Cost of Embroidery</p>
                                <Input className="w-[14rem] my-3 mx-7 " placeholder="Add value" />
                            </div>
                        </div>
                        <div className='grid grid-cols-2'>
                            <div className='flex items-center'>
                                <p className='font-medium w-[6rem]'>Start Date</p>
                                <Input className="w-[18rem] my-3 mx-7 " placeholder="Add value" />
                            </div>
                            <div className='flex items-center'>
                                <p className='font-medium w-[6rem]'>End Date</p>
                                <Input className="w-[14rem] my-3 mx-7 " placeholder="Add value" />
                            </div>
                        </div>
                        <Button className="bg-black w-[15rem] mt-6 ">Add Embroidery</Button>



                        <h1 className='underline font-semibold text-[1.2rem] my-4 mt-20 '>Shiffly</h1>
                        <div className='grid grid-cols-2'>
                            <div className='flex items-center'>
                                <p className='font-medium  w-[7rem] '>Shiffly number</p>
                                <Input className="w-[18rem] my-3 mx-7 " placeholder="Add value" />
                            </div>
                            <div className='flex items-center'>
                                <p className='font-medium  w-[7rem] '>Cost of Shiffly</p>
                                <Input className="w-[14rem] my-3 mx-7 " placeholder="Add value" />
                            </div>
                        </div>
                        <Button className="bg-black w-[15rem] mt-6 ">Add Shiffly</Button>



                        <h1 className='underline font-semibold text-[1.2rem] my-4 mt-20 '>Hand Embroidery</h1>
                        <div className='grid grid-cols-2'>
                            <div className='flex items-center'>
                                <p className='font-medium  w-[7rem] '>Embroidery No.</p>
                                <Input className="w-[18rem] my-3 mx-7 " placeholder="Add value" />
                            </div>
                            <div className='flex items-center'>
                                <p className='font-medium  w-[7rem] '>Cost of Embroidery</p>
                                <Input className="w-[14rem] my-3 mx-7 " placeholder="Add value" />
                            </div>
                        </div>
                        <div className='grid grid-cols-2'>
                            <div className='flex items-center'>
                                <p className='font-medium  w-[7rem] '>Start Date</p>
                                <Input className="w-[18rem] my-3 mx-7 " placeholder="Add value" />
                            </div>
                            <div className='flex items-center'>
                                <p className='font-medium  w-[7rem] '>End Date</p>
                                <Input className="w-[14rem] my-3 mx-7 " placeholder="Add value" />
                            </div>
                        </div>
                        <Button className="bg-black w-[15rem] mt-6 ">Add Hand Embroidery</Button>



                        <h1 className='underline font-semibold text-[1.2rem] my-4 mt-20 '>Chemical Lacing</h1>
                        <div className='grid grid-cols-2'>
                            <div className='flex items-center'>
                                <p className='font-medium  w-[7rem] '>Lacing number</p>
                                <Input className="w-[18rem] my-3 mx-7 " placeholder="Add value" />
                            </div>
                            <div className='flex items-center'>
                                <p className='font-medium   w-[7rem] '>Cost of Lacing</p>
                                <Input className="w-[14rem] my-3 mx-7 " placeholder="Add value" />
                            </div>
                        </div>
                        <Button className="bg-black w-[15rem] mt-6 ">Add Chemical Lacing</Button>




                        <h1 className='underline font-semibold text-[1.2rem] my-4 mt-20 '>Stiching</h1>
                        <div className='grid grid-cols-2'>
                            <div className='flex items-center'>
                                <p className='font-medium   w-[7rem] '>Enter Stiching count</p>
                                <Input className="w-[18rem] my-3 mx-7 " placeholder="Add value" />
                            </div>
                            <div className='flex items-center'>
                                <p className='font-medium   w-[7rem] '>Cost of Stiching</p>
                                <Input className="w-[14rem] my-3 mx-7 " placeholder="Add value" />
                            </div>
                        </div>
                        <div className='grid grid-cols-2'>
                            <div className='flex items-center'>
                                <p className='font-medium   w-[7rem] '>Start Date</p>
                                <Input className="w-[18rem] my-3 mx-7 " placeholder="Add value" />
                            </div>
                            <div className='flex items-center'>
                                <p className='font-medium   w-[7rem] '>End Date</p>
                                <Input className="w-[14rem] my-3 mx-7 " placeholder="Add value" />
                            </div>
                        </div>
                        </div>

                        <div className='text-right my-3 mb-7'>
                            <Button className="bg-black  w-[17rem]">Finalize and Summit</Button>
                        </div>
                    </div>
                   


                </div>

            </div>
        </>
    )
}

export default Create_Sample
