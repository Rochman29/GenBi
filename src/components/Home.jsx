import React from "react";

export default function Home() {
  return (
    <header className="px-8 py-8">
      <div className="py-3 flex flex-row items-center justify-items-start justify-around border-2 bg-[#16b026d8] min-h-[450px]">
        <div className="flex flex-col items-center justify-center gap-20 w-2/5 text-left bg-h-full">
          <div className="text-7xl font-bold text-white tracking-normal">
            GenBi Cerdas Gizi Stop Stunting
          </div>
          <div className="flex flex-col w-full tracking-wide text-white font-semibold">
            <p>GENERASI AL-BINA STOP STUNTING</p>
            <p>#generasisehatcerdasgizi</p>
          </div>
        </div>
        <div>
          <img
            className="bg-cover bg-center rounded-lg"
            src="/keluarga.jpg"
            alt="keluarga"
            width="400"
            height="400"
          ></img>
        </div>
      </div>
    </header>
  );
}
