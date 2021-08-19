import React from 'react';
import PrivateLayout from "../../components/PrivateLayout";
import Img from "../../assets/img.svg"

const ProjectRepository = () => {
    return ( 
        <PrivateLayout>
            <div className=" pl-8 mx-auto overflow-y-scroll h-screen">
                <div className="w-full ">
                    <h1 className="work pb-4 border-grey-line mt-12 text-xl border-b"> Project Repository</h1>
                </div>

                <Project/>
                <Project/>
                <Project/>
                <Project/>

            </div>
        </PrivateLayout>
     );
}
 
export default ProjectRepository;

const Project = () => {
    return (
        <div className="mt-10 flex mb-11 h-36">
            <div className=" h-36">
                <img className="w-72 object-cover" alt="project" src={Img}/>
            </div>
            <div className="pl-12">
                <h1 className="mb-3 font-semibold text-xl text-others-purple4">School Based Management</h1>
                <p className="text-sm font-semibold text-left w-96 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac quisque enim turpis elit ac. Lorem ipsum dolor sit amet, consectetur ad </p>
                <h1 className="text-lg">Status : <span className="text-xl text-pending">Ongoing</span></h1>
            </div>
        </div>

    )
}