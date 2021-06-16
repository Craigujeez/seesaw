import React from 'react';
import dayjs from "dayjs";

const AuthLayout = ({children}) => {
    const now = dayjs();
    return ( 
        <div className="cairo w-full h-screen bg-login bg-no-repeat bg-cover pt-56">
            <div className="auth w-10/12 mx-auto flex pl-16 pt-14 h-370">
                <div className="w-472 text-white relative z-10">
                    <div>
                        <h1 className="text-3xl"> {dayjs(now).format('h:mm A')}</h1>
                        <p className="text-sm mt-2">{dayjs(now).format('dddd, MMM D, YYYY')}</p>
                    </div>
                    <div className="mt-12">
                        <h2 className=" font-semibold text-3xl">Welcome Back</h2>
                        <p className="text-xl mt-4">Lorem Ipsum Dolor Ipsim elit</p>
                    </div>
                </div>
                <div className="bg-white h-430 w-536 z-20 lift pt-16 pl-16">
                    {children}
                </div>
            </div>

        </div>
     );
}
 
export default AuthLayout;