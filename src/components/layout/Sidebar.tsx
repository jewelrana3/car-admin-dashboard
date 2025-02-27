import { ConfigProvider, Menu } from 'antd';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosLogOut } from 'react-icons/io';
import { IoSettingsOutline } from 'react-icons/io5';
import logo from '../../assets/logo.svg';
import { LuLayoutDashboard } from 'react-icons/lu';
import Booking from '../../../public/sidebar-icon/booking.svg';
import Calender from '../../../public/sidebar-icon/calender.svg';
import Total from '../../../public/sidebar-icon/total.svg';
import Car from '../../../public/sidebar-icon/car.svg';
import Terms from '../../../public/sidebar-icon/temrs.svg';
import Policy from '../../../public/sidebar-icon/policy.svg';

const Sidebar = () => {
    const [selectedKey, setSelectedKey] = useState<string>('/');
    const [openKeys, setOpenKeys] = useState<string[]>([]);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    const menuItems = [
        {
            key: '/',
            icon: <LuLayoutDashboard size={24} />,
            label: (
                <Link to="/" className="">
                    Dashboard
                </Link>
            ),
        },
        {
            key: '/reservations',
            icon: <img src={Booking} height={24} width={24} />,
            label: <Link to="/reservations">Reservations Management</Link>,
        },

        {
            key: '/calender',
            icon: <img src={Calender} height={24} width={24} />,
            label: <Link to="/calender">Calender</Link>,
        },
        {
            key: '/totalEaring',
            icon: <img src={Total} height={24} width={24} />,
            label: <Link to="/totalEaring">Total Earning</Link>,
        },
        {
            key: '/car',
            icon: <img src={Car} height={24} width={24} />,
            label: <Link to="/car">Add Car</Link>,
        },
        {
            key: 'subMenuSetting',
            icon: <IoSettingsOutline size={24} />,
            label: (
                <Link to="/profile" className="text-white hover:text-white">
                    Settings
                </Link>
            ),
        },
        {
            key: '/terms',
            icon: <img src={Terms} height={24} width={24} />,
            label: (
                <Link to="/terms" className="text-white hover:text-white">
                    Terms And Condition
                </Link>
            ),
        },
        {
            key: '/privacy',
            icon: <img src={Policy} height={24} width={24} />,
            label: (
                <Link to="/policy" className="text-white hover:text-white">
                    Privacy Policy
                </Link>
            ),
        },

        {
            key: '/logout',
            icon: <IoIosLogOut size={24} />,
            label: <p onClick={handleLogout}>Logout</p>,
        },
    ];

    const handleOpenChange = (keys: string[] = []) => {
        setOpenKeys(keys);
    };

    return (
        <div className="mt-5">
            <Link to={'/'} className="flex justify-center items-center mb-5 my-[22px] mx-">
                <div>
                    <img src={logo} alt="" className="h-[73px] mx-6 border-b border-white" />
                    <h1 className="font-medium text-[18px] mt-4">Admin Dashboard</h1>
                </div>
            </Link>
            <hr className="bg-black border-bottom mb-5" />

            <ConfigProvider
                theme={{
                    token: {
                        colorText: '#fffff',
                    },
                    components: {
                        Menu: {
                            itemBorderRadius: '0px' as any,
                            itemHeight: 60,
                        },
                    },
                }}
            >
                <Menu
                    mode="inline"
                    selectedKeys={[selectedKey]}
                    openKeys={openKeys}
                    onOpenChange={handleOpenChange}
                    onSelect={({ key }) => setSelectedKey(key)}
                    items={menuItems}
                />
            </ConfigProvider>
        </div>
    );
};

export default Sidebar;
