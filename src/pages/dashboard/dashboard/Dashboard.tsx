// import DashboardStats from './DashboardStats';
import EarningChart from './EarningChart';

// import UserChart from './UserChart';

const Dashboard = () => {
    return (
        <div className="">
            {/* <DashboardStats /> */}

            <div className="grid grid-cols-12  gap-2 items-center mt-10">
                <div className="col-span-6 bg-white drop-shadow-md  p-4 mx-2 rounded-2xl  border border-black">
                    <EarningChart />
                </div>
                <div className="col-span-6 bg-white drop-shadow-md p-4 mx-2 rounded-2xl border border-black"></div>
            </div>
        </div>
    );
};

export default Dashboard;
