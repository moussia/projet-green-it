import React, { useState } from 'react'
import './search.css'


const SearchBar = () => {

  const [searchInput, setSearchInput] = useState("");


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
        .then(response => console.log(response.body))
    }

  }



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
      {/*     <table>
      <tr>
        <th>Commune</th>
        <th>Score global</th>  
      </tr>
    {Object.values(data_city).map((city, index) => (
    <div>
      <tr>
        <td>{city.Libcom}</td>
        <td>{city.Libdep}</td>
      </tr>
    </div>
    ))}
    </table> */}
    </div>
  );
}

export default SearchBar;