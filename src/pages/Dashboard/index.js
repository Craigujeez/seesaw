import React,{useEffect,useRef} from 'react';
import ReactDOM from 'react-dom';
import { useDispatch,useSelector } from 'react-redux';
import mapboxgl from 'mapbox-gl';
import {fetchUserCoordinates} from "../../redux/actions/agentMonitoringAction"
import Icon from '../../components/Icons';
import PrivateLayout from "../../components/PrivateLayout"

const Dashboard = () => {
    const dispatch = useDispatch();
    const UserData = useSelector(state => state.agentMonitoring.data);
    const mapContainerRef = useRef(null);
    const popUpRef = useRef(new mapboxgl.Popup({ offset: 15 }));
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            // See style options here: https://docs.mapbox.com/api/maps/#styles
            style: "mapbox://styles/craigujeez/cktz399vq14ry18ppkiu2r2xh",
            center: [7.4955140, 9.1017320],
            zoom: 16
          });
          // add navigation control (zoom buttons)
        map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

        map.on("load", async () => {
            map.addSource("geofence-area", {
                type: "geojson",
                data: {
                    type: "Feature",
                    geometry: {
                        type: "Polygon",
                        coordinates: [
                            [
                                [7.4953830, 9.1019190],
                                [7.4955140, 9.1017320],
                                [7.4957640, 9.1019330],
                                [7.4956230, 9.1021210]
                            ]
                        ]
                    }
                }
            });
            map.addLayer({
                "id": "geofence-area",
                "type": "fill",
                "source": "geofence-area",
                "layout": {},
                "paint": {
                    "fill-color": "#088",
                    "fill-opacity": 0.8
                }
            });
            const Data = await fetchUserCoordinates()(dispatch);

            // add the data source for new a feature collection with no features
            Data.forEach(item => {
                const {withinGeofence,coordinate} = item
                // create marker node
                const markerNode = document.createElement('div');
                ReactDOM.render(<Icon id={withinGeofence ? ("agent-within-icon"):("agent-outside-icon")} />, markerNode);
                // add marker to map
                new mapboxgl.Marker(markerNode)
                .setLngLat([coordinate.longitude, coordinate.latitude])
                .addTo(map);
            });
        });
    }, [])
    return ( 
        <PrivateLayout>
            <div className=" px-8 mx-auto overflow-y-scroll h-screen">
                <div className="w-full flex justify-between border-b pt-12 pb-4">
                    <h1 className="work border-grey-line text-xl text-others-purple2"> Agents Monitoring</h1>
                </div>
                <div id="map" className="w-full mt-5 h-96" ref={mapContainerRef}>

                </div>

            </div>
        </PrivateLayout>
     );
}
 
export default Dashboard;