import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import SearchForm from "../utility/Search/SearchForm";
import PriceFilter from "../utility/Search/PriceFilter";
import FlightCard from "../utility/Search/FlightCard";

const Search = () => {
  const [allFlights, setAllFlights] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 500]);

  useEffect(() => {
    const fetchFlights = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `http://api.aviationstack.com/v1/flights?access_key=25259fbeb910b5be1a67c6e3737ab494`
        );
        const dataWithPrices = res.data.data.map(f => ({
          ...f,
          price: Math.floor(Math.random() * 400 + 50),
        }));
        setAllFlights(dataWithPrices);
        setFilteredFlights(dataWithPrices);
        toast.success("Flights pre-fetched successfully!");
      } catch (err) {
        console.error(err);
        toast.error("Failed to fetch flights!");
      } finally {
        setLoading(false);
      }
    };
    fetchFlights();
  }, []);

  const handleSearch = () => {
    if (!from || !to) {
      toast.error("Please fill From and To fields!");
      return;
    }
    const results = allFlights.filter(f =>
      f.departure?.iata?.toUpperCase() === from.toUpperCase() &&
      f.arrival?.iata?.toUpperCase() === to.toUpperCase() &&
      (!date || f.flight_date === date)
    );
    setFilteredFlights(results);
    if (results.length > 0) toast.success(`${results.length} flights found!`);
    else toast.error("No flights found for this route.");
  };

  const uniqueAirports = Array.from(
    new Set(allFlights.flatMap(f => [f.departure?.iata, f.arrival?.iata]))
  ).filter(Boolean);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-4 text-center">Find Your Perfect Flight</h1>
      <p className="text-center text-gray-600 mb-8">
        Search from thousands of flights to your dream destination and filter by price to book the best deals.
      </p>

      {/* Search Form */}
      <SearchForm
        from={from}
        to={to}
        date={date}
        setFrom={setFrom}
        setTo={setTo}
        setDate={setDate}
        handleSearch={handleSearch}
        loading={loading}
        uniqueAirports={uniqueAirports}
      />

      {/* Price Filter */}
      {filteredFlights.length > 0 && (
        <PriceFilter priceRange={priceRange} setPriceRange={setPriceRange} />
      )}

      {/* Flights */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFlights.filter(f => f.price >= priceRange[0] && f.price <= priceRange[1]).length > 0 ? (
          filteredFlights
            .filter(f => f.price >= priceRange[0] && f.price <= priceRange[1])
            .map(f => <FlightCard key={f.flight?.iata + f.departure?.scheduled} flight={f} />)
        ) : (
          <p className="text-center col-span-full text-gray-500 font-medium">
            No flights found from {from || "___"} to {to || "___"}.
          </p>
        )}
      </div>
    </div>
  );
};

export default Search;