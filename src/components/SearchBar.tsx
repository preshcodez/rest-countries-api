import React from "react";
import { IoMdSearch } from "react-icons/io";

interface searchBarProps {
  searchFn: (value: string) => void;
}
const SearchBar:React.FC<searchBarProps> = ({ searchFn }) => {
  return (
    <div className="relative text-color">
      <input onChange={(e:React.ChangeEvent<HTMLInputElement>) =>{
        searchFn(e.target.value)
      }}
        type="text"
        placeholder="Search for a country..."
        className="py-3 ps-16 pe-3 w-full sm:w-112.5 rounded-md shadow-sm bg-element placeholder:text-[14px] "
      />
      <IoMdSearch className="absolute top-4.5 left-5" />
    </div>
  );
};

export default SearchBar;
