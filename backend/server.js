const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());

// ✅ Connect to MongoDB (make sure your URI is correct)
mongoose
  .connect("mongodb+srv://bhumika:Bhumika123@cluster0.m42gvqd.mongodb.net/travellerplanner", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.log("❌ MongoDB connection error:", err));

// ✅ Create Schema & Model
const Trip = mongoose.model("Trip", {
  destination: String,
  startDate: Date,
  endDate: Date,
  notes: String,
});

// ✅ API Routes
app.get("/api/trips", async (req, res) => {
  const trips = await Trip.find();
  res.json(trips);
});

app.post("/api/trips", async (req, res) => {
  const trip = new Trip(req.body);
  await trip.save();
  res.json(trip);
});

app.delete("/api/trips/:id", async (req, res) => {
  await Trip.findByIdAndDelete(req.params.id);
  res.json({ message: "Trip deleted" });
});

// ✅ Serve frontend (for Render deployment)
app.use(express.static
