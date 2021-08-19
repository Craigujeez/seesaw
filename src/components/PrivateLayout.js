import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';
import Icons from "./Icons";
import history from "../helpers/history";
import Notifications from '../pages/Notifications';

const PrivateLayout = ({children, ...rest}) => {
    const history = useHistory();

    const [toggle, settoggle] = useState(true);

    const DataSet = [
        {title:"Projects Update", icon:"clipboard", children:[],active:false,link:"project-update"},
        {title:"Projects Monitoring", icon:"bookmark", children:["Geofencing", "Agents","Notification"],active:false,link:"dashboard"},
        {title:"Projects Repository", icon:"edit", children:[],active:false,link:"project-repository"}
    ]
    const DataSet2 = [
        {title:"Users", icon:"profile",active:false,link:"#"},
        {title:"Role Management", icon:"profile",active:false,link:"#"}
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
                                <div className="flex cursor-pointer" onClick={()=> history.push(`/${item.link}`)} > 
                                    <Icons className="mr-3 my-auto" id={item.icon}/>
                                    <p className="mr-3" onClick={()=> history.push(item.link)}>{item.title}</p>
                                    {item.children.length > 0 && (
                                        <div onClick={()=> item.children.length !== 0 ? settoggle(!toggle) : null}>
                                            {toggle ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                                                </svg>
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            )}
                                        </div>
                                    )}
                                </div>
                                <ul>
                                    {toggle && item.children.map(item => <li className="ml-6 pl-2 px-5 cursor-pointer">{item}</li>)}
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
            <Notifications/>

        </div>

     );
}
 
export default PrivateLayout;