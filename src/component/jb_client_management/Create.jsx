

import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Toaster } from "@/components/ui/toaster";



const Create = () => {


    const initialClientData = {
        clientName: '',
        clientRefNo: '',
        mobileNumber: '',
        otherInfo: ''
    };
    const [clientData, setClientData] = useState(initialClientData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setClientData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // console.log("Client Data:", clientData);

        setClientData(initialClientData);
    };

    return (
        <div>
            <div className='border-2 mx-7 rounded w-[30rem] '>
                <h1 className='my-3 mt-6 ml-6 font-inter'>Onboard a new client</h1>
                <form onSubmit={handleSubmit}>
                    <p className='font-medium ml-6 font-inter'>Client Name</p>
                    <Input
                        className="w-[25rem] ml-6"
                        name="clientName"
                        value={clientData.clientName}
                        onChange={handleChange}
                    />
                    <p className='font-medium ml-6 mt-3 font-inter'>Client Ref No</p>
                    <Input
                        className="w-[25rem] ml-6"
                        name="clientRefNo"
                        value={clientData.clientRefNo}
                        onChange={handleChange}
                    />
                    <p className='font-medium ml-6 mt-3 font-inter'>Mobile Number</p>
                    <Input
                        className="w-[25rem] ml-6"
                        name="mobileNumber"
                        value={clientData.mobileNumber}
                        onChange={handleChange}
                    />
                    <p className='font-medium ml-6 mt-3 font-inter'>Other info</p>
                    <Input
                        className="w-[25rem] ml-6"
                        name="otherInfo"
                        value={clientData.otherInfo}
                        onChange={handleChange}
                    />

                    <button type="submit" className='ml-6 bg-gray-800 text-white p-3 rounded-md my-4 font-inter'>Save and onboard</button>
                </form>
            </div>
            <Toaster className="text-black">
                Hello
            </Toaster>
        </div>
    );
};

export default Create;

