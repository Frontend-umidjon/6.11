import React from 'react'
import Header from '@/components/header/Header'
import { NavLink } from "react-router-dom";


const NotFound = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="bg-white p-10 rounded-2xl shadow-lg text-center max-w-md w-full">
            <h1 className="text-8xl font-bold text-gray-800">404</h1>
            <p className="mt-4 text-2xl font-semibold text-gray-700">Page Not Found</p>
            <p className="mt-2 text-gray-500">
              Sorry, the page you are looking for could not be found.
            </p>
            <div className="mt-6 flex justify-center">
              <a
                href="/"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium text-lg rounded-lg shadow-md hover:bg-blue-700 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12l7.5-7.5M3 12h18"
                  />
                </svg>
                Return Home
              </a>
            </div>
            <div className="mt-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto w-16 h-16 text-blue-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={0.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 20.25C7.529 20.25 4 16.721 4 12.25S7.529 4.25 12 4.25s8 3.529 8 8c0 2.25-1 4-1.5 5-1.043 2.021-1.657 2.25-2.5 3-.343.235-2 .25-2 1 0 0 0 1.75-1 1.75s-1-1.75-1-1.75c0-.75-1.657-.765-2-1-1.35-.78-1.357-.708-2.5-3-.5-1-.5-2.75-1.5-5 0-.1 0-.2 0-.3"
                />
              </svg>
            </div>
          </div>
        </div>
      );
}

export default NotFound