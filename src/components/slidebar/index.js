import React from 'react'
import Logo from '../../assets/logo.png'
import { BiHomeAlt, BiGridAlt, BiCreditCardAlt, BiUser, BiCalculator } from "react-icons/bi"
import { IoMdSettings } from "react-icons/io"

const Sidebar = () => {
    const menu = [
        { name: "Home", icon: <BiHomeAlt /> },
        { name: "Account", icon: <BiGridAlt /> },
        { name: "Cards", icon: <BiCreditCardAlt /> },
        { name: "Contacts", icon: <BiUser /> },
        { name: "Loan Calculator", icon: <BiCalculator /> },
        { name: "Settings", icon: <IoMdSettings /> },
    ];

    const schedulePayments = ["Monthly Rent", "Food Payment", "Utility Bills"]

    return (
        <div className='h-screen border-r border-gray-200 w-64 px-9 space-y-14'>
            <div className='flex flex-row items-center pt-8'>
                <img src={Logo} alt="logo" className='w-9 h-9' />
                <div className='ml-3'>Olith Bank</div>
            </div>
            <div className='space-y-24'>
                <div>
                    <div className='mb-4 text-orange-400'>Menu</div>
                    <ul className='space-y-7'>
                        {
                            menu.map((val, index) => {
                                return <li key={index} className="mb-7 flex flex-row items-center text-gray-400">
                                    <div className='mr-5'>{val.icon}</div>
                                    <div>{val.name}</div>
                                </li>
                            })
                        }
                    </ul>
                </div>
                <div>
                    <div className='mb-7 text-orange-400'>Schedule Payments</div>
                    <div className='space-y-7'>
                        {
                            schedulePayments.map((val, index) => {
                                return (
                                    <div className='flex items-center text-gray-400'>
                                        <div className='h-4 w-4 border border-orange-400 mr-4 rounded-full' />
                                        {val}
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar