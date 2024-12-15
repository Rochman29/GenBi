import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-around items-start">
        <div className="w-full md:w-1/3 mb-4 md:mb-0 text-center md:text-left">
          <div className="flex flex-col">
            <p className="font-bold text-center">Profile</p>
            <div className="flex flex-row gap-4 justify-center">
              <div className="flex flex-col">
                <p>Aliza Wulandari</p>
                <p>Ashtiyani Kholida</p>
                <p>Edis Erianisya Putri</p>
                <p>Intan Fadila</p>
                <p>Mega Rosafina</p>
              </div>
              <div className="flex flex-col">
                <p>Nisrina Nurbaiti</p>
                <p>Nita Melia</p>
                <p>Nur Fitri Halimah</p>
                <p>Shavega Julia Robin</p>
                <p>Septiani Panca Wardani</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 mb-4 md:mb-0 text-center">
          <div className="flex flex-col justify-start">
            <p className="font-bold">Contact Us</p>
            <div className="flex flex-col">
              <p>Phone: +62 831-5778-1105</p>
              <p>Email: ediserianisyaputri@upi.edu</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 text-center md:text-right">
          <p className="font-bold text-center">About This Website</p>
          <p className=" mx-auto md:mx-0 text-left">
            This website is created to provide a platform for users to give
            feedback and improve their experience with our services. We aim to
            ensure the best quality and satisfaction for our users.
          </p>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p>&copy; 2024 Mahasiswa P3K UPI & SDIT ALBINA. All rights reserved.</p>
      </div>
    </footer>
  );
}
