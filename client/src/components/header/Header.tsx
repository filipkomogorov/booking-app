import { useContext, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import LogoSvg from "../Logo/LogoSvg";
import { Transition, TransitionStatus } from "react-transition-group";
import axios from "axios";

const Header = () => {
  const { user } = useContext(UserContext);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const handleClick = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleSignout = async () => {
    try{
      await axios.post('/logout')
      
      console.log('success')
    }catch(err){
      console.log(err)
    }
  }

  const duration = 100;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out, transform ${duration}ms ease-in-out`,
    opacity: 0,
    transform: "translateY(-20px)",
  };

  const transitionStyles: Partial<
    Record<Exclude<TransitionStatus, "unmounted">, React.CSSProperties>
  > = {
    entering: { opacity: 0, transform: "translateY(-10px)" },
    entered: { opacity: 1, transform: "translateY(0)" },
    exiting: { opacity: 0, transform: "translateY(-10px)" },
    exited: { opacity: 0, transform: "translateY(-10px)" },
  };

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

      {!!user ? (
        <div className="flex flex-col items-center">
          <div className="flex flex-row items-center gap-3">
            <div>{user.firstName}</div>
            <div className="cursor-pointer" onClick={handleClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          </div>
          {/* make it a separate component */}

          <Transition in={drawerOpen} timeout={duration} unmountOnExit>
            {(state: TransitionStatus) => (
              <div
                className="relative dropdown"
                style={{
                  ...defaultStyle,
                  ...transitionStyles[
                    state as Exclude<TransitionStatus, "unmounted">
                  ],
                }}
              >
                <ul className={`absolute top-2 left-0`}>
                  <li>Account</li>
                  <li>Favorites</li>
                  <li>Messages</li>
                  <li onClick={handleSignout}>Logout</li>
                </ul>
              </div>
            )}
          </Transition>
          {/* {drawerOpen && (
            <div className="relative dropdown">
              <ul className={`absolute top-0 left-0`}>
                <li>Account</li>
                <li>Favorites</li>
                <li>Messages</li>
                <li>Logout</li>
              </ul>
            </div>
          )} */}
        </div>
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
