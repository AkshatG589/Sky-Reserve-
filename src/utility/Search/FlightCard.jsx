import React from "react";
import { toast } from "react-hot-toast";

const FlightCard = ({ flight }) => {
  const handleBook = () => {
    // In future, pass flight details to backend
    toast.success(`Flight ${flight.flight?.iata} booked successfully!`);
  };

  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg transition relative flex flex-col">
      <img
        src="https://images.unsplash.com/photo-1580557618069-86e228f63f38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MjA3fDB8MHwxfHNlYXJjaHwxfHxmbGlnaHR8ZW58MHx8fHwxNjg5MTYwNjY0&ixlib=rb-4.0.3&q=80&w=400"
        alt="Flight"
        className="w-full h-32 object-cover rounded-lg mb-3"
      />
      <h3 className="font-semibold text-lg mb-2">{flight.airline?.name || "Unknown Airline"}</h3>
      <p><span className="font-medium">Flight:</span> {flight.flight?.iata}</p>
      <p><span className="font-medium">From:</span> {flight.departure?.airport} ({flight.departure?.iata})</p>
      <p><span className="font-medium">To:</span> {flight.arrival?.airport} ({flight.arrival?.iata})</p>
      <p><span className="font-medium">Departure:</span> {new Date(flight.departure?.scheduled).toLocaleString()}</p>
      <p className="mt-2 font-bold text-blue-600">Price: ${flight.price}</p>

      <div className="mt-auto flex gap-2 pt-3">
        <button
          onClick={handleBook}
          className="flex-1 bg-green-600 text-white rounded-lg p-2 font-semibold hover:bg-green-700 transition"
        >
          Book This Flight
        </button>
        <button className="flex-1 bg-gray-200 text-gray-800 rounded-lg p-2 font-semibold hover:bg-gray-300 transition">
          More Info
        </button>
      </div>
    </div>
  );
};

export default FlightCard;