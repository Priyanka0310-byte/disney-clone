import React, { useState } from "react";
import {
  MdHomeFilled,
  MdSearch,
  MdStar,
  MdLocalMovies,
  MdOutlineCollectionsBookmark,
  MdTabletMac,
  MdSports,
  MdMenu,
} from "react-icons/md";
import HeaderItem from "./HeaderItem";
//import user-image from "../Images/user-image";
import disney_logo from "../Images/disney_logo.webp";
import { VerifiedUserRounded } from "@mui/icons-material";
function Header() {
  const [toggle, setToggle] = useState(false);
  const menu = [
    {
      name: "HOME",
      icon: MdHomeFilled,
    },

    {
      name: "SEARCH",
      icon: MdSearch,
    },
    {
      name: "WAITLIST",
      icon: MdOutlineCollectionsBookmark,
    },
    {
      name: "ORIGINALS",
      icon: MdStar,
    },
    {
      name: "MOVIES",
      icon: MdLocalMovies,
    },
    {
      name: "TV",
      icon: MdTabletMac,
    },
    {
      name: "SPORTS",
      icon: MdSports,
    },
  ];
  return (
    <>
      <div className="flex items-center justify-between">
        <img
          src={disney_logo}
          className="w-[100px] md:w-[115px] object-cover"
        />
        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderItem name={item.name} Icons={item.icon} />
          ))}
        </div>
        <div className="flex md:hidden gap-5 justify-between items-center">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItem name={""} Icons={item.icon} />
          )}
          <div className="md:hidden relative" onClick={() => setToggle(!toggle)}>
            <HeaderItem name={""} Icons={MdMenu} />
            {toggle ? (
              <div className="absolute w-[180px] left-1 mt-3 bg-[#121212] border-[1px] border-grey-700 p-3 px-5 right-[20px]">
                {menu.map(
                  (item, index) =>
                    index > 2 && (
                      <HeaderItem name={item.name} Icons={item.icon} />
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
        <div>
          <VerifiedUserRounded />
        </div>
      </div>
    </>
  );
}

export default Header;
