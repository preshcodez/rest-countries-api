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
    <div className="px-4 sm:px-8 lg:px-20 pb-20 text-color">
      {/* Back Button */}
      <div
        onClick={() => {
          navigate("/");
          window.location.reload();
        }}
        className="flex items-center gap-3 w-fit shadow-md px-6 py-2 rounded-md cursor-pointer bg-element my-10"
      >
        <FaArrowLeft />
        <p className="text-[16px]">Back</p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start w-full gap-10 lg:gap-20">
        {/* Flag */}
        <img
          src={detail.flags.png}
          alt={detail.name}
          className="w-full max-w-[560px] h-auto object-cover shadow-md"
        />

        {/* Country Details */}
        <div className="flex flex-col w-full gap-8">
          <h2 className="text-2xl md:text-3xl font-extrabold">{detail.name}</h2>

          {/* Info Columns */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 justify-between">
            <div className="flex flex-col gap-2 text-[15px] md:text-[16px]">
              <p>
                <span className="font-semibold">Native Name:</span>{" "}
                {detail.nativeName}
              </p>

              <p>
                <span className="font-semibold">Population:</span>{" "}
                {detail.population.toLocaleString()}
              </p>

              <p>
                <span className="font-semibold">Region:</span> {detail.region}
              </p>

              <p>
                <span className="font-semibold">Sub Region:</span>{" "}
                {detail.subregion}
              </p>

              <p>
                <span className="font-semibold">Capital:</span> {detail.capital}
              </p>
            </div>

            <div className="flex flex-col gap-2 text-[15px] md:text-[16px]">
              <p>
                <span className="font-semibold">Top Level Domain:</span>{" "}
                {detail.topLevelDomain.join(", ")}
              </p>

              <p>
                <span className="font-semibold">Currencies:</span> {currencies}
              </p>

              <p>
                <span className="font-semibold">Languages:</span>{" "}
                {detail.languages?.map((i) => i.name).join(", ")}
              </p>
            </div>
          </div>

          {/* Border Countries */}
          <div className="flex flex-col md:flex-row gap-4 md:items-center">
            <p className="font-semibold whitespace-nowrap">Border Countries:</p>

            <div className="flex flex-wrap gap-3">{border}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachCountry;
