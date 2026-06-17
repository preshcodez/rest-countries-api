import type strict from "assert/strict";
import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

interface DropDownProps {
  dropDownFn: (value: string) => void;
}

const DropDown: React.FC<DropDownProps> = ({ dropDownFn }) => {
  const [clicked, setClicked] = useState<boolean>(false);
  const [selectedRegion, setSelectedRegion] =
    useState<string>("filter By Region");
  const regions: string[] = [
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "oceania",
    "...",
  ];

  return (
    <div className="text-color rounded-md relative">
      <div
        onClick={() => setClicked(!clicked)}
        className="flex items-center gap-2 bg-element w-50 justify-between py-3 shadow-sm px-5 rounded-md cursor-pointer"
      >
        <p>{selectedRegion}</p>
        <RiArrowDropDownLine
          className={`transform ${clicked ? "rotate-0" : "rotate-180"} transition-transform ease-in-out duration-500`}
        />
      </div>
      {clicked && (
        <div className="bg-element font-light py-3 shadow-sm cursor-pointer flex flex-col gap-2 text-sm rounded-md px-5  w-50 absolute">
          {regions.map((region) => {
            return (
              <p
                onClick={() => {
                  setSelectedRegion(
                    region === "..." ? "Filter By Region" : region,
                  );
                  dropDownFn(region);
                }}
                key={region}
              >
                {region}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DropDown;
