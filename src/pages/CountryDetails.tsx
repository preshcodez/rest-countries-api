import React from "react";
import EachCountry from "../components/EachCountry";
import type { Country } from "../App";
import { useLocation, useParams } from "react-router-dom";

interface CountryDetailsProps {
  details: Country[];
}
interface CountryParams {
  countryName: string;
}

const CountryDetails: React.FC<CountryDetailsProps> = ({ details }) => {
  const { countryName } = useParams<CountryParams>();
  const { state } = useLocation();
  const findCountry: Country =
    state?.country ||
    details.find((country) => {
      return country.name === decodeURIComponent(countryName ?? "");
    });
  return (
    <div>
      <EachCountry detail={findCountry} />
    </div>
  );
};

export default CountryDetails;
