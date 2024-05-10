import { useEffect, useRef, useState } from "react";
import "./App.css";
import CountryCard from "./components/CountryCard";
import axios from "axios";
import useFech from "./components/hooks/useFech";

function App() {
  //const [countries, setCountries] = useState();
  const [countries, getCountries, isLoading, hasError] = useFech();

  const [search, setSearch] = useState('spanish');

  useEffect(() => {
    const url = `https://restcountries.com/v3.1/lang/${search}`;
    /*axios.get(url)
      .then(res => setCountries(res.data))
      .catch(err => console.log(err))*/
    getCountries(url);
  }, [search]);

    const textInput = useRef();

    const handleSubmit = event =>{
      event.preventDefault();
      setSearch(textInput.current.value.trim().toLowerCase());
      event.target.reset();
    }
console.log(search);

  return (
    <div className="contenido-principal">
      {
        isLoading?
         <h2>Loading...</h2>
         :
         <>
         <h1>Countries App</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" ref={textInput} placeholder="Search by language" />
        <button>Search</button>
      </form>
      <div className="contenedor-principal">
        {
        hasError?
          <h2>Check your language</h2>
          :
          countries?.map((country) => (
          <CountryCard key={country.name.official} country={country}/>
        ))}
      </div>
         </>
      }
      
    </div>
  );
}

export default App;
