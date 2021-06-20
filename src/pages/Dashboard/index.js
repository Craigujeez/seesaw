import React from 'react';
import PrivateLayout from "../../components/PrivateLayout"

const Dashboard = () => {
    return ( 
        <PrivateLayout>
            <div className="w-4/5 mx-auto">
                <div className="w-full ">
                    <h1 className="work pb-4 border-grey-line mt-12 text-xl border-b"> Agents Monitoring</h1>
                </div>

            </div>
        </PrivateLayout>
     );
}
 
export default Dashboard;