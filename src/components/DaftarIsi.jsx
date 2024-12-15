import React from "react";
import { useNavigate } from "react-router-dom";

export default function DaftarIsi() {
  const navigate = useNavigate();
  return (
    <header className="w-full min-h-screen flex flex-auto justify-center items-center content-center pt-24">
      <div className="p-8 bg-[#c8daa6] flex flex-col justify-center items-center w-2/3 gap-4 rounded-lg">
        <div className="font-bold text-4xl">Daftar Isi</div>
        <div className="grid grid-rows-2 grid-flow-col gap-8">
          <div className="bg-[white] p-4 flex flex-row justify-start items-center gap-4 w-96 rounded-lg">
            <img
              className="bg-cover bg-center rounded-lg border-4"
              src="stunting.png"
              alt="stunting"
              width="200"
              height="200"
            ></img>
            <button
              onClick={() => navigate("/stunting")}
              className="rounded-3xl p-2 text-left text-base bg-green-500 hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300"
            >
              STUNTING
            </button>
          </div>
          <div className="bg-[white] p-4 flex flex-row justify-start items-center gap-4 w-96">
            <img
              className="bg-cover bg-center rounded-lg border-4"
              src="gambarData.png"
              alt="stunting"
              width="200"
              height="200"
            ></img>
            <button
              onClick={() => navigate("/data")}
              className="rounded-3xl p-2 text-left text-base bg-green-500 hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300"
            >
              DATA STUNTING
            </button>
          </div>
          <div className="bg-[white] p-4 flex flex-row justify-start items-center gap-4 w-96">
            <img
              className="bg-cover bg-center rounded-lg border-4"
              src="makanan.png"
              alt="stunting"
              width="200"
              height="200"
            ></img>
            <button
              onClick={() => navigate("/pencegahan")}
              className="rounded-3xl p-2 text-left text-sm bg-green-500 hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300"
            >
              BAGAIMANA CARA MENCEGAHNYA?
            </button>
          </div>
          <div className="bg-[white] p-4 flex flex-row justify-start items-center gap-4 w-96">
            <img
              className="bg-cover bg-center rounded-lg border-4"
              src="feedback.png"
              alt="stunting"
              width="200"
              height="200"
            ></img>
            <button
              onClick={() => navigate("/feedback")}
              className="rounded-3xl p-2 text-left text-base bg-green-500 hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300"
            >
              UMPAN BALIK
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
