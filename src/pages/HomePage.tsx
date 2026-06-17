import React from "react";
import SearchBar from "../components/SearchBar";
import DropDown from "../components/DropDown";
import type { Country } from "../App";
import Countries from "../components/Countries";

interface HomePageProps {
  theWorld: Country[];
  searchFn: (value: string) => void;
  dropDownFn: (value: string) => void;
}
// Ts:props are fully typed,so if App.tsx passes the wrong type-say
// a number instead of a string for searchFn-TypeScript will flag it
// before the code even runs.

const HomePage: React.FC<HomePageProps> = ({
  theWorld,
  searchFn,
  dropDownFn,
}) => {
  return (
    <div className="px-20 py-12 bg-body">
      <div className="flex flex-col sm:flex-row justify-between gap-5 items-center ">
        <SearchBar searchFn={searchFn} />
        <DropDown dropDownFn={dropDownFn} />
      </div>
      <Countries theWorld={theWorld} />
    </div>
  );
};

export default HomePage;
