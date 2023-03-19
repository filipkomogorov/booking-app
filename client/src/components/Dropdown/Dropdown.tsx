import React, { useState, useContext, useRef } from "react";
import { Transition, TransitionStatus } from "react-transition-group";
import { UserContext } from "../../context/UserContext";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { deleteCookie } from "../../utils/deleteCookie";
import useClickOutsideComponent from "../../hooks/useClickOutsideComponent";

const Dropdown = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const { user, setUser } = useContext(UserContext);
  const dropdownRef = useRef<HTMLDivElement>(null)
  const duration = 100;

  const handleClick = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleClose = () => {
    setDrawerOpen(false);
  };

  useClickOutsideComponent(dropdownRef, handleClose);

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


  const handleSignout = async () => {
    try {
      const response = await axios.post("/logout");

      if (response.status === 200) {
        console.log(response.data.message);
        setUser(undefined);
        deleteCookie("token");
      }
    } catch (err) {
      console.error("Error logging out", err);
    }
  };
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="flex flex-row items-center gap-3">
          <div>{user?.firstName}</div>
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
              ref={dropdownRef}
              style={{
                ...defaultStyle,
                ...transitionStyles[
                  state as Exclude<TransitionStatus, "unmounted">
                ],
              }}
            >
              <ul className={`absolute top-2 left-0`} onClick={handleClick}>
                <NavLink to={"/account"}>Account</NavLink>
                <li>Favorites</li>
                <li>Messages</li>
                <li onClick={handleSignout}>Logout</li>
              </ul>
            </div>
          )}
        </Transition>
      </div>
    </div>
  );
};

export default Dropdown;
