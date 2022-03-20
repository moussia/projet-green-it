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
      <table>
        <tr>
          <th>Commune</th>
          <th>Code postal</th>
          <th>Score global</th>
          <th>iris</th>
        </tr>
        <div>
          <tr>
            <td>{data.commune}</td>
            <td>{data.codepostal}</td>
            <td>{data.scoreGlobal}</td>
            <td>{data.iris}</td>
          </tr>
        </div>
      </table>}
    </div>
  );
}

export default SearchBar;