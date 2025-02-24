import { Layout } from 'antd';
import { IoIosNotificationsOutline } from 'react-icons/io';

const { Header } = Layout;

const HeaderDashboard = () => {
    return (
        <Header
            style={{
                height: 80,
                background: 'red',
                width: '100%',
                overflow: 'hidden',
            }}
        >
            <div className="flex items-center  justify-center">
                <div>
                    <IoIosNotificationsOutline />
                </div>
                <div className="flex">
                    <div className="">
                        <img
                            className="rounded-full w-8 h-8 "
                            src="https://i.ibb.co.com/xJdQCTG/download.jpg"
                            alt="user"
                        />
                    </div>
                    <div>
                        <h1 className="">Jasmine Rose</h1>
                        <span>Admin</span>
                    </div>
                </div>
            </div>
        </Header>
    );
};

export default HeaderDashboard;
