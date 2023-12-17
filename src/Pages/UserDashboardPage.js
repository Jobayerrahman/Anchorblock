import React from 'react';
import UserListComponent from '../Components/UserListComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavigationComponent from '../Components/NavigationComponent';
import { faCloudArrowUp, faPlus } from '@fortawesome/free-solid-svg-icons'

function UserDashBoardPage(props) {
    return (
        <div>
            <NavigationComponent/>
            <div className='my-10 mx-0 px-2 sm:mx-[60px] sm:px-8'>
                <div className='flex justify-between mb-5'>
                    <h2 className='text-[#101828] text-[24px] font-medium'>User List</h2>
                    <div className='flex justify-evenly'>
                        <button 
                            className="p-2 mb-6 text-[#344054]
                                w-[105px] h-[40px] mx-2
                                bg-transparent rounded-[8px]
                                font-semibold text-[14px] hover:bg-[#7F56D9]
                                border-solid border-2 border-[#D0D5DD]
                                hover:text-white hover:border-none">
                                <FontAwesomeIcon className='w-[15px] h-[15px] mx-2' icon={faCloudArrowUp} />
                                Import
                        </button> 
                        <button 
                            className="p-2 mb-6 text-white
                                w-[125px] h-[40px] mx-2
                                bg-[#7F56D9] rounded-[8px]
                                font-semibold text-[14px] 
                                hover:bg-[#6e46cb]">
                                <FontAwesomeIcon className='w-[15px] h-[15px] mx-2' icon={faPlus} />
                                Add User
                        </button> 
                    </div>
                </div>
                <UserListComponent/>
            </div>
        </div>
    );
}

export default UserDashBoardPage;