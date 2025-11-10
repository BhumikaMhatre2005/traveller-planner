import React, { useState } from "react";

function TripForm({ addTrip }) {
  const [trip, setTrip] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    notes: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!trip.destination || !trip.startDate || !trip.endDate) return;
    addTrip(trip);
    setTrip({ destination: "", startDate: "", endDate: "", notes: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md mb-4 flex flex-col gap-2">
      <input
        type="text"
        placeholder="Destination (e.g., Jaipur, Kerala)"
        value={trip.destination}
        onChange={e => setTrip({ ...trip, destination: e.target.value })}
        className="border p-2 rounded"
      />
      <input
        type="date"
        value={trip.startDate}
        onChange={e => setTrip({ ...trip, startDate: e.target.value })}
        className="border p-2 rounded"
      />
      <input
        type="date"
        value={trip.endDate}
        onChange={e => setTrip({ ...trip, endDate: e.target.value })}
        className="border p-2 rounded"
      />
      <input
        type="text"
        placeholder="Notes (Optional)"
        value={trip.notes}
        onChange={e => setTrip({ ...trip, notes: e.target.value })}
        className="border p-2 rounded"
      />
      <button className="bg-orange-600 text-white px-4 py-2 rounded mt-2">
        Add Trip
      </button>
    </form>
  );
}

export default TripForm;
