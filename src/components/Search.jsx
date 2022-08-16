import React, {useState} from 'react';

const Search = ({setSearchText}) => {

  const[values,setValues] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchText(values);
    setValues("");
  }
  return (
    <div className="searchdiv">
      <h1>Github Search</h1>
      <form onSubmit={handleSubmit}>
        <input  type="text" placeholder='User' value={values} onChange={(e) => {setValues(e.target.value)}} />
   
        <button>Search</button>
      </form>
    </div>
  );
}

export default Search;