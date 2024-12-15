import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="w-full bg-[#2bf349] min-h-[100px] top-0 fixed z-10">
      <div className="p-8">
        <div className="flex flex-row items-center justify-between gap-3 w-full">
          <div className="flex flex-row items-center justify-start gap-3 w-1/2">
            <img
              className="bg-cover bg-center"
              src="/logo.png"
              alt="logo"
              width="40"
              height="40"
            ></img>
            <img
              className="bg-cover bg-center"
              src="/albina.png"
              alt="logo"
              width="40"
              height="40"
            ></img>
            <h1 className="text-black text-xl font-semibold text-left">
              Mahasiswa P3K UPI & SDIT ALBINA
            </h1>
          </div>
          <div className="flex flex-row justify-between items-center w-1/2">
            <nav className="w-full">
              <ul className="w-full">
                <li className="flex flex-row justify-between items-center w-full">
                  <Link
                    className="rounded-2xl p-2 text-center text-base bg-green-500 hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300"
                    to="/"
                  >
                    Home
                  </Link>
                  <Link
                    className="rounded-2xl p-2 text-center text-base bg-green-500 hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300"
                    to="/stunting"
                  >
                    Stunting
                  </Link>
                  <Link
                    className="rounded-2xl p-2 text-center text-base bg-green-500 hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300"
                    to="/data"
                  >
                    Data Stunting
                  </Link>
                  <Link
                    className="rounded-2xl p-2 text-center text-base bg-green-500 hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300"
                    to="/pencegahan"
                  >
                    Pencegahan
                  </Link>
                  <Link
                    className="rounded-2xl p-2 text-center text-base bg-green-500 hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300"
                    to="/feedback"
                  >
                    Umpan Balik
                  </Link>
                </li>
              </ul>
            </nav>
            {/* <button
              onClick={() => navigate("/home")}
              className="rounded-2xl p-2 text-center text-base bg-green-500 hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300"
            >
              Home
            </button>
            <button className="rounded-2xl p-2 text-center text-base bg-green-500 hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300">
              Stunting
            </button>
            <button className="rounded-2xl p-2 text-center text-base bg-green-500 hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300">
              Data Stunting
            </button>
            <button className="rounded-2xl p-2 text-center text-base bg-green-500 hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300">
              Pencegahan
            </button>
            <button className="rounded-2xl p-2 text-center text-base bg-green-500 hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300">
              Umpan Balik
            </button> */}
          </div>
        </div>
      </div>
    </header>
  );
}
