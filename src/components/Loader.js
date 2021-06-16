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
        color="rgba(255, 255, 255, 0.3)"
        height={props.h || 60}
        width={props.w || 60}
      />
    </div>
  ));
  export default ContentLoader;
 