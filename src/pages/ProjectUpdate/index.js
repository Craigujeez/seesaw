import React,{useState,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PrivateLayout from "../../components/PrivateLayout";
import InputSelect from '../../components/InputSelect';
import SearchField from '../../components/SearchField';
import Loader from '../../components/Loader';
import Img from "../../assets/img.svg";
import { fetchProjects } from '../../redux/actions/projectRepositoryActions';

const ProjectUpdate = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const loading = useSelector(state => state.loading);
    const Repositories = useSelector(state => state.projectRepository);
    const [status, setstatus] = useState();
    const [query, setquery] = useState("");
    const Status = [
      {label: "Ongoing",value: "ongoing"},
      {label: "Completed",value: "completed"}
    ];
  
    const handleChange = (selectedOption) => {
      const { value } = selectedOption;
      setstatus(value);
    };
  
    // useEffect(() => {
    //   fetchProjects()(dispatch);
    // }, [])
  
    if (loading.globalLoading) {
      return (
        <Loader
          type="Puff"
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
            <div className=" px-8 mx-auto overflow-y-scroll h-screen">
                <div className="w-full flex justify-between border-b pt-12 pb-4">
                    <h1 className="work border-grey-line text-xl text-others-purple2"> Project Update</h1>
                    <div className="flex w-80 justify-between">
                        <div className=" w-52 mr-2">
                            <InputSelect
                                options={Status}
                                name="status"
                                placeholder="Status"
                                handleChange={handleChange}
                            />
                        </div>
                        <InputSelect
                            options={Status}
                            name="date"
                            placeholder="Date Created"
                            handleChange={handleChange}
                        />
                    </div>
                </div>
                <div className="w-536">
                    <SearchField/>
                </div>

            </div>
        </PrivateLayout>
     );
}
 
export default ProjectUpdate;