import { useContext, useEffect, useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import LogoSvg from "../Logo/LogoSvg";
import Dropdown from "../Dropdown/Dropdown";

const Header = () => {
  const { user } = useContext(UserContext);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);


  return (
    <header className="flex justify-between py-8 max-w-7xl mx-auto items-center">
      <Link to={"/"} className="flex items-center gap-1">
        <LogoSvg />
        <p className="leading-none pt-2">HeavenEstate</p>
      </Link>
      <div className="flex gap-14 text-3xl items-center font-semibold">
        <Link to={"/properties/buy"}>Buy</Link>
        <Link to={"/properties/rent"}>Rent</Link>
        <Link to={"/properties/find-agent"}>Find Agent</Link>
        <Link to={"/contacts"}>Contacts</Link>
      </div>

      {!!user ? (<Dropdown />
      ) : (
        <div className="flex gap-5 items-center text-3xl font-semibold">
          <Link to={"/login"}>Log in</Link>
          <Link
            to={"/register"}
            className="rounded-lg px-7 py-3 bg-cta text-white "
          >
            Join
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
