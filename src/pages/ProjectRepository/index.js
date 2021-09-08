import React,{useState,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import PrivateLayout from "../../components/PrivateLayout";
import InputSelect from '../../components/InputSelect';
import SearchField from '../../components/SearchField';
import Loader from '../../components/Loader';
import Img from "../../assets/img.svg";
import { fetchProjects } from '../../redux/actions/projectRepositoryActions';

const ProjectRepository = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.loading);
  const Repositories = useSelector(state => state.projectRepository)
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

  useEffect(() => {
    fetchProjects()(dispatch);
  }, [])

  console.log(Repositories, "repositories");
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
                    <h1 className="work border-grey-line text-xl "> Project Repository</h1>
                    <div className="flex w-72 justify-between">
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
                {Repositories.data?.map(item => <Project key={item.uuid} item={item} /> )}

            </div>
        </PrivateLayout>
     );
}
 
export default ProjectRepository;

const Project = (props) => {
    const {img,status,title,description} = props.item
    return (
        <div className="mt-10 flex mb-11 h-36">
            <div className=" h-36">
                <img className="w-72 object-cover" alt="project" src={img || Img}/>
            </div>
            <div className="pl-12">
                <h1 className="mb-3 font-semibold text-xl text-others-purple4">{title}</h1>
                <p className="text-sm font-semibold text-left w-96 mb-3">{description}</p>
                <h1 className="text-lg">Status : <span className="text-xl text-pending">{status}</span></h1>
            </div>
        </div>

    )
}