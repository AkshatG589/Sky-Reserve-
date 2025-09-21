import React from "react";
import { FaPlaneDeparture, FaPlaneArrival, FaCalendarAlt } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";

const SearchForm = ({ from, to, date, setFrom, setTo, setDate, handleSearch, loading, uniqueAirports }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 mb-8">
      <h2 className="text-2xl font-semibold mb-4">Search Flight</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        {/* From */}
        <div className="flex flex-col relative">
          <label className="mb-1 font-medium flex items-center gap-1">
            <FaPlaneDeparture /> From
          </label>
          <input
            type="text"
            list="fromAirports"
            value={from}
            onChange={e => setFrom(e.target.value)}
            placeholder="Departure Airport"
            className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <datalist id="fromAirports">
            {uniqueAirports.map(a => (
              <option key={a} value={a} />
            ))}
          </datalist>
        </div>

        {/* To */}
        <div className="flex flex-col relative">
          <label className="mb-1 font-medium flex items-center gap-1">
            <FaPlaneArrival /> To
          </label>
          <input
            type="text"
            list="toAirports"
            value={to}
            onChange={e => setTo(e.target.value)}
            placeholder="Destination Airport"
            className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <datalist id="toAirports">
            {uniqueAirports.map(a => (
              <option key={a} value={a} />
            ))}
          </datalist>
        </div>

        {/* Date */}
        <div className="flex flex-col">
          <label className="mb-1 font-medium flex items-center gap-1">
            <FaCalendarAlt /> Departure Date
          </label>
          <input
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          disabled={loading}
          className={`flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold rounded-lg p-2 hover:bg-blue-700 transition ${
            loading ? "cursor-not-allowed" : ""
          }`}
        >
          {loading ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
              Searching...
            </>
          ) : (
            <>
              <AiOutlineSearch /> Search
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default SearchForm;