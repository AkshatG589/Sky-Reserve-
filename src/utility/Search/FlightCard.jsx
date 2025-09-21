import React from "react";
import { toast } from "react-hot-toast";
import { FaPlane } from "react-icons/fa";
import "./FlightCard.css";

const FlightCard = ({ flight }) => {
  const handleBook = () => {
    toast.success(`Flight ${flight.flight?.iata} booked successfully!`);
  };

  const imageUrl =
    "https://images.unsplash.com/photo-1580557618069-86e228f63f38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MjA3fDB8MHwxfHNlYXJjaHwxfHxmbGlnaHR8ZW58MHx8fHwxNjg5MTYwNjY0&ixlib=rb-4.0.3&q=80&w=400";

  return (
    <div className="border rounded-xl overflow-hidden shadow hover:shadow-xl transition flex flex-col bg-white">
      {/* Flight Image */}
      {flight.image ? (
        <img
          src={flight.image || imageUrl}
          alt="Flight"
          className="w-full h-48 object-cover"
        />
      ) : (
        <div className="fallback-image w-full h-48 flex items-center justify-center relative overflow-hidden">
          <FaPlane className="text-white text-4xl plane-icon" />
        </div>
      )}

      {/* Flight Info */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-bold text-xl text-gray-800 mb-4 text-center">
          {flight.airline?.name || "Unknown Airline"}
        </h3>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <p>
            <span className="font-medium">Flight:</span> {flight.flight?.iata}
          </p>
          <p>
            <span className="font-medium">Price:</span>{" "}
            <span className="text-blue-600 font-semibold">
              ${flight.price}
            </span>
          </p>
          <p>
            <span className="font-medium">From:</span>{" "}
            {flight.departure?.iata || "N/A"}
          </p>
          <p>
            <span className="font-medium">To:</span>{" "}
            {flight.arrival?.iata || "N/A"}
          </p>
          <p className="col-span-2">
            <span className="font-medium">Departure:</span>{" "}
            {new Date(flight.departure?.scheduled).toLocaleString()}
          </p>
        </div>

        {/* Book Button */}
        <button
          onClick={handleBook}
          className="mt-6 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg py-2 font-semibold hover:from-blue-700 hover:to-indigo-700 transition"
        >
          Book This Flight
        </button>
      </div>
    </div>
  );
};

export default FlightCard;