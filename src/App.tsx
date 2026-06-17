import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetails";
import NavBar from "./components/NavBar";
import AllCountries from "./data.json";
import { useState } from "react";

export interface Currency {
  code: string;
  name: string;
  symbol: string;
}
export interface Language {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

export interface Flag{
  svg:string;
  png:string;
}
export interface Country {
  name: string;
  region: string;
  capital: string;
  population: number;
  subregion: string;
  nativeName: string;
  topLevelDomain: string[];
  borders?: string[];
  currencies: Currency[];
  languages: Language[];
  flags: Flag;
}
function App() {
  // Ts: useState is a generic function. <Country[]> tells TypeScript that
  // allCountries is an array of Country objects,not just 'any[]' .
  const [allCountries] = useState<Country[]>(AllCountries as Country[]);
  const [filterCountries, setFilterCountries] = useState<Country[]>([]);

  const filterBySearch = (search: string) => {
    const searchedCountry = allCountries.filter((Country) => {
      return Country.name.toLowerCase().includes(search);
    });
    setFilterCountries(searchedCountry);
  };

  const filterByRegion = (region: string) => {
    const selectedRegion = allCountries.filter((countries) => {
      return countries.region === region;
    });
    setFilterCountries(selectedRegion);
  };
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                theWorld={
                  filterCountries.length > 0 ? filterCountries : allCountries
                }
                searchFn={filterBySearch}
                dropDownFn={filterByRegion}
              />
            }
          />
          <Route path="/details/:countryName" element={<CountryDetails  details={allCountries}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
