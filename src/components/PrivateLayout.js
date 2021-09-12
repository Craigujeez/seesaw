import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import {useLocation, useHistory } from "react-router-dom";
import Icons from "./Icons";
import Notifications from '../pages/Notifications';
import { signOut } from '../redux/actions/authActions';

const PrivateLayout = ({children, ...rest}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { pathname } = useLocation();
    const activeLink = pathname.split("/")[1];
    const [toggle, settoggle] = useState(true);
    // const responsiveNav = useSelector(state => state.loading.responsiveNav)
    const handleActiveLink = param => {
      if (param === activeLink) {
        return "active";
      }
    };

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
        <div className="w-full flex h-screen work">
            <div className=" w-60 h-full bg-others-purple2 pl-8 pt-10">
                <h1 className="uppercase font-bold text-white text-base leading-8 mb-8"> SeeSaw </h1>
                <div className="mb-7">
                    <h1 className="uppercase text-xs text-others-purple3 font-bold mb-3"> user management</h1>
                    {DataSet.map(item => {
                        return (
                            <div className="mb-4 text-others-purple3">
                                <div className={`${handleActiveLink(item.link)} flex cursor-pointer`} onClick={()=> history.push(`/${item.link}`)} > 
                                    <Icons className="mr-3 my-auto" id={item.link === activeLink ? `${item.icon}2`: item.icon}/>
                                    <p className={`mr-3 ${item.link === activeLink ? "text-white font-bold ": ""}`} onClick={()=> history.push(item.link)}>{item.title}</p>
                                    {item.children.length > 0 && activeLink === "dashboard" && (
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
                                    {toggle && activeLink === "dashboard" && item.children.map(item => <li className="ml-6 pl-2 px-5 cursor-pointer">{item}</li>)}
                                </ul>
                            </div>
                        )
                    })}

                </div>

                <div className="mb-72">
                    <h1 className="uppercase text-xs text-others-purple3 font-bold mb-3"> user management</h1>
                    {DataSet2.map(item => {
                        return (
                            <div className="mb-4 text-others-purple3">
                                <div className="flex cursor-pointer"> 
                                    <Icons className="mr-3 my-auto" id={item.icon}/>
                                    <p>{item.title}</p>
                                </div>
                            </div>
                        )
                    })}

                </div>

                <div className="flex cursor-pointer" onClick={() => signOut()(dispatch)}>
                    <Icons className="mr-3 my-auto" id="logout"/>
                    <p className="uppercase text-xs font-bold text-white">Log Out</p>
                </div>

            </div>
            <div className="w-8/12 bg-white">
                {children}
            </div>
            <Notifications/>

        </div>

     );
}
 
export default PrivateLayout;