import React from 'react';
import PrivateLayout from "../../components/PrivateLayout";
import ProjectImage from "../../assets/Rectangle 105.svg";

const ProjectUpdate = () => {
    return ( 
        <PrivateLayout>
            <div className=" pl-8 mx-auto overflow-y-scroll h-screen">
                <div className="w-full ">
                    <h1 className="work pb-4 border-grey-line mt-12 text-xl border-b"> Project Update</h1>
                </div>

                <div className="w-full h-72 mt-5">
                    <img src={ProjectImage} className="rounded-2xl mix-blend-darken"/>
                </div>

            </div>
        </PrivateLayout>
     );
}
 
export default ProjectUpdate;