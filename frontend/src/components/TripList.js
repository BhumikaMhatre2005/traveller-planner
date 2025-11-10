import React from "react";

function TripList({ trips, deleteTrip }) {
  if (!trips.length) return <p className="text-center text-gray-600">No trips planned yet.</p>;

  return (
    <div className="flex flex-col gap-3">
      {trips.map(trip => (
        <div key={trip._id} className="bg-white p-4 rounded-lg shadow-md flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold">{trip.destination}</h3>
           <p>
  {new Date(trip.startDate).toLocaleDateString("en-GB").replaceAll("/", "-")}
  {" "}→{" "}
  {new Date(trip.endDate).toLocaleDateString("en-GB").replaceAll("/", "-")}
</p>
            <p>{trip.notes}</p>
          </div>
          <button
            onClick={() => deleteTrip(trip._id)}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TripList;

