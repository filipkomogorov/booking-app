import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";

const AccountPage = () => {
  const {user, isReady} = useContext(UserContext);

  if(isReady && !user){
    return <Navigate to={'/login'}/>
  }


  return (
    !isReady ? <div>Loading</div> : (
        <div>Hello there</div>
    )
  )
};

export default AccountPage;
