import React,{useState,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import dayjs from "dayjs";
import PrivateLayout from "../../components/PrivateLayout";
import InputSelect from '../../components/InputSelect';
import SearchField from '../../components/SearchField';
import Loader from '../../components/Loader';
import Icon from '../../components/Icons';
import ProgressRing from '../../components/ProgressRing';
import Img from "../../assets/img.svg";
import { fetchProjectUpdates } from '../../redux/actions/projectUpdateActions';

const ProjectUpdate = () => {
    const dispatch = useDispatch();
    const relativeTime = require('dayjs/plugin/relativeTime');
    dayjs.extend(relativeTime);
    const history = useHistory();
    const loading = useSelector(state => state.loading);
    const Updates = useSelector(state => state.projectUpdate);
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
      fetchProjectUpdates()(dispatch);
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
                <div>
                  {Updates.data.map(item => <UpdateCard key={item.uuid} item={item} history={history}/> )} 
                </div>
                <h1 className="work mb-8 cairo border-grey-line text-xl text-others-purple2"> General Update</h1>
                <ul>
                  <li className="mb-6 cairo text-dark list-disc list-inside"> FPE Project: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, amet nunc, sit at molestie nisl tempus urna imperdie.
                  </li>
                  <li className="mb-6 cairo text-dark list-disc list-inside">SEFPE Project: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, amet nunc, sit at molestie nisl tempus urna imperdie.
                  </li>
                </ul>

            </div>
        </PrivateLayout>
     );
}
 
export default ProjectUpdate;

const UpdateCard = (props) => {

  return (
    <div className=" mb-7 bg-white w-full shadow-prc pt-8 px-10 pb-5 flex justify-between">
      <ProgressRing
        radius={ 43 }
        stroke={ 6 }
        progress={ 18 }
      />

      <div className=" w-8/12 flex">
        <div>
          <h1 className="cairo mb-3 border-grey-line text-xl text-others-purple2">{props.item.title}</h1>
          <p className=" cairo text-lg text-black"> Time Left: <span className="text-others-purple4">{dayjs().from(dayjs(props.item.timeLeft), true)} till completion</span></p>
        </div>
      </div>
      <button onClick={()=> props.history.push(`/project-update/${props.item.uuid}`)} className="al-i-c h-9 flex px-4 py-2 rounded-xl outline-none bg-grey-btn"> See More <div className="ml-2"><Icon id="right-arrow-icon" /> </div>  </button>
    </div>
  )
}