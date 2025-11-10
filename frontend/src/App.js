import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TripForm from "./components/TripForm";
import TripList from "./components/TripList";

function App() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/trips")
      .then(res => res.json())
      .then(data => {
        const tripsWithId = data.map(trip => ({ ...trip, _id: trip._id || trip.id }));
        setTrips(tripsWithId);
      })
      .catch(err => console.error("Error fetching trips:", err));
  }, []);

  const addTrip = (trip) => {
    fetch("http://localhost:5000/api/trips", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(trip),
    })
      .then(res => res.json())
      .then(savedTrip => setTrips([...trips, { ...savedTrip, _id: savedTrip._id || savedTrip.id }]))
      .catch(err => console.error("Error adding trip:", err));
  };

  const deleteTrip = (id) => {
    fetch(`http://localhost:5000/api/trips/${id}`, { method: "DELETE" })
      .then(res => res.json())
      .then(() => setTrips(trips.filter(t => t._id !== id)))
      .catch(err => console.error("Error deleting trip:", err));
  };

  return (
    <div className="min-h-screen bg-yellow-50">
      <Navbar />
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-orange-600 mb-6">
          🇮🇳 India Traveller Planner
        </h1>
        <TripForm addTrip={addTrip} />
        <TripList trips={trips} deleteTrip={deleteTrip} />
      </div>
      <Footer />
    </div>
  );
}

export default App;