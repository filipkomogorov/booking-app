import { Link } from "react-router-dom";
import LogoSvg from "../Logo/LogoSvg";

const Header = () => {
  
  return (
    <header className="flex justify-between py-8 max-w-7xl mx-auto">
      <Link to={"/"} className="flex items-center gap-1">
        <LogoSvg size="8" />
        <span>HeavenEstate</span>
      </Link>
      <div className="flex gap-8 text-3xl items-center font-semibold">
        <Link to={'/properties/buy'}>Buy</Link>
        <Link to={'/properties/rent'}>Rent</Link>
        <Link to={'/properties/find-agent'}>Find Agent</Link>
      </div>

      <div className="flex gap-5 items-center text-3xl font-semibold">
        <Link to={'/login'}>Sign in</Link>
        <Link to={'/signup'} className="rounded-lg px-7 py-3 bg-cta text-white ">Join</Link>
      </div>
    </header>
  );
};

export default Header;
