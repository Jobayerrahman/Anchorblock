import React from 'react';
import profileImage from '../Assets/Image/profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faPen } from '@fortawesome/free-solid-svg-icons';
import { faSquareCheck, faSquareMinus, faTrashCan } from '@fortawesome/free-regular-svg-icons';

function UserListComponent() {
    return (
        <div className='w-100% h-auto 
                border-solid border-2 
                border-[#EAECF0] rounded-[8px]
                shadow-lg shadow-slate-50'>
            <div className='flex h-[44px] 
                    bg-[#F9FAFB] rounded-t-[8px]
                    border-b-2 border-[#EAECF0]'>
                <div className='px-5 py-3 w-2/5 flex justify-start items-center'>
                    <FontAwesomeIcon className='w-[20px] h-[20px] mx-2 text-[#7F56D9]' icon={faSquareMinus} />
                    <h2 className='text-[12px] text-[#667085] font-medium'>User Info</h2>
                    <FontAwesomeIcon className='w-[9px] h-[9px] mx-2 text-[#667085]' icon={faArrowDown} />
                </div>
                <div className='px-5 py-3 w-2/5'>
                    <h2 className='text-[12px] text-[#667085] font-medium' >About</h2>
                </div>
                <div className='px-5 py-3 w-1/5'>
                    <h2 className='text-[12px] text-[#667085] font-medium' >Status</h2>
                </div>
                <div className='px-5 py-3 w-[5%]'>

                </div>
            </div>
            <div className='flex h-[72px] items-center
                    bg-[#FFFFFF] border-solid
                    border-b-2 border-[#EAECF0]'>
                <div className='px-5 py-3 w-2/5 flex justify-start items-center'>
                    <FontAwesomeIcon className='w-[20px] h-[20px] mx-2 text-[#7F56D9]' icon={faSquareCheck} />
                    <div className="relative flex 
                            rounded-full bg-[#fff] text-sm 
                            focus:outline-none focus:ring-2 
                            focus:ring-white focus:ring-offset-2 
                            focus:ring-offset-gray-800">
                      <img
                        className="h-[40px] w-[40px] rounded-full"
                        src={profileImage}
                        alt=""
                      />
                    </div>
                    <div className='mx-2'>
                        <h2 className='text-[14px] text-[#101828] font-normal' >Some dummy Content</h2>
                        <h2 className='text-[14px] text-[#667085] font-light' >Brings all your news into one place</h2>
                    </div>
                </div>
                <div className='px-5 py-3 w-2/5'>
                        <h2 className='text-[14px] text-[#101828] font-normal' >Some dummy Content</h2>
                        <h2 className='text-[14px] text-[#667085] font-light' >Brings all your news into one place</h2>
                </div>
                <div className='px-5 py-3 w-1/5'>
                    <div className='p-2 bg-[#ECFDF3] rounded-[16px]'>
                        <h2 className='text-[12px] text-[#027A48] font-medium' >Brings all your news into one place</h2>
                    </div>
                </div>
                <div className='px-5 py-3 w-[5%]'>
                    <div className='flex justify-between items-center'>
                        <FontAwesomeIcon className='w-[15px] h-[15px] mx-2 text-[#667085]' icon={faTrashCan} />
                        <FontAwesomeIcon className='w-[15px] h-[15px] mx-2 text-[#667085]' icon={faPen} />
                    </div>
                </div>
            </div>
            <div className='flex h-[72px] items-center
                    bg-[#FFFFFF] border-solid
                    border-b-2 border-[#EAECF0]'>
                <div className='px-5 py-3 w-2/5 flex justify-start items-center'>
                    <FontAwesomeIcon className='w-[20px] h-[20px] mx-2 text-[#7F56D9]' icon={faSquareCheck} />
                    <div className="relative flex 
                            rounded-full bg-[#fff] text-sm 
                            focus:outline-none focus:ring-2 
                            focus:ring-white focus:ring-offset-2 
                            focus:ring-offset-gray-800">
                      <img
                        className="h-[40px] w-[40px] rounded-full"
                        src={profileImage}
                        alt=""
                      />
                    </div>
                    <div className='mx-2'>
                        <h2 className='text-[14px] text-[#101828] font-normal' >Some dummy Content</h2>
                        <h2 className='text-[14px] text-[#667085] font-light' >Brings all your news into one place</h2>
                    </div>
                </div>
                <div className='px-5 py-3 w-2/5'>
                        <h2 className='text-[14px] text-[#101828] font-normal' >Some dummy Content</h2>
                        <h2 className='text-[14px] text-[#667085] font-light' >Brings all your news into one place</h2>
                </div>
                <div className='px-5 py-3 w-1/5'>
                    <div className='p-2 bg-[#ECFDF3] rounded-[16px]'>
                        <h2 className='text-[12px] text-[#027A48] font-medium' >Brings all your news into one place</h2>
                    </div>
                </div>
                <div className='px-5 py-3 w-[5%]'>
                    <div className='flex justify-between items-center'>
                        <FontAwesomeIcon className='w-[15px] h-[15px] mx-2 text-[#667085]' icon={faTrashCan} />
                        <FontAwesomeIcon className='w-[15px] h-[15px] mx-2 text-[#667085]' icon={faPen} />
                    </div>
                </div>
            </div>
            <div className='flex h-[72px] items-center
                    bg-[#FFFFFF] border-solid
                    border-b-2 border-[#EAECF0]'>
                <div className='px-5 py-3 w-2/5 flex justify-start items-center'>
                    <FontAwesomeIcon className='w-[20px] h-[20px] mx-2 text-[#7F56D9]' icon={faSquareCheck} />
                    <div className="relative flex 
                            rounded-full bg-[#fff] text-sm 
                            focus:outline-none focus:ring-2 
                            focus:ring-white focus:ring-offset-2 
                            focus:ring-offset-gray-800">
                      <img
                        className="h-[40px] w-[40px] rounded-full"
                        src={profileImage}
                        alt=""
                      />
                    </div>
                    <div className='mx-2'>
                        <h2 className='text-[14px] text-[#101828] font-normal' >Some dummy Content</h2>
                        <h2 className='text-[14px] text-[#667085] font-light' >Brings all your news into one place</h2>
                    </div>
                </div>
                <div className='px-5 py-3 w-2/5'>
                        <h2 className='text-[14px] text-[#101828] font-normal' >Some dummy Content</h2>
                        <h2 className='text-[14px] text-[#667085] font-light' >Brings all your news into one place</h2>
                </div>
                <div className='px-5 py-3 w-1/5'>
                    <div className='p-2 bg-[#ECFDF3] rounded-[16px]'>
                        <h2 className='text-[12px] text-[#027A48] font-medium' >Brings all your news into one place</h2>
                    </div>
                </div>
                <div className='px-5 py-3 w-[5%]'>
                    <div className='flex justify-between items-center'>
                        <FontAwesomeIcon className='w-[15px] h-[15px] mx-2 text-[#667085]' icon={faTrashCan} />
                        <FontAwesomeIcon className='w-[15px] h-[15px] mx-2 text-[#667085]' icon={faPen} />
                    </div>
                </div>
            </div>
            <div className='flex h-[72px] items-center
                    bg-[#FFFFFF] border-solid
                    border-b-2 border-[#EAECF0]'>
                <div className='px-5 py-3 w-2/5 flex justify-start items-center'>
                    <FontAwesomeIcon className='w-[20px] h-[20px] mx-2 text-[#7F56D9]' icon={faSquareCheck} />
                    <div className="relative flex 
                            rounded-full bg-[#fff] text-sm 
                            focus:outline-none focus:ring-2 
                            focus:ring-white focus:ring-offset-2 
                            focus:ring-offset-gray-800">
                      <img
                        className="h-[40px] w-[40px] rounded-full"
                        src={profileImage}
                        alt=""
                      />
                    </div>
                    <div className='mx-2'>
                        <h2 className='text-[14px] text-[#101828] font-normal' >Some dummy Content</h2>
                        <h2 className='text-[14px] text-[#667085] font-light' >Brings all your news into one place</h2>
                    </div>
                </div>
                <div className='px-5 py-3 w-2/5'>
                        <h2 className='text-[14px] text-[#101828] font-normal' >Some dummy Content</h2>
                        <h2 className='text-[14px] text-[#667085] font-light' >Brings all your news into one place</h2>
                </div>
                <div className='px-5 py-3 w-1/5'>
                    <div className='p-2 bg-[#ECFDF3] rounded-[16px]'>
                        <h2 className='text-[12px] text-[#027A48] font-medium' >Brings all your news into one place</h2>
                    </div>
                </div>
                <div className='px-5 py-3 w-[5%]'>
                    <div className='flex justify-between items-center'>
                        <FontAwesomeIcon className='w-[15px] h-[15px] mx-2 text-[#667085]' icon={faTrashCan} />
                        <FontAwesomeIcon className='w-[15px] h-[15px] mx-2 text-[#667085]' icon={faPen} />
                    </div>
                </div>
            </div>
            <div className='flex h-[72px] items-center
                    bg-[#FFFFFF] border-solid
                    border-b-2 border-[#EAECF0]'>
                <div className='px-5 py-3 w-2/5 flex justify-start items-center'>
                    <FontAwesomeIcon className='w-[20px] h-[20px] mx-2 text-[#7F56D9]' icon={faSquareCheck} />
                    <div className="relative flex 
                            rounded-full bg-[#fff] text-sm 
                            focus:outline-none focus:ring-2 
                            focus:ring-white focus:ring-offset-2 
                            focus:ring-offset-gray-800">
                      <img
                        className="h-[40px] w-[40px] rounded-full"
                        src={profileImage}
                        alt=""
                      />
                    </div>
                    <div className='mx-2'>
                        <h2 className='text-[14px] text-[#101828] font-normal' >Some dummy Content</h2>
                        <h2 className='text-[14px] text-[#667085] font-light' >Brings all your news into one place</h2>
                    </div>
                </div>
                <div className='px-5 py-3 w-2/5'>
                        <h2 className='text-[14px] text-[#101828] font-normal' >Some dummy Content</h2>
                        <h2 className='text-[14px] text-[#667085] font-light' >Brings all your news into one place</h2>
                </div>
                <div className='px-5 py-3 w-1/5'>
                    <div className='p-2 bg-[#ECFDF3] rounded-[16px]'>
                        <h2 className='text-[12px] text-[#027A48] font-medium' >Brings all your news into one place</h2>
                    </div>
                </div>
                <div className='px-5 py-3 w-[5%]'>
                    <div className='flex justify-between items-center'>
                        <FontAwesomeIcon className='w-[15px] h-[15px] mx-2 text-[#667085]' icon={faTrashCan} />
                        <FontAwesomeIcon className='w-[15px] h-[15px] mx-2 text-[#667085]' icon={faPen} />
                    </div>
                </div>
            </div>
            <div className='flex p-2 h-[64px] 
                    justify-between items-center
                    bg-[#FFFFFF] rounded-b-[8px] border-solid
                    border-1 border-[#EAECF0]'>
                    <button 
                        className="text-[#344054]
                            w-[86px] h-[36px] mx-2
                            bg-transparent rounded-[8px]
                            font-semibold text-[14px] hover:bg-[#7F56D9]
                            border-solid border-2 border-[#D0D5DD]
                            hover:text-white hover:border-none">
                            Previous
                    </button> 
                    <h2 className='text-[14px] text-[#344054] font-medium' >Page 1 of 10</h2>
                    <button 
                        className="text-[#344054]
                            w-[86px] h-[36px] mx-2
                            bg-transparent rounded-[8px]
                            font-semibold text-[14px] hover:bg-[#7F56D9]
                            border-solid border-2 border-[#D0D5DD]
                            hover:text-white hover:border-none">
                            Next
                    </button> 
            </div>
        </div>
    );
}

export default UserListComponent;