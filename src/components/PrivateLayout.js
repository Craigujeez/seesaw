import React from 'react';
import Icons from "./Icons";

const PrivateLayout = ({children, ...rest}) => {
    const DataSet = [
        {title:"Projects Update", icon:"clipboard", children:[],active:false},
        {title:"Projects Monitoring", icon:"bookmark", children:["Geofencing", "Agents","Notification"],active:false},
        {title:"Projects Repository", icon:"edit", children:[],active:false}
    ]
    const DataSet2 = [
        {title:"Users", icon:"profile",active:false},
        {title:"Role Management", icon:"profile",active:false}
    ]
    return ( 
        <div className="w-full flex h-screen">
            <div className=" w-60 h-full bg-others-purple2 pl-8 pt-10">
                <h1 className="uppercase font-bold text-others-purple1 text-base leading-8 mb-8"> SeeSaw </h1>
                <div className="mb-7">
                    <h1 className="uppercase text-xs text-others-purple3 font-bold mb-3"> user management</h1>
                    {DataSet.map(item => {
                        return (
                            <div className="mb-4 text-others-purple1">
                                <div className="flex cursor-pointer"> 
                                    <Icons className="mr-3 my-auto" id={item.icon}/>
                                    <p>{item.title}</p>
                                </div>
                                <ul>
                                    {item.children.map(item => <li className="ml-6 pl-2 px-5 cursor-pointer">{item}</li>)}
                                </ul>

                            </div>
                        )
                    })}

                </div>

                <div className="mb-72">
                    <h1 className="uppercase text-xs text-others-purple3 font-bold mb-3"> user management</h1>
                    {DataSet2.map(item => {
                        return (
                            <div className="mb-4 text-others-purple1">
                                <div className="flex cursor-pointer"> 
                                    <Icons className="mr-3 my-auto" id={item.icon}/>
                                    <p>{item.title}</p>
                                </div>
                            </div>
                        )
                    })}

                </div>

                <div className="flex cursor-pointer">
                    <Icons className="mr-3 my-auto" id="logout"/>
                    <p className="uppercase text-xs font-bold text-others-purple3">Log Out</p>
                </div>

            </div>
            <div className="w-8/12">
                {children}
            </div>
            <div className="w-72 h-screen pl-6 pt-16 bg-grey-bg">
                <div className="w-56 mx-auto" >
                    <div className="w-full flex justify-between">
                        <h1 className="text-primary text-xl"> Notifications</h1>
                        <Icons width="24px" height="24px" className="mr-3 my-auto" id="notif"/>
                    </div>
                </div>

            </div>

        </div>

     );
}
 
export default PrivateLayout;