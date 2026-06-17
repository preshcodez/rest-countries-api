import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import type { Country } from "../App";
import { useNavigate } from "react-router-dom";

interface EachCountryProps {
  detail: Country;
}

const EachCountry: React.FC<EachCountryProps> = ({ detail }) => {
  const navigate = useNavigate();
  const border = detail.borders
    ? detail.borders.map((b) => {
        return (
          <p key={b} className="bg-element px-6 py-2 shadow-md">
            {b}
          </p>
        );
      })
    : "No Border Countries";
  const currencies = detail?.currencies
    ? detail.currencies[0].name
    : "No currency";
  return (
    <div className="px-4 sm:px-8 lg:px-20 pb-50 text-color">
      <div
        onClick={() => {
          navigate("/");
          window.location.reload();
        }}
        className="flex items-center w-30 justify-between shadow-md px-6 py-2 rounded-md cursor-pointer bg-element my-17.5"
      >
        <FaArrowLeft />
        <p className="text-[16px]">Back</p>
      </div>
      <div className="flex flex-col lg:flex-row items-center w-full gap-10 lg:gap-37.5 mt-16">
        <img
          src={detail.flags.png}
          alt=""
          className="w-full md:w-[137.5] h-auto "
        />
        <div className="flex flex-col w-full items-start text-start gap-10">
          <h2 className="text-[24px] font-extrabold">{detail.name}</h2>
          <div className="flex flex-col lg:flex-row  gap-10 items-start w-full justify-between ">
            <div className="flex flex-col items-start gap-2.5 text-[16px]">
              <p>Native name:{detail.nativeName}</p>
              <p>Population:{detail.population.toLocaleString()}</p>
              <p>Region:{detail.region}</p>
              <p>Sub-Region:{detail.subregion}</p>
              <p>Capital:{detail.capital}</p>
            </div>
            <div className="flex flex-col items-start gap-2.5 text-[16px]">
              <p>Top level domain: {detail.topLevelDomain.join(",")}</p>
              <p>Currencies: {currencies}</p>
              <p>Languages:{detail.languages?.map((i) => i.name).join(", ")}</p>
            </div>
          </div>
          <div className="flex items-start gap-2 text-[16px] mt-5">
            <p>Border Countries:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 items-center place-items-center gap-5">
              {border}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachCountry;
