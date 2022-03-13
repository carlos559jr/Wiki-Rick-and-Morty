import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SearchBox from './components/SearchBox';
import ResidentList from './components/ResidentsList'
import './App.css';



function App() {
  const [ location, setLocation ] = useState({})
  
  useEffect (() => {
  const random = (Math.floor(Math.random() * 126) + 1)    
  axios.get(`https://rickandmortyapi.com/api/location/${random}`)
  .then((res) => setLocation(res.data));
  }, [])
      return (
          <div>
              <section className='header'>
               <img src="https://fondosmil.com/fondo/27346.png" alt="header" />
               <h1> RICK AND MORTY WIKI </h1>
              </section>

              <section>
                <div className='searchbox'>
                  <SearchBox setLocation={setLocation} />
                </div>
              </section>

              <section id='location'>
                <div className='location-info'>
                  <p><b>Name: </b>{location.name}</p>
                  <p><b>Type: </b> {location.type} </p>
                  <p><b>Dimension: </b> {location.dimension} </p>
                  <p><b>Population: </b> {location.residents?.length} </p>
                </div>
              </section>

              <section className='residents'>
                <h2>Residents</h2>
                <div>
                  <ResidentList  residents = {location.residents} />
                </div>
              </section>

          </div>
      );
}

export default App;
