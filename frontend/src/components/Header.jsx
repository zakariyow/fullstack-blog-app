// import React from 'react';
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../Features/AppSlice/authSlice';

const Header = () => {
  const {currentUser} = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logoutUser());
    Navigate('/Login')
  }

  return (
    <div className="fixed p-4 bg-white z-10 backdrop-blur shadow-lg top-0 left-0 right-0">
      <div className="max-w-6xl m-auto">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-xl text-orange-400">BLOGER</h1>
          <ul className="flex justify-between space-x-5 items-center">
            {currentUser ? (
              <Link to="/create-post">Create Post</Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="bg-orange-600 py-2 px-4 text-white rounded-md hover:bg-orange-500"
                >
                  Login
                </Link>
                <Link
                  to="/singUp"
                  className="bg-green-900 py-2 px-4 text-white rounded-md hover:bg-green-800"
                >
                  SingUp
                </Link>
              </>
            )}
          </ul>
          {currentUser && (
            <>
              <button
                onClick={handleLogOut}
                className="bg-green-600 px-3 py-2 text-white rounded-md"
              >
                LogOut
              </button>
              <span>Welcome {currentUser?.username}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
