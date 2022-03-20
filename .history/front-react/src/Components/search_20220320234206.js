import React, { useState } from 'react'
import { useEffect } from 'react';
import './search.css'


const SearchBar = () => {

  const [searchInput, setSearchInput] = useState("");
  const [data, setData] = useState({});


  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    console.log(e)
  };

  const getInfos = () => {
    if (searchInput.length > 0) {
      fetch(`http://127.0.0.1:3003/search?city=${searchInput}`, {
        method: "GET"
      })
        .then(response => response.json())
        .then(response => setData(response))
    }

  }

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div id="search-div">

      <input
        onChange={handleChange}
        type="search"
        placeholder="Paris"
        className='barrederecherche'
        value={searchInput} />


      <br></br>
      <br></br>
      <button onClick={getInfos} type='submit' className='butonsearch'>
        Rechercher
      </button>

      {data && (
        <table className="tableauresultat">
          <tr>
            <th className='barre'>Commune</th>
            <th className='barre'>Score global</th>
            <th className='barre'>Acces Information</th>
            <th className='barre'>Acces Interfaces Numeriques</th>
            <th className='barre'>Capacité d'usage des interfaces numériques</th>
            <th className='barre'>Compétences administratives</th>

          </tr>
          <tr>
            <td className='barre'>{data.commune}</td>
            <td className='barre'>{data.scoreGlobal}</td>
            <td className='barre'>{data.accesInterfaceNumerique}</td>
            <td className='barre'>{data.accesInformation}</td>
            <td className='barre'>{data.iris}</td>
          </tr>
        </table>)
      }
    </div >
  );
}

export default SearchBar;