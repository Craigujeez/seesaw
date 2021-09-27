import React from 'react';

const Popup = ({ item }) => {
  const { withinGeofence, userName, occupation,number } = item;

  return (
    <div id={`${userName} location`}>
      <h3>{userName}</h3>
      <p>Occupation: {occupation} </p>
      <p>Number: {number} </p>
      <p> LocationStatus: {withinGeofence? 'within':'outside'} Geofence</p>
    </div>
  );
};

export default Popup;