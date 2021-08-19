import React from 'react';
import Icons from "../../components/Icons";

const Notifications = () => {
    return ( 
        <div className="w-72 h-screen pl-6 pt-16 bg-grey-bg overflow-y-scroll">
        <div className="w-56 mx-auto" >
            <div className="w-full flex justify-between mb-11">
                <h1 className="work text-primary text-xl"> Notifications</h1>
                <Icons width="24px" height="24px" className="mr-3 my-auto" id="notif"/>
            </div>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>

    </div>
     );
}
 
export default Notifications;

const Card = () => {
    return (
        <div className="w-56 h-32 pt-4 pl-4 pr-3 rounded-md bg-white mb-4">
            <p className=" text-sm text-left mb-5"> <span className="font-semibold ">Adefarasin Adetutu</span> Just checked in at Oyo for <span className="text-pending">Project Power</span> </p>
            <p className="font-bold text-sm text-grey-notif"> TODAY - 12:30am</p>
        </div>
    )
}