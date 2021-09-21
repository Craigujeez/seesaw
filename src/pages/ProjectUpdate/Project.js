import React,{useState,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchSingleProject } from '../../redux/actions/projectRepositoryActions';
import PrivateLayout from '../../components/PrivateLayout';
import Unicef from "../../assets/unicef.png";
import Who from "../../assets/WHO.png";
import Wto from "../../assets/wto.png";
import ProjectImage from "../../assets/Rectangle 105.svg";
import Loader from '../../components/Loader';


const Project = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const loading = useSelector(state => state.loading);
    const PageData = useSelector(state => state.projectRepository.single)
    const id = props.match.params.id;console.log(PageData);
    const dummydata = [
        {img: Unicef, name: "UNICEF"},
        {img: Who, name: "WHO"},
        {img: Wto, name: "WTO"}
    ]

    useEffect(() => {
        fetchSingleProject(id)(dispatch)
    }, [])

    if (loading.globalLoading) {
      return (
        <Loader
          type="TailSpin"
          color="#ccc"
          h="45"
          w="45"
          style={{
            margin: "15rem auto",
            width: "5%",
          }}
        />
      );
    }
    return ( 
        <PrivateLayout>
            <div className=" pl-8 mx-auto overflow-y-scroll h-screen">
                <div className="w-full flex mt-12 border-grey-line border-b">
                    <h1 
                        className="cursor-pointer text-xl text-others-purple2 mr-2"
                        onClick={()=>history.push("/project-update")}
                    > Project Update </h1>
                    <h1 className="work pb-4 text-xl text-others-purple2"> &gt; {PageData.title}</h1>
                </div>

                <div className="w-full h-72 mt-5 mb-10">
                    <img src={ProjectImage} className="rounded-2xl mix-blend-darken" alt="project banner"/>
                </div>
            </div>

        </PrivateLayout>
     );
}
 
export default Project;