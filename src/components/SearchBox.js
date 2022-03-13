import axios from 'axios';
import React, { useState } from 'react';

const SearchBox = ({setLocation}) => {
    const [ locationID, setLocationID] = useState("")

    const searchLocation  = () =>{
            axios.get(`https://rickandmortyapi.com/api/location/${locationID}`)
            .then((res) => setLocation(res.data));
    }

    return (
        <div>
            <input className='search' type="text" placeholder="Type a location ID" onChange={e => setLocationID(e.target.value)} value={locationID} />
            <button className='buton' onClick={(searchLocation)} >
                Search
            </button>
        </div>
    );
};

export default SearchBox;