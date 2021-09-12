import React from 'react';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const ContentLoader = React.memo(props => (
    <div
      style={
        props.style || {
          margin: '15rem auto',
          width: '5%',
        }
      }
    >
      <Loader
        type={props.type || 'Puff'}
        color="#03045E"
        height={props.h || 60}
        width={props.w || 60}
        visible={true}
      />
    </div>
  ));
  export default ContentLoader;
 