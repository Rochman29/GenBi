import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Link } from "react-router-dom";

export default function UmpanBalik() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [state, handleSubmit] = useForm("myzyqglb");

  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4 pt-10">
        <div className="font-bold text-3xl">Thanks For Your Feedback!</div>
        <img
          className="bg-cover bg-center rounded-lg"
          src="thanks.png"
          alt="thanks"
          width="500"
          height="500"
        ></img>
        <Link
          className="rounded-2xl p-2 text-center text-base bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
          to="/home"
        >
          Kembali
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-row justify-between items-center min-h-screen px-8 py-8 pt-[7rem] gap-12">
      <div className="flex justify-center items-center h-full w-full bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded shadow-md w-full max-w-md"
        >
          <h2 className="text-2xl mb-4 font-semibold text-gray-700">
            Feedback Form
          </h2>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              id="email"
              name="email"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              rows="5"
              id="message"
              name="message"
              required
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            disabled={state.submitting}
          >
            Send
          </button>
        </form>
      </div>
      <img
        className="bg-cover bg-center rounded-lg"
        src="feedback.png"
        alt="data"
        width="500"
        height="500"
      ></img>
    </div>
  );
}
