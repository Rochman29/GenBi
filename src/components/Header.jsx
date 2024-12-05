import React from "react";

export default function Header() {
  return (
    <header className="w-full bg-[#2bf349] min-h-[100px]">
      <div className="p-8">
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
      </div>
    </header>
  );
}
