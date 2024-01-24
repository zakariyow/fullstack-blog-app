// import { useEffect } from "react";
// import { useAuth } from "../Context";
// import { useNavigate } from "react-router-dom";

// const ProtectedPage = ({ children }) => {
//   const navigate = useNavigate();
//   const { currentUser } = useAuth();

//   useEffect(() => {
//     if (!currentUser) return navigate("/login");
//   }, [currentUser]);

//   return <div>{children}</div>;
// };

// export default ProtectedPage;

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context";

// eslint-disable-next-line react/prop-types
const ProtectedPage = ({ children }) => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  useEffect(() => {
    if (!currentUser) navigate("/login");
  }, [currentUser, navigate]);

  return <div>{children}</div>;
};
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
export default ProtectedPage;