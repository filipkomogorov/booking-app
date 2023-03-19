import { RefObject, useEffect } from "react";

type Callback = () => void;

const useClickOutsideComponent = (
  ref: RefObject<HTMLElement>,
  callback: Callback
) => {
  const handleClickOutside = (event: MouseEvent): void => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
};

export default useClickOutsideComponent;
