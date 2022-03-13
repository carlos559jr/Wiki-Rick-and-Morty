import axios from "axios";
import React from "react";
import { useState, useEffect  } from "react";
    

const ResidentInfo = ({ residentUrl }) => {
    const [resident, setResident] = useState({});
  
    useEffect(() => {
      axios.get(residentUrl).then((res) => setResident(res.data));
    }, [residentUrl]);

    return (
        <div className="card">
            <div className="info-card">
                <p><b>Name:</b> {resident.name}</p>
                <p><b>Status:</b> {resident.status}</p>
                <p><b>Origin:</b> {resident.origin?.name}</p>
                <p><b>Episodes: </b> {resident.episode?.length}</p>
            </div>
            <div>
                <img src={resident.image} alt="resident" />
            </div>
        </div> 
    );
};

export default ResidentInfo;