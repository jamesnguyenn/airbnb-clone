import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import Image from 'next/image';
import {
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
} from '@heroicons/react/solid';
function Header() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <>
            <div className="sticky top-0 w-full z-[1003]">
                <header className="grid grid-cols-[1fr_2fr_1fr] md:grid-cols-[1fr_1fr_1fr] bg-white shadow-md py-5 px-5 md:px-10 z-[1001] items-start">
                    {/*Left - Logo*/}
                    <div className="relative flex items-center h-10 cursor-pointer mr-2">
                        <Image
                            src="https://links.papareact.com/qd3"
                            alt="logo"
                            layout="fill"
                            objectFit="contain"
                            objectPosition="left"
                        />
                    </div>
                    {/*Middle - Search*/}
                    <div className="w-full h-full">
                        {isModalVisible ? (
                            <div className="flex items-center flex-col  p-2 overflow-hidden md:text-base font-semibold relative">
                                <div className="flex items-center justify-center flex-grow text-center space-x-2 mb-4">
                                    <p
                                        className=" relative pr-2 cursor-pointer px-2 md:px-5   transition-all duration-300 ease-in-out nav_bar nav_bar_active"
                                        onClick={showModal}
                                    >
                                        Stay
                                    </p>
                                    <p
                                        className="relative px-2 md:px-5 cursor-pointer transition-all duration-300 ease-in-out nav_bar"
                                        onClick={showModal}
                                    >
                                        Experiences
                                    </p>
                                    <p
                                        className="relative px-2 md:px-5 cursor-pointer transition-all duration-300 ease-in-out nav_bar"
                                        onClick={showModal}
                                    >
                                        Online
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div className="flex items-center border-2 rounded-full p-2 md:shadow-sm overflow-hidden md:text-base font-semibold">
                                <div className="flex items-center justify-center flex-grow text-center">
                                    <p
                                        className="pr-2 cursor-pointer px-2 md:px-5"
                                        onClick={showModal}
                                    >
                                        Any where
                                    </p>
                                    <p
                                        className="border-x-2 px-2 md:px-5 cursor-pointer"
                                        onClick={showModal}
                                    >
                                        Any week
                                    </p>
                                    <p
                                        className="text-gray-400 pl-2 px-2 md:px-5 cursor-pointer"
                                        onClick={showModal}
                                    >
                                        Add guests
                                    </p>
                                </div>
                                <SearchIcon className=" hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
                            </div>
                        )}
                    </div>
                    {/*Right*/}
                    <div className="flex items-center space-x-2 lg:space-x-4 justify-end text-gray-500">
                        <p className="cursor-pointer hidden md:inline mb-0">
                            Become a host
                        </p>
                        <GlobeAltIcon className="h-6 cursor-pointer" />
                        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
                            <MenuIcon className="h-6 cursor-pointer" />
                            <UserCircleIcon className="h-6 cursor-pointer" />
                        </div>
                    </div>
                </header>
                <div className="w-full bg-white pb-4">
                    {isModalVisible && (
                        <div className=" max-w-screen-sm xl mx-auto rounded-full z-[1004] flex items-center justify-between border-2 ">
                            <div className="hover:bg-gray-200 px-4 py-2  rounded-full">
                                <p className="font-semibold">Where</p>
                                <input
                                    type="text"
                                    placeholder="Search destination"
                                    className="w-full border-none outline-none bg-transparent"
                                />
                            </div>
                            <div className="hover:bg-gray-200 px-4 py-2 rounded-full">
                                <p className="font-semibold">When</p>
                                <input
                                    type="text"
                                    placeholder="Any week"
                                    className="w-full border-none outline-none bg-transparent"
                                />
                            </div>
                            <div className="hover:bg-gray-200 px-4 py-2 rounded-full">
                                <p className="font-semibold">Who</p>
                                <input
                                    type="text"
                                    placeholder="Add guest"
                                    className="w-full border-none outline-none bg-transparent"
                                />
                            </div>
                            <SearchIcon className="h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
                        </div>
                    )}{' '}
                </div>
            </div>
            <Modal
                visible={isModalVisible}
                onCancel={handleCancel}
                cancelButtonProps={{ style: { display: 'none' } }}
                okButtonProps={{ style: { display: 'none' } }}
                footer={null}
                bodyStyle={{ display: 'none' }}
                closable={false}
            ></Modal>
        </>
    );
}

export default Header;
